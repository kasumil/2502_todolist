import React, { Component } from "react";
import clsx from "clsx";
import { HiPlus } from "react-icons/hi";

const SIZES = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
};

const List = ({ items = [], size = "md", className = "", Component }) => {
    return (
        <div className="overflow-scroll">
            <ul className={clsx("list-disc", SIZES[size], className)}>
                {items?.map((item, index) => {
                    return (
                        <ol
                            key={item.id}
                            className="text-black border-b-2 border-gray-300"
                        >
                            {<Component item={item} />}
                        </ol>
                    );
                })}
            </ul>
            <div className="flex m-5">
                <button className="hover:text-red-500 active:text-red-700 transition duration-200 flex flex-row gap-2 text-black">
                    <HiPlus size={25} color={"red"} />
                    일정 추가
                </button>
            </div>
        </div>
    );
};

export default List;
