import type { Metadata, Viewport } from "next";
import { Inter, Saira } from "next/font/google";
import { notFound } from "next/navigation";
import { lang as rootLang } from "next/root-params";
import { MotionProvider } from "@/components/MotionProvider";
import { Footer } from "@/components/apg/Footer";
import { MobileCtaBar } from "@/components/apg/MobileCtaBar";
import { Nav } from "@/components/apg/Nav";
import { getDictionary } from "@/content";
import { site } from "@/content/site";
import { hasLocale, htmlLang, locales, ogLocale } from "@/i18n";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: "800",
  style: "italic",
});

// Both languages are built ahead of time
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// The language is read with next/root-params rather than `params`: awaiting `params` here would also wait for the
// catch-all 404 route's unknown segments and leave its page empty until JavaScript loads.
export async function generateMetadata(): Promise<Metadata> {
  const lang = await rootLang();
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return {
    // Makes the share preview image a full URL that WhatsApp, iMessage etc. can load
    metadataBase: new URL(site.url),
    // Large preview card on X; it uses the Open Graph image
    twitter: { card: "summary_large_image" },
    // No title/description here on purpose: link previews then fall back to each page's own title and description
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: ogLocale[lang],
      images: [{ url: meta.shareImage, width: 1200, height: 630, type: "image/jpeg", alt: meta.shareImageAlt }],
    },
    title: {
      default: meta.title,
      template: `%s | ${site.name}`,
    },
    description: meta.description,
  };
}

export const viewport: Viewport = {
  themeColor: "#061232",
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const lang = await rootLang();
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    // data-scroll-behavior: Next 16 no longer pauses the CSS smooth scroll on page changes, so without it a new page
    // opened from far down would visibly scroll up to the top. In-page "#section" jumps stay smooth.
    <html lang={htmlLang[lang]} data-scroll-behavior="smooth" className={`${inter.variable} ${saira.variable} antialiased`}>
      <body>
        <MotionProvider>
          <Nav lang={lang} links={t.navLinks} t={t.nav} />
          {children}
          <Footer lang={lang} t={t.footer} hours={t.hours} />
          <MobileCtaBar lang={lang} t={t.mobileCta} />
        </MotionProvider>
      </body>
    </html>
  );
}
