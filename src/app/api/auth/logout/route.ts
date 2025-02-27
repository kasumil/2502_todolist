import { supabase } from "@/lib/supabase";

export async function DELETE() {
    try {
        await supabase.auth.signOut();

        return new Response(
            JSON.stringify({
                result: "Y",
                message: "로그아웃 성공",
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
