import type { Metadata } from "next";
import { BranchHero } from "@/components/BranchHero";
import { BranchContent } from "@/components/BranchContent";
import { Footer } from "@/components/Footer";
import { BRANCHES } from "@/lib/branches";
import { JsonLd, faqJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Sjouwhulp & horecapersoneel inhuren",
  description:
    "Sjouwers en horecapersoneel voor je bedrijf of event: op- en afbouw, laden en lossen, inrichting, bar en bediening. Vraag het gewoon.",
  alternates: { canonical: "/sjouwhulp" },
};

export default function Page() {
  const b = BRANCHES.sjouwhulp;
  return (
    <>
      <JsonLd data={faqJsonLd(b.faq)} />
      <BranchHero b={b} />
      <BranchContent b={b} />
      <Footer />
    </>
  );
}
