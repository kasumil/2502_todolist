"use client";
import React from "react";
import { redirect } from "next/navigation";
import classNames from "classnames";
import { buttonColors } from "@/styles/buttonStyles";

type Props = {
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    rest?: any;
    fullWidth?: boolean;
    buttonColor?: string;
    disabled?: boolean;
    variant: string;
    shade: number;
};

function ButtonStyle({
    href,
    fullWidth,
    buttonColor = "gray",
    disabled = false,
    variant = "solid",
    shade = 800,
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

    const buttonColorClass =
        buttonColors[buttonColor]?.[variant]?.[shade] ||
        buttonColors["gray"].solid[800];

    const buttonClass = classNames(
        "border-none rounded-md text-base font-bold px-4 py-1 outline-none cursor-pointer disabled:cursor-not-allowed",
        { "w-full": fullWidth },
        buttonColorClass
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
