"use server";

import { Resend } from "resend";

export type LeadType = "carrier" | "driver";

export type LeadState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string>;
  values?: Record<string, string>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldsByType: Record<LeadType, { key: string; label: string; required?: boolean; email?: boolean }[]> = {
  carrier: [
    { key: "company", label: "Company name", required: true },
    { key: "usdot", label: "USDOT / MC #" },
    { key: "driversNeeded", label: "Drivers needed" },
    { key: "email", label: "Work email", required: true, email: true },
  ],
  driver: [
    { key: "name", label: "Full name", required: true },
    { key: "phone", label: "Phone", required: true },
    { key: "experience", label: "CDL-A experience" },
    { key: "email", label: "Email", required: true, email: true },
  ],
};

const read = (data: FormData, key: string) =>
  String(data.get(key) ?? "")
    .trim()
    .slice(0, 300);

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Honeypot: people never fill this hidden field
  if (read(formData, "website")) return { status: "success", message: "Thanks! We’ll be in touch shortly." };

  const type: LeadType = read(formData, "type") === "driver" ? "driver" : "carrier";
  const fields = fieldsByType[type];
  const values: Record<string, string> = {};
  const errors: Record<string, string> = {};

  for (const f of fields) {
    values[f.key] = read(formData, f.key);
    if (f.required && !values[f.key]) errors[f.key] = `Please enter your ${f.label.toLowerCase()}.`;
    else if (f.email && !EMAIL_RE.test(values[f.key])) errors[f.key] = "Please enter a valid email address.";
  }

  if (Object.keys(errors).length) {
    return { status: "error", message: "Please check the highlighted fields.", errors, values };
  }

  const title = type === "carrier" ? `New carrier lead: ${values.company}` : `New driver application: ${values.name}`;
  const body = [`Type: ${type === "carrier" ? "Carrier (hiring drivers)" : "Driver"}`, ...fields.map((f) => `${f.label}: ${values[f.key] || "—"}`)].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "APG Website <onboarding@resend.dev>";

  if (!apiKey || !to) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[lead] Email not configured. ${title}\n${body}`);
      return { status: "success", message: successMessage(type) };
    }
    console.error("[lead] RESEND_API_KEY or CONTACT_TO_EMAIL is missing");
    return { status: "error", message: "Sorry, the form is unavailable right now. Please call us.", values };
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({ from, to, replyTo: values.email, subject: title, text: body });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("[lead] Failed to send", err);
    return { status: "error", message: "Sorry, something went wrong. Please try again or call us.", values };
  }

  return { status: "success", message: successMessage(type) };
}

function successMessage(type: LeadType) {
  return type === "carrier"
    ? "Thanks! A recruiter will review your fit and reach out within one business day."
    : "Thanks for applying! A recruiter will call you about jobs that match.";
}
