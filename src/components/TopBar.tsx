"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Logo } from "./Logo";
import { Close, Phone, Whatsapp } from "./Icons";
import { SITE, whatsappLink } from "@/lib/site";

const COLOR_PAGES = ["/", "/verhuizen", "/sjouwhulp"];
const MENU = [
  { href: "/", label: "Home" },
  { href: "/verhuizen", label: "Verhuizen" },
  { href: "/sjouwhulp", label: "Sjouwhulp" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export const TopBar = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [path]);

  useEffect(() => setOpen(false), [path]);

  const onColor = COLOR_PAGES.includes(path) && !scrolled;
  const hasStrip = (path === "/verhuizen" || path === "/sjouwhulp") && !scrolled;

  if (path === "/contact") return null;

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
          onColor ? "text-white" : "bg-white/90 text-ink shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur"
        )}
      >
        <div className={clsx("relative flex h-16 items-center justify-between px-5 md:px-10", hasStrip && "pr-14 md:pr-[100px]")}>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="group flex h-10 w-10 flex-col justify-center gap-[5px]"
          >
            <span className="h-[2px] w-6 bg-current transition-all group-hover:w-4" />
            <span className="h-[2px] w-4 bg-current transition-all group-hover:w-6" />
            <span className="h-[2px] w-5 bg-current" />
          </button>
          <Link href="/" aria-label="WE MOVE home" className="absolute left-1/2 -translate-x-1/2">
            <Logo />
          </Link>
          <div className="flex items-center gap-1">
            <a href={SITE.phones[0].href} aria-label="Bel ons" className="hidden rounded-full p-2.5 transition hover:bg-current/10 sm:inline-flex">
              <Phone />
            </a>
            <a href={whatsappLink("Hoi WE MOVE!")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="rounded-full p-2.5 transition hover:bg-current/10">
              <Whatsapp />
            </a>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-white text-ink"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            exit={{ clipPath: "inset(0 0 0 100%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex h-16 items-center justify-between px-5 md:px-10">
              <button type="button" onClick={() => setOpen(false)} className="flex items-center gap-2 text-sm" aria-label="Sluit menu">
                <Close /> Sluiten
              </button>
              <Logo className="text-brand" />
              <span className="w-20" />
            </div>
            <nav className="container flex flex-1 flex-col justify-center gap-1">
              {MENU.map((m, i) => (
                <div key={m.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={m.href}
                      className={clsx(
                        "display inline-block text-5xl transition hover:translate-x-3 md:text-7xl",
                        path === m.href ? "text-brand" : "text-ink hover:text-brand"
                      )}
                    >
                      {m.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>
            <div className="container flex flex-wrap gap-x-8 gap-y-2 pb-10 text-sm text-ink/60">
              {SITE.phones.map((p) => <a key={p.href} href={p.href} className="hover:text-brand">{p.label}</a>)}
              <a href={`mailto:${SITE.email}`} className="hover:text-brand">{SITE.email}</a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Instagram</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
