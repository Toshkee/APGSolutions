"use client";

import { useActionState, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { sendContact, type ContactState } from "@/app/actions";

const initialState: ContactState = { status: "idle", message: "" };
type FormType = "carrier" | "driver";

const inputClass =
  "w-full rounded-lg border border-line bg-white px-3.5 py-3 text-base text-ink transition-colors focus:border-brand focus:shadow-[0_0_0_3px_rgba(11,47,144,.15)] focus:outline-none aria-invalid:border-[#b42318]";
const labelClass = "flex flex-col gap-1.5 text-sm font-medium";

export function ContactForm() {
  const [type, setType] = useState<FormType>("carrier");
  // React resets the form after every submit; on success we also reset the carrier/driver toggle,
  // on error the fields are refilled from state.values via defaultValue.
  const [state, formAction, pending] = useActionState(async (prev: ContactState, formData: FormData) => {
    const result = await sendContact(prev, formData);
    if (result.status === "success") setType("carrier");
    return result;
  }, initialState);
  const v = state.values ?? {};

  return (
    <form
      action={formAction}
      noValidate
      className="flex flex-col gap-4.5 rounded-2xl bg-tint p-[clamp(24px,4vw,40px)] text-ink"
    >
      <fieldset className="flex flex-wrap items-center gap-2.5">
        <legend className="mb-2 text-sm font-medium">I am a</legend>
        {(["carrier", "driver"] as const).map((value) => (
          <label
            key={value}
            className={`flex cursor-pointer items-center gap-2 rounded-full border bg-white px-4.5 py-2.5 text-[15px] capitalize transition-colors ${
              type === value ? "border-brand text-brand" : "border-line"
            }`}
          >
            <input
              type="radio"
              name="type"
              id={`type-${value}`}
              value={value}
              checked={type === value}
              onChange={() => setType(value)}
              className="m-0 accent-brand"
            />
            {value}
          </label>
        ))}
      </fieldset>

      <div className="grid gap-4.5 sm:grid-cols-2">
        <label htmlFor="name" className={labelClass}>
          Full name
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            defaultValue={v.name}
            required
            aria-invalid={Boolean(state.errors?.name)}
            className={inputClass}
          />
        </label>
        <AnimatePresence initial={false}>
          {type === "carrier" && (
            <motion.label
              htmlFor="company"
              className={labelClass}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Company
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                defaultValue={v.company}
                className={inputClass}
              />
            </motion.label>
          )}
        </AnimatePresence>
      </div>

      <div className="grid gap-4.5 sm:grid-cols-2">
        <label htmlFor="email" className={labelClass}>
          Email
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={v.email}
            required
            aria-invalid={Boolean(state.errors?.email)}
            className={inputClass}
          />
        </label>
        <label htmlFor="phone" className={labelClass}>
          Phone
          <input id="phone" name="phone" type="tel" autoComplete="tel" defaultValue={v.phone} className={inputClass} />
        </label>
      </div>

      <label htmlFor="message" className={labelClass}>
        Message
        <textarea
          id="message"
          name="message"
          rows={4}
          defaultValue={v.message}
          className={`${inputClass} resize-y`}
        />
      </label>

      {/* Honeypot for bots, hidden from people and screen readers */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-lg bg-amber px-6.5 py-3.5 text-[15px] font-semibold text-[#1c1300] transition hover:-translate-y-px hover:bg-amber-hover disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`min-h-[1.4em] text-sm ${state.status === "error" ? "text-[#b42318]" : "text-brand"}`}
      >
        {state.message}
      </p>
    </form>
  );
}
