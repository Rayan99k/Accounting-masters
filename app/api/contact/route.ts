import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Handles submissions from the homepage contact form and emails them
 * via Resend (https://resend.com).
 *
 * Required environment variables (set these in Vercel → Project →
 * Settings → Environment Variables):
 *
 *   RESEND_API_KEY     - your Resend API key
 *   CONTACT_TO_EMAIL   - the inbox that should receive form submissions
 *                        e.g. info@accountingmastersgroup.ca
 *   CONTACT_FROM_EMAIL - the "from" address Resend sends as. Must be
 *                        on a domain you've verified with Resend
 *                        (https://resend.com/domains). Until you verify
 *                        a domain, Resend lets you send test emails from
 *                        "onboarding@resend.dev".
 *
 * If RESEND_API_KEY isn't set, submissions are still validated and
 * logged (so local dev / preview deployments without the key don't
 * error), but no email is sent.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      name.trim().length < 2 ||
      message.trim().length < 10 ||
      !email.includes("@")
    ) {
      return NextResponse.json(
        { error: "Invalid submission." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

    if (!apiKey || !toEmail) {
      console.warn(
        "RESEND_API_KEY or CONTACT_TO_EMAIL is not set — logging submission instead of emailing it.",
      );
      console.log("New contact form submission:", { name, email, message });
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `Accounting Masters Group Website <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
