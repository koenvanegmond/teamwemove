"use client";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { whatsappLink, SITE } from "@/lib/site";
import type { BranchKey } from "@/lib/branches";
import { Arrow, Close, Whatsapp } from "./Icons";

type Field = { name: string; label: string; type?: "text" | "tel" | "date" | "select" | "textarea"; options?: string[]; placeholder?: string; required?: boolean };

const FIELDS: Record<BranchKey, Field[]> = {
  verhuizen: [
    { name: "naam", label: "Naam", required: true },
    { name: "telefoon", label: "Telefoon", type: "tel" },
    { name: "soort", label: "Soort", type: "select", options: ["Particulier verhuizen", "Bedrijfsverhuizing", "Ontruimen", "Montage", "Inpakken", "Anders"] },
    { name: "van", label: "Van", required: true, placeholder: "Huidig adres of plaats" },
    { name: "naar", label: "Naar", placeholder: "Nieuw adres of plaats" },
    { name: "datum", label: "Datum", type: "date" },
    { name: "opmerking", label: "Opmerking", type: "textarea", placeholder: "Verdieping, lift, grote meubels…" },
  ],
  sjouwhulp: [
    { name: "naam", label: "Naam", required: true },
    { name: "organisatie", label: "Organisatie" },
    { name: "telefoon", label: "Telefoon", type: "tel" },
    { name: "soort", label: "Wat", type: "select", options: ["Opbouw", "Afbouw", "Laden en lossen", "Logistiek", "Projectinrichting", "Hospitality-personeel", "Anders"] },
    { name: "locatie", label: "Locatie", required: true },
    { name: "datum", label: "Datum", type: "date" },
    { name: "aantal", label: "Aantal mensen" },
    { name: "opmerking", label: "Opmerking", type: "textarea" },
  ],
};

const input = "w-full border-0 border-b border-transparent bg-transparent py-1 text-ink outline-none placeholder:text-ink/30 focus:border-current";

export const QuoteForm = ({ defaultKind = "verhuizen" }: { defaultKind?: BranchKey }) => {
  const [kind, setKind] = useState<BranchKey>(defaultKind);
  const accent = kind === "verhuizen" ? "text-brand" : "text-sun-dark";
  const bg = kind === "verhuizen" ? "bg-brand hover:bg-brand-dark" : "bg-sun hover:bg-sun-dark";

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
      <div className={clsx("absolute inset-x-0 top-0 h-2 transition-colors duration-500", kind === "verhuizen" ? "bg-brand" : "bg-sun")} />
      <div className="container pb-20 pt-12 md:pt-14">
        <div className="flex items-start justify-between">
          <p className="display text-lg text-ink">WE MOVE</p>
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
          Jouw <span className="font-bold">aanvraag</span>
        </motion.h1>

        <div className="mx-auto mt-8 flex w-fit gap-1 rounded-full bg-paper p-1">
          {(["verhuizen", "sjouwhulp"] as BranchKey[]).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setKind(k)}
              className={clsx("relative rounded-full px-5 py-2 text-sm font-medium transition", kind === k ? "text-white" : "text-ink/60 hover:text-ink")}
            >
              {kind === k && (
                <motion.span layoutId="kindpill" className={clsx("absolute inset-0 rounded-full", k === "verhuizen" ? "bg-brand" : "bg-sun")} transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }} />
              )}
              <span className="relative">{k === "verhuizen" ? "Verhuizen" : "Sjouwhulp & Hospitality"}</span>
            </button>
          ))}
        </div>

        <motion.form
          key={kind}
          onSubmit={onSubmit}
          className={clsx("mx-auto mt-10 max-w-4xl", accent)}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {FIELDS[kind].map((f) => (
              <label key={f.name} className="grid items-center gap-1 py-4 md:grid-cols-[180px_1fr] md:gap-6">
                <span className="kicker text-ink/50">{f.label}{f.required && " *"}</span>
                {f.type === "select" ? (
                  <select name={f.name} defaultValue={f.options?.[0]} className={input}>
                    {f.options?.map((o) => <option key={o}>{o}</option>)}
                  </select>
                ) : f.type === "textarea" ? (
                  <textarea name={f.name} rows={2} placeholder={f.placeholder} className={input} />
                ) : (
                  <input name={f.name} type={f.type ?? "text"} required={f.required} placeholder={f.placeholder} className={input} />
                )}
              </label>
            ))}
          </div>

          <div className="mt-8 flex flex-col-reverse items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="max-w-sm text-xs text-ink/50">
              Je aanvraag opent in WhatsApp, zodat je hem kunt nalezen. Reactie binnen 24 uur. Liever bellen? {SITE.phones[0].label}
            </p>
            <div className="flex items-center gap-6">
              <p className="text-sm uppercase text-ink">Gratis <span className="font-bold">offerte</span></p>
              <button type="submit" className={clsx("pill border-transparent font-semibold text-white shadow-lg shadow-black/10 hover:gap-5", bg)}>
                <Whatsapp className="h-4 w-4" /> Versturen <Arrow />
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </div>
  );
};
