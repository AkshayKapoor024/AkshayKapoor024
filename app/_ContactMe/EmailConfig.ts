// pvt/emailService.ts
import nodemailer, { Transporter, SendMailOptions } from 'nodemailer';
import { emailLayout } from './Layout';
const transporter: Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL as string,
        pass: process.env.APP_PASSWORD as string, // Gmail App Password
    },
});

transporter.verify((error) => {
    if (error) {
        console.error('Mail transporter issue:', error);
    } else {
        console.log('Mail transporter ready');
    }
});

export async function sendEmail(senderName: string, senderEmail: string, message: string) {
    const mailOptions: SendMailOptions = {
        from: process.env.EMAIL, // your Gmail
        to: process.env.RECEIVER,   // send to yourself
        subject: `Portfolio Contact: ${senderName}`,
        html: emailLayout(senderName, senderEmail, message),
    };

    return await transporter.sendMail(mailOptions);
}
