import { cta, site } from "@/content/apg";
import { Reveal } from "../Reveal";
import { LeadForm } from "./LeadForm";
import { CheckItem } from "./ui";

export function Cta() {
  return (
    <section id="get-started" className="pt-4 pb-16 lg:pt-[30px] lg:pb-[110px]">
      {/* "#apply" links land here too and switch the form to the driver tab */}
      <span id="apply" className="block scroll-mt-(--nav-h)" aria-hidden="true" />
      <div className="container-apg">
        <Reveal y={36}>
          <div className="flex flex-col gap-7 overflow-hidden rounded-[20px] bg-[linear-gradient(90deg,#0b2463_0%,#1557e6_100%)] px-[18px] pt-8 pb-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:rounded-[26px] lg:py-16 lg:pr-16 lg:pl-[72px]">
            <div className="flex flex-col gap-3 lg:max-w-[500px] lg:gap-5">
              <h2 className="display text-[30px] leading-[1.02] text-white lg:text-[54px]">{cta.title}</h2>
              <p className="text-[15px] text-cta-text lg:text-[19px]">
                <span className="lg:hidden">{cta.leadShort}</span>
                <span className="hidden lg:inline">{cta.lead}</span>
              </p>
              <ul className="hidden flex-col gap-3 text-white lg:flex">
                {cta.checks.map((c) => (
                  <li key={c}>
                    <CheckItem tone="dark">{c}</CheckItem>
                  </li>
                ))}
              </ul>
              <a href={site.phoneHref} className="hidden text-[17px] font-bold text-[#d4e0ff] transition-colors hover:text-amber lg:block">
                Prefer to talk? Call {site.phone}
              </a>
            </div>

            <LeadForm />

            <a href={site.phoneHref} className="text-center text-[15px] font-bold text-[#d4e0ff] lg:hidden">
              Prefer to talk? Call {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
