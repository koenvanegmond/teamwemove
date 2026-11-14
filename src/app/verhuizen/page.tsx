import type { Metadata } from "next";
import { BranchHero } from "@/components/BranchHero";
import { BranchContent } from "@/components/BranchContent";
import { Footer } from "@/components/Footer";
import { BRANCHES } from "@/lib/branches";
import { JsonLd, faqJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Verhuisbedrijf Randstad & Bollenstreek",
  description:
    "Particulier of zakelijk verhuizen, ontruimen, montage, inpakken en piano's of kunst. Vaste prijs vooraf. Vraag een gratis verhuisofferte aan.",
  alternates: { canonical: "/verhuizen" },
};

export default function Page() {
  const b = BRANCHES.verhuizen;
  return (
    <>
      <JsonLd data={faqJsonLd(b.faq)} />
      <BranchHero b={b} />
      <BranchContent b={b} />
      <Footer />
    </>
  );
}
