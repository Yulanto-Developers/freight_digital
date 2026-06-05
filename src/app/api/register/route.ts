import { db } from "@/lib/config";
import { NextRequest, NextResponse } from "next/server";
import { ResultSetHeader } from "mysql2";
import fs from 'fs';
import path from 'path'
import bcrypt from "bcryptjs";



// sData.append('fullname', signup.fname);
//         sData.append('email', signup.email);
//         sData.append('dob', signup.dob);
//         sData.append('phone', signup.phone);
//         sData.append('address', signup.address);
//         if (profile) {
//             sData.append('profile', profile);

export async function POST(req: NextRequest) {
    const data = await req.formData();
    const fname = data.get('fullname')
    const email = data.get('email')
    const phone = data.get('phone')
    const dob = data.get('dob')
    const address = data.get('address')
    const password = data.get('password')
    const profile = data.get('profile') as File | null

    const [checkEmail]: any = await db.query('select * from login_details where email=?', [email]);

    if (checkEmail && checkEmail.length > 0) {
        return NextResponse.json({
            'status': false,
            'message': 'Email is already Registred'
        })
    }
    else {
        const hashPassword = await bcrypt.hash(password, 10);
        let Imagename: string = ''
        if (profile instanceof File && profile.size > 0) {
            const Imagebinary = await profile.arrayBuffer();
            const ImageBuffer = Buffer.from(Imagebinary);
            Imagename = Date.now() + profile.name;
            const saveImage = path.join(process.cwd(), 'public/uploads', Imagename)
            fs.writeFileSync(saveImage, ImageBuffer);
        }
        else {
            Imagename = '';
        }

        const [insertSignin] = await db.query<ResultSetHeader>('INSERT INTO register_details(fullname,email,phone,dob,profile,address) values(?,?,?,?,?,?)', [
            fname,
            email,
            phone,
            dob,
            Imagename,
            address
        ]);

        const lastSignUp_id = insertSignin.insertId;

        if (insertSignin) {
            const [insertLogin] = await db.query('insert into login_details(email,password,user_id,login_type)values(?,?,?,?)', [
                email,
                hashPassword,
                lastSignUp_id,
                'Admin'
            ]);

            if (insertLogin) {
                return NextResponse.json({
                    'status': true,
                    'message': 'User Registrtion Successfully'
                })
            }
            else {
                return NextResponse.json({
                    'status': false,
                    'message': 'Registrtion Failed'
                })
            }
        }
        return NextResponse.json({
            'status': false,
            'message': 'something went wrong'
        })

    }
}