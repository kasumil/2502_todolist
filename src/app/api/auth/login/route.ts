import { supabase } from "@/app/api/supabase";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        const cookieStorage = await cookies();

        if (!email || !password) {
            return new Response(
                JSON.stringify({ error: "Email and password are required." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const { data } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (data?.error) {
            console.log("data error: " + data);
            return new Response(
                JSON.stringify({
                    result: "N",
                    message: data?.error.message,
                    error: data?.error,
                }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        if (data?.session?.access_token) {
            cookieStorage.set({
                name: "TokenData",
                value: JSON.stringify(data.session), // JSON.stringify() 해야 함
                httpOnly: true,
                secure: true,
                path: "/",
            });
        }

        return new Response(
            JSON.stringify({
                result: "Y",
                message: "로그인 성공",
                data: data.user,
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.log(error);
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
