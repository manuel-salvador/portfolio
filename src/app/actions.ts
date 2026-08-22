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
        message: "All fields are required",
        status: 400,
      };
    }

    if (!nameRegex.test(name)) {
      return {
        message: "Invalid name format",
        status: 400,
      };
    }

    if (!emailRegex.test(email)) {
      return {
        message: "Invalid email format",
        status: 400,
      };
    }

    if (!messageRegex.test(message)) {
      return {
        message: "Invalid message format",
        status: 400,
      };
    }

    const data = {
      accessToken: process.env.EMAIL_PRIVATE_KEY,
      service_id: process.env.EMAIL_SERVICE_ID,
      template_id: process.env.EMAIL_TEMPLATE_ID,
      template_params: {
        email,
        message,
        name,
      },
      user_id: process.env.EMAIL_PUBLIC_KEY,
    };

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    if (!response.ok) {
      return {
        message: "Failed to send email",
        status: 500,
      };
    }

    return {
      message: "OK",
      status: 200,
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "Something went wrong",
      status: 500,
    };
  }
};
