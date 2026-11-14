"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { BRANCHES, type BranchKey } from "@/lib/branches";
import { whatsappLink } from "@/lib/site";
import { InView } from "./Reveal";
import { Art } from "./Art";
import { GoogleReviews } from "./GoogleReviews";

// Scrollgedeelte onder de homepage: snel laten zien wat we doen, met een schakelaar
// tussen Verhuizen en Sjouwhulp & Hospitality (zelfde knoppen als het formulier).
export const HomeMore = () => {
  const [kind, setKind] = useState<BranchKey>("verhuizen");
  const b = BRANCHES[kind];
  const accent = kind === "verhuizen" ? "text-brand" : "text-coral";

  return (
    <div id="aanbod" className="scroll-mt-16 bg-white">
      {/* vertrouwensbalk */}
      <div className="border-b border-ink/10">
        <div className="container grid gap-y-3 py-6 sm:grid-cols-3">
          {["Jaren ervaring", "Vaste prijs vooraf", "Snel een prijs"].map((a, i) => (
            <InView key={a} delay={i * 0.08}>
              <p className="flex items-center gap-2.5 text-base font-bold italic text-ink">
                <span className="h-[3px] w-4 rounded-full bg-brand" />
                {a}
              </p>
            </InView>
          ))}
        </div>
      </div>

      <section className="container py-20 md:py-28">
        <InView>
          <p className="kicker text-ink/50">Wat we doen</p>
          <h2 className="display mt-2 text-4xl text-ink md:text-6xl">
            Alles wat getild<br className="hidden md:block" /> moet worden<span className="text-brand">.</span>
          </h2>
        </InView>

        <InView delay={0.1} className="mt-10 flex flex-wrap gap-4">
          {(["verhuizen", "sjouwhulp"] as BranchKey[]).map((k) => (
            <button
              key={k}
              type="button"
              aria-pressed={kind === k}
              onClick={() => setKind(k)}
              className={clsx("nb-tab", k === "verhuizen" ? "is-verhuizen" : "is-sjouwhulp")}
            >
              {k === "verhuizen" ? "Verhuizen" : "Sjouwhulp & Hospitality"}
            </button>
          ))}
        </InView>

        <AnimatePresence mode="wait">
          <motion.div
            key={kind}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* intro-blok in de kleur van de tak */}
            <InView delay={0.15}>
            <div className={clsx("relative mt-10 overflow-hidden rounded-[5px] border-2 border-ink p-8 text-white shadow-[4px_4px_0_#0b1226] md:p-12", b.colorClass)}>
              <div className="relative z-10 max-w-xl">
                <p className="kicker text-white/70">{b.kicker}</p>
                <p className="display mt-3 text-3xl md:text-5xl">{b.title.join(" ")}</p>
                <ul className="mt-5 grid max-w-[460px] gap-x-6 gap-y-1.5 text-white/90 sm:grid-cols-2">
                  {b.bullets.map((t) => (
                    <li key={t} className="flex items-center gap-2.5">
                      <span className="h-[3px] w-3 rounded-full bg-white/80" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href={`/contact?type=${kind}`} className={clsx("btn", kind === "verhuizen" ? "btn-coral" : "")}>
                    {b.cta}
                  </Link>
                  <Link href={b.href} className={clsx("btn btn-ghost", kind === "verhuizen" ? "btn-coral" : "")}>
                    Bekijk alles
                  </Link>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-6 right-4 hidden h-56 w-56 opacity-90 md:block lg:right-12 lg:h-64 lg:w-64">
                <Art kind={kind} className="h-full w-full" />
              </div>
            </div>
            </InView>

            {/* diensten */}
            <div className="mt-12 grid border-t border-ink/10 md:grid-cols-2 lg:grid-cols-3">
              {b.services.map((s, i) => (
                <InView key={s.title} delay={(i % 3) * 0.08}>
                <Link
                  href={`/contact?type=${kind}`}
                  className="group block h-full border-b border-ink/10 py-7 md:pr-10"
                >
                  <span className={clsx("text-xs font-medium tracking-[0.2em]", accent)}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 flex items-center gap-2 text-2xl font-bold italic tracking-tight text-ink">
                    {s.title}
                    <span className={clsx("translate-x-0 opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100", accent)}>→</span>
                  </h3>
                  <p className="mt-1 text-ink/60">{s.text}</p>
                </Link>
                </InView>
              ))}
            </div>

            {/* zo werkt het */}
            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {b.steps.map((s, i) => (
                <InView key={s.title} delay={i * 0.12}>
                  <span className={clsx("display block text-6xl", accent)}>0{i + 1}</span>
                  <h3 className="mt-2 text-xl font-bold italic text-ink">{s.title}</h3>
                  <p className="mt-1 text-ink/60">{s.text}</p>
                </InView>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <GoogleReviews />

      {/* afsluiter */}
      <section className="bg-paper">
        <InView className="container flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
          <div>
            <h2 className="display text-4xl text-ink md:text-6xl">Snel een prijs<span className="text-brand">?</span></h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={`/contact?type=${kind}`} className="btn">Gratis offerte</Link>
            <a href={whatsappLink("Hoi WE MOVE!")} target="_blank" rel="noopener noreferrer" className="btn">WhatsApp</a>
          </div>
        </InView>
      </section>
    </div>
  );
};
