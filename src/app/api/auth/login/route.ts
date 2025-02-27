import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return new Response(
                JSON.stringify({ error: "Email and password are required." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const data = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        console.log(data);
        // 예제용 토큰 (실제 환경에서는 JWT를 사용)
        const token = "your-secure-token";

        return new Response(
            JSON.stringify({
                result: "Y",
                message: "로그인 성공",
                data: { token },
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
