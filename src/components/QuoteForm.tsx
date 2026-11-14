"use client";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { whatsappLink, SITE } from "@/lib/site";
import type { BranchKey } from "@/lib/branches";
import { Close, Phone, Whatsapp } from "./Icons";
import { Socials } from "./Socials";
import { Logo } from "./Logo";

type Field = { name: string; label: string; type?: "text" | "tel" | "date" | "select" | "textarea"; options?: string[]; placeholder?: string; required?: boolean; wide?: boolean };

const FIELDS: Record<BranchKey, Field[]> = {
  verhuizen: [
    { name: "naam", label: "Naam", required: true, placeholder: "Je naam" },
    { name: "telefoon", label: "Telefoon", type: "tel", placeholder: "06 …" },
    { name: "soort", label: "Soort verhuizing", type: "select", options: ["Particulier verhuizen", "Bedrijfsverhuizing", "Ontruimen", "Montage", "Inpakken", "Anders"] },
    { name: "datum", label: "Gewenste datum", type: "date" },
    { name: "van", label: "Van", required: true, placeholder: "Huidig adres of plaats" },
    { name: "naar", label: "Naar", placeholder: "Nieuw adres of plaats" },
    { name: "opmerking", label: "Opmerking", type: "textarea", placeholder: "Verdieping, lift, grote meubels…", wide: true },
  ],
  sjouwhulp: [
    { name: "naam", label: "Naam", required: true, placeholder: "Je naam" },
    { name: "organisatie", label: "Organisatie of evenement", placeholder: "Naam" },
    { name: "telefoon", label: "Telefoon", type: "tel", placeholder: "06 …" },
    { name: "soort", label: "Wat heb je nodig", type: "select", options: ["Opbouw", "Afbouw", "Laden en lossen", "Logistiek", "Projectinrichting", "Hospitality-personeel", "Anders"] },
    { name: "locatie", label: "Locatie", required: true, placeholder: "Adres of plaats" },
    { name: "datum", label: "Datum", type: "date" },
    { name: "aantal", label: "Aantal mensen", placeholder: "Bijvoorbeeld 4" },
    { name: "opmerking", label: "Opmerking", type: "textarea", placeholder: "Tijden, toegang, bijzonderheden…", wide: true },
  ],
};

export const QuoteForm = ({ defaultKind = "verhuizen" }: { defaultKind?: BranchKey }) => {
  const [kind, setKind] = useState<BranchKey>(defaultKind);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const lines = [`Hoi WE MOVE, aanvraag ${kind === "verhuizen" ? "verhuizen" : "sjouwhulp & hospitality"}:`];
    for (const f of FIELDS[kind]) {
      const v = String(d.get(f.name) ?? "").trim();
      if (v) lines.push(`${f.label}: ${v}`);
    }
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative">
      <div className={clsx("absolute inset-x-0 top-0 h-2 transition-colors duration-500", kind === "verhuizen" ? "bg-brand" : "bg-coral")} />
      <div className="container pb-20 pt-12 md:pt-14">
        <div className="flex items-start justify-between">
          <Link href="/" aria-label="Naar de homepage" className="transition hover:opacity-70">
            <Logo iconClass="text-brand" wordClass="text-ink" />
          </Link>
          <Link href="/" className="group flex items-center gap-2 text-xs text-ink/60 hover:text-ink">
            Sluiten <span className="rounded-full p-2 transition group-hover:rotate-90 group-hover:bg-paper"><Close className="h-4 w-4" /></span>
          </Link>
        </div>

        <motion.h1
          className="mt-6 text-center text-3xl uppercase tracking-tight text-ink md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Jouw <span className="font-extrabold italic">aanvraag</span>
        </motion.h1>

        <div className="mx-auto mt-8 flex w-fit flex-wrap justify-center gap-4">
          {(["verhuizen", "sjouwhulp"] as BranchKey[]).map((k) => (
            <button
              key={k}
              type="button"
              aria-pressed={kind === k}
              onClick={() => setKind(k)}
              className={clsx("nb-tab", k === "verhuizen" ? "is-verhuizen" : "is-sjouwhulp")}
            >
              {k === "verhuizen" ? "Verhuizen" : "Sjouwhulp & Hospitality"}
            </button>
          ))}
        </div>

        <motion.form
          key={kind}
          onSubmit={onSubmit}
          className={clsx("nb-form mx-auto mt-10 max-w-3xl", kind === "sjouwhulp" && "nb-form--sjouwhulp")}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="nb-title">
            {kind === "verhuizen" ? "Gratis verhuisofferte" : "Sjouwhulp aanvragen"}
            <span>Vul in wat je weet.</span>
          </p>

          <div className="grid gap-x-6 gap-y-5 md:grid-cols-2">
            {FIELDS[kind].map((f) => (
              <label key={f.name} className={clsx("block", f.wide && "md:col-span-2")}>
                <span className="nb-label">{f.label}{f.required && " *"}</span>
                {f.type === "select" ? (
                  <select name={f.name} defaultValue={f.options?.[0]} className="nb-input">
                    {f.options?.map((o) => <option key={o}>{o}</option>)}
                  </select>
                ) : f.type === "textarea" ? (
                  <textarea name={f.name} rows={3} placeholder={f.placeholder} className="nb-input" />
                ) : (
                  <input name={f.name} type={f.type ?? "text"} required={f.required} placeholder={f.placeholder} className="nb-input" />
                )}
              </label>
            ))}
          </div>

          <div className="mt-4 flex flex-col-reverse items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="nb-label !mb-3">Of neem direct contact op</p>
              <div className="nb-row">
                <a className="nb-round" href={whatsappLink("Hoi WE MOVE!")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Whatsapp /></a>
                <a className="nb-round" href={SITE.phones[0].href} aria-label="Bellen"><Phone /></a>
                <a className="nb-round" href={`mailto:${SITE.email}`} aria-label="E-mail">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                </a>
              </div>
            </div>
            <button type="submit" className="nb-confirm">
              <Whatsapp className="h-5 w-5" /> Versturen
            </button>
          </div>
          <p className="text-xs text-[color:var(--font-color-sub)]">Je aanvraag opent in WhatsApp.</p>
        </motion.form>

        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4">
          <p className="kicker text-ink/50">Volg ons</p>
          <Socials />
        </div>
      </div>
    </div>
  );
};
