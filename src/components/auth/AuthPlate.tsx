import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
    title?: string;
    background?: string;
};

const AuthTemplateBlock = ({ children }: Props) => {
    return (
        <div className="absolute inset-0 bg-gray-200 flex flex-col justify-center items-center">
            {children}
        </div>
    );
};

const WhiteBox = ({ children, title }: Props) => {
    return (
        <div className="shadow-md p-8 w-[360px] bg-white rounded text-gray-800">
            <div className="block pb-8 text-center text-2xl font-bold tracking-wider text-gray-800">
                {title}
            </div>
            {children}
        </div>
    );
};

const AuthPlate = ({ children }: Props) => {
    return (
        <AuthTemplateBlock>
            <WhiteBox title={"Todo 리스트"}>{children}</WhiteBox>
        </AuthTemplateBlock>
    );
};

export default AuthPlate;
