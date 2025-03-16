import React from "react";
import ButtonStyle from "@/components/common/ButtonStyle";
import { useRouter } from "next/navigation";
import { logout } from "@/utils/client/apis";
import useStore from "@/store";

const LogoutButton = () => {
    const { setLogged } = useStore();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const response = await logout();
            if (response?.result === "Y") {
                alert("로그아웃 성공");
            } else {
                alert("로그아웃 실패");
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLogged(false);
            router.push("/login");
        }
    };

    return (
        <ButtonStyle fullWidth onClick={handleLogout}>
            로그아웃
        </ButtonStyle>
    );
};

export default LogoutButton;
