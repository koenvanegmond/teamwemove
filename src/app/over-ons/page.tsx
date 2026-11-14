import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { RevealLines, InView } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Over ons: verhuizers van de hotelschool",
  description:
    "Maak kennis met Koen en Benoît: oud-hotelschoolstudenten met een verhuiswagen. Netjes, transparant en de klant voorop. Randstad en heel Nederland.",
  alternates: { canonical: "/over-ons" },
};

const PUNTEN = [
  "Koen en Benoît, al jaren aan het verhuizen",
  "Hotelschool-achtergrond: netjes, klant voorop",
  "Transparant, duidelijke communicatie",
  "Randstad, Bollenstreek en heel Nederland",
];

export default function OverOns() {
  return (
    <>
      <section className="container pb-24 pt-32 md:pt-40">
        <p className="kicker text-brand">Over ons</p>
        <RevealLines
          lines={["Twee jongens van de hotelschool.", "En heel veel dozen."]}
          className="display mt-3 max-w-5xl text-5xl text-ink md:text-7xl"
        />
        <InView className="mt-14 max-w-xl">
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {PUNTEN.map((t) => (
              <li key={t} className="flex items-center gap-4 py-4 text-lg text-ink">
                <span className="h-[3px] w-5 rounded-full bg-brand" />
                {t}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn mt-10">
            Neem contact op
          </Link>
        </InView>
      </section>
      <Footer />
    </>
  );
}
