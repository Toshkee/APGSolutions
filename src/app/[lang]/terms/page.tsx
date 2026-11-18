import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/apg/LegalPage";
import { getDictionary } from "@/content";
import { alternates, hasLocale } from "@/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/terms">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { terms } = getDictionary(lang);
  return { title: terms.metaTitle, description: terms.metaDescription, alternates: alternates(lang, "/terms") };
}

export default async function TermsPage({ params }: PageProps<"/[lang]/terms">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <LegalPage doc={getDictionary(lang).terms} />;
}
