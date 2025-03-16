import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import ButtonStyle from "@/components/common/ButtonStyle";
import useStore from "@/store";
import ProfileMenu from "./ProfileMenu";
import { HiOutlinePlusCircle, HiPlusCircle } from "react-icons/hi";

const Sidebar = ({ categoryShow }) => {
    const { user } = useStore();
    const [pressSelect, setPressSelect] = useState(false);
    const [openCategories, setOpenCategories] = useState<{
        [key: string]: boolean;
    }>({
        projects: false,
        teams: false,
    });

    const toggleCategory = (category: string) => {
        setOpenCategories((prev) => ({ ...prev, [category]: !prev[category] }));
    };

    return (
        <div className="bg-gray-400 w-full md:w-xs h-40 md:h-full rounded-lg shadow-md p-5">
            <div className="flex flex-col">
                <ProfileMenu
                    user={user}
                    pressSelect={pressSelect}
                    setPressSelect={setPressSelect}
                />
                <div className="flex justify-between items-center mt-5 p-2">
                    <button
                        className="hover:text-white-500 active:text-white-700 transition duration-200 flex items-center gap-2 text-black"
                        onClick={() => categoryShow()}
                    >
                        <HiOutlinePlusCircle size={25} color={"black"} />
                        일정 추가
                    </button>
                </div>
                <div className="p-2">
                    <ul>
                        <li className="pb-2 flex flex-col justify-center">
                            <div
                                className="flex gap-2 items-center cursor-pointer"
                                onClick={() => toggleCategory("projects")}
                            >
                                {openCategories.projects ? (
                                    <IoIosArrowDown />
                                ) : (
                                    <IoIosArrowForward />
                                )}
                                📌 프로젝트
                            </div>
                            {openCategories.projects && (
                                <ul className="pl-2">
                                    <li># 프로젝트네임</li>
                                    <li># 프로젝트네임</li>
                                </ul>
                            )}
                        </li>
                        <li className="pb-2 flex flex-col justify-center">
                            <div
                                className="flex gap-2 items-center cursor-pointer"
                                onClick={() => toggleCategory("teams")}
                            >
                                {openCategories.teams ? (
                                    <IoIosArrowDown />
                                ) : (
                                    <IoIosArrowForward />
                                )}
                                🚀 팀
                            </div>
                            {openCategories.teams && (
                                <ul className="pl-2">
                                    <li># 팀</li>
                                    <li># 팀</li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
