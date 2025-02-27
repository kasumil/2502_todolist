"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useStore from "@/store";

export default function IndexPage() {
    const router = useRouter();
    const isLogged = useStore((state) => state.isLogged);

    useEffect(() => {
        if (isLogged) {
            router.replace("/home");
        } else {
            router.replace("/login");
        }
    }, [isLogged, router]);

    return <p>Redirecting...</p>;
}
