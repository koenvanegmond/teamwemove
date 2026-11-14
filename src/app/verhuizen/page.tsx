import type { Metadata } from "next";
import { BranchHero } from "@/components/BranchHero";
import { BranchContent } from "@/components/BranchContent";
import { Footer } from "@/components/Footer";
import { BRANCHES } from "@/lib/branches";

export const metadata: Metadata = {
  title: "Verhuizen in Den Haag",
  description:
    "Verhuisbedrijf in Den Haag: particulier, zakelijk, ontruimen, montage en inpakken. 6+ jaar ervaring, verzekerd transport, geen verborgen kosten. Offerte binnen 24 uur.",
};

export default function Page() {
  const b = BRANCHES.verhuizen;
  return (
    <>
      <BranchHero b={b} />
      <BranchContent b={b} />
      <Footer />
    </>
  );
}
