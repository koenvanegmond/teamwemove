// Alleen echte reviews hier neerzetten (met toestemming van de klant).
// Zolang de lijst leeg is, wordt de reviewsectie niet getoond.
export type Review = {
  name: string;
  text: string;
  source?: string; // bijvoorbeeld "Google"
};

export const REVIEWS: Review[] = [];
