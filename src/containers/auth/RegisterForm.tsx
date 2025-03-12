"use client";
import React, { Suspense, useState } from "react";
import AuthForm from "@/components/auth/AuthForm";
import AuthPlate from "@/components/auth/AuthPlate";
import { useRouter } from "next/navigation";
import { login, signUp } from "@/utils/apis";
import useStore from "@/store";
import { emailValidator, passwordValidator } from "@/utils/validate";

type Props = {};

const RegisterForm = (props: Props) => {
    const router = useRouter();
    const [form, setForm] = useState({
        email: "",
        password: "",
        password_confirm: "",
    });
    const [error, setError] = useState("");
    const [isPending, setIsPending] = useState(false);
    const { setLogged, setUser } = useStore();

    const handleRegister = async () => {
        setError("");
        setIsPending(true);
        const { email, password, password_confirm } = form;
        if ([email, password, password_confirm].includes("")) {
            setError("빈 칸을 모두 입력해주세요");
            setIsPending(false);
            return;
        }
        if (password !== password_confirm) {
            // 비밀번호 다르다고 출력
            setError("비밀번호가 일치하지 않습니다");
            setIsPending(false);
            setForm((prev) => ({
                ...prev,
                password: "",
                password_confirm: "",
            }));
            return;
        }
        if (emailValidator(email) === false) {
            setError("이메일 형식이 올바르지 않습니다.");
            setIsPending(false);
            return;
        }
        if (passwordValidator(password) === false) {
            setError("비밀번호는 6자 이상 20자 이하로 입력해주세요.");
            setIsPending(false);
            setForm((prev) => ({
                ...prev,
                password: "",
                password_confirm: "",
            }));
            return;
        }

        try {
            const response = await signUp({
                email,
                password,
            });
            if (response?.result === "Y") {
                alert("회원가입 성공");
                const loginResponse = await login({ email, password });
                if (loginResponse.result === "Y") {
                    setLogged(true);
                    setUser(loginResponse?.data);
                    router.push("/home");
                } else {
                    setError("로그인 실패");
                }
            } else {
                setError("회원가입 실패");
            }
        } catch (error) {
            console.log(error);
            setForm({
                email: "",
                password: "",
                password_confirm: "",
            });
        } finally {
            setIsPending(false);
        }
    };
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AuthPlate>
                <AuthForm
                    authText={"signup"}
                    form={form}
                    setForm={setForm}
                    handleSubmit={handleRegister}
                    error={error}
                    disabled={isPending}
                />
            </AuthPlate>
        </Suspense>
    );
};

export default RegisterForm;
