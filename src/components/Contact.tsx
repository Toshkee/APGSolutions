import { site } from "@/content/site";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";

const details = [
  { label: "Phone", value: site.phone },
  { label: "Email", value: site.email },
  { label: "Office", value: site.city },
  { label: "Hours", value: site.hours },
];

export function Contact() {
  return (
    <section id="contact" className="py-[clamp(80px,10vw,128px)]">
      <div className="container-x grid items-start gap-[clamp(40px,6vw,96px)] md:grid-cols-[1fr_1.1fr]">
        <Reveal className="flex flex-col gap-5">
          <p className="eyebrow text-brand">Contact Us</p>
          <h2 className="font-display text-[clamp(36px,4.6vw,56px)] leading-[1.05] text-brand">Let&apos;s get moving.</h2>
          <p className="max-w-[44ch] text-muted">
            Need drivers or looking for your next job? Send us a message and we&apos;ll get back to you within one
            business day.
          </p>
          <dl className="mt-3">
            {details.map((d) => (
              <div
                key={d.label}
                className="grid gap-0.5 border-t border-line py-3.5 sm:grid-cols-[90px_1fr] sm:gap-4"
              >
                <dt className="pt-0.5 text-[13px] tracking-widest text-muted uppercase">{d.label}</dt>
                <dd className="min-w-0 wrap-anywhere">{d.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
