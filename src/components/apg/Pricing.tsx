import { pricing } from "@/content/apg";
import { Reveal } from "../Reveal";
import { Button, CheckItem, SectionHeading, Svg } from "./ui";

export function Pricing() {
  const { card } = pricing;
  return (
    <section id="pricing" className="py-16 lg:py-[110px]">
      <div className="container-apg flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-20">
        <Reveal className="min-w-0 flex-1">
          <SectionHeading
            eyebrow={pricing.eyebrow}
            title={pricing.title}
            lead={pricing.lead}
            titleClassName="lg:max-w-[620px]"
            leadClassName="lg:max-w-[600px]"
          />
          <ul className="mt-[34px] hidden flex-col gap-3.5 lg:flex">
            {pricing.compare.map((c) => (
              <li key={c.text} className="flex items-center gap-3.5 text-base font-medium lg:text-[17px]">
                <Svg src={c.yes ? "/apg/compare-yes.svg" : "/apg/compare-no.svg"} w={26} h={26} />
                {c.text}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12} className="w-full lg:w-[520px] lg:shrink-0">
          <div className="flex flex-col items-start rounded-[18px] border-2 border-blue bg-white p-6 shadow-[0_20px_50px_rgba(21,87,230,0.16)] lg:rounded-[22px] lg:p-11 lg:shadow-[0_30px_70px_rgba(21,87,230,0.18)]">
            <p className="rounded-full bg-pill px-3.5 py-[7px] text-[13px] font-bold tracking-[1px] text-blue uppercase">
              {card.pill}
            </p>
            <p className="mt-4 flex items-baseline gap-2.5 lg:mt-5">
              <span className="display text-[44px] leading-none lg:text-[64px]">{card.price}</span>
              <span className="text-lg font-semibold text-muted lg:text-xl">{card.unit}</span>
            </p>
            <p className="mt-1.5 text-sm text-muted lg:text-[15px]">{card.note}</p>
            <ul className="mt-5 flex flex-col gap-3 text-[15px] lg:mt-[26px] lg:gap-5 lg:text-base">
              {card.includes.map((item) => (
                <li key={item}>
                  <CheckItem className="text-navy">{item}</CheckItem>
                </li>
              ))}
            </ul>
            <Button href="#get-started" className="mt-6 w-full lg:mt-8">
              {card.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
