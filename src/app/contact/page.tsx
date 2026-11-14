import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { Section } from "@/components/Section";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact en offerte",
  description:
    "Vraag een vrijblijvende offerte aan bij WE MOVE in Den Haag, via WhatsApp, telefoon of het formulier. Binnen 24 uur reactie.",
};

export default function Contact({
  searchParams,
}: {
  searchParams: { type?: string };
}) {
  const kind = searchParams.type === "sjouwhulp" ? "sjouwhulp" : "verhuizen";
  return (
    <>
      <section className="pb-6 pt-14 md:pt-20">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Contact</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tighter text-ink md:text-6xl">
            Vraag een offerte aan.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink/60">Binnen 24 uur een reactie, vrijblijvend.</p>
        </div>
      </section>
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <QuoteForm defaultKind={kind} />
          <aside className="space-y-5 text-ink/80">
            <div>
              <p className="font-semibold text-ink">Bel of app</p>
              <ul className="mt-2 space-y-1">
                {SITE.phones.map((p) => (
                  <li key={p.href}>
                    <a className="hover:text-brand" href={p.href}>{p.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-ink">E-mail</p>
              <a className="hover:text-brand" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
            <div>
              <p className="font-semibold text-ink">Volg ons</p>
              <div className="mt-1 flex gap-4">
                <a className="hover:text-brand" href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                <a className="hover:text-brand" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
            <p className="text-sm text-ink/50">KvK {SITE.kvk}</p>
          </aside>
        </div>
      </Section>
    </>
  );
}
