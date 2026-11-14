// Alleen echte Google-reviews hier neerzetten, letterlijk overgenomen (naam zoals op Google).
// Zolang de lijst leeg is, toont de site alleen de knop naar de Google-reviews.
export type Review = {
  name: string;
  text: string;
  stars?: number; // 1 t/m 5, standaard 5
};

export const GOOGLE_REVIEWS_URL = "https://share.google/3Z1x4IcYpcJcRc5yV";

// Vul in zodra bekend, bijvoorbeeld { score: 5.0, count: 12 }. Leeg = niet tonen.
export const GOOGLE_RATING: { score: number; count: number } | null = null;

export const REVIEWS: Review[] = [];
