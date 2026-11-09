import { twoSides } from "@/content/apg";
import { Reveal } from "../Reveal";
import { Button, CheckItem, SectionHeading } from "./ui";

type Side = typeof twoSides.carriers;

function SideCard({ side, dark, id, href }: { side: Side; dark: boolean; id: string; href: string }) {
  return (
    <article
      id={id}
      className={`flex h-full scroll-mt-(--nav-h) flex-col items-start rounded-[18px] p-6 lg:rounded-[20px] lg:p-12 ${
        dark ? "bg-navy text-white" : "border border-line bg-white text-navy"
      }`}
    >
      <h3 className="text-[26px] leading-[1.15] font-bold tracking-[-0.02em] lg:text-[36px]">{side.title}</h3>
      <p className={`mt-3 text-[15px] leading-[1.6] lg:mt-3.5 lg:text-[17px] ${dark ? "text-on-dark-muted" : "text-muted"}`}>{side.text}</p>
      <ul className="mt-5 w-full text-[15px] lg:mt-[26px] lg:text-base">
        {side.items.map((item) => (
          <li key={item} className="border-t border-[rgba(127,140,170,0.25)] py-2.5 lg:py-[11px]">
            <CheckItem tone={dark ? "dark" : "light"} className={dark ? "text-white" : "text-navy"}>
              {item}
            </CheckItem>
          </li>
        ))}
      </ul>
      <div className="mt-auto w-full pt-6 lg:pt-[34px]">
        <Button href={href} variant={dark ? "primary" : "dark"} className="w-full sm:w-auto">
          {side.cta}
        </Button>
      </div>
    </article>
  );
}

export function TwoSides() {
  return (
    <section className="bg-surface py-16 lg:py-[110px]">
      <div className="container-apg">
        <Reveal>
          <SectionHeading
            align="center"
            title={twoSides.title}
            lead={twoSides.lead}
            leadClassName="max-w-[560px]"
          />
        </Reveal>
        <div className="mt-7 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-7">
          <Reveal className="h-full">
            <SideCard side={twoSides.carriers} dark id="carriers" href="#get-started" />
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <SideCard side={twoSides.drivers} dark={false} id="drivers" href="#apply" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
