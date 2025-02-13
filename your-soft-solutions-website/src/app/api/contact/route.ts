import { rejects } from "assert";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer'

export async function POST(req: NextRequest) {
    const { email, name, message } = await req.json()

    const transport = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: 'true',

        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    })

    const mailOptions: Mail.Options = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `Message from ${name} (${email})`,
        text: message
    }

    const sendMail = () => 
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message)
                }
            })
        })
    
    try {
        await sendMail();
        return NextResponse.json({ message: 'Email sent' })
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
    return NextResponse.json('Hello, world!')
}