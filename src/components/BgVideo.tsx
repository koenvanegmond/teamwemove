"use client";
import { useEffect, useRef, useState } from "react";
import { useSplashDone } from "./Splash";

// Achtergrondvideo voor het blauwe vlak: speelt de reels na elkaar volledig af,
// zonder geluid, ingekleurd in het merkblauw (duotone).
// Bij "minder beweging" of databesparing wordt alleen de stilstaande poster getoond.
export type Clip = { src: string; poster: string };

export const BgVideo = ({ clips, color }: { clips: Clip[]; color: string }) => {
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
        <img src={clip.poster} alt="" className="h-full w-full object-cover opacity-55 mix-blend-multiply grayscale" />
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
          className="h-full w-full object-cover mix-blend-multiply grayscale contrast-125 transition-opacity duration-1000"
          style={{ opacity: visible ? 0.6 : 0.45 }}
        />
      )}
      {/* lichte verloop zodat de witte tekst altijd leesbaar blijft */}
      <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${color}E6 0%, ${color}99 45%, ${color}33 100%)` }} />
    </div>
  );
};
