import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Bullets, Section } from "@/components/Section";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "WE MOVE is een verhuisbedrijf uit Den Haag, gerund door Koen en Benoît. Meer dan zes jaar ervaring in verhuizen.",
};

export default function OverOns() {
  return (
    <>
      <section className="pb-10 pt-14 md:pt-20">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Over ons</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tighter text-ink md:text-6xl">
            Twee verhuizers uit Den Haag.
          </h1>
        </div>
      </section>
      <Section>
        <div className="max-w-2xl space-y-5 text-lg text-ink/75">
          <p>
            Wij zijn Koen en Benoît. We verhuizen al meer dan zes jaar, eerst als bijbaan, sinds 2024 onder de naam WE MOVE.
          </p>
          <p>
            Wat klein begon, groeide vanzelf. Klanten blijven ons vinden en aanbevelen, en daarom bouwen we het nu verder uit.
          </p>
          <Bullets
            items={[
              `${SITE.experience} in verhuizen`,
              "Persoonlijk contact, geen callcenter",
              "Eerlijke prijzen, vooraf duidelijk",
              "Naast verhuizen ook sjouwhulp en hospitality-personeel",
            ]}
          />
          <p className="text-base text-ink/50">
            {SITE.owners} · KvK {SITE.kvk}
          </p>
          <div className="pt-2">
            <ButtonLink href="/contact">Neem contact op</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
