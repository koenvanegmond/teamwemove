"use client";
import { useState, type FormEvent } from "react";
import clsx from "clsx";
import { whatsappLink } from "@/lib/site";

type Kind = "verhuizen" | "sjouwhulp";

type Field = {
  name: string;
  label: string;
  type?: "text" | "tel" | "date" | "select" | "textarea";
  options?: string[];
  placeholder?: string;
  required?: boolean;
};

const CONFIG: Record<Kind, { intro: string; fields: Field[] }> = {
  verhuizen: {
    intro: "Nieuwe verhuizing",
    fields: [
      { name: "naam", label: "Naam", required: true },
      { name: "telefoon", label: "Telefoonnummer", type: "tel" },
      {
        name: "soort",
        label: "Soort aanvraag",
        type: "select",
        options: [
          "Particulier verhuizen",
          "Bedrijfsverhuizing",
          "Ontruimen",
          "Montage en demontage",
          "Inpakken en uitpakken",
          "Anders",
        ],
      },
      { name: "van", label: "Huidig adres of plaats", required: true },
      { name: "naar", label: "Nieuw adres of plaats" },
      { name: "datum", label: "Gewenste datum", type: "date" },
      { name: "opmerking", label: "Opmerking", type: "textarea", placeholder: "Bijvoorbeeld verdieping, lift, grote meubels" },
    ],
  },
  sjouwhulp: {
    intro: "Sjouwhulp of hospitality",
    fields: [
      { name: "naam", label: "Naam", required: true },
      { name: "organisatie", label: "Organisatie of evenement" },
      { name: "telefoon", label: "Telefoonnummer", type: "tel" },
      {
        name: "soort",
        label: "Wat heb je nodig",
        type: "select",
        options: [
          "Opbouw",
          "Afbouw",
          "Laden en lossen",
          "Logistiek op locatie",
          "Projectinrichting",
          "Hospitality-personeel (bar, bediening)",
          "Anders",
        ],
      },
      { name: "locatie", label: "Locatie", required: true },
      { name: "datum", label: "Datum", type: "date" },
      { name: "aantal", label: "Aantal mensen" },
      { name: "opmerking", label: "Opmerking", type: "textarea" },
    ],
  },
};

const inputCls =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

export const QuoteForm = ({ defaultKind = "verhuizen" }: { defaultKind?: Kind }) => {
  const [kind, setKind] = useState<Kind>(defaultKind);
  const cfg = CONFIG[kind];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [`Hoi WE MOVE, ik wil graag een offerte (${cfg.intro.toLowerCase()}).`];
    for (const f of cfg.fields) {
      const v = String(data.get(f.name) ?? "").trim();
      if (v) lines.push(`${f.label}: ${v}`);
    }
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-6 grid grid-cols-2 gap-2 rounded-xl bg-brand-soft p-1">
        {(["verhuizen", "sjouwhulp"] as Kind[]).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setKind(k)}
            className={clsx(
              "rounded-lg px-3 py-2 text-sm font-semibold transition",
              kind === k ? "bg-white text-brand shadow-sm" : "text-ink/60 hover:text-ink"
            )}
          >
            {k === "verhuizen" ? "Verhuizen" : "Sjouwhulp & Hospitality"}
          </button>
        ))}
      </div>
      <form key={kind} onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
        {cfg.fields.map((f) => (
          <label key={f.name} className={clsx("block", (f.type === "textarea") && "md:col-span-2")}>
            <span className="mb-1.5 block text-sm font-medium text-ink/70">{f.label}</span>
            {f.type === "select" ? (
              <select name={f.name} className={inputCls} defaultValue={f.options?.[0]}>
                {f.options?.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : f.type === "textarea" ? (
              <textarea name={f.name} rows={3} placeholder={f.placeholder} className={inputCls} />
            ) : (
              <input
                name={f.name}
                type={f.type ?? "text"}
                required={f.required}
                placeholder={f.placeholder}
                className={inputCls}
              />
            )}
          </label>
        ))}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1EBE5A] hover:shadow-md active:translate-y-0 md:w-auto"
          >
            Verstuur via WhatsApp
          </button>
          <p className="mt-3 text-sm text-ink/50">
            Je aanvraag opent in WhatsApp, zodat je hem nog kunt nalezen voor je hem verstuurt.
            Je krijgt binnen 24 uur een reactie.
          </p>
        </div>
      </form>
    </div>
  );
};
