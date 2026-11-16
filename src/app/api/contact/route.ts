import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const SENDER_EMAIL = "LexiCodes Digital <contact@lexicodesdigital.com>";
const RECIPIENT_EMAIL = "lexi.codes.dev@gmail.com";

// Input length limits
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_BUSINESS_LENGTH = 150;
const MAX_SERVICE_LENGTH = 120;
const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 5000;

// Sliding-window rate limit: max 5 requests per 15 minutes per IP
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  // Periodic cleanup to avoid unbounded map growth
  if (rateLimitStore.size > 1000) {
    for (const [key, timestamps] of rateLimitStore.entries()) {
      const valid = timestamps.filter((t) => t > windowStart);
      if (valid.length === 0) {
        rateLimitStore.delete(key);
      } else {
        rateLimitStore.set(key, valid);
      }
    }
  }

  const recentTimestamps = (rateLimitStore.get(ip) || []).filter((t) => t > windowStart);
  if (recentTimestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimitStore.set(ip, recentTimestamps);
    return true;
  }

  recentTimestamps.push(now);
  rateLimitStore.set(ip, recentTimestamps);
  return false;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function stripHeaderBreaks(input: string): string {
  return input.replace(/[\r\n]+/g, " ").trim();
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Contact API Error: RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    // Extract client IP for rate limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp =
      (forwardedFor ? forwardedFor.split(",")[0].trim() : req.headers.get("x-real-ip")) ||
      "unknown";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          error:
            "Too many requests from your connection. Please wait a few minutes or email lexi.codes.dev@gmail.com directly.",
        },
        { status: 429 }
      );
    }

    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
    }

    // 1. Honeypot check (if filled by a bot, silently return success without sending email)
    const honeypot = typeof body.website_url === "string" ? body.website_url.trim() : "";
    if (honeypot.length > 0) {
      return NextResponse.json({ success: true });
    }

    // 2. Minimum form fill time check (bots that submit in < 1.2s after load)
    if (typeof body.formStartedAt === "number" && body.formStartedAt > 0) {
      const elapsedMs = Date.now() - body.formStartedAt;
      if (elapsedMs >= 0 && elapsedMs < 1200) {
        return NextResponse.json({ success: true });
      }
    }

    // 3. Extract and sanitize inputs
    const name = typeof body.name === "string" ? stripHeaderBreaks(body.name) : "";
    const email = typeof body.email === "string" ? stripHeaderBreaks(body.email).toLowerCase() : "";
    const business =
      typeof body.business === "string" && body.business.trim().length > 0
        ? stripHeaderBreaks(body.business)
        : "Not specified";
    const serviceType =
      typeof body.serviceType === "string" && body.serviceType.trim().length > 0
        ? stripHeaderBreaks(body.serviceType)
        : "General Inquiry";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    // 4. Validate required fields & length limits
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill out your name, email address, and project details." },
        { status: 400 }
      );
    }

    if (name.length < 2 || name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { error: `Name must be between 2 and ${MAX_NAME_LENGTH} characters.` },
        { status: 400 }
      );
    }

    if (email.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (business.length > MAX_BUSINESS_LENGTH) {
      return NextResponse.json(
        { error: `Business/website field cannot exceed ${MAX_BUSINESS_LENGTH} characters.` },
        { status: 400 }
      );
    }

    if (serviceType.length > MAX_SERVICE_LENGTH) {
      return NextResponse.json(
        { error: `Selected service cannot exceed ${MAX_SERVICE_LENGTH} characters.` },
        { status: 400 }
      );
    }

    if (message.length < MIN_MESSAGE_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        {
          error: `Project details must be between ${MIN_MESSAGE_LENGTH} and ${MAX_MESSAGE_LENGTH} characters.`,
        },
        { status: 400 }
      );
    }

    // 5. Practical spam check: reject messages stuffed with 5+ URLs
    const urlMatches = message.match(/https?:\/\/[^\s]+/gi);
    if (urlMatches && urlMatches.length >= 5) {
      return NextResponse.json(
        { error: "Please reduce the number of links in your message." },
        { status: 400 }
      );
    }

    // 6. Send email via Resend
    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeBusiness = escapeHtml(business);
    const safeService = escapeHtml(serviceType);
    const safeMessage = escapeHtml(message);

    const subject = `New Quote Request: ${name} (${serviceType})`;

    const textContent = [
      `New Quote Request — LexiCodes Digital`,
      `----------------------------------------`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Business / Current Website: ${business}`,
      `Selected Service: ${serviceType}`,
      ``,
      `Project Details:`,
      message,
    ].join("\n");

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 28px; background-color: #0c0a09; color: #f5f5f4; border-radius: 16px; border: 1px solid #292524;">
        <div style="border-bottom: 1px solid #292524; padding-bottom: 16px; margin-bottom: 24px;">
          <p style="margin: 0; font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #a78bfa;">
            LexiCodes Digital &bull; Quote Request
          </p>
          <h2 style="margin: 6px 0 0 0; font-size: 22px; color: #f5f5f4;">
            New Inquiry from ${safeName}
          </h2>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 15px;">
          <tr>
            <td style="padding: 10px 0; color: #a8a29e; width: 190px; font-weight: 600;">Visitor Name:</td>
            <td style="padding: 10px 0; color: #f5f5f4; font-weight: 600;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #a8a29e; font-weight: 600;">Visitor Email:</td>
            <td style="padding: 10px 0;">
              <a href="mailto:${safeEmail}" style="color: #a78bfa; text-decoration: none; font-weight: 600;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #a8a29e; font-weight: 600;">Business / Website:</td>
            <td style="padding: 10px 0; color: #f5f5f4;">${safeBusiness}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #a8a29e; font-weight: 600;">Selected Service:</td>
            <td style="padding: 10px 0; color: #a78bfa; font-weight: 600;">${safeService}</td>
          </tr>
        </table>

        <div style="background-color: #1c1917; border: 1px solid #292524; border-radius: 12px; padding: 18px;">
          <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #a8a29e;">
            Project Details
          </p>
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #f5f5f4; font-size: 15px;">${safeMessage}</p>
        </div>
      </div>
    `;

    const { data, error: resendError } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: [RECIPIENT_EMAIL],
      replyTo: email,
      subject,
      text: textContent,
      html: htmlContent,
    });

    if (resendError) {
      console.error("Resend API Error:", resendError);
      return NextResponse.json(
        { error: "Unable to send your message right now. Please try again or email lexi.codes.dev@gmail.com directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: unknown) {
    console.error("Contact Route Unexpected Error:", err);
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
