import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Bullets, Cards, Section, Steps } from "@/components/Section";
import { Faq } from "@/components/Faq";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sjouwhulp en hospitality voor evenementen",
  description:
    "Sjouwhulp voor evenementen en bedrijven in Den Haag: op- en afbouw, laden en lossen, logistiek en projectinrichting. Plus hospitality-personeel voor bar en bediening. Alles uit één hand.",
};

const DIENSTEN = [
  { title: "Opbouw en afbouw", text: "Podia, meubels, decor en materialen op locatie klaarzetten en weer opruimen." },
  { title: "Laden en lossen", text: "Vrachtwagens en leveringen snel en zorgvuldig uitladen." },
  { title: "Logistiek op locatie", text: "Materialen verplaatsen en klaarzetten, ook bij last-minute wijzigingen." },
  { title: "Projectinrichting", text: "Kantoren en ruimtes inrichten: meubilair, werkplekken en verplaatsingen." },
  { title: "Hospitality-personeel", text: "Ervaren bar- en bedieningsmedewerkers via ons hotelschoolnetwerk." },
  { title: "Alles kan", text: "Een kast uit elkaar, een verhuizing, een klus waar je niet uitkomt: vraag het gewoon." },
];

const FAQ = [
  { q: "Voor wie is dit?", a: "Voor organisatoren van evenementen, bedrijven, verhuurders en iedereen die fysiek werk wil uitbesteden." },
  { q: "Kan ik logistiek en personeel samen boeken?", a: "Ja, dat is precies waar we in verschillen. Opbouw, afbouw en horecapersoneel regel je bij één partij." },
  { q: "Hoe snel kunnen jullie starten?", a: "Dat hangt van de klus en de planning af. Stuur ons een bericht, dan laten we snel weten wat mogelijk is." },
  { q: "Wat kost het?", a: "We werken met een offerte op maat, op basis van aantal mensen, uren en locatie." },
];

export default function Sjouwhulp() {
  return (
    <>
      <section
        className="pb-14 pt-14 md:pb-20 md:pt-20"
        style={{ background: "radial-gradient(ellipse 120% 80% at 0% 100%, #D7E2FF 0%, #FFFFFF 70%)" }}
      >
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Sjouwhulp & Hospitality</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tighter text-ink md:text-6xl">
            Extra handen en personeel voor jouw evenement.
          </h1>
          <Bullets
            className="mt-6 max-w-xl"
            items={[
              "Op- en afbouw, laden en lossen",
              "Logistiek en projectinrichting",
              "Hospitality-personeel voor bar en bediening",
              "Alles uit één hand",
            ]}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact?type=sjouwhulp">Aanvraag doen</ButtonLink>
            <ButtonLink href={whatsappLink("Hoi WE MOVE, ik heb sjouwhulp nodig.")} variant="whatsapp" external>
              WhatsApp ons
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section title="Wat we doen" intro="Fysiek werk waar jij je vakmensen niet voor wilt inzetten.">
        <Cards items={DIENSTEN} />
      </Section>

      <Section soft title="Zo werkt het">
        <Steps
          items={[
            { title: "Vertel wat er moet gebeuren", text: "Via WhatsApp of het formulier, met datum en locatie." },
            { title: "Offerte op maat", text: "We stemmen het team en de planning af op jouw klus." },
            { title: "Het team staat klaar", text: "Op de afgesproken tijd, klaar om te beginnen." },
          ]}
        />
      </Section>

      <Section title="Waarom WE MOVE">
        <Bullets
          className="max-w-xl"
          items={[
            "Logistiek én horecapersoneel in één pakket",
            "Lokaal in Den Haag, snel ter plaatse",
            "Ervaren verhuizers en hotelschool-talent",
            "Eén aanspreekpunt",
          ]}
        />
      </Section>

      <Section soft title="Veelgestelde vragen">
        <Faq items={FAQ} />
      </Section>

      <section className="bg-brand py-16 text-white md:py-20">
        <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Vertel wat er moet gebeuren</h2>
            <p className="mt-2 text-white/70">Dan kijken we direct mee naar de beste aanpak.</p>
          </div>
          <ButtonLink href="/contact?type=sjouwhulp" variant="light">Aanvraag doen</ButtonLink>
        </div>
      </section>
    </>
  );
}
