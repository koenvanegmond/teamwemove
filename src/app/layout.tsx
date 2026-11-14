import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "WE MOVE | Verhuizen en sjouwhulp in Den Haag",
    template: "%s | WE MOVE",
  },
  description:
    "WE MOVE is het verhuisbedrijf voor Den Haag en omstreken, met 6+ jaar ervaring. Ook sjouwhulp en hospitality-personeel voor evenementen. Vraag een vrijblijvende offerte aan.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "WE MOVE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body className={clsx(dmSans.className, "bg-white text-ink antialiased")}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
