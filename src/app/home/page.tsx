"use client";
import React, { useState } from "react";
import ButtonStyle from "@/components/common/ButtonStyle";
import useStore from "@/store";
import { logout } from "@/utils/apis";
import { useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

type Props = {};

const HomePage = (props: Props) => {
    const { user, setLogged } = useStore();
    const [pressSelect, setPressSelect] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        const response = await logout();
        if (response?.result === "Y") {
            alert("로그아웃 성공");
        } else {
            alert("로그아웃 실패");
        }
        setLogged(false);
        router.push("/login");
    };

    return (
        <div className="h-dvh p-5 p-md-10 bg-white">
            <div className="bg-gray-400 w-full md:w-xs h-40 md:h-full rounded-lg shadow-md p-5">
                <div className="flex items-center justify-between">
                    <div
                        className="relative w-full"
                        onClick={() => setPressSelect(!pressSelect)}
                    >
                        <div className="flex gap-3 items-center cursor-pointer px-1">
                            <FaUserCircle size={30} />
                            <p className="text-white">{user.email}</p>
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{
                                    rotate: pressSelect ? 180 : 0,
                                }}
                                transition={{ duration: 0.4 }}
                                className="flex items-center"
                            >
                                <IoIosArrowDown />
                            </motion.div>
                        </div>
                        <AnimatePresence>
                            {pressSelect && (
                                <motion.div
                                    className="absolute w-full top-12"
                                    key="modal"
                                    initial="hidden"
                                    animate={{ y: -5 }}
                                    exit={{ y: -5 }}
                                >
                                    <ButtonStyle
                                        fullWidth
                                        onClick={handleLogout}
                                    >
                                        로그아웃
                                    </ButtonStyle>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
