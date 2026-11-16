"use server";

import { Resend } from "resend";

export async function sendEmail(formData: {
  name: string;
  email: string;
  business?: string;
  serviceType?: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { error: "API key is missing. Please set RESEND_API_KEY in environment variables." };
  }

  const { name, email, business = "Not specified", serviceType = "General Inquiry", message } = formData;

  if (!name || !email || !message) {
    return { error: "Please fill out all required fields." };
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "LexiCodes Digital <contact@lexicodesdigital.com>",
      to: ["lexi.codes.dev@gmail.com"],
      subject: `New Quote Request: ${name} (${serviceType})`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nBusiness/Website: ${business}\nSelected Service: ${serviceType}\n\nMessage:\n${message}`,
    });

    if (error) {
      return { error: error.message || "Failed to send email." };
    }

    return { success: true, data };
  } catch (err: unknown) {
    console.error("Resend Error:", err);
    return { error: "Failed to send email." };
  }
}
