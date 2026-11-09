import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { site } from "@/content/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: `${site.name} | CDL Driver Recruiting in Nashville, TN`,
  description:
    "Easy Motion Recruiting connects trucking companies with qualified, verified CDL drivers. Based in Nashville, Tennessee.",
};

export const viewport: Viewport = {
  themeColor: "#071e5c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${instrumentSerif.variable} antialiased`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
