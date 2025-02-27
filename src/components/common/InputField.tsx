import React from "react";

type Props = {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
};

function InputField({
    name,
    type,
    placeholder,
    value,
    onChange,
    error,
    ...props
}: Props) {
    return (
        <>
            <input
                className="text-base border-b border-gray-500 pb-2 outline-none w-full focus:text-teal-700 focus:border-gray-700 mt-4 first:mt-0"
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...props}
            />
            {error && <span className="text-red-500">{error}</span>}
        </>
    );
}

export default InputField;
