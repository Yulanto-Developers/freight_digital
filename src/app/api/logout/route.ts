import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    console.log('req');

    // const response = await req.json();
    // console.log(response);
    const response = NextResponse.json({ status: true, message: 'logout successfully' });

    response.cookies.set("token", '', {
        expires: new Date(0),
        // path: '/'
    });

    return response;

}