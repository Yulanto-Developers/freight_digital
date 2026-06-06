import { db } from "@/lib/config";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const body = await req.json();
    const email = body.email;
    const password = body.password;
    if (!email && !password) {
        return NextResponse.json({
            status: true,
            message: 'Please Enter the Details'
        });

    }
    else {
        const [checkLogin]: any = await db.query('select * from login_details where username=?', [email]);
        if (checkLogin && checkLogin.length > 0) {
            const verify_pass: boolean = await bcrypt.compare(password, checkLogin[0].password);
            if (!verify_pass) {
                return NextResponse.json({
                    status: false,
                    message: 'Invaild Password'
                })
            }
            else {
                const token = jwt.sign(
                    {
                        id: checkLogin[0].id,
                        email: checkLogin[0].email,
                        role: checkLogin[0].role
                    },
                    process.env.MY_SECREAT_KEY as string,
                )




                const cookies_setter = NextResponse.json({
                    status: 200,
                    message: 'login success',
                    role: checkLogin[0].login_type

                })

                cookies_setter.cookies.set('token', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: 'strict',
                    path: '/',
                    maxAge: 60 * 60 * 24
                })
                return cookies_setter;
            }
        }
        else {
            return NextResponse.json({
                status: false,
                message: 'Invaild Email'
            });
        }
    }
}