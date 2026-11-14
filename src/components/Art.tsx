"use client";
import { motion } from "framer-motion";
import type { BranchKey } from "@/lib/branches";

// Grote illustratie per tak. Vervang later door een uitgeknipte foto (PNG) als je die hebt.
export const Art = ({ kind, className = "" }: { kind: BranchKey; className?: string }) => (
  <motion.div
    className={`pointer-events-none select-none ${className}`}
    animate={{ y: [-10, 10] }}
    transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
  >
    {kind === "verhuizen" ? (
      <svg viewBox="0 0 200 200" className="h-full w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)]" aria-hidden="true">
        <g transform="rotate(-8 100 100)">
          <path d="M100 30l62 22v84l-62 26-62-26V52l62-22z" fill="rgba(255,255,255,0.14)" stroke="#fff" strokeWidth="6" strokeLinejoin="round" />
          <path d="M38 52l62 22 62-22M100 74v88" fill="none" stroke="#fff" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M69 41l62 22v26" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        </g>
      </svg>
    ) : (
      <svg viewBox="0 0 200 200" className="h-full w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.2)]" aria-hidden="true">
        <g fill="rgba(255,255,255,0.16)" stroke="#fff" strokeWidth="6" strokeLinejoin="round">
          <rect x="34" y="112" width="62" height="54" rx="4" />
          <rect x="104" y="112" width="62" height="54" rx="4" />
          <rect x="68" y="52" width="64" height="56" rx="4" transform="rotate(6 100 80)" />
        </g>
        <g stroke="#fff" strokeWidth="6" strokeLinecap="round" fill="none">
          <path d="M65 112v16M135 112v16M100 50v14" />
          <path d="M20 176h160" opacity="0.6" />
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
