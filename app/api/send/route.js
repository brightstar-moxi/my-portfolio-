import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req, res) {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);

    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "e0013ff8fa446b",
            pass: "9ca2dc4950ab99"
        }
    });

    const mailOptions = {
        from: 'brightstarmoxiz2@gmail.com',
        to: ['brightstarmoxiz2@gmail.com',email],
        subject: subject,
        html: `
            <h1>${subject}</h1>
            <p>Thank you for contacting us!</p>
            <p>New message submitted:</p>
            <p>${message}</p>
        `
    };

    const sendMail = async (transporter, mailOptions) => {
        try {
            await transporter.sendMail(mailOptions);
            console.log("Email sent");
            return NextResponse.json({ data: mailOptions });
        } catch (error) {
            console.log(error);
            return NextResponse.json({ error });
        }
    }

    const response = await sendMail(transporter, mailOptions);
    return response; // Ensure that you return the response from the sendMail function
}
