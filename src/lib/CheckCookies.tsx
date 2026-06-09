import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export default async function CheckCookies(value: any) {
    const cookieStore = await cookies();
    const cookies_token = cookieStore.get("token")?.value;
    try {


        if (!cookies_token) {
            return 'Un-Authorized login';

        }
        else {
            const verify_token = jwt.verify(cookies_token, process.env.MY_SECREAT_KEY!);
            return verify_token;
        }
    }
    catch {
        return null;
    }
}