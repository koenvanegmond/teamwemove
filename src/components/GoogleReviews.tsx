import { GOOGLE_RATING, GOOGLE_REVIEWS_URL, REVIEWS } from "@/lib/reviews";
import { InView } from "./Reveal";
import { GoogleG, ReviewCard, Star } from "./ReviewCard";

// Google-reviews in de stijl van de oude site. Vanaf 3 reviews schuiven ze
// langzaam van links naar rechts (pauze bij hover); daaronder staan ze stil.
export const GoogleReviews = () => {
  const has = REVIEWS.length > 0;
  const moving = REVIEWS.length >= 3;
  const base = moving ? Array.from({ length: Math.ceil(6 / REVIEWS.length) }, () => REVIEWS).flat() : REVIEWS;
  const loop = moving ? [...base, ...base] : base;

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
            <span className="text-sm font-medium text-ink">Bekijk alle reviews op Google</span>
          )}
          <span className="text-ink/40 transition group-hover:translate-x-1 group-hover:text-brand">→</span>
        </a>
      </InView>

      {has &&
        (moving ? (
          <div className="marquee mt-10" style={{ "--marquee-speed": `${Math.max(40, base.length * 9)}s` } as React.CSSProperties}>
            <div className="marquee-track items-start">
              {loop.map((r, i) => (
                <div key={i} aria-hidden={i >= base.length}>
                  <ReviewCard r={r} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <InView delay={0.1} className="container mt-10 flex flex-wrap gap-6">
            {loop.map((r) => (
              <ReviewCard key={r.name} r={r} />
            ))}
          </InView>
        ))}
    </section>
  );
};
