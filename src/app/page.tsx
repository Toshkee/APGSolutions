import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Services />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
