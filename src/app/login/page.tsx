import React from "react";
import AuthPlate from "@/containers/auth/AuthPlate";
import AuthForm from "@/containers/auth/AuthForm";

type Props = {};

const LoginPage = (props: Props) => {
    return (
        <AuthPlate>
            <AuthForm authText={"login"} />
        </AuthPlate>
    );
};

export default LoginPage;
