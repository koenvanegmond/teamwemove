import type { Metadata } from "next";
import { BranchHero } from "@/components/BranchHero";
import { BranchContent } from "@/components/BranchContent";
import { Footer } from "@/components/Footer";
import { BRANCHES } from "@/lib/branches";

export const metadata: Metadata = {
  title: "Sjouwhulp en hospitality voor evenementen",
  description:
    "Sjouwhulp in Den Haag: op- en afbouw, laden en lossen, logistiek en projectinrichting, plus bar- en bedieningspersoneel. Alles uit één hand.",
};

export default function Page() {
  const b = BRANCHES.sjouwhulp;
  return (
    <>
      <BranchHero b={b} />
      <BranchContent b={b} />
      <Footer />
    </>
  );
}
