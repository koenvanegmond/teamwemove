import Link from "next/link";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import { Socials } from "./Socials";

export const Footer = () => (
  <footer className="bg-ink text-white/70">
    <div className="container flex flex-col gap-10 py-14 md:flex-row md:justify-between">
      <div>
        <Link href="/" aria-label="Naar de homepage" className="inline-block transition hover:opacity-80">
          <Logo size="lg" className="text-white" />
        </Link>
        <p className="mt-3 max-w-xs text-sm">Verhuizen en sjouwhulp. Randstad, Bollenstreek en heel Nederland.</p>
        <div className="mt-6"><Socials variant="dark" /></div>
      </div>
      <div className="grid grid-cols-2 gap-x-14 text-sm">
        <ul className="space-y-2">
          <li><Link href="/verhuizen" className="hover:text-white">Verhuizen</Link></li>
          <li><Link href="/sjouwhulp" className="hover:text-white">Sjouwhulp</Link></li>
          <li><Link href="/over-ons" className="hover:text-white">Over ons</Link></li>
          <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
        </ul>
        <ul className="space-y-2">
          {SITE.phones.map((p) => <li key={p.href}><a href={p.href} className="hover:text-white">{p.label}</a></li>)}
          <li><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></li>
        </ul>
      </div>
    </div>
    <div className="container flex flex-col gap-1 border-t border-white/10 py-6 text-xs text-white/40 md:flex-row md:justify-between">
      <p>© {new Date().getFullYear()} WE MOVE · KvK {SITE.kvk}</p>
      <p>Template-basis: MIT (Aymane Mehdi) · Framer SaaS UI Kit, CC BY 4.0 · Knoppen: Uiverse.io · Font: Supreme (Fontshare)</p>
    </div>
  </footer>
);
