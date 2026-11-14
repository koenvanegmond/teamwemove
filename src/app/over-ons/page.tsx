import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Arrow } from "@/components/Icons";
import { RevealLines, InView } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over ons",
  description: "WE MOVE is een verhuisbedrijf uit Den Haag van Koen en Benoît, met meer dan zes jaar verhuiservaring.",
};

export default function OverOns() {
  return (
    <>
      <section className="container pb-20 pt-32 md:pt-40">
        <p className="kicker text-brand">Over ons</p>
        <RevealLines lines={["Twee verhuizers", "uit Den Haag."]} className="display mt-3 text-5xl text-ink md:text-8xl" />
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <InView>
            <div className="space-y-5 text-lg text-ink/75">
              <p>Wij zijn Koen en Benoît. We verhuizen al meer dan zes jaar, eerst als bijbaan, sinds 2024 als WE MOVE.</p>
              <p>Wat klein begon, groeide vanzelf. Klanten blijven ons vinden en aanbevelen. Daarom bouwen we het nu verder uit, met sjouwhulp en hospitality-personeel erbij.</p>
            </div>
          </InView>
          <InView delay={0.1}>
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {[[SITE.experience, "in verhuizen"], ["Persoonlijk", "geen callcenter"], ["Eerlijk", "prijs vooraf duidelijk"], ["7 dagen", "per week bereikbaar"]].map(([a, b]) => (
                <li key={a} className="flex items-baseline justify-between py-4">
                  <span className="display text-2xl text-brand">{a}</span>
                  <span className="text-ink/60">{b}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="pill mt-8 border-brand bg-brand font-semibold text-white hover:gap-5">
              Neem contact op <Arrow />
            </Link>
          </InView>
        </div>
      </section>
      <Footer />
    </>
  );
}
