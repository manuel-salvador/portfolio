"use server";

const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const messageRegex = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/;

export const sendEmail = async (formData: FormData) => {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!(name && email && message)) {
      return {
        status: 400,
        message: "All fields are required",
      };
    }

    if (!nameRegex.test(name)) {
      return {
        status: 400,
        message: "Invalid name format",
      };
    }

    if (!emailRegex.test(email)) {
      return {
        status: 400,
        message: "Invalid email format",
      };
    }

    if (!messageRegex.test(message)) {
      return {
        status: 400,
        message: "Invalid message format",
      };
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
      return {
        status: 500,
        message: "Failed to send email",
      };
    }

    return {
      status: 200,
      message: "OK",
    };
  } catch (error) {
    return {
      status: 500,
      message: error instanceof Error ? error.message : "Something went wrong",
    };
  }
};
