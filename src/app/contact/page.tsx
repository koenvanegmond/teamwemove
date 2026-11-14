import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Offerte aanvragen",
  description: "Vraag vrijblijvend een offerte aan bij WE MOVE in Den Haag. Reactie binnen 24 uur via WhatsApp.",
};

export default function Contact({ searchParams }: { searchParams: { type?: string } }) {
  return (
    <>
      <QuoteForm defaultKind={searchParams.type === "sjouwhulp" ? "sjouwhulp" : "verhuizen"} />
      <Footer />
    </>
  );
}
