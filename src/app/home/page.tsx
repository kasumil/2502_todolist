"use client";
import React, { useState } from "react";
import ButtonStyle from "@/components/common/ButtonStyle";
import useStore from "@/store";
import { logout, tokenDelete } from "@/utils/apis";
import { useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";
import { FaUserCircle } from "react-icons/fa";
import TitleText from "@/components/common/TitleText";
import List from "@/components/common/List";
import ListsRow from "@/components/common/ListRow";

type Props = {};

const HomePage = (props: Props) => {
    const { user, setLogged, token } = useStore();
    const [pressSelect, setPressSelect] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        const response = await logout();
        if (response?.result === "Y") {
            if (response?.data.user) {
                alert("로그아웃 성공");
                return;
            } else {
                alert("로그인은 성공했지만 유저 정보가 없습니다.");
                return;
            }
        } else {
            alert("로그아웃 실패");
        }
        setLogged(false);
        router.push("/login");
    };

    const mockData = [
        {
            id: 1,
            text: "Complete project documentation",
            time: new Date("2025-03-12T12:30:00").getTime(), // 타임스탬프
        },
        {
            id: 2,
            text: "Attend team meeting",
            time: new Date("2025-03-12T14:00:00").getTime(), // 타임스탬프
        },
        {
            id: 3,
            text: "Finish coding task",
            time: new Date("2025-03-12T16:15:00").getTime(), // 타임스탬프
        },
        {
            id: 4,
            text: "Review pull requests",
            time: new Date("2025-03-12T10:00:00").getTime(), // 타임스탬프
        },
    ];

    return (
        <div className="h-dvh p-5 p-md-10 bg-white flex flex-col md:flex-row gap-3 overflow-scroll">
            <div className="bg-gray-400 w-full md:w-xs h-40 md:h-full rounded-lg shadow-md p-5">
                <div className="flex items-center justify-between">
                    <div
                        className="relative w-full"
                        onClick={() => setPressSelect(!pressSelect)}
                    >
                        <div className="flex gap-3 items-center cursor-pointer px-1">
                            <FaUserCircle size={30} />
                            <p className="text-white">{user?.email}</p>
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
            <div className="w-full h-full bg-white rounded-lg shadow-2xl p-5 flex flex-col border border-gray-300 gap-4">
                <TitleText>오늘</TitleText>
                <List items={mockData} Component={ListsRow} />
            </div>
        </div>
    );
};

export default HomePage;
