import { stats } from "@/content/apg";
import { Reveal } from "../Reveal";

export function Stats() {
  return (
    <section
      aria-label="APG Solutions in numbers"
      className="bg-surface py-8 lg:bg-[linear-gradient(180deg,#0b1b3f_0%,#0b1b3f_40%,#ffffff_40.01%,#ffffff_100%)] lg:py-0"
    >
      <div className="container-apg">
        <Reveal y={20}>
          <dl className="grid grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(11,27,63,0.1)] lg:grid-cols-4 lg:rounded-[18px] lg:shadow-[0_20px_60px_rgba(11,27,63,0.14)]">
            {stats.map((s, i) => (
              <div
                key={s.value}
                className={`flex flex-col-reverse gap-2.5 border-line-soft px-5 py-[22px] lg:border-b-0 lg:px-[34px] lg:py-9 ${
                  i % 2 === 0 ? "border-r" : ""
                } ${i < 2 ? "border-b" : ""} ${i < 3 ? "lg:border-r" : "lg:border-r-0"}`}
              >
                <dt className="text-[15px] font-medium text-body">
                  <span className="lg:hidden">{s.labelShort}</span>
                  <span className="hidden lg:inline">{s.label}</span>
                </dt>
                <dd className="font-display text-[32px] leading-none font-extrabold text-blue italic lg:text-[46px]">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
