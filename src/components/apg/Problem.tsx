import { problem } from "@/content/apg";
import { Reveal } from "../Reveal";
import { SectionHeading, Svg } from "./ui";

// One panel with divided rows instead of four identical cards
export function Problem() {
  return (
    <section className="py-16 lg:py-[110px]">
      <div className="container-apg flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-20">
        <Reveal className="lg:w-[480px] lg:shrink-0">
          <SectionHeading
            eyebrow={problem.eyebrow}
            title={problem.title}
            lead={problem.lead}
            titleClassName="lg:max-w-[480px]"
            leadClassName="lg:max-w-[460px]"
          />
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 flex-1">
          <ul className="overflow-hidden rounded-[18px] border border-line-soft bg-surface">
            {problem.pains.map((p, i) => (
              <li
                key={p.title}
                className={`flex gap-4 px-6 py-6 lg:gap-6 lg:px-9 lg:py-7 ${i > 0 ? "border-t border-line-soft" : ""}`}
              >
                <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-danger-soft lg:size-11">
                  <Svg src={p.icon.src} w={p.icon.w} h={p.icon.h} className="scale-90" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[17px] font-bold lg:text-[19px]">{p.title}</h3>
                  <p className="mt-1 text-[15px] leading-[1.6] text-muted lg:text-[15.5px]">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
