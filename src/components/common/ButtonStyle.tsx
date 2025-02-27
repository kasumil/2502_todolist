"use client";
import React from "react";
import { redirect } from "next/navigation";
import classNames from "classnames";

type Props = {
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    rest?: any;
    fullWidth?: boolean;
    buttonColor?: string;
    disabled?: boolean;
};

function ButtonStyle({
    href,
    fullWidth,
    buttonColor = "gray",
    disabled = false,
    ...rest
}: Props) {
    const handleClick = (e) => {
        if (href) {
            redirect(href);
        }
        if (rest.onClick) {
            rest.onClick(e);
        }
    };

    const buttonClass = classNames(
        "border-none rounded-md text-base font-bold px-4 py-1 text-white outline-none cursor-pointer disabled:cursor-not-allowed",
        {
            "w-full": fullWidth,
            [`bg-${buttonColor}-800 hover:bg-${buttonColor}-600 disabled:bg-${buttonColor}-300 disabled:text-${buttonColor}-500`]:
                buttonColor,
            "bg-gray-800 hover:bg-gray-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed":
                !buttonColor,
        }
    );
    return (
        <button
            onClick={handleClick}
            className={buttonClass}
            disabled={disabled}
            {...rest}
        />
    );
}

export default ButtonStyle;
