import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabase } from "../../supabase";

export async function POST() {
    const cookieStore = cookies();
    const tokenData = cookieStore.get("TokenData");

    if (!tokenData) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const session = JSON.parse(tokenData.value);

    // Supabase에서 세션 갱신
    const { data, error } = await supabase.auth.refreshSession({
        refresh_token: session.refresh_token,
    });

    if (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Token refresh failed" },
            { status: 401 }
        );
    }

    // 새로운 세션 정보를 쿠키에 저장
    cookieStore.set({
        name: "TokenData",
        value: JSON.stringify(data.session),
        httpOnly: true,
        path: "/",
    });

    return NextResponse.json({ access_token: data.session.access_token });
}
