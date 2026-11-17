import type { Metadata, Viewport } from "next";
import { Inter, Saira } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { Footer } from "@/components/apg/Footer";
import { MobileCtaBar } from "@/components/apg/MobileCtaBar";
import { Nav } from "@/components/apg/Nav";
import { site } from "@/content/apg";
import "./globals.css";

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

export const metadata: Metadata = {
  // Makes the share preview image (app/opengraph-image.jpg) a full URL that WhatsApp, iMessage etc. can load
  metadataBase: new URL(site.url),
  // Large preview card on X; it uses the Open Graph image
  twitter: { card: "summary_large_image" },
  // No title/description here on purpose: link previews then fall back to each page's own title and description
  openGraph: { type: "website", siteName: site.name, locale: "en_US" },
  title: {
    default: `${site.name} | Pay-Per-Driver CDL Recruiting`,
    template: `%s | ${site.name}`,
  },
  description:
    "Only pay when we put a driver in your seat. Pre-screened, road-ready CDL drivers for carriers nationwide. No retainers, no monthly fees.",
};

export const viewport: Viewport = {
  themeColor: "#061232",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-scroll-behavior: Next 16 no longer pauses the CSS smooth scroll on page changes, so without it a new page
    // opened from far down would visibly scroll up to the top. In-page "#section" jumps stay smooth.
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${saira.variable} antialiased`}>
      <body>
        <MotionProvider>
          <Nav />
          {children}
          <Footer />
          <MobileCtaBar />
        </MotionProvider>
      </body>
    </html>
  );
}
