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
      <svg viewBox="0 0 240 230" className="h-full w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)]" aria-hidden="true">
        {/* Drie sjouwers die samen een stapel dozen omhoog houden */}
        <g fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
          <g fill="rgba(255,255,255,0.12)">
            <rect x="97" y="14" width="46" height="40" rx="5" />
            <rect x="71" y="58" width="46" height="40" rx="5" />
            <rect x="123" y="58" width="46" height="40" rx="5" />
          </g>
          <path d="M120 14v12M94 58v12M146 58v12" />
          <circle cx="40" cy="122" r="13" />
          <path d="M48 140 58 184M52 146 76 102M58 184 44 214M58 184 74 214" />
          <circle cx="200" cy="122" r="13" />
          <path d="M192 140 182 184M188 146 164 102M182 184 196 214M182 184 166 214" />
          <circle cx="120" cy="132" r="13" />
          <path d="M120 150v40M114 154 98 142 100 106M126 154 142 142 140 106M120 190 108 216M120 190 132 216" />
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
