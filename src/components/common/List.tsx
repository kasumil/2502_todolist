import React from "react";
import clsx from "clsx";
import { HiPlus } from "react-icons/hi";

const SIZES = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
};

const List = ({
    items = [],
    size = "md",
    className = "",
    Component,
    showModal,
    deleteShow,
}) => {
    return (
        <>
            <ul className={clsx("list-disc", SIZES[size], className)}>
                {items?.map((item) => {
                    const pressButton = () => {
                        showModal();
                        console.log(item);
                        // 해당 내용을 클릭시 전역값 넣기
                    };

                    return (
                        <ol
                            key={item.id}
                            className="text-black border-b-2 border-gray-300"
                        >
                            {
                                <Component
                                    item={item}
                                    deleteShow={deleteShow}
                                    showModal={() => pressButton()}
                                />
                            }
                        </ol>
                    );
                })}
            </ul>
            <div className="flex m-5">
                <button
                    className="hover:text-red-500 active:text-red-700 transition duration-200 flex flex-row gap-2 text-black"
                    onClick={() => showModal()}
                >
                    <HiPlus size={25} color={"red"} />
                    일정 추가
                </button>
            </div>
        </>
    );
};

export default List;
