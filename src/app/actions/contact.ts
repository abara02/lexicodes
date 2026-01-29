"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: { name: string; email: string; message: string }) {
    if (!process.env.RESEND_API_KEY) {
        return { error: "API key is missing. Please set RESEND_API_KEY in environment variables." };
    }

    const { name, email, message } = formData;

    if (!name || !email || !message) {
        return { error: "Please fill out all fields." };
    }

    try {
        const data = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "lexi.codes.dev@gmail.com",
            subject: `New Contact Form Message from ${name}`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #6d28d9;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        });

        return { success: true, data };
    } catch (error: any) {
        console.error("Resend Error:", error);
        return { error: error.message || "Failed to send email." };
    }
}
