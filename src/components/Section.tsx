import clsx from "clsx";
import type { ReactNode } from "react";

export const Section = ({
  id,
  title,
  intro,
  children,
  soft = false,
  className,
}: {
  id?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  soft?: boolean;
  className?: string;
}) => (
  <section id={id} className={clsx("py-16 md:py-24", soft && "bg-brand-soft/60", className)}>
    <div className="container">
      {title && (
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">{title}</h2>
          {intro && <p className="mt-3 text-lg text-ink/60">{intro}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

export const Check = () => (
  <svg viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 10.5l4 4 8-9" />
  </svg>
);

export const Bullets = ({ items, className }: { items: string[]; className?: string }) => (
  <ul className={clsx("space-y-2.5", className)}>
    {items.map((t) => (
      <li key={t} className="flex gap-3 text-ink/80">
        <Check />
        <span>{t}</span>
      </li>
    ))}
  </ul>
);

export const Cards = ({ items }: { items: { title: string; text: string }[] }) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {items.map((i) => (
      <div key={i.title} className="rounded-2xl border border-ink/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md">
        <h3 className="text-lg font-semibold text-ink">{i.title}</h3>
        <p className="mt-2 text-ink/60">{i.text}</p>
      </div>
    ))}
  </div>
);

export const Steps = ({ items }: { items: { title: string; text: string }[] }) => (
  <ol className="grid gap-6 md:grid-cols-3">
    {items.map((s, i) => (
      <li key={s.title} className="rounded-2xl bg-white p-6">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-bold text-white">
          {i + 1}
        </span>
        <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
        <p className="mt-1 text-ink/60">{s.text}</p>
      </li>
    ))}
  </ol>
);
