import Image from "next/image";
import { InView } from "./Reveal";

const FOTOS = [
  { src: "/images/verhuisdoos.webp", alt: "WE MOVE-verhuizer met een verhuisdoos in de deuropening" },
  { src: "/images/inladen-wagen.webp", alt: "Twee verhuizers van WE MOVE bij een ingeladen verhuiswagen" },
  { src: "/images/zware-spullen.webp", alt: "WE MOVE-verhuizer tilt een zwaar onderdeel" },
  { src: "/images/wagen-laden.webp", alt: "WE MOVE laadt een verhuiswagen in" },
];

// Rij echte werkfoto's.
export const WorkPhotos = ({ accent = "text-brand" }: { accent?: string }) => (
  <section className="container py-20 md:py-28">
    <InView>
      <p className={`kicker ${accent}`}>Aan het werk</p>
      <h2 className="display mt-2 text-4xl text-ink md:text-6xl">
        Zo werken wij<span className={accent}>.</span>
      </h2>
    </InView>
    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
      {FOTOS.map((f, i) => (
        <InView key={f.src} delay={i * 0.08}>
          <div className="group relative aspect-[3/4] overflow-hidden rounded-[5px] border-2 border-ink shadow-[4px_4px_0_#0b1226]">
            <Image
              src={f.src}
              alt={f.alt}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </InView>
      ))}
    </div>
  </section>
);
