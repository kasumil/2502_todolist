import { supabase } from "@/app/api/supabase";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return new Response(
                JSON.stringify({ error: "Email and password are required." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const data = await supabase.auth.signUp({
            email,
            password,
        });

        if (data) {
            return new Response(
                JSON.stringify({
                    result: "Y",
                    message: "회원가입 성공",
                }),
                { status: 200, headers: { "Content-Type": "application/json" } }
            );
        } else {
            console.log(data);
            return new Response(
                JSON.stringify({
                    result: "N",
                    message: "회원가입 실패",
                }),
                { status: 200, headers: { "Content-Type": "application/json" } }
            );
        }
    } catch (error) {
        console.log("logout error: " + error);
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
