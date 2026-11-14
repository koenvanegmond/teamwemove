// Alleen echte Google-reviews, letterlijk overgenomen (naam zoals op Google).
// Afgekapte teksten eindigen op "…"; de volledige review staat op Google.
export type Review = {
  name: string;
  text: string;
  stars?: number; // 1 t/m 5, standaard 5
};

export const GOOGLE_REVIEWS_URL = "https://share.google/3Z1x4IcYpcJcRc5yV";

// Vul in zodra bekend, bijvoorbeeld { score: 5.0, count: 12 }. Leeg = niet tonen.
export const GOOGLE_RATING: { score: number; count: number } | null = null;

export const REVIEWS: Review[] = [
  {
    name: "Estherella Carstens",
    text: "Op de heetste dag van het jaar hebben de heren alles keurig verzorgd, zonder enige schade en alles met een glimlach! Ik kan We Move van harte aanbevelen!",
  },
  {
    name: "L. B.",
    text: "De mannen van WE MOVE hebben onze verhuizing erg soepel en stressvrij laten verlopen. Alle meubels waren binnen no-time netjes op de goede plek neergezet…",
  },
];
