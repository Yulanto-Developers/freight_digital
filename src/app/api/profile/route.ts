import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { db } from "@/lib/config";
import bcrypt from 'bcryptjs'
import CheckCookies from "@/lib/CheckCookies";


export async function GET(req: NextRequest) {
    const token: any = await CheckCookies(req);

    try {

        if (!token) {
            return NextResponse.json({
                status: false,
                message: 'Un Authorized'
            });
        }

        const [loginData]: any = await db.query(
            'SELECT username,user_id FROM login_details WHERE id=?',
            [token.id]
        );

        if (!loginData || loginData.length === 0) {
            return NextResponse.json({
                status: false,
                message: 'User Not Found'
            });
        }

        const userId = loginData[0].user_id;

        const [profileData]: any = await db.query(
            'SELECT fullname,phone,dob,address FROM register_details WHERE id=?',
            [userId]
        );

        return NextResponse.json({
            status: true,
            message: {
                username: loginData[0].username,
                fullname: profileData[0]?.fullname || '',
                phone: profileData[0]?.phone || '',
                dob: profileData[0]?.dob || '',
                address: profileData[0]?.address || ''
            }
        });

    } catch (error) {

        return NextResponse.json({
            status: false,
            message: 'Server Error'
        });

    }
}


export async function POST(req: NextRequest) {
    const post_token: any = await CheckCookies(req);

    try {
        if (!post_token) {
            return NextResponse.json({
                status: false,
                message: 'Un Authorized'
            });
        }

        const body = await req.json();

        // email udate
        if (body.action === "updateEmail") {

            const email = body.email;
            const password = body.password;

            if (!email || !password) {
                return NextResponse.json({
                    status: false,
                    message: 'Please Enter the Details'
                });
            }

            const [loginRow]: any = await db.query(
                'SELECT password, user_id FROM login_details WHERE id = ?',
                [post_token.id]
            );

            if (!loginRow || loginRow.length === 0) {
                return NextResponse.json({
                    status: false,
                    message: 'User not found'
                });
            }

            const verify_pass = await bcrypt.compare(
                password,
                loginRow[0].password
            );

            if (!verify_pass) {
                return NextResponse.json({
                    status: false,
                    message: 'Invalid Password'
                });
            }

            const [loginUpdate]: any = await db.query(
                'UPDATE login_details SET username = ? WHERE id = ?',
                [email, post_token.id]
            );

            if (loginUpdate.affectedRows === 0) {
                return NextResponse.json({
                    status: false,
                    message: 'Login details update failed'
                });
            }

            const userId = loginRow[0].user_id;

            const [registerUpdate]: any = await db.query(
                'UPDATE register_details SET email = ? WHERE id = ?',
                [email, userId]
            );

            if (registerUpdate.affectedRows === 0) {
                return NextResponse.json({
                    status: false,
                    message: 'Register details update failed'
                });
            }

            return NextResponse.json({
                status: true,
                message: 'Email Updated Successfully'
            });
        }

        //    password upate
        else if (body.action === "updatePassword") {

            const oldPassword = body.oldPassword;
            const newPassword = body.newPassword;

            if (!oldPassword || !newPassword) {
                return NextResponse.json({
                    status: false,
                    message: 'Please Enter All Fields'
                });
            }

            const [loginRow]: any = await db.query(
                'SELECT password FROM login_details WHERE id = ?',
                [post_token.id]
            );

            if (!loginRow || loginRow.length === 0) {
                return NextResponse.json({
                    status: false,
                    message: 'User not found'
                });
            }

            const verify_pass = await bcrypt.compare(
                oldPassword,
                loginRow[0].password
            );

            if (!verify_pass) {
                return NextResponse.json({
                    status: false,
                    message: 'Current Password Incorrect'
                });
            }

            const hashedPassword = await bcrypt.hash(
                newPassword,
                10
            );

            const [passwordUpdate]: any = await db.query(
                'UPDATE login_details SET password = ? WHERE id = ?',
                [hashedPassword, post_token.id]
            );

            if (passwordUpdate.affectedRows === 0) {
                return NextResponse.json({
                    status: false,
                    message: 'Password Update Failed'
                });
            }

            return NextResponse.json({
                status: true,
                message: 'Password Updated Successfully'
            });
        }

        // prfole update
        else if (body.action === "updateProfile") {

            const fullname = body.fullname;
            const phone = body.phone;
            const dob = body.dob;
            const address = body.address;

            if (!fullname || !phone || !dob || !address) {
                return NextResponse.json({
                    status: false,
                    message: 'Please Fill All Fields'
                });
            }

            // Get user_id from login_details
            const [loginRow]: any = await db.query(
                'SELECT user_id FROM login_details WHERE id=?',
                [post_token.id]
            );

            if (!loginRow || loginRow.length === 0) {
                return NextResponse.json({
                    status: false,
                    message: 'User Not Found'
                });
            }

            const userId = loginRow[0].user_id;

            // Update register_details
            const [profileUpdate]: any = await db.query(
                `UPDATE register_details
         SET fullname = ?, phone = ?, dob = ?, address = ?
         WHERE id = ?`,
                [fullname, phone, dob, address, userId]
            );

            if (profileUpdate.affectedRows === 0) {
                return NextResponse.json({
                    status: false,
                    message: 'Profile Update Failed'
                });
            }

            return NextResponse.json({
                status: true,
                message: 'Profile Updated Successfully'
            });
        }

        return NextResponse.json({
            status: false,
            message: 'Invalid Action'
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json({
            status: false,
            message: 'Server Error'
        });
    }
}