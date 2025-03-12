import React from "react";
import clsx from "clsx";

const SIZES = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
};

const COLORS = {
    primary: "text-blue-500",
    black: "text-black",
    secondary: "text-gray-600",
    success: "text-green-500",
    danger: "text-red-500",
    warning: "text-yellow-500",
};

const TitleText = ({
    size = "xl",
    color = "black",
    className = "font-bold",
    children,
}) => {
    return (
        <p className={clsx(SIZES[size], COLORS[color], className)}>
            {children}
        </p>
    );
};

export default TitleText;
