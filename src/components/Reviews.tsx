import { REVIEWS } from "@/lib/reviews";
import { Section } from "./Section";

export const Reviews = () => {
  if (REVIEWS.length === 0) return null;
  return (
    <Section title="Wat klanten zeggen">
      <div className="grid gap-4 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure key={r.name + r.text} className="rounded-2xl border border-ink/10 bg-white p-6">
            <blockquote className="text-ink/80">“{r.text}”</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-ink">
              {r.name}
              {r.source && <span className="font-normal text-ink/50"> · {r.source}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
};
