import Link from "next/link";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

export const Footer = () => (
  <footer className="bg-ink text-white/70">
    <div className="container flex flex-col gap-10 py-14 md:flex-row md:justify-between">
      <div>
        <Logo className="text-white" />
        <p className="mt-3 max-w-xs text-sm">Verhuizen en sjouwhulp in Den Haag. {SITE.owners}.</p>
      </div>
      <div className="grid grid-cols-2 gap-x-14 gap-y-2 text-sm">
        <Link href="/verhuizen" className="hover:text-white">Verhuizen</Link>
        {SITE.phones.map((p) => <a key={p.href} href={p.href} className="hover:text-white">{p.label}</a>)}
        <Link href="/sjouwhulp" className="hover:text-white">Sjouwhulp</Link>
        <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
        <Link href="/over-ons" className="hover:text-white">Over ons</Link>
        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
        <Link href="/contact" className="hover:text-white">Contact</Link>
        <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
      </div>
    </div>
    <div className="container flex flex-col gap-1 border-t border-white/10 py-6 text-xs text-white/40 md:flex-row md:justify-between">
      <p>© {new Date().getFullYear()} WE MOVE · KvK {SITE.kvk}</p>
      <p>Template-basis: MIT (Aymane Mehdi) · Framer SaaS UI Kit, CC BY 4.0</p>
    </div>
  </footer>
);
