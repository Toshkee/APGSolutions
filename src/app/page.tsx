import { Benefits } from "@/components/apg/Benefits";
import { Cta } from "@/components/apg/Cta";
import { DriverTypes } from "@/components/apg/DriverTypes";
import { Faq } from "@/components/apg/Faq";
import { Footer } from "@/components/apg/Footer";
import { Hero } from "@/components/apg/Hero";
import { HowItWorks } from "@/components/apg/HowItWorks";
import { Nav } from "@/components/apg/Nav";
import { Pricing } from "@/components/apg/Pricing";
import { Problem } from "@/components/apg/Problem";
import { Stats } from "@/components/apg/Stats";
import { TwoSides } from "@/components/apg/TwoSides";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Stats />
        <Problem />
        <TwoSides />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <DriverTypes />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
