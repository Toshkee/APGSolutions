import Image from "next/image";
import riverfront from "@/assets/nashville-riverfront.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="py-[clamp(80px,10vw,128px)]">
      <div className="container-x grid items-center gap-[clamp(40px,6vw,96px)] md:grid-cols-2">
        <Reveal className="flex flex-col gap-5">
          <p className="eyebrow text-brand">About Us</p>
          <h2 className="mb-2 font-display text-[clamp(36px,4.6vw,56px)] leading-[1.05] text-brand">
            Built in Music City.
            <br />
            Moving drivers nationwide.
          </h2>
          <p className="max-w-[52ch] text-muted">
            Easy Motion Recruiting is a Nashville-based team that finds, screens and places professional CDL drivers
            with carriers across the United States.
          </p>
          <p className="max-w-[52ch] text-muted">
            We keep it simple: honest job details for drivers, qualified candidates for carriers, and one recruiter you
            can actually reach.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="overflow-hidden rounded-xl">
          {/* Placeholder photo (Pexels, free license) */}
          <Image
            src={riverfront}
            alt="Nashville skyline over the Cumberland River at sunset"
            placeholder="blur"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-4/3 max-h-[600px] w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.03] md:aspect-4/5"
          />
        </Reveal>
      </div>
    </section>
  );
}
