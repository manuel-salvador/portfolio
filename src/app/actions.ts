"use server";

import {
  type ContactFieldErrors,
  validateContactFields,
} from "@/utils/contact-form";

export type SendEmailResult =
  | { status: 200; message: string }
  | { status: 400; message: string; errors: ContactFieldErrors }
  | { status: 500; message: string };

const SEND_FAILURE =
  "The message didn't send. Your draft is still here. Try again, or email manu.sacr@hotmail.com.";

function readField(formData: FormData, field: string): string {
  const value = formData.get(field);
  return typeof value === "string" ? value : "";
}

export const sendEmail = async (
  formData: FormData
): Promise<SendEmailResult> => {
  const name = readField(formData, "name");
  const email = readField(formData, "email");
  const message = readField(formData, "message");
  const errors = validateContactFields({ email, message, name });

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      message: "Some fields need a quick fix.",
      status: 400,
    };
  }

  try {
    const data = {
      accessToken: process.env.EMAIL_PRIVATE_KEY,
      service_id: process.env.EMAIL_SERVICE_ID,
      template_id: process.env.EMAIL_TEMPLATE_ID,
      template_params: {
        email: email.trim(),
        message: message.trim(),
        name: name.trim(),
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
        message: SEND_FAILURE,
        status: 500,
      };
    }

    return {
      message: "OK",
      status: 200,
    };
  } catch {
    return {
      message: SEND_FAILURE,
      status: 500,
    };
  }
};
