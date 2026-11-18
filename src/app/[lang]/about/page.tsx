import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { Team } from "@/components/apg/Team";
import { SectionHeading, Svg } from "@/components/apg/ui";
import { getDictionary } from "@/content";
import { alternates, hasLocale } from "@/i18n";
import poster from "../../../../public/media/nashville-hero-poster.jpg";
// Placeholder photo (Unsplash, free license): semi-truck on the highway at dusk
import highwayDusk from "../../../../public/photos/highway-dusk.jpg";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { about } = getDictionary(lang);
  return { title: about.metaTitle, description: about.metaDescription, alternates: alternates(lang, "/about") };
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { about, team } = getDictionary(lang);

  return (
    <main id="top">
      {/* Page header: same Nashville still as the home hero, darker */}
      <section className="relative overflow-hidden bg-navy pt-(--nav-h)">
        <Image src={poster} alt="" aria-hidden="true" fill preload sizes="100vw" className="object-cover object-[60%_center] opacity-35" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,18,50,0.95)_0%,rgba(10,31,85,0.75)_55%,rgba(11,36,99,0.35)_100%)]"
        />
        <div className="container-apg relative py-14 lg:py-[110px]">
          <Reveal className="flex max-w-[680px] flex-col items-start">
            <p className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-[7px] text-[12.5px] font-semibold text-white backdrop-blur-sm lg:gap-2.5 lg:px-4 lg:py-[9px] lg:text-sm">
              <Svg src="/apg/badge-dot.svg" w={8} h={8} />
              {about.badge}
            </p>
            <h1 className="display mt-[18px] text-[42px] leading-[0.98] text-white lg:mt-[26px] lg:text-[72px] lg:tracking-[-0.5px]">
              {about.title}
              <span className="text-amber">{about.titleAccent}</span>
            </h1>
            <p className="mt-4 text-base leading-[1.6] text-on-dark lg:mt-6 lg:max-w-[600px] lg:text-xl">{about.lead}</p>
          </Reveal>
        </div>
      </section>

      {/* Short company story next to a trucking photo */}
      <section className="py-16 lg:py-[110px]">
        <div className="container-apg flex flex-col gap-9 lg:flex-row lg:items-center lg:gap-20">
          <Reveal className="lg:w-[520px] lg:shrink-0">
            <SectionHeading title={about.story.title} titleClassName="lg:max-w-[520px]" />
            <div className="mt-5 flex flex-col gap-4 text-[17px] leading-[1.65] text-body lg:mt-7 lg:text-[18px]">
              {about.story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="min-w-0 flex-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] shadow-[0_24px_60px_-30px_rgba(11,27,63,0.55)] lg:rounded-[22px]">
              <Image
                src={highwayDusk}
                alt={about.photoAlt}
                fill
                sizes="(width >= 64rem) 600px, 100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Team variant="full" lang={lang} t={team} />
    </main>
  );
}
