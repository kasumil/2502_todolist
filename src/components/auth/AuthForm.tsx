import React, { ChangeEvent, FormEventHandler, useState } from "react";
import Link from "next/link";
import ButtonStyle from "@/components/common/ButtonStyle";
import InputField from "@/components/common/InputField";

type Props = {
    authText: string;
    form: FormData;
    setForm: () => void;
    handleSubmit: (form) => FormEventHandler<T>;
    error: string;
};

const authType = {
    login: "로그인",
    signup: "회원가입",
};

const AuthForm = ({
    authText,
    form,
    setForm,
    handleSubmit,
    error,
    disabled = false,
}: Props) => {
    const type = authType[authText];

    const onSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ): FormEventHandler<T> => {
        e.preventDefault();
        handleSubmit(form);
    };

    const handleKeyPress = (text: ChangeEvent<HTMLAnchorElement>) => {
        setForm((prev) => ({
            ...prev,
            [text.target.name]: text.target.value,
        }));
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <InputField
                    type="text"
                    name="email"
                    placeholder="이메일"
                    value={form.email}
                    onChange={handleKeyPress}
                />
                <InputField
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    value={form.password}
                    onChange={handleKeyPress}
                    error={type != "회원가입" && error}
                />
                {type === "회원가입" && (
                    <InputField
                        type="password"
                        name="password_confirm"
                        placeholder="비밀번호 확인"
                        value={form.password_confirm}
                        onChange={handleKeyPress}
                        error={error}
                    />
                )}

                <div className="flex justify-end mt-4">
                    <ButtonStyle type="submit" fullWidth disalbed={disabled}>
                        {disabled ? "Processing..." : type}
                    </ButtonStyle>
                </div>
            </form>
            <Link
                className="flex justify-center mt-4 text-gray-800 underline-offset-auto"
                href={type === "로그인" ? "/signup" : "/login"}
            >
                {type === "로그인" ? "회원가입" : "로그인"}
            </Link>
        </>
    );
};

export default AuthForm;
