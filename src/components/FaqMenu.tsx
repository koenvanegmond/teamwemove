"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

// Veelgestelde vragen: klik op een vraag om het antwoord open te klappen.
export const FaqMenu = ({ items, color }: { items: { q: string; a: string }[]; color: string }) => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="faq" style={{ "--faq": color } as React.CSSProperties}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={clsx("faq-item", isOpen && "is-open")}>
            <button
              type="button"
              className="faq-link"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{f.q}</span>
              <svg viewBox="0 0 512 512" aria-hidden="true">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </button>
            <motion.div
              className="faq-panel"
              initial={false}
              animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              style={{ borderWidth: isOpen ? undefined : 0 }}
              aria-hidden={!isOpen}
            >
              <p>{f.a}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
