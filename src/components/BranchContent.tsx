import Link from "next/link";
import clsx from "clsx";
import type { Branch } from "@/lib/branches";
import { REVIEWS } from "@/lib/reviews";
import { InView } from "./Reveal";
import { FaqMenu } from "./FaqMenu";

const H2 = ({ children, accent }: { children: React.ReactNode; accent: string }) => (
  <h2 className="display text-4xl text-ink md:text-6xl">
    {children}
    <span className={accent}>.</span>
  </h2>
);

export const BranchContent = ({ b }: { b: Branch }) => {
  const accent = b.key === "verhuizen" ? "text-brand" : "text-coral";
  return (
    <div id="meer" className="scroll-mt-16 bg-white">
      <section className="container py-20 md:py-28">
        <InView><p className={clsx("kicker", accent)}>Wat we doen</p></InView>
        <InView><H2 accent={accent}>Onze diensten</H2></InView>
        <div className="mt-12 grid border-t border-ink/10 md:grid-cols-2 lg:grid-cols-3">
          {b.services.map((s, i) => (
            <InView key={s.title} delay={(i % 3) * 0.06}>
              <div className="group h-full border-b border-ink/10 py-7 md:pr-10">
                <span className={clsx("text-xs font-medium tracking-[0.2em]", accent)}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-2xl font-bold italic tracking-tight text-ink transition group-hover:translate-x-1">{s.title}</h3>
                <p className="mt-1 text-ink/60">{s.text}</p>
              </div>
            </InView>
          ))}
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container">
          <InView><p className={clsx("kicker", accent)}>Zo werkt het</p></InView>
          <InView><H2 accent={accent}>In drie stappen</H2></InView>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {b.steps.map((s, i) => (
              <InView key={s.title} delay={i * 0.1}>
                <li>
                  <span className={clsx("display block text-7xl", accent)}>0{i + 1}</span>
                  <h3 className="mt-2 text-2xl font-bold italic text-ink">{s.title}</h3>
                  <p className="mt-1 text-ink/60">{s.text}</p>
                </li>
              </InView>
            ))}
          </ol>
        </div>
      </section>

      <section className="container grid gap-12 py-20 md:grid-cols-2 md:py-28">
        <div>
          <InView><p className={clsx("kicker", accent)}>Waarom WE MOVE</p></InView>
          <InView><H2 accent={accent}>Gewoon goed geregeld</H2></InView>
          <ul className="mt-8 space-y-4">
            {b.why.map((w) => (
              <InView key={w}>
                <li className="flex items-center gap-4 text-lg text-ink/80">
                  <span className={clsx("h-[3px] w-6 rounded-full", b.colorClass)} />
                  {w}
                </li>
              </InView>
            ))}
          </ul>
          {REVIEWS.length > 0 && (
            <div className="mt-12 space-y-6">
              {REVIEWS.slice(0, 2).map((r) => (
                <figure key={r.name + r.text}>
                  <blockquote className="text-lg italic text-ink">“{r.text}”</blockquote>
                  <figcaption className="mt-1 text-sm text-ink/50">{r.name}{r.source ? ` · ${r.source}` : ""}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
        <div>
          <InView><p className={clsx("kicker", accent)}>Vragen</p></InView>
          <div className="mt-6">
            <FaqMenu items={b.faq} color={b.color} />
          </div>
        </div>
      </section>

      <section className={clsx("text-white", b.colorClass)}>
        <div className="container flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
          <h2 className="display text-4xl md:text-6xl">Binnen 24 uur<br />een offerte.</h2>
          <Link
            href={`/contact?type=${b.key}`}
            className={clsx("btn", b.key === "verhuizen" ? "btn-coral" : "")}
          >
            {b.cta}
          </Link>
        </div>
      </section>
    </div>
  );
};
