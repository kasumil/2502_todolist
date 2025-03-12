"use client";
import React, { Suspense, useState } from "react";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/auth/AuthForm";
import AuthPlate from "@/components/auth/AuthPlate";
import { login } from "@/utils/apis";
import useStore from "@/store";
import { emailValidator, passwordValidator } from "@/utils/validate";

type Props = {};

const LoginForm = (props: Props) => {
    const router = useRouter();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [isPending, setIsPending] = useState(false);
    const { setUser, setLogged } = useStore();

    const handleLogin = async () => {
        setIsPending(true);
        const { email, password } = form;
        if ([email, password].includes("")) {
            setError("빈 칸을 모두 입력해주세요");
            setIsPending(false);
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
            }));
            return;
        }

        try {
            const response = await login({ email, password });
            if (response?.result === "Y") {
                setLogged(true);
                setUser(response?.data);
                setForm({ email: "", password: "" }); // 로그인 성공 후 폼 초기화
                alert("로그인 성공");
                router.push("/home");
            } else {
                setError("로그인 실패. 다시 시도해주세요.");
            }
        } catch (error) {
            console.log(error);
            setError("서버 오류가 발생했습니다. 나중에 다시 시도해주세요.");
            setForm((prev) => ({
                ...prev,
                password: "", // 비밀번호만 초기화
            }));
        } finally {
            setIsPending(false);
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AuthPlate>
                <AuthForm
                    authText={"login"}
                    form={form}
                    setForm={setForm}
                    handleSubmit={handleLogin}
                    error={error}
                    disabled={isPending}
                />
            </AuthPlate>
        </Suspense>
    );
};

export default LoginForm;
