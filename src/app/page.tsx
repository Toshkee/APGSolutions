import { Benefits } from "@/components/apg/Benefits";
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

export default function Home() {
  return (
    <>
      <main id="top">
        <Hero />
        <Stats />
        <Problem />
        <TwoSides />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <DriverTypes />
        <Team variant="preview" />
        <Faq />
        <Cta />
      </main>
    </>
  );
}
