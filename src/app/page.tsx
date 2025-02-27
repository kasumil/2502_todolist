"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import useStore from "@/store";

export default function IndexPage() {
    const isLogged = useStore((state) => state.isLogged);

    useEffect(() => {
        if (isLogged) {
            redirect("/home");
        } else {
            redirect("/login");
        }
    }, [isLogged]);

    return (
        <div className="w-full flex items-center justify-center h-dvh">
            Redirecting...
        </div>
    );
}
