import Link from "next/link";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

export const Footer = () => (
  <footer className="bg-brand text-white">
    <div className="container py-14">
      <div className="grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 max-w-xs text-white/70">
            Verhuizen en sjouwhulp in Den Haag en daarbuiten.
          </p>
        </div>
        <div>
          <p className="font-semibold">Verhuizen</p>
          <ul className="mt-3 space-y-2 text-white/70">
            <li><Link className="hover:text-white" href="/verhuizen">Alle verhuisdiensten</Link></li>
            <li><Link className="hover:text-white" href="/contact?type=verhuizen">Offerte aanvragen</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Sjouwhulp & Hospitality</p>
          <ul className="mt-3 space-y-2 text-white/70">
            <li><Link className="hover:text-white" href="/sjouwhulp">Evenementen en logistiek</Link></li>
            <li><Link className="hover:text-white" href="/contact?type=sjouwhulp">Aanvraag doen</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <ul className="mt-3 space-y-2 text-white/70">
            {SITE.phones.map((p) => (
              <li key={p.href}><a className="hover:text-white" href={p.href}>{p.label}</a></li>
            ))}
            <li><a className="hover:text-white" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li className="flex gap-4 pt-1">
              <a className="hover:text-white" href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a className="hover:text-white" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-white/60 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} WE MOVE · KvK {SITE.kvk}</p>
        <p>
          Design gebaseerd op de{" "}
          <a
            className="underline hover:text-white"
            href="https://www.figma.com/community/file/1347551304372055519"
            target="_blank"
            rel="noopener noreferrer"
          >
            SaaS Website UI Kit
          </a>{" "}
          van Framer (CC BY 4.0)
        </p>
      </div>
    </div>
  </footer>
);
