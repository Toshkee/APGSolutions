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
    <html lang="en" className={`${inter.variable} ${saira.variable} antialiased`}>
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
