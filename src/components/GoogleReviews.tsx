import { GOOGLE_RATING, GOOGLE_REVIEWS_URL, REVIEWS } from "@/lib/reviews";
import { InView } from "./Reveal";

const Star = ({ on = true }: { on?: boolean }) => (
  <svg viewBox="0 0 20 20" className="h-4 w-4" fill={on ? "#FBBC04" : "#E2E5EA"} aria-hidden="true">
    <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.8L10 1.5z" />
  </svg>
);

const GoogleG = () => (
  <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
  </svg>
);

// Reviews van Google in een band die langzaam van links naar rechts schuift.
export const GoogleReviews = () => {
  const has = REVIEWS.length > 0;
  // genoeg kaarten voor een naadloze lus
  const base = has ? Array.from({ length: Math.max(1, Math.ceil(6 / REVIEWS.length)) }, () => REVIEWS).flat() : [];
  const loop = [...base, ...base];

  return (
    <section className="overflow-hidden bg-white py-20 md:py-24" aria-label="Reviews op Google">
      <InView className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="kicker text-ink/50">Reviews</p>
          <h2 className="display mt-2 text-4xl text-ink md:text-6xl">
            Wat klanten zeggen<span className="text-brand">.</span>
          </h2>
        </div>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-5 py-3 shadow-[0_6px_24px_rgba(11,18,38,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(11,18,38,0.1)]"
        >
          <GoogleG />
          {GOOGLE_RATING ? (
            <span className="flex items-center gap-2 text-sm text-ink">
              <span className="font-bold">{GOOGLE_RATING.score.toFixed(1).replace(".", ",")}</span>
              <span className="flex">{[0, 1, 2, 3, 4].map((i) => <Star key={i} on={i < Math.round(GOOGLE_RATING!.score)} />)}</span>
              <span className="text-ink/50">({GOOGLE_RATING.count})</span>
            </span>
          ) : (
            <span className="text-sm font-medium text-ink">Bekijk onze reviews op Google</span>
          )}
          <span className="text-ink/40 transition group-hover:translate-x-1 group-hover:text-brand">→</span>
        </a>
      </InView>

      {has && (
        <div className="marquee mt-12" style={{ "--marquee-speed": `${Math.max(40, base.length * 9)}s` } as React.CSSProperties}>
          <div className="marquee-track">
            {loop.map((r, i) => (
              <figure
                key={i}
                aria-hidden={i >= base.length}
                className="flex w-[320px] shrink-0 flex-col justify-between rounded-[5px] border-2 border-ink bg-white p-6 shadow-[4px_4px_0_#0b1226] md:w-[380px]"
              >
                <div>
                  <div className="flex">{[0, 1, 2, 3, 4].map((s) => <Star key={s} on={s < (r.stars ?? 5)} />)}</div>
                  <blockquote className="mt-4 line-clamp-5 text-[15px] leading-relaxed text-ink/80">“{r.text}”</blockquote>
                </div>
                <figcaption className="mt-5 flex items-center justify-between text-sm">
                  <span className="font-semibold text-ink">{r.name}</span>
                  <span className="flex items-center gap-1.5 text-ink/40"><GoogleG /> Google</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
