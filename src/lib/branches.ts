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
  short: string;
  intro: string;
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
    kicker: "Verhuisbedrijf Den Haag",
    title: ["Wij tillen,", "jij verhuist."],
    short: "Particulier en zakelijk verhuizen, ontruimen en montage. Vaste prijs, geen gedoe.",
    intro:
      "Van studio tot kantoor. Ervaren verhuizers, verzekerd transport en vooraf een vaste prijs.",
    bullets: [
      "6+ jaar ervaring",
      "Verzekerd transport",
      "Geen verborgen kosten",
      "Zeven dagen per week",
    ],
    services: [
      { title: "Particulier verhuizen", text: "Van studio tot gezinswoning, door de week en in het weekend." },
      { title: "Bedrijfsverhuizing", text: "Kantoor of bedrijfspand, met zo min mogelijk stilstand." },
      { title: "Ontruimen", text: "Woning of bedrijfsruimte leeg en bezemschoon." },
      { title: "Montage", text: "Kasten, bedden en meubels uit elkaar en weer in elkaar." },
      { title: "Inpakken", text: "Alleen dozen en materiaal, of volledige inpakhulp." },
      { title: "Verhuisassistentie", text: "Hulp bij zware spullen, met of zonder wagen." },
    ],
    steps: [
      { title: "Aanvraag", text: "Formulier of WhatsApp." },
      { title: "Offerte", text: "Binnen 24 uur een vaste prijs." },
      { title: "Verhuizen", text: "Op de afgesproken dag staan we klaar." },
    ],
    why: [
      "Persoonlijk contact, dagelijks bereikbaar",
      "Eerlijke prijs voor kleine en grote klussen",
      "Flexibele planning, ook in het weekend",
    ],
    faq: [
      { q: "Wat kost een verhuizing?", a: "Dat hangt af van de hoeveelheid spullen, de afstand en of er een lift is. Je krijgt vooraf een vaste, vrijblijvende offerte." },
      { q: "Hoe snel krijg ik een offerte?", a: "Binnen 24 uur. Heb je haast, stuur dan een WhatsApp-bericht." },
      { q: "Werken jullie in het weekend?", a: "Ja, zeven dagen per week, ook 's avonds op afspraak." },
      { q: "Waar verhuizen jullie?", a: "Den Haag en omstreken, en heel Nederland op aanvraag." },
      { q: "Doen jullie ook opslag?", a: "Nee. Voor alles rond het verhuizen zelf kun je wel bij ons terecht." },
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
    title: ["Extra handen,", "elk event."],
    short: "Op- en afbouw, laden en lossen, logistiek en horecapersoneel. Alles uit één hand.",
    intro:
      "Fysiek werk én hospitality-personeel voor evenementen en bedrijven in Den Haag en omstreken.",
    bullets: [
      "Op- en afbouw",
      "Laden en lossen",
      "Logistiek en projectinrichting",
      "Bar- en bedieningspersoneel",
    ],
    services: [
      { title: "Opbouw en afbouw", text: "Podia, meubels, decor en materiaal klaarzetten en opruimen." },
      { title: "Laden en lossen", text: "Vrachtwagens en leveringen snel en zorgvuldig uitladen." },
      { title: "Logistiek op locatie", text: "Materiaal verplaatsen, ook bij last-minute wijzigingen." },
      { title: "Projectinrichting", text: "Kantoren en ruimtes inrichten en meubilair verplaatsen." },
      { title: "Hospitality", text: "Bar- en bedieningspersoneel uit ons hotelschoolnetwerk." },
      { title: "Alles kan", text: "Een klus waar je niet uitkomt? Vraag het gewoon." },
    ],
    steps: [
      { title: "Vertel het ons", text: "Wat, waar en wanneer." },
      { title: "Offerte op maat", text: "Team en planning afgestemd op je klus." },
      { title: "Team staat klaar", text: "Op tijd, klaar om te beginnen." },
    ],
    why: [
      "Logistiek én horecapersoneel in één pakket",
      "Lokaal in Den Haag, snel ter plaatse",
      "Eén aanspreekpunt",
    ],
    faq: [
      { q: "Voor wie is dit?", a: "Organisatoren van evenementen, bedrijven, verhuurders en iedereen die fysiek werk wil uitbesteden." },
      { q: "Kan ik logistiek en personeel samen boeken?", a: "Ja, dat is precies waar we in verschillen: opbouw, afbouw en horecapersoneel bij één partij." },
      { q: "Wat kost het?", a: "Offerte op maat, op basis van aantal mensen, uren en locatie." },
    ],
    cta: "Aanvraag doen",
    whatsapp: "Hoi WE MOVE, ik heb sjouwhulp nodig.",
    videos: [{ src: "/video/reel2.mp4", poster: "/video/reel2.jpg" }],
  },
};

export const other = (k: BranchKey): Branch =>
  BRANCHES[k === "verhuizen" ? "sjouwhulp" : "verhuizen"];
