import Image, { type StaticImageData } from "next/image";
import type { Dictionary } from "@/content";
import { Reveal } from "../Reveal";
import { Button, CheckItem, SectionHeading } from "./ui";
// Placeholder photos (Unsplash, free license) until the client sends their own
import carrierTruck from "../../../public/photos/carrier-truck.jpg";
import driverPhoto from "../../../public/photos/driver.jpg";

type Side = Dictionary["twoSides"]["carriers"];

type CardProps = {
  side: Side;
  dark: boolean;
  id: string;
  href: string;
  photo: StaticImageData;
  // Where to crop the photo inside the 16:9 frame
  focus: string;
};

function SideCard({ side, dark, id, href, photo, focus }: CardProps) {
  return (
    <article
      id={id}
      className={`group flex h-full scroll-mt-(--nav-h) flex-col overflow-hidden rounded-[18px] transition duration-300 hover:-translate-y-1 lg:rounded-[20px] ${
        dark
          ? "bg-navy text-white hover:shadow-[0_24px_50px_-24px_rgba(11,27,63,0.7)]"
          : "border border-line bg-white text-navy hover:border-blue/30 hover:shadow-[0_24px_50px_-28px_rgba(21,87,230,0.45)]"
      }`}
    >
      {/* Photo on top, fading into the card color; it zooms in slightly on hover */}
      <div className="relative aspect-[16/9] overflow-hidden lg:aspect-[2/1]">
        <Image
          src={photo}
          alt={side.photoAlt}
          fill
          sizes="(width >= 64rem) 600px, 100vw"
          placeholder="blur"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ objectPosition: focus }}
        />
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 bottom-0 h-1/2 ${
            dark ? "bg-[linear-gradient(180deg,transparent,#0b1b3f)]" : "bg-[linear-gradient(180deg,transparent,#ffffff)]"
          }`}
        />
      </div>

      <div className="flex flex-1 flex-col items-start px-6 pb-6 lg:px-12 lg:pb-12">
        <h3 className="-mt-1 text-[26px] leading-[1.15] font-bold tracking-[-0.02em] lg:text-[36px]">{side.title}</h3>
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
          {/* Less side padding under 360px so the longer Spanish labels fit the card */}
          <Button href={href} variant={dark ? "primary" : "dark"} className="w-full max-[359px]:px-5 sm:w-auto">
            {side.cta}
          </Button>
        </div>
      </div>
    </article>
  );
}

export function TwoSides({ t: twoSides }: { t: Dictionary["twoSides"] }) {
  return (
    <section id="solutions" className="bg-surface py-16 lg:py-[110px]">
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
            <SideCard
              side={twoSides.carriers}
              dark
              id="carriers"
              href="#get-started"
              photo={carrierTruck}
              focus="50% 60%"
            />
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <SideCard
              side={twoSides.drivers}
              dark={false}
              id="drivers"
              href="#apply"
              photo={driverPhoto}
              focus="50% 64%"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
