import { benefits } from "@/content/apg";
import { Reveal } from "../Reveal";
import { SectionHeading, Svg } from "./ui";

// Open feature list with top rules instead of six boxed cards
export function Benefits() {
  return (
    <section className="py-16 lg:py-[110px]">
      <div className="container-apg">
        <Reveal>
          <SectionHeading eyebrow={benefits.eyebrow} title={benefits.title} lead={benefits.lead} />
        </Reveal>
        <ul className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-y-12">
          {benefits.items.map((b, i) => (
            <li key={b.title}>
              <Reveal delay={0.06 * (i % 3)} className="group border-t-2 border-line pt-6 transition-colors duration-300 hover:border-blue">
                <div className="flex items-center gap-3.5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-[12px] bg-navy transition-colors duration-300 group-hover:bg-blue">
                    <Svg src={b.icon.src} w={b.icon.w} h={b.icon.h} className="scale-[0.85]" />
                  </span>
                  <h3 className="text-[19px] font-bold lg:text-[21px]">{b.title}</h3>
                </div>
                <p className="mt-3.5 text-[15.5px] leading-[1.6] text-muted">{b.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
