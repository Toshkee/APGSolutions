"use server";

import { Resend } from "resend";
import { getDictionary } from "@/content";
import { defaultLocale, hasLocale, type Locale } from "@/i18n";

export type LeadType = "carrier" | "driver";

export type LeadState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string>;
  values?: Record<string, string>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type RequiredKey = keyof ReturnType<typeof getDictionary>["formMessages"]["required"];

// Labels are for the lead email, which stays in English. `required` names the error message to show when empty.
const fieldsByType: Record<LeadType, { key: string; label: string; required?: RequiredKey; email?: boolean }[]> = {
  carrier: [
    { key: "company", label: "Company name", required: "company" },
    { key: "usdot", label: "USDOT / MC #" },
    { key: "driversNeeded", label: "Drivers needed" },
    { key: "email", label: "Work email", required: "workEmail", email: true },
  ],
  driver: [
    { key: "name", label: "Full name", required: "name" },
    { key: "phone", label: "Phone", required: "phone" },
    { key: "experience", label: "CDL-A experience" },
    { key: "email", label: "Email", required: "email", email: true },
  ],
};

const languageNames: Record<Locale, string> = { en: "English", es: "Spanish" };

const read = (data: FormData, key: string) =>
  String(data.get(key) ?? "")
    .trim()
    .slice(0, 300);

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  const langValue = read(formData, "lang");
  const lang: Locale = hasLocale(langValue) ? langValue : defaultLocale;
  const m = getDictionary(lang).formMessages;

  // Honeypot: people never fill this hidden field
  if (read(formData, "website")) return { status: "success", message: m.thanks };

  const type: LeadType = read(formData, "type") === "driver" ? "driver" : "carrier";
  const fields = fieldsByType[type];
  const values: Record<string, string> = {};
  const errors: Record<string, string> = {};

  for (const f of fields) {
    values[f.key] = read(formData, f.key);
    if (f.required && !values[f.key]) errors[f.key] = m.required[f.required];
    else if (f.email && !EMAIL_RE.test(values[f.key])) errors[f.key] = m.invalidEmail;
  }

  if (Object.keys(errors).length) {
    return { status: "error", message: m.checkFields, errors, values };
  }

  // Spanish leads are flagged in the subject so the team knows to reply in Spanish
  const flag = lang === defaultLocale ? "" : ` (${languageNames[lang]})`;
  const title = type === "carrier" ? `New carrier lead${flag}: ${values.company}` : `New driver application${flag}: ${values.name}`;
  const body = [
    `Type: ${type === "carrier" ? "Carrier (hiring drivers)" : "Driver"}`,
    `Language: ${languageNames[lang]}`,
    ...fields.map((f) => `${f.label}: ${values[f.key] || "—"}`),
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "APG Website <onboarding@resend.dev>";
  const success = type === "carrier" ? m.successCarrier : m.successDriver;

  if (!apiKey || !to) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[lead] Email not configured. ${title}\n${body}`);
      return { status: "success", message: success };
    }
    console.error("[lead] RESEND_API_KEY or CONTACT_TO_EMAIL is missing");
    return { status: "error", message: m.unavailable, values };
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({ from, to, replyTo: values.email, subject: title, text: body });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("[lead] Failed to send", err);
    return { status: "error", message: m.failed, values };
  }

  return { status: "success", message: success };
}
