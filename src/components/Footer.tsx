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
    <div className="container flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
      <p>© {new Date().getFullYear()} WE MOVE · KvK {SITE.kvk}</p>
      <a
        href="https://kogi.nl/?utm_source=teamwemove.nl&utm_medium=footer&utm_campaign=madeby"
        target="_blank"
        rel="noopener"
        className="group inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-3.5 py-1.5 text-white/60 transition duration-300 hover:border-white/40 hover:bg-white hover:text-ink md:self-auto"
      >
        <span>Website door</span>
        <span className="font-bold tracking-tight text-white transition group-hover:text-ink">kogi.nl</span>
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </a>
    </div>
  </footer>
);
