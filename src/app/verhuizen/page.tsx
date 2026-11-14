import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Bullets, Cards, Section, Steps } from "@/components/Section";
import { Faq } from "@/components/Faq";
import { Reviews } from "@/components/Reviews";
import { SITE, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Verhuizen in Den Haag",
  description:
    "Verhuizen in Den Haag en omstreken: particulier, zakelijk, ontruimen, montage en inpakken. Ervaren verhuizers, verzekerd transport en geen verborgen kosten. Offerte binnen 24 uur.",
};

const DIENSTEN = [
  { title: "Particulier verhuizen", text: "Van studio tot gezinswoning, intern of extern, door de week en in het weekend." },
  { title: "Bedrijfsverhuizing", text: "Kantoor of bedrijfspand verhuizen met zo min mogelijk stilstand." },
  { title: "Ontruimen", text: "Woning of bedrijfsruimte leeg en bezemschoon opgeleverd." },
  { title: "Montage en demontage", text: "Kasten, bedden en meubels uit elkaar en weer in elkaar." },
  { title: "Inpakken en uitpakken", text: "Alleen dozen en materiaal, of volledige inpakhulp." },
  { title: "Verhuisassistentie", text: "Hulp bij zware spullen zoals een wasmachine, met of zonder wagen." },
];

const FAQ = [
  { q: "Wat kost een verhuizing?", a: "Dat hangt af van de hoeveelheid spullen, de afstand en of er een lift is. Je krijgt vooraf een vaste, vrijblijvende offerte, dus je weet waar je aan toe bent." },
  { q: "Binnen welke tijd krijg ik een offerte?", a: "Binnen 24 uur. Heb je haast, stuur ons dan een WhatsApp-bericht." },
  { q: "Werken jullie ook in het weekend?", a: "Ja. We zijn zeven dagen per week beschikbaar, ook 's avonds op afspraak." },
  { q: "Waar verhuizen jullie?", a: "In Den Haag en omstreken, en in heel Nederland op aanvraag." },
  { q: "Bieden jullie ook opslag aan?", a: "Nee, opslag doen we niet. Voor alles rond het verhuizen zelf kun je wel bij ons terecht." },
  { q: "Zijn mijn spullen verzekerd?", a: "Ja, het transport is verzekerd. Vraag naar de voorwaarden bij je offerte." },
];

export default function Verhuizen() {
  return (
    <>
      <section
        className="pb-14 pt-14 md:pb-20 md:pt-20"
        style={{ background: "radial-gradient(ellipse 120% 80% at 0% 100%, #D7E2FF 0%, #FFFFFF 70%)" }}
      >
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Verhuizen</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tighter text-ink md:text-6xl">
            Verhuizen in Den Haag, zonder gedoe.
          </h1>
          <Bullets
            className="mt-6 max-w-xl"
            items={["Verzekerd transport", "Ervaren verhuizers", "Geen verborgen kosten", "Zeven dagen per week beschikbaar"]}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact?type=verhuizen">Offerte aanvragen</ButtonLink>
            <ButtonLink href={whatsappLink("Hoi WE MOVE, ik wil graag verhuizen.")} variant="whatsapp" external>
              WhatsApp ons
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-ink/50">{SITE.experience}</p>
        </div>
      </section>

      <Section title="Wat we doen" intro="Alles rond het verhuizen zelf. Opslag doen we niet.">
        <Cards items={DIENSTEN} />
      </Section>

      <Section soft title="Zo werkt het">
        <Steps
          items={[
            { title: "Aanvraag", text: "Vul het formulier in of stuur een WhatsApp-bericht." },
            { title: "Offerte", text: "Binnen 24 uur een vaste, vrijblijvende prijs." },
            { title: "Wij verhuizen", text: "Op de afgesproken dag staat ons team klaar." },
          ]}
        />
      </Section>

      <Section title="Waarom WE MOVE">
        <Bullets
          className="max-w-xl"
          items={[
            "Persoonlijk contact, dagelijks bereikbaar",
            "Eerlijke prijs voor kleine en grote klussen",
            "Flexibele planning, ook in het weekend",
            "Meer dan zes jaar ervaring",
          ]}
        />
      </Section>

      <Reviews />

      <Section soft title="Veelgestelde vragen">
        <Faq items={FAQ} />
      </Section>

      <section className="bg-brand py-16 text-white md:py-20">
        <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Klaar om te verhuizen?</h2>
            <p className="mt-2 text-white/70">Binnen 24 uur een vrijblijvende offerte.</p>
          </div>
          <ButtonLink href="/contact?type=verhuizen" variant="light">Offerte aanvragen</ButtonLink>
        </div>
      </section>
    </>
  );
}
