import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Here you would typically send an email using a service like Resend, Nodemailer, etc.
    // For now, we'll just log it and simulate a delay.
    console.log("Contact Form Submission:", data);

    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
