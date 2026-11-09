"use server";

import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email", string>>;
  // Submitted values, so fields can be refilled after React resets the form
  values?: Partial<Record<"name" | "company" | "email" | "phone" | "message", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const field = (data: FormData, key: string, max: number) =>
  String(data.get(key) ?? "")
    .trim()
    .slice(0, max);

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never fill this hidden field
  if (field(formData, "website", 200)) {
    return { status: "success", message: "Thanks! We will get back to you within one business day." };
  }

  const type = field(formData, "type", 20) === "driver" ? "Driver" : "Carrier";
  const name = field(formData, "name", 120);
  const company = field(formData, "company", 160);
  const email = field(formData, "email", 200);
  const phone = field(formData, "phone", 40);
  const message = field(formData, "message", 5000);

  const errors: ContactState["errors"] = {};
  if (!name) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  const values = { name, company, email, phone, message };

  if (Object.keys(errors).length) {
    return { status: "error", message: "Please check the highlighted fields.", errors, values };
  }

  const body = [
    `Type: ${type}`,
    `Name: ${name}`,
    type === "Carrier" && company ? `Company: ${company}` : null,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    "",
    message || "(no message)",
  ]
    .filter((l) => l !== null)
    .join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Easy Motion Website <onboarding@resend.dev>";

  if (!apiKey || !to) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] Email not configured, message would be:\n" + body);
      return { status: "success", message: "Thanks! We will get back to you within one business day." };
    }
    console.error("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is missing");
    return {
      status: "error",
      message: "Sorry, the form is not available right now. Please call or email us.",
      values,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New ${type.toLowerCase()} inquiry from ${name}`,
      text: body,
    });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("[contact] Failed to send", err);
    return { status: "error", message: "Sorry, something went wrong. Please try again or call us.", values };
  }

  return { status: "success", message: "Thanks! We will get back to you within one business day." };
}
