import type { Metadata } from "next";
import { SplitHome } from "@/components/SplitHome";
import { HomeMore } from "@/components/HomeMore";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { absolute: "WE MOVE | Verhuisbedrijf & sjouwhulp in de Randstad" },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <h1 className="sr-only">WE MOVE: verhuisbedrijf en sjouwhulp</h1>
      <SplitHome />
      <HomeMore />
      <Footer />
    </>
  );
}
