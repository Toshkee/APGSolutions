import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/apg/LegalPage";
import { getDictionary } from "@/content";
import { alternates, hasLocale } from "@/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { privacy } = getDictionary(lang);
  return { title: privacy.metaTitle, description: privacy.metaDescription, alternates: alternates(lang, "/privacy") };
}

export default async function PrivacyPage({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <LegalPage doc={getDictionary(lang).privacy} />;
}
