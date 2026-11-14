import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { RevealLines, InView } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Over ons: verhuizers van de hotelschool",
  description:
    "Maak kennis met Koen en Benoît: oud-hotelschoolstudenten met een verhuiswagen. Netjes, transparant en de klant voorop. Randstad en heel Nederland.",
  alternates: { canonical: "/over-ons" },
};

export default function OverOns() {
  return (
    <>
      <section className="container pb-24 pt-32 md:pt-40">
        <p className="kicker text-brand">Over ons</p>
        <RevealLines
          lines={["Twee jongens van de hotelschool.", "En heel veel dozen."]}
          className="display mt-3 max-w-5xl text-5xl text-ink md:text-7xl"
        />
        <div className="mt-14 grid items-center gap-12 md:grid-cols-[1.05fr_1fr] md:gap-16">
          <InView>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[5px] border-2 border-ink shadow-[6px_6px_0_#0b1226]">
              <Image
                src="/images/koen-en-benoit.webp"
                alt="Koen en Benoît van WE MOVE"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </InView>
          <InView delay={0.1}>
            <p className="max-w-md text-xl leading-relaxed text-ink/80 md:text-2xl md:leading-relaxed">
              Wij zijn Koen en Benoît. Op de hotelschool leerden we wat gastvrijheid is, en verhuizen doen we al jaren. Dat
              zie je terug in hoe we werken: netjes, duidelijk en met de klant voorop.
            </p>
            <Link href="/contact" className="btn mt-10">
              Neem contact op
            </Link>
          </InView>
        </div>
      </section>
      <Footer />
    </>
  );
}
