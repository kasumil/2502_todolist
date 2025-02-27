"use client";
import React, { Suspense, useState } from "react";
import AuthForm from "@/components/auth/AuthForm";
import AuthPlate from "@/components/auth/AuthPlate";
import { login } from "@/utils/apis";
import { useRouter } from "next/navigation";
import useStore from "@/store";

type Props = {};

const LoginForm = (props: Props) => {
    const router = useRouter();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [isPending, setIsPending] = useState(false);
    const { setLogged } = useStore();

    const handleLogin = async () => {
        setIsPending(true);
        const { email, password } = form;
        if ([email, password].includes("")) {
            setError("빈 칸을 모두 입력해주세요");
            setIsPending(false);
            return;
        }
        try {
            const response = await login({
                email,
                password,
            });
            if (response.result === "Y") {
                alert("로그인 성공");
                router.push("/");
                setLogged(true);
            }
        } catch (error) {
            console.log(error);
            setForm((prev) => ({
                ...prev,
                password: "",
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
