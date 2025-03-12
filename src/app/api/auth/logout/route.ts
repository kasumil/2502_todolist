import { supabase } from "@/app/api/supabase";
import { cookies } from "next/headers";
export async function DELETE() {
    const cookieStorage = await cookies();
    try {
        await supabase.auth.signOut();
        cookieStorage.delete("TokenData");

        return new Response(
            JSON.stringify({
                result: "Y",
                message: "로그아웃 성공",
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.log("logout error: " + error);
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

export async function GET() {
    const cookieStorage = await cookies();
    return cookieStorage.delete("TokenData");
}
