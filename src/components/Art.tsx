"use client";
import { motion } from "framer-motion";
import type { BranchKey } from "@/lib/branches";
import { LogoMark } from "./Logo";

// Grote illustratie per tak. Vervang later door een uitgeknipte foto (PNG) als je die hebt.
export const Art = ({ kind, className = "" }: { kind: BranchKey; className?: string }) => (
  <motion.div
    className={`pointer-events-none select-none ${className}`}
    animate={{ y: [-10, 10] }}
    transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
  >
    {kind === "verhuizen" ? (
      <LogoMark className="h-full w-full -rotate-6 text-white drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)]" />
    ) : (
      <svg viewBox="0 0 220 200" className="h-full w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.2)]" aria-hidden="true">
        {/* Twee sjouwers die samen een balk dragen */}
        <g fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="28" y="40" width="168" height="16" rx="4" transform="rotate(-8 112 48)" fill="rgba(255,255,255,0.16)" />
          <circle cx="80" cy="86" r="10" />
          <path d="M80 98 77 142M79 106 60 96 64 64M79 106 100 94 97 61M77 142 62 184M77 142 96 181" />
          <circle cx="152" cy="78" r="10" />
          <path d="M152 90 154 136M153 98 134 88 136 55M153 98 174 86 170 51M154 136 140 180M154 136 173 177" />
          <path d="M22 190h178" opacity="0.55" />
        </g>
      </svg>
    )}
  </motion.div>
);

// Duotone foto zoals in de referentie: zwart-wit foto ingekleurd met de takkleur.
export const Duotone = ({ src, color }: { src: string; color: string }) => (
  <div className="absolute inset-0" style={{ backgroundColor: color }}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={src} alt="" className="h-full w-full object-cover opacity-60 mix-blend-multiply grayscale" />
  </div>
);
