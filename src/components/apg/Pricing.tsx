import type { Dictionary } from "@/content";
import { Reveal } from "../Reveal";
import { Button, CheckItem, SectionHeading, Svg } from "./ui";

type PricingCopy = Dictionary["pricing"];

export function Pricing({ t: pricing }: { t: PricingCopy }) {
  const { card } = pricing;
  return (
    <section id="pricing" className="bg-surface py-16 lg:py-[110px]">
      <div className="container-apg flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-20">
        <Reveal className="min-w-0 flex-1">
          <SectionHeading
            title={pricing.title}
            lead={pricing.lead}
            titleClassName="lg:max-w-[620px]"
            leadClassName="lg:max-w-[600px]"
          />
          <Compare compare={pricing.compare} />
        </Reveal>

        <Reveal delay={0.12} className="w-full lg:w-[520px] lg:shrink-0">
          <div className="flex flex-col items-start rounded-[18px] border-2 border-blue bg-white p-6 shadow-[0_20px_50px_rgba(21,87,230,0.16)] lg:rounded-[22px] lg:p-11 lg:shadow-[0_30px_70px_rgba(21,87,230,0.18)]">
            <p className="rounded-full bg-pill px-3.5 py-[7px] text-[13px] font-bold text-blue">
              {card.pill}
            </p>
            <p className="mt-4 flex flex-wrap items-baseline gap-x-2.5 lg:mt-5">
              <span className="text-[44px] leading-none font-extrabold tracking-[-0.03em] lg:text-[60px]">{card.price}</span>
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

// APG vs retainer recruiters. Up to 1279px: each row is a label over two cells. From 1280px: a three-column table
// (at 1024–1279px the column next to the price card is too narrow for three columns, in Spanish most of all).
// The APG column is tinted blue the whole way down, so it reads as the one to pick.
function Compare({ compare }: { compare: PricingCopy["compare"] }) {
  return (
    <div className="mt-8 overflow-hidden rounded-[16px] border border-line bg-white lg:mt-[34px]">
      <div className="grid grid-cols-2 text-[13px] font-bold tracking-[0.5px] uppercase xl:grid-cols-[0.85fr_1fr_1fr]">
        <span className="hidden xl:block" />
        <span className="px-4 py-3.5 text-subtle xl:px-5">{compare.them}</span>
        <span className="bg-pill px-4 py-3.5 text-blue xl:px-5">{compare.us}</span>
      </div>
      <ul>
        {compare.rows.map((r) => (
          <li key={r.label} className="grid grid-cols-2 border-t border-line text-[14.5px] leading-[1.45] xl:grid-cols-[0.85fr_1fr_1fr] xl:text-[15px]">
            <span className="px-4 pt-3.5 text-[12.5px] font-bold tracking-[0.4px] text-label uppercase xl:py-4 xl:pl-5 xl:text-[14px] xl:tracking-normal xl:normal-case">
              {r.label}
            </span>
            {/* phones: the label sits in the left half and this keeps the APG tint running through its row,
                so the blue column has no white gaps */}
            <span aria-hidden="true" className="bg-pill xl:hidden" />
            <span className="flex items-start gap-2 px-4 pt-1.5 pb-3.5 text-muted xl:py-4 xl:pl-5">
              <Svg src="/apg/compare-no.svg" w={18} h={18} className="mt-px" />
              {r.them}
            </span>
            <span className="flex items-start gap-2 bg-pill px-4 pt-1.5 pb-3.5 font-semibold text-navy xl:py-4 xl:pl-5">
              <Svg src="/apg/compare-yes.svg" w={18} h={18} className="mt-px" />
              {r.us}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
