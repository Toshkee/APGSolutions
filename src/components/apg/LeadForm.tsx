"use client";

import { useActionState, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { submitLead, type LeadState, type LeadType } from "@/app/actions";
import { cta } from "@/content/apg";
import { easeOut } from "../Reveal";

const initial: LeadState = { status: "idle", message: "" };

const inputClass =
  "h-12 w-full rounded-[10px] border-[1.5px] border-line-input bg-white px-3.5 text-[15px] text-navy placeholder:text-placeholder transition-colors focus:border-blue focus:outline-none focus:shadow-[0_0_0_3px_rgba(21,87,230,0.15)] aria-invalid:border-[#d92d20]";

type FieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  options?: string[];
  state: LeadState;
};

function Field({ name, label, placeholder, type = "text", autoComplete, options, state }: FieldProps) {
  const error = state.errors?.[name];
  const id = `lead-${name}`;
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-1.5">
      <label htmlFor={id} className="text-[13px] font-semibold text-label">
        {label}
      </label>
      {options ? (
        <div className="relative">
          <select
            id={id}
            name={name}
            defaultValue={state.values?.[name] ?? ""}
            className={`${inputClass} appearance-none pr-9 invalid:text-placeholder`}
            required
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((o) => (
              <option key={o} value={o} className="text-navy">
                {o}
              </option>
            ))}
          </select>
          <svg
            aria-hidden="true"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2"
          >
            <path d="M2 4l4 4 4-4" fill="none" stroke="#8a95ae" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          defaultValue={state.values?.[name]}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={inputClass}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="text-[12.5px] text-[#d92d20]">
          {error}
        </p>
      )}
    </div>
  );
}

export function LeadForm() {
  const [type, setType] = useState<LeadType>("carrier");
  const [state, formAction, pending] = useActionState(submitLead, initial);

  // "#apply" links open the driver tab, "#get-started" the carrier tab
  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === "#apply") setType("driver");
      if (window.location.hash === "#get-started") setType("carrier");
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const done = state.status === "success";

  return (
    <div className="flex w-full flex-col rounded-[18px] bg-white p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-9 lg:w-[516px] lg:shrink-0">
      <h3 className="text-[20px] leading-tight font-bold tracking-[-0.02em] text-navy sm:text-[24px]">{cta.form.title}</h3>
      <p className="mt-1.5 text-[15px] text-muted">{cta.form.lead}</p>

      <AnimatePresence mode="wait" initial={false}>
        {done ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeOut }}
            role="status"
            className="mt-8 flex flex-col items-start gap-3 pb-2"
          >
            <span className="grid size-12 place-items-center rounded-full bg-pill">
              <svg width="24" height="24" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="#1557E6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="text-lg font-bold text-navy">You’re all set.</p>
            <p className="text-[15px] leading-[1.6] text-muted">{state.message}</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            action={formAction}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-6 flex flex-col"
          >
            <div role="tablist" aria-label="I am" className="flex rounded-[10px] bg-tab p-1">
              {(
                [
                  ["carrier", "I'm hiring drivers"],
                  ["driver", "I'm a driver"],
                ] as const
              ).map(([value, label]) => {
                const active = type === value;
                return (
                  <button
                    key={value}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setType(value)}
                    className={`relative flex-1 rounded-lg py-[11px] text-sm font-bold transition-colors ${
                      active ? "text-navy" : "text-muted hover:text-navy"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="lead-tab"
                        className="absolute inset-0 rounded-lg bg-white shadow-[0_2px_6px_rgba(11,27,63,0.1)]"
                        transition={{ duration: 0.3, ease: easeOut }}
                      />
                    )}
                    <span className="relative">{label}</span>
                  </button>
                );
              })}
            </div>
            <input type="hidden" name="type" value={type} />

            <div className="mt-5 flex flex-col gap-3.5">
              {type === "carrier" ? (
                <>
                  <Field name="company" label="Company name" placeholder="e.g. Midwest Freight LLC" autoComplete="organization" state={state} />
                  <div className="flex flex-col gap-3.5 sm:flex-row sm:gap-3">
                    <Field name="usdot" label="USDOT / MC #" placeholder="1234567" state={state} />
                    <Field name="driversNeeded" label="Drivers needed" placeholder="1 – 5" options={["1 – 5", "6 – 10", "11 – 25", "26+"]} state={state} />
                  </div>
                  <Field name="email" label="Work email" type="email" placeholder="you@company.com" autoComplete="email" state={state} />
                </>
              ) : (
                <>
                  <Field name="name" label="Full name" placeholder="e.g. John Smith" autoComplete="name" state={state} />
                  <div className="flex flex-col gap-3.5 sm:flex-row sm:gap-3">
                    <Field name="phone" label="Phone" type="tel" placeholder="(555) 123-4567" autoComplete="tel" state={state} />
                    <Field
                      name="experience"
                      label="CDL-A experience"
                      placeholder="Select"
                      options={["Less than 1 year", "1 – 2 years", "3 – 5 years", "5+ years"]}
                      state={state}
                    />
                  </div>
                  <Field name="email" label="Email" type="email" placeholder="you@email.com" autoComplete="email" state={state} />
                </>
              )}
            </div>

            {/* Honeypot for bots */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

            <button
              type="submit"
              disabled={pending}
              className="mt-[22px] inline-flex h-[52px] w-full items-center justify-center rounded-[10px] bg-amber px-[26px] text-base font-bold text-navy shadow-[0_8px_14px_rgba(245,165,36,0.35)] transition hover:-translate-y-px hover:bg-amber-hover disabled:cursor-wait disabled:opacity-70"
            >
              {pending ? "Sending…" : type === "carrier" ? "Check My Carrier's Fit →" : "Apply to Drive →"}
            </button>
            {state.status === "error" && (
              <p role="alert" className="mt-3 text-center text-[13px] text-[#d92d20]">
                {state.message}
              </p>
            )}
            <p className="mt-3.5 flex items-center justify-center gap-1.5 text-[12.5px] text-subtle">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
              {cta.form.privacy}
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
