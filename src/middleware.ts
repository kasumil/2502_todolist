import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const cookieData = await cookies();
    const token = cookieData.get("TokenData");
    const publicPaths = ["/login", "/signup"];
    const isPublicPath = publicPaths.includes(req.nextUrl.pathname);
    const isFile = req.nextUrl.pathname.match(/\.(.*)$/);
    const isApiRoute = req.nextUrl.pathname.startsWith("/api");

    if (isFile || isApiRoute) {
        return NextResponse.next();
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/home", req.url));
    }

    return NextResponse.next();
}
