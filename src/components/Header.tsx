"use client";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";

const NAV = [
  { href: "/verhuizen", label: "Verhuizen" },
  { href: "/sjouwhulp", label: "Sjouwhulp & Hospitality" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-ink/5 bg-white/85 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" aria-label="WE MOVE, naar de startpagina" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 text-ink/70 md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="transition hover:text-brand">
              {n.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="!py-2">
            Offerte aanvragen
          </ButtonLink>
        </nav>
        <button
          type="button"
          className="rounded-lg p-2 text-ink md:hidden"
          aria-label={open ? "Sluit menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="container flex flex-col gap-1 pb-5 md:hidden">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-lg text-ink/80 hover:bg-brand-soft"
            >
              {n.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="mt-2">
            Offerte aanvragen
          </ButtonLink>
        </nav>
      )}
    </header>
  );
};
