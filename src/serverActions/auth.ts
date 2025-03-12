"use server";

import { cookies } from "next/headers";

export default async function getAccessToken() {
    const cookieStore = await cookies();
    const tokenData = await cookieStore.get("TokenData");
    console.log(tokenData);
    return tokenData ? JSON.parse(tokenData?.value)?.access_token : null;
}
