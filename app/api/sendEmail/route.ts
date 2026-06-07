// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import { sendEmail } from '@/app/_ContactMe/EmailConfig';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    await sendEmail(name, email, message);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}