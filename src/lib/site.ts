// Centrale bedrijfsgegevens. Pas het hier aan, het komt op de hele site terug.
export const SITE = {
  name: "WE MOVE",
  tagline: "Verhuizen en sjouwhulp in Den Haag",
  url: "https://teamwemove.nl",
  // Nieuw mailadres zodra de mailbox op het nieuwe domein staat.
  email: "office@infowemove.com",
  phones: [
    { label: "+31 6 22 15 90 48", href: "tel:+31622159048" },
    { label: "+31 6 20 66 00 28", href: "tel:+31620660028" },
  ],
  whatsappNumber: "31622159048",
  instagram: "https://www.instagram.com/wemove.insta/",
  linkedin: "https://www.linkedin.com/in/koen-van-egmond-180a59325/",
  kvk: "95852476",
  owners: "Weizenbach & Egmond",
  experience: "6+ jaar ervaring",
} as const;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${SITE.whatsappNumber}${
    text ? `?text=${encodeURIComponent(text)}` : ""
  }`;
