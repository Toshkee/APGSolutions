import { driverTypes } from "@/content/apg";
import { Reveal } from "../Reveal";
import { SectionHeading, Svg } from "./ui";

export function DriverTypes() {
  return (
    <section className="bg-surface py-16 lg:py-[110px]">
      <div className="container-apg">
        <Reveal>
          <SectionHeading
            align="center"
            title={driverTypes.title}
            lead={driverTypes.lead}
            leadClassName="max-w-[560px]"
            leadDesktopOnly
          />
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-7 flex flex-wrap justify-center gap-2 lg:mt-11 lg:gap-3.5">
            {driverTypes.types.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 rounded-full border border-line-input bg-white px-3.5 py-2.5 text-sm font-semibold transition-colors hover:border-blue/40 lg:gap-2.5 lg:px-6 lg:py-3.5 lg:text-base"
              >
                <Svg src="/apg/chip-dot.svg" w={8} h={8} />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
