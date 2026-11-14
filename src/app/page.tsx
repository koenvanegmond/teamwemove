import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { Bullets, Section } from "@/components/Section";
import { SITE, whatsappLink } from "@/lib/site";

const CHOICES = [
  {
    href: "/verhuizen",
    kicker: "Verhuizen",
    title: "Verhuizen in Den Haag",
    bullets: ["Particulier en zakelijk", "Ontruimen, montage en inpakken", "Eerlijke prijs, geen verborgen kosten"],
    cta: "Bekijk verhuizen",
  },
  {
    href: "/sjouwhulp",
    kicker: "Sjouwhulp & Hospitality",
    title: "Sjouwhulp en personeel voor evenementen",
    bullets: ["Op- en afbouw, laden en lossen", "Logistiek en projectinrichting", "Hospitality-personeel via de hotelschool"],
    cta: "Bekijk sjouwhulp",
  },
];

export default function Home() {
  return (
    <>
      <section
        className="pb-16 pt-14 md:pb-24 md:pt-24"
        style={{ background: "radial-gradient(ellipse 120% 80% at 0% 100%, #D7E2FF 0%, #FFFFFF 70%)" }}
      >
        <div className="container">
          <p className="inline-flex rounded-lg border border-ink/10 bg-white px-3 py-1 text-sm text-ink/70">
            {SITE.experience} · Den Haag
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tighter text-ink md:text-7xl">
            Wij tillen, jij <span className="text-brand">verhuist</span>.
          </h1>
          <p className="mt-6 max-w-xl text-xl text-ink/65">
            Verhuizen, sjouwhulp en personeel voor evenementen. Vaste prijs, snelle reactie, zeven dagen per week.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Offerte aanvragen</ButtonLink>
            <ButtonLink href={whatsappLink("Hoi WE MOVE, ik heb een vraag.")} variant="whatsapp" external>
              WhatsApp ons
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section title="Waar kunnen we je mee helpen?">
        <div className="grid gap-5 md:grid-cols-2">
          {CHOICES.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group flex flex-col rounded-3xl border border-ink/10 bg-white p-8 transition duration-200 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg"
            >
              <span className="text-sm font-semibold uppercase tracking-wide text-brand">{c.kicker}</span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink md:text-3xl">{c.title}</h3>
              <Bullets items={c.bullets} className="mt-5" />
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-brand">
                {c.cta}
                <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section soft title="Waarom WE MOVE">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Verzekerd transport", "Je spullen zijn bij ons in goede handen."],
            ["Ervaren team", "Meer dan zes jaar verhuiservaring."],
            ["Geen verborgen kosten", "Je weet vooraf wat het kost."],
            ["Zeven dagen per week", "Ook in het weekend en 's avonds."],
          ].map(([t, d]) => (
            <div key={t}>
              <p className="text-lg font-semibold text-ink">{t}</p>
              <p className="mt-1 text-ink/60">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-brand py-16 text-white md:py-20">
        <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Binnen 24 uur een offerte</h2>
            <p className="mt-2 text-white/70">Vrijblijvend en zonder gedoe.</p>
          </div>
          <ButtonLink href="/contact" variant="light">Offerte aanvragen</ButtonLink>
        </div>
      </section>
    </>
  );
}
