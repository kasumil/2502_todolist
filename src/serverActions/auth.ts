"use server";

import { cookies } from "next/headers";

export default async function getAccessToken() {
    const cookieStore = await cookies();
    const tokenData = cookieStore.get("TokenData");
    return tokenData ? JSON.parse(tokenData.value).access_token : null;
}
