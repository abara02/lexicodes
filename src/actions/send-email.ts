"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
    const senderName = formData.get("senderName") as string;
    const senderEmail = formData.get("senderEmail") as string;
    const message = formData.get("message") as string;

    // Simple server-side validation
    if (!senderName || !senderEmail || !message) {
        return {
            error: "Please fill out all fields."
        };
    }

    try {
        const data = await resend.emails.send({
            from: "Portfolio Contact Form <onboarding@resend.dev>",
            to: "lexi.codes.dev@gmail.com",
            subject: `New Message from ${senderName}`,
            replyTo: senderEmail,
            text: message,
            html: `
        <div>
            <h1>New Message from Portfolio</h1>
            <p><strong>From:</strong> ${senderName} (${senderEmail})</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        </div>
      `
        });

        if (data.error) {
            return { error: data.error.message };
        }

        return { success: true };
    } catch (error: any) {
        return {
            error: error.message || "Something went wrong"
        };
    }
}
