import { howItWorks } from "@/content/apg";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./ui";

// A real sequence, so it reads as a timeline: horizontal on desktop, vertical on phones
export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[linear-gradient(147.84deg,#061232_0%,#0b2463_71.43%)] py-16 lg:py-[110px]"
    >
      <div className="container-apg">
        <Reveal>
          <SectionHeading tone="dark" title={howItWorks.title} lead={howItWorks.lead} />
        </Reveal>
        <ol className="relative mt-9 grid gap-9 lg:mt-[68px] lg:grid-cols-4 lg:gap-8">
          {/* connecting line */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[7px] w-px bg-white/15 lg:top-[7px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto"
          />
          {howItWorks.steps.map((s, i) => (
            <li key={s.title} className="relative pl-10 lg:pt-10 lg:pl-0">
              <span
                aria-hidden="true"
                className="absolute top-0.5 left-0 size-[15px] rounded-full border-[3px] border-[#0b2463] bg-amber shadow-[0_0_0_5px_rgba(245,165,36,0.2)] lg:top-0"
              />
              <Reveal delay={0.1 * i}>
                <h3 className="text-[19px] leading-[1.3] font-bold text-white lg:text-[21px]">{s.title}</h3>
                <p className="mt-2 text-[15.5px] leading-[1.6] text-on-dark-muted lg:max-w-[260px]">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
