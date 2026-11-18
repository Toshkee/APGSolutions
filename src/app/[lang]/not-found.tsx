import type { Metadata } from "next";
import Image from "next/image";
import { lang as rootLang } from "next/root-params";
import { Button, Svg } from "@/components/apg/ui";
import { getDictionary } from "@/content";
import { defaultLocale, hasLocale, localePath } from "@/i18n";
import poster from "../../../public/media/nashville-hero-poster.jpg";

// not-found pages get no params, so the language comes from next/root-params
async function currentLang() {
  const lang = await rootLang();
  return hasLocale(lang) ? lang : defaultLocale;
}

export async function generateMetadata(): Promise<Metadata> {
  return { title: getDictionary(await currentLang()).notFound.metaTitle };
}

// Shown for any URL that doesn't exist. Same Nashville header as the About page, tall enough that the
// footer doesn't sit right under the message.
export default async function NotFound() {
  const lang = await currentLang();
  const { notFound } = getDictionary(lang);

  return (
    <main id="top">
      <section className="relative flex min-h-[calc(100svh-120px)] items-center overflow-hidden bg-navy pt-(--nav-h)">
        <Image src={poster} alt="" aria-hidden="true" fill sizes="100vw" className="object-cover object-[60%_center] opacity-35" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,18,50,0.95)_0%,rgba(10,31,85,0.75)_55%,rgba(11,36,99,0.35)_100%)]"
        />
        <div className="container-apg relative py-16 lg:py-[110px]">
          <div className="flex max-w-[620px] flex-col items-start">
            <p className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-[7px] text-[12.5px] font-semibold text-white lg:gap-2.5 lg:px-4 lg:py-[9px] lg:text-sm">
              <Svg src="/apg/badge-dot.svg" w={8} h={8} />
              {notFound.badge}
            </p>
            <h1 className="mt-[18px] text-[44px] leading-[1.05] font-bold tracking-[-0.025em] text-white lg:mt-6 lg:text-[64px]">
              {notFound.title}
            </h1>
            <p className="mt-4 text-base leading-[1.6] text-pretty text-on-dark lg:mt-5 lg:text-xl">{notFound.lead}</p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-3.5">
              <Button href={localePath(lang, "/")}>{notFound.home}</Button>
              <Button href={localePath(lang, "/#get-started")} variant="outline">
                {notFound.cta}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
