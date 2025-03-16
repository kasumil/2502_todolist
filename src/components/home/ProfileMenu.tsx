import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import ButtonStyle from "@/components/common/ButtonStyle";
import LogoutButton from "./LogoutButton";

const ProfileMenu = ({ user, pressSelect, setPressSelect }) => {
    return (
        <div
            className="relative w-full"
            onClick={() => setPressSelect(!pressSelect)}
        >
            <div className="flex gap-3 items-center cursor-pointer px-1">
                <FaUserCircle size={30} />
                <p className="text-white">{user?.email}</p>
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: pressSelect ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <IoIosArrowDown />
                </motion.div>
            </div>
            <AnimatePresence>
                {pressSelect && (
                    <motion.div
                        className="absolute w-full top-12"
                        key="menu"
                        initial={{ y: -5 }}
                        animate={{ y: 0 }}
                        exit={{ y: -5 }}
                    >
                        <LogoutButton />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProfileMenu;
