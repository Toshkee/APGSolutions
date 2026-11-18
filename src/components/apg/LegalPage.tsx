import type { LegalDoc } from "@/content/en/legal";

// Shared layout for the Privacy Policy and Terms of Service pages: short navy header, then a narrow text column
export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <main id="top">
      <section className="bg-navy pt-(--nav-h)">
        <div className="container-apg py-12 lg:py-[72px]">
          <h1 className="text-[36px] leading-[1.1] font-bold tracking-[-0.025em] text-white lg:text-[52px]">{doc.title}</h1>
          <p className="mt-3 text-[15px] text-on-dark lg:mt-4 lg:text-base">{doc.updated}</p>
        </div>
      </section>

      <section className="py-12 lg:py-[88px]">
        <div className="container-apg">
          <article className="flex max-w-[760px] flex-col gap-9 text-base leading-[1.7] text-body lg:gap-11 lg:text-[17px]">
            <div className="flex flex-col gap-4">
              {doc.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {doc.sections.map((s) => (
              <section key={s.heading} className="flex flex-col gap-3.5">
                <h2 className="text-[22px] leading-[1.25] font-bold tracking-[-0.015em] text-navy lg:text-[26px]">{s.heading}</h2>
                {s.paragraphs?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.list && (
                  <ul className="flex flex-col gap-2.5">
                    {s.list.map((item) => (
                      <li key={item} className="relative pl-5">
                        <span aria-hidden="true" className="absolute top-[0.7em] left-0 size-1.5 rounded-full bg-amber-deep" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {s.after?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
