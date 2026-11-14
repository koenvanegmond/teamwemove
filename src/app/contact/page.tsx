import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gratis verhuisofferte of sjouwhulp aanvragen",
  description: "Vraag een gratis verhuisofferte of sjouwhulp aan. Vul in wat je weet, je aanvraag gaat via WhatsApp. Of bel direct.",
  alternates: { canonical: "/contact" },
};

export default function Contact({ searchParams }: { searchParams: { type?: string } }) {
  return (
    <>
      <QuoteForm defaultKind={searchParams.type === "sjouwhulp" ? "sjouwhulp" : "verhuizen"} />
      <Footer />
    </>
  );
}
