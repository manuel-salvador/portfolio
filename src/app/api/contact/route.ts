import { NextResponse } from "next/server";

const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const messageRegex = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!(name && email && message)) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    if (!nameRegex.test(name)) {
      return NextResponse.json(
        { message: "Invalid name format" },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!messageRegex.test(message)) {
      return NextResponse.json(
        { message: "Invalid message format" },
        { status: 400 }
      );
    }

    const data = {
      service_id: process.env.EMAIL_SERVICE_ID,
      template_id: process.env.EMAIL_TEMPLATE_ID,
      user_id: process.env.EMAIL_PUBLIC_KEY,
      template_params: {
        name,
        email,
        message,
      },
      accessToken: process.env.EMAIL_PRIVATE_KEY,
    };

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return NextResponse.json({ message: "OK" });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "Something went wrong",
      },
      { status: 500 }
    );
  }
}
