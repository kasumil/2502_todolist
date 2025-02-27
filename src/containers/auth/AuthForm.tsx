"use client";
import React, { useState } from "react";
import Button from "@/components/common/Button";
import InputField from "@/components/common/inputField";
import Link from "next/link";

type Props = {
    authText: string;
};

const authType = {
    login: "로그인",
    signup: "회원가입",
};

const AuthForm = ({ authText }: Props) => {
    const type = authType[authText];
    const [form, setForm] = useState({
        email: "",
        password: "",
        password_confirm: "",
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault;
        console.log(form);
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <InputField
                    type="text"
                    name="email"
                    placeholder="이메일"
                    value={form.email}
                    onChange={(text) =>
                        setForm((prev) => ({
                            ...prev,
                            email: text.target.value,
                        }))
                    }
                />
                <InputField
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    value={form.email}
                    onChange={(text) =>
                        setForm((prev) => ({
                            ...prev,
                            email: text.target.value,
                        }))
                    }
                />
                {type === "회원가입" && (
                    <InputField
                        type="password"
                        name="password_confirm"
                        placeholder="비밀번호 확인"
                        value={form.email}
                        onChange={(text) =>
                            setForm((prev) => ({
                                ...prev,
                                email: text.target.value,
                            }))
                        }
                    />
                )}

                <div className="flex justify-end mt-4">
                    <Button type="submit" fullWidth color={"gray"}>
                        {type}
                    </Button>
                </div>
            </form>
            <Link
                className="flex justify-center mt-4 text-gray-800"
                href={type === "로그인" ? "/signup" : "/login"}
            >
                {type === "로그인" ? "회원가입" : "로그인"}
            </Link>
        </>
    );
};

export default AuthForm;
