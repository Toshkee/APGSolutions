import type { Dictionary } from "@/content";
import { ParallaxImage } from "../ParallaxImage";
import { Reveal } from "../Reveal";
import { SectionHeading, Svg } from "./ui";
import idleTrailers from "../../../public/photos/idle-trailers.jpg";

// One icon per pain, in the same order as problem.pains
const painIcons = [
  { src: "/apg/pain-idle-trucks.svg", w: 22.1833, h: 22 },
  { src: "/apg/pain-unqualified.svg", w: 22, h: 22 },
  { src: "/apg/pain-retainers.svg", w: 22, h: 22.3667 },
  { src: "/apg/pain-turnover.svg", w: 22, h: 22 },
];

// Full-width dark band over a photo of parked trailers: the one "problem" moment on the page,
// so it looks different from the light text-and-list sections around it
export function Problem({ t: problem }: { t: Dictionary["problem"] }) {
  return (
    <section className="relative isolate overflow-hidden bg-deep py-16 lg:py-[120px]">
      {/* Placeholder photo (Unsplash, free license): aerial view of parked trailers */}
      <ParallaxImage src={idleTrailers} sizes="100vw" className="opacity-45" strength={16} />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,18,50,0.92)_0%,rgba(6,18,50,0.7)_45%,rgba(6,18,50,0.95)_100%)]"
      />

      <div className="container-apg relative">
        <Reveal>
          <SectionHeading
            tone="dark"
            title={problem.title}
            lead={problem.lead}
            titleClassName="lg:max-w-[720px]"
            leadClassName="lg:max-w-[600px]"
          />
        </Reveal>

        <ul className="mt-9 grid gap-3.5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {problem.pains.map((p, i) => (
            <li key={p.title}>
              {/* Reveal (scroll fade-in) and the hover lift sit on separate elements: if one element had both,
                  Safari would replay the CSS transition after the fade-in and the card would blink twice.
                  The frosted look is a 70% navy tint, not backdrop-blur: browsers (iPhone Safari most of all) skip the
                  blur while the card slides in and switch it on at the end, so the card visibly changed once settled */}
              <Reveal delay={0.07 * i} className="h-full">
                <div className="group flex h-full gap-4 rounded-[18px] border border-white/10 bg-[rgba(40,51,78,0.7)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#e5484d]/40 hover:bg-[rgba(48,59,86,0.7)] sm:block lg:p-7">
                  {/* icon beside the text on phones, above it from sm up */}
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#e5484d]/15 ring-1 ring-[#e5484d]/25 transition-transform duration-300 group-hover:scale-110 sm:size-11">
                    <Svg src={painIcons[i].src} w={painIcons[i].w} h={painIcons[i].h} className="scale-90" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[17px] font-bold text-white sm:mt-4 lg:mt-5 lg:text-[19px]">{p.title}</h3>
                    <p className="mt-1 text-[15px] leading-[1.6] text-on-dark-muted sm:mt-1.5">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
