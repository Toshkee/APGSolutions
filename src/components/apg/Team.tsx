import Image from "next/image";
import Link from "next/link";
import { team } from "@/content/apg";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./ui";

type Member = (typeof team.members)[number];

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

function MemberCard({ m, withBio }: { m: Member; withBio: boolean }) {
  return (
    // With bios on phones the card lies flat (avatar left, text right) so four people don't take four screens
    <article className={`group h-full overflow-hidden rounded-[18px] border ${withBio ? "flex sm:block" : ""} border-line bg-white transition duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_24px_50px_-28px_rgba(21,87,230,0.45)]`}>
      <div
        className={`relative grid place-items-center overflow-hidden ${
          withBio ? "w-[108px] shrink-0 sm:aspect-[4/3] sm:w-auto" : "aspect-[4/3]"
        } bg-[linear-gradient(147.84deg,#061232_0%,#0b2463_71.43%)]`}
      >
        {m.photo ? (
          <Image
            src={m.photo}
            alt={m.name}
            fill
            sizes="(width >= 64rem) 280px, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // Initials until real photos arrive
          <>
            <span aria-hidden="true" className="absolute -top-1/3 -right-1/4 size-3/4 rounded-full bg-blue/25 blur-2xl" />
            <span aria-hidden="true" className="relative text-[34px] font-extrabold tracking-[-0.03em] text-white/90 lg:text-[44px]">
              {initials(m.name)}
            </span>
          </>
        )}
      </div>
      <div className="min-w-0 p-4 lg:p-6">
        <h3 className="text-[16px] font-bold lg:text-[19px]">{m.name}</h3>
        <p className="mt-0.5 text-[13px] font-semibold text-blue lg:text-[15px]">{m.role}</p>
        {withBio && <p className="mt-2 text-[14.5px] leading-[1.55] text-muted sm:mt-3 sm:text-[15px] sm:leading-[1.6]">{m.bio}</p>}
      </div>
    </article>
  );
}

// "preview" = short version on the home page with a link to About; "full" = About page, with bios
export function Team({ variant }: { variant: "preview" | "full" }) {
  const full = variant === "full";
  return (
    <section id={full ? "team" : undefined} className={`${full ? "bg-surface py-16 lg:py-[110px]" : "pt-16 pb-4 lg:pt-[110px] lg:pb-6"}`}>
      <div className="container-apg">
        <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading title={team.title} lead={team.lead} />
          {!full && (
            <Link href="/about#team" className="hidden shrink-0 text-base font-bold text-blue transition-colors hover:text-blue-hover lg:block">
              {team.previewCta}
            </Link>
          )}
        </Reveal>
        <ul className={`mt-8 grid gap-3.5 lg:mt-14 lg:grid-cols-4 lg:gap-7 ${full ? "sm:grid-cols-2" : "grid-cols-2"}`}>
          {team.members.map((m, i) => (
            <li key={m.name}>
              <Reveal delay={0.08 * i} className="h-full">
                <MemberCard m={m} withBio={full} />
              </Reveal>
            </li>
          ))}
        </ul>
        {!full && (
          <Link href="/about#team" className="mt-6 inline-block text-base font-bold text-blue lg:hidden">
            {team.previewCta}
          </Link>
        )}
      </div>
    </section>
  );
}
