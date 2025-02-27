"use client";
import ButtonStyle from "@/components/common/ButtonStyle";
import useStore from "@/store";
import { logout } from "@/utils/apis";
import { useRouter } from "next/navigation";
import React, { use } from "react";

type Props = {};

const HomePage = (props: Props) => {
    const { isLogged, user, setLogged } = useStore();
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

    console.log(isLogged, user);
    return (
        <div>
            <p>{isLogged}</p>
            <p>{user}</p>
            <ButtonStyle onClick={handleLogout}>로그아웃</ButtonStyle>
        </div>
    );
};

export default HomePage;
