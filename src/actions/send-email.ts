"use server";

import { Resend } from "resend";

export async function sendEmail(_prevState: unknown, formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { error: "API key is missing. Please set RESEND_API_KEY in environment variables." };
  }

  const senderName = (formData.get("senderName") as string) || "";
  const senderEmail = (formData.get("senderEmail") as string) || "";
  const message = (formData.get("message") as string) || "";

  if (!senderName || !senderEmail || !message) {
    return {
      error: "Please fill out all fields.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const data = await resend.emails.send({
      from: "LexiCodes Digital <contact@lexicodesdigital.com>",
      to: ["lexi.codes.dev@gmail.com"],
      subject: `New Message from ${senderName}`,
      replyTo: senderEmail,
      text: message,
    });

    if (data.error) {
      return { error: data.error.message };
    }

    return { success: true };
  } catch (err: unknown) {
    console.error("Resend Error:", err);
    return {
      error: "Something went wrong",
    };
  }
}
