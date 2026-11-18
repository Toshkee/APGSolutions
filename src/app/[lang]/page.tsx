import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Benefits } from "@/components/apg/Benefits";
import { CoverageMap } from "@/components/apg/CoverageMap";
import { Cta } from "@/components/apg/Cta";
import { DriverTypes } from "@/components/apg/DriverTypes";
import { Faq } from "@/components/apg/Faq";
import { Hero } from "@/components/apg/Hero";
import { HowItWorks } from "@/components/apg/HowItWorks";
import { Pricing } from "@/components/apg/Pricing";
import { Problem } from "@/components/apg/Problem";
import { Stats } from "@/components/apg/Stats";
import { Team } from "@/components/apg/Team";
import { TwoSides } from "@/components/apg/TwoSides";
import { getDictionary } from "@/content";
import { alternates, hasLocale } from "@/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return { alternates: alternates(lang, "/") };
}

// Problem → who it's for → how it works → why us → where (US map) → price → people → questions → form
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <main id="top">
      <Hero t={t.hero} />
      <Stats t={t.stats} />
      <DriverTypes t={t.driverTypes} />
      <Problem t={t.problem} />
      <TwoSides t={t.twoSides} />
      <HowItWorks t={t.howItWorks} />
      <Benefits t={t.benefits} />
      <CoverageMap t={t.coverage} />
      <Pricing t={t.pricing} />
      <Team variant="preview" lang={lang} t={t.team} />
      <Faq t={t.faq} />
      <Cta lang={lang} t={t.cta} />
    </main>
  );
}
