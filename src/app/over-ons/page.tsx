import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { RevealLines, InView } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Over ons: verhuizers van de hotelschool",
  description:
    "Maak kennis met Koen van Egmond en Benoit Weizenbach, de eigenaren van WE MOVE. Netjes, transparant en de klant voorop. Randstad en heel Nederland.",
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
                alt="Koen van Egmond en Benoit Weizenbach, eigenaren van WE MOVE"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </InView>
          <InView delay={0.1}>
            <div className="max-w-md space-y-5 text-lg leading-relaxed text-ink/80 md:text-xl md:leading-relaxed">
              <p>
                Wij zijn Koen van Egmond en Benoit Weizenbach, de eigenaren van WE MOVE. We verhuizen al jaren en geloven
                dat verhuizen soepeler en klantvriendelijker kan.
              </p>
              <p>
                Verhuizen is vaak een stressvolle periode. Samen met ons team nemen we je de zorgen uit handen, met een
                aanpak die past bij jouw wensen.
              </p>
              <p>Goede verhuizingen, eerlijk geprijsd en zonder in te leveren op kwaliteit. Daar staan we voor.</p>
            </div>
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
