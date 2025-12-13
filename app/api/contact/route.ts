import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, subject, message } = await req.json();
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'a.wahid.developer@gmail.com',
      subject,
      html: `<p>${message}</p><p>From: ${email}</p>`
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
