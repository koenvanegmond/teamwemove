// Inhoud van de twee takken. Teksten hier aanpassen.
export type BranchKey = "verhuizen" | "sjouwhulp";

export type Branch = {
  key: BranchKey;
  href: string;
  number: string;
  color: string; // achtergrondkleur
  colorClass: string;
  textOnColor: string;
  kicker: string;
  title: [string, string];
  homeBullets: string[];
  bullets: string[];
  services: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  why: string[];
  faq: { q: string; a: string }[];
  cta: string;
  whatsapp: string;
  // Zet een foto in /public/images en vul het pad in, bv. "/images/verhuizen.jpg".
  image?: string;
  // Achtergrondvideo's op de homepage (in /public/video), spelen na elkaar af.
  videos?: { src: string; poster: string }[];
};

export const BRANCHES: Record<BranchKey, Branch> = {
  verhuizen: {
    key: "verhuizen",
    href: "/verhuizen",
    number: "01",
    color: "#0E3CA0",
    colorClass: "bg-brand",
    textOnColor: "text-white",
    kicker: "Verhuisbedrijf",
    title: ["Jong team.", "Ervaren handen."],
    homeBullets: ["Particulier en zakelijk", "Vaste prijs vooraf", "Heel Nederland"],
    bullets: ["Particulier en zakelijk", "Vaste prijs vooraf", "Netjes en zorgvuldig", "Heel Nederland"],
    services: [
      { title: "Particulier verhuizen", text: "Van appartement tot gezinswoning." },
      { title: "Bedrijfsverhuizing", text: "Kantoor of bedrijfspand." },
      { title: "Zware en kwetsbare spullen", text: "Piano's, marmer en kunst." },
      { title: "Ontruimen", text: "Alles leeg." },
      { title: "Montage", text: "Uit elkaar en weer in elkaar." },
      { title: "Inpakken", text: "Materiaal of inpakhulp." },
    ],
    steps: [
      { title: "Aanvraag", text: "WhatsApp, bellen of formulier." },
      { title: "Prijs", text: "Vooraf, zonder verrassingen." },
      { title: "Verhuisdag", text: "Wij tillen. Jij wijst aan." },
    ],
    why: [
      "Denken met je mee",
      "Netjes, door onze hospitality-achtergrond",
      "Transparant, geen verrassingen",
    ],
    faq: [
      { q: "Wat kost een verhuizing?", a: "Meestal een vaste prijs vooraf. Per uur kan ook." },
      { q: "Hoe snel krijg ik een prijs?", a: "Snel. Stuur een WhatsApp of bel." },
      { q: "Jullie zijn jong. Zijn jullie wel ervaren?", a: "Ja. We verhuizen al jaren, ook piano's, marmer en kunst." },
      { q: "Waar verhuizen jullie?", a: "Vooral in de Randstad en Bollenstreek. Heel Nederland kan ook." },
      { q: "Doen jullie opslag?", a: "Nee. Wel alles rond het verhuizen zelf." },
    ],
    cta: "Offerte aanvragen",
    whatsapp: "Hoi WE MOVE, ik wil graag verhuizen.",
    videos: [{ src: "/video/reel1.mp4", poster: "/video/reel1.jpg" }],
  },
  sjouwhulp: {
    key: "sjouwhulp",
    href: "/sjouwhulp",
    number: "02",
    color: "#E5484D",
    colorClass: "bg-coral",
    textOnColor: "text-white",
    kicker: "Sjouwhulp & Hospitality",
    title: ["Extra handen.", "Hotelschool\u00ADniveau."],
    homeBullets: ["Op- en afbouw", "Logistiek en inrichting", "Bar- en bedieningspersoneel"],
    bullets: ["Op- en afbouw", "Logistiek en inrichting", "Bar- en bedieningspersoneel", "Voor bedrijven en events"],
    services: [
      { title: "Opbouw en afbouw", text: "Events, beurzen en kantoren." },
      { title: "Laden en lossen", text: "Vrachtwagens en busjes." },
      { title: "Logistiek op locatie", text: "Alles op de juiste plek." },
      { title: "Projectinrichting", text: "Werkplekken en meubilair." },
      { title: "Bar en bediening", text: "Gastvrij horecapersoneel." },
      { title: "Iets anders?", text: "Vraag het gewoon." },
    ],
    steps: [
      { title: "Vertel het ons", text: "Wat, waar en wanneer." },
      { title: "Plan op maat", text: "Team en planning voor jouw klus." },
      { title: "Uitvoering", text: "Jij host. Wij sjouwen." },
    ],
    why: [
      "Op de hotelschool veel events opgebouwd en gepland",
      "Sjouwen én bedienen",
      "Denken mee, klant voorop",
    ],
    faq: [
      { q: "Voor wie is dit?", a: "Voor kleine en middelgrote bedrijven, en iedereen met een event." },
      { q: "Hebben jullie ervaring met events?", a: "Ja. Op de hotelschool hebben we veel evenementen opgebouwd en gepland." },
      { q: "Kan ik sjouwers en horecapersoneel samen boeken?", a: "Ja, in één aanvraag." },
      { q: "Wat kost het?", a: "Je krijgt vooraf een prijs, op basis van mensen en uren." },
    ],
    cta: "Aanvraag doen",
    whatsapp: "Hoi WE MOVE, ik heb sjouwhulp nodig.",
    videos: [{ src: "/video/reel2.mp4", poster: "/video/reel2.jpg" }],
  },
};

export const other = (k: BranchKey): Branch =>
  BRANCHES[k === "verhuizen" ? "sjouwhulp" : "verhuizen"];

// Schaal voor grote koppen: lange woorden (bv. "Hotelschool") passen dan nog in het vlak.
export const titleScale = (lines: string[], max = 9) => {
  const longest = Math.max(...lines.join(" ").split(/[\s\u00AD]+/).map((w) => w.replace(/[.,]/g, "").length));
  return Math.min(1, max / longest);
};
