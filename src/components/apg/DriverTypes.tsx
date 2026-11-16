import { driverTypes } from "@/content/apg";
import { Svg } from "./ui";

function Chips({ copy = false }: { copy?: boolean }) {
  return (
    <ul aria-hidden={copy || undefined} className={`flex shrink-0 gap-2.5 pr-2.5 lg:gap-3 lg:pr-3 ${copy ? "marquee-copy" : ""}`}>
      {driverTypes.types.map((t) => (
        <li
          key={t}
          className="flex items-center gap-2 rounded-full border border-line-input bg-white px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors duration-200 hover:border-blue/50 hover:text-blue lg:gap-2.5 lg:px-5 lg:py-3 lg:text-[15px]"
        >
          <Svg src="/apg/chip-dot.svg" w={8} h={8} />
          {t}
        </li>
      ))}
    </ul>
  );
}

// A slim ticker instead of a full section: the list slides past on its own and pauses on hover
export function DriverTypes() {
  return (
    <section aria-labelledby="driver-types-title" className="py-10 lg:py-14">
      <div className="container-apg flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
        <h2 id="driver-types-title" className="shrink-0 text-center text-[17px] font-bold lg:text-left lg:text-[19px]">
          {driverTypes.title}
        </h2>
        <div className="marquee -mx-6 min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] md:mx-0">
          <div className="marquee-track flex w-max">
            <Chips />
            <Chips copy />
          </div>
        </div>
      </div>
    </section>
  );
}
