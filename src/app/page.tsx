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

// Problem → who it's for → how it works → why us → where (US map) → price → people → questions → form
export default function Home() {
  return (
    <>
      <main id="top">
        <Hero />
        <Stats />
        <DriverTypes />
        <Problem />
        <TwoSides />
        <HowItWorks />
        <Benefits />
        <CoverageMap />
        <Pricing />
        <Team variant="preview" />
        <Faq />
        <Cta />
      </main>
    </>
  );
}
