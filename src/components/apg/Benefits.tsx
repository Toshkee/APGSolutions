"use client";

import { benefits } from "@/content/apg";
import { Reveal } from "../Reveal";
import { AnimatedIcon, useIconPlay, type IconName } from "./AnimatedIcon";
import { SectionHeading } from "./ui";

// Open feature list with top rules instead of six boxed cards; icons sit on a blue tint, fill in on hover and
// play a small animation when they scroll into view and on hover
export function Benefits() {
  return (
    <section className="py-16 lg:py-[110px]">
      <div className="container-apg">
        <Reveal>
          <SectionHeading title={benefits.title} lead={benefits.lead} />
        </Reveal>
        <ul className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-y-12">
          {benefits.items.map((b, i) => (
            <Benefit key={b.title} index={i} {...b} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Benefit({ title, text, icon, index }: { title: string; text: string; icon: string; index: number }) {
  // wait for the item's own fade-in before the icon moves
  const { ref, controls, play } = useIconPlay(0.35 + 0.05 * (index % 3));
  return (
    <li ref={ref} onMouseEnter={play}>
      <Reveal delay={0.05 * (index % 3)} className="group border-t-2 border-line pt-6 transition-colors duration-300 hover:border-blue">
        <div className="flex items-center gap-3.5">
          <span className="grid size-12 shrink-0 place-items-center rounded-[14px] bg-pill text-blue ring-1 ring-blue/10 transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-blue group-hover:text-white group-hover:shadow-[0_10px_20px_-8px_rgba(21,87,230,0.6)]">
            <AnimatedIcon name={icon as IconName} size={24} controls={controls} />
          </span>
          <h3 className="text-[19px] font-bold transition-colors duration-300 group-hover:text-blue lg:text-[21px]">{title}</h3>
        </div>
        <p className="mt-3.5 text-[15.5px] leading-[1.6] text-muted">{text}</p>
      </Reveal>
    </li>
  );
}
