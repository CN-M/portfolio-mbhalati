import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, subject, email, message } = await request.json();

  if (!name || !subject || !email || !message) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  console.log("Contact form submitted:", { name, subject, email, message });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER, // or your SendGrid verified sender email
      to: process.env.CONTACT_EMAIL, // Where the email should be sent (e.g., your personal email)
      subject: `New Contact Form Submission from ${name} `,
      text: `You received a new message from ${name} with subject "${subject}" (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
