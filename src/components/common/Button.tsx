import { redirect } from "next/navigation";
import React from "react";

type Props = {
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    rest?: any;
    fullWidth?: boolean;
    color?: string;
};

function Button({ href, fullWidth, color, ...rest }: Props) {
    const handleClick = (e) => {
        if (href) {
            redirect(href);
        }
        if (rest.onClick) {
            rest.onClick(e);
        }
    };
    return (
        <button
            onClick={handleClick}
            className={`border-none rounded-md text-base font-bold px-4 py-1 text-white
            outline-none cursor-pointer 
             disabled:cursor-not-allowed ${fullWidth && "w-full"} ${
                color &&
                `bg-${color}-800 hover:bg-${color}-600 disabled:bg-${color}-300 disabled:text-${color}-500}`
            }`}
            {...rest}
        />
    );
}

export default Button;
