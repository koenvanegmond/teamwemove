export const Faq = ({ items }: { items: { q: string; a: string }[] }) => (
  <div className="max-w-3xl divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
    {items.map((i) => (
      <details key={i.q} className="group px-6 py-5">
        <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-ink">
          {i.q}
          <span className="text-2xl leading-none text-brand transition group-open:rotate-45">+</span>
        </summary>
        <p className="mt-3 text-ink/70">{i.a}</p>
      </details>
    ))}
  </div>
);
