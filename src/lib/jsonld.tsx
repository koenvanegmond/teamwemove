import { SITE } from "./site";

// Gestructureerde data voor Google (geen adres, prijzen of reviews: die verzinnen we niet).
export const JsonLd = ({ data }: { data: object }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
  />
);

const svc = (name: string, path: string) => ({
  "@type": "Offer",
  itemOffered: { "@type": "Service", name, url: `${SITE.url}${path}` },
});

export const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MovingCompany",
      "@id": `${SITE.url}/#bedrijf`,
      name: "WE MOVE",
      url: SITE.url,
      telephone: "+31622159048",
      logo: `${SITE.url}/icon.svg`,
      description:
        "Verhuisbedrijf voor particulieren en bedrijven: verhuizen, ontruimen, montage, inpakken en zware of kwetsbare spullen. Ook sjouwhulp en bar- en bedieningspersoneel voor bedrijven en events.",
      founder: [
        { "@type": "Person", name: "Koen" },
        { "@type": "Person", name: "Benoît" },
      ],
      areaServed: [
        { "@type": "City", name: "Katwijk" },
        { "@type": "City", name: "Noordwijk" },
        { "@type": "City", name: "Leiden" },
        { "@type": "City", name: "Wassenaar" },
        { "@type": "City", name: "Den Haag" },
        { "@type": "Place", name: "Bollenstreek" },
        { "@type": "Place", name: "Randstad" },
        { "@type": "Country", name: "Nederland" },
      ],
      contactPoint: { "@type": "ContactPoint", telephone: "+31622159048", contactType: "customer service" },
      sameAs: [SITE.instagram],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Diensten",
        itemListElement: [
          svc("Particulier verhuizen", "/verhuizen"),
          svc("Bedrijfsverhuizing", "/verhuizen"),
          svc("Ontruimen", "/verhuizen"),
          svc("Montage en demontage", "/verhuizen"),
          svc("Inpakken", "/verhuizen"),
          svc("Piano's, marmer en kunst verhuizen", "/verhuizen"),
          svc("Sjouwhulp: op- en afbouw, laden en lossen, logistiek, projectinrichting", "/sjouwhulp"),
          svc("Bar- en bedieningspersoneel", "/sjouwhulp"),
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: "WE MOVE",
      inLanguage: "nl-NL",
      publisher: { "@id": `${SITE.url}/#bedrijf` },
    },
  ],
};

export const faqJsonLd = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
