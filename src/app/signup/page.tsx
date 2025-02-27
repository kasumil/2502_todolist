import React from "react";
import AuthForm from "@/containers/auth/AuthForm";
import AuthPlate from "@/containers/auth/AuthPlate";

type Props = {};

const page = (props: Props) => {
    return (
        <AuthPlate>
            <AuthForm authText={"signup"} />
        </AuthPlate>
    );
};

export default page;
