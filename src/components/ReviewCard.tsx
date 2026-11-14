"use client";
import { useState } from "react";
import type { Review } from "@/lib/reviews";
import { GOOGLE_REVIEWS_URL } from "@/lib/reviews";

const COLORS = ["#5D4037", "#00513A", "#0B5CAD", "#7B1FA2", "#C2185B", "#00796B", "#E64A19", "#455A64"];
const colorFor = (name: string) => COLORS[name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % COLORS.length];

export const GoogleG = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
  </svg>
);

export const Star = ({ on = true }: { on?: boolean }) => (
  <svg viewBox="0 0 20 20" className="h-[18px] w-[18px]" fill={on ? "#FBBC04" : "#E2E5EA"} aria-hidden="true">
    <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.8L10 1.5z" />
  </svg>
);

const Verified = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-label="Geverifieerd">
    <path fill="#4285F4" d="M12 1l2.4 2.1 3.2-.3.9 3.1 2.8 1.6-1.2 3 1.2 3-2.8 1.6-.9 3.1-3.2-.3L12 23l-2.4-2.1-3.2.3-.9-3.1-2.8-1.6 1.2-3-1.2-3 2.8-1.6.9-3.1 3.2.3z" />
    <path d="M7.5 12.2l3 3 6-6" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Reviewkaart in Google-stijl: avatar met initiaal, naam, sterren, tekst met "Lees verder".
export const ReviewCard = ({ r }: { r: Review }) => {
  const [open, setOpen] = useState(false);
  const truncated = r.text.endsWith("…");
  const long = r.text.length > 140;
  return (
    <figure className="relative mt-8 flex w-[300px] shrink-0 flex-col items-center rounded-lg bg-[#F3F4F6] px-6 pb-6 pt-12 text-center md:w-[340px]">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2">
        <div className="flex h-16 w-16 items-center justify-center rounded-full text-2xl font-medium text-white" style={{ backgroundColor: colorFor(r.name) }}>
          {r.name.trim()[0]}
        </div>
        <span className="absolute -bottom-0.5 -right-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white">
          <GoogleG className="h-4 w-4" />
        </span>
      </div>
      <figcaption className="font-bold text-ink">{r.name}</figcaption>
      <div className="mt-2 flex items-center gap-1.5">
        <span className="flex">{[0, 1, 2, 3, 4].map((s) => <Star key={s} on={s < (r.stars ?? 5)} />)}</span>
        <Verified />
      </div>
      <blockquote className={`mt-3 text-[15px] leading-relaxed text-ink/80 ${open ? "" : "line-clamp-4"}`}>{r.text}</blockquote>
      {truncated ? (
        <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="mt-3 text-sm text-ink/50 hover:text-ink">
          Lees verder op Google
        </a>
      ) : long ? (
        <button type="button" onClick={() => setOpen((v) => !v)} className="mt-3 text-sm text-ink/50 hover:text-ink">
          {open ? "Minder" : "Lees verder"}
        </button>
      ) : null}
    </figure>
  );
};
