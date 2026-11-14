"use client";
import { useEffect, useRef, useState } from "react";
import { useSplashDone } from "./Splash";

// Achtergrondvideo voor het blauwe vlak: speelt de reels na elkaar volledig af,
// zonder geluid, ingekleurd in het merkblauw (duotone).
// Bij "minder beweging" of databesparing wordt alleen de stilstaande poster getoond.
export type Clip = { src: string; poster: string };

// Donkere kleuren (zoals antraciet) maken "vermenigvuldigen" bijna zwart.
// Daarom: bij een donkere kleur de video normaal tonen met een kleurlaag erover.
const isDark = (hex: string) => {
  const n = parseInt(hex.replace("#", ""), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 40;
};

export const BgVideo = ({ clips, color }: { clips: Clip[]; color: string }) => {
  const dark = isDark(color);
  const ref = useRef<HTMLVideoElement>(null);
  const ready = useSplashDone();
  const [i, setI] = useState(0);
  const [still, setStill] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    setStill(reduce || Boolean(conn?.saveData));
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v || still || !ready) return;
    v.play().catch(() => {});
  }, [i, ready, still]);

  if (clips.length === 0) return null;
  const clip = clips[i % clips.length];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ backgroundColor: color }} aria-hidden="true">
      {still ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={clip.poster} alt="" className={dark ? "h-full w-full object-cover grayscale" : "h-full w-full object-cover opacity-55 mix-blend-multiply grayscale"} />
      ) : (
        <video
          ref={ref}
          key={clip.src}
          src={clip.src}
          poster={clip.poster}
          muted
          playsInline
          autoPlay={ready}
          loop={clips.length === 1}
          preload={i === 0 ? "auto" : "metadata"}
          onPlaying={() => setVisible(true)}
          onEnded={() => setI((n) => (n + 1) % clips.length)}
          className={dark ? "h-full w-full object-cover grayscale transition-opacity duration-1000" : "h-full w-full object-cover mix-blend-multiply grayscale contrast-125 transition-opacity duration-1000"}
          style={{ opacity: dark ? 1 : visible ? 0.6 : 0.45 }}
        />
      )}
      {dark && <div className="absolute inset-0" style={{ backgroundColor: color, opacity: 0.8 }} />}
      {/* lichte verloop zodat de witte tekst altijd leesbaar blijft */}
      <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${color}E6 0%, ${color}99 45%, ${color}33 100%)` }} />
    </div>
  );
};
