import type { Metadata } from "next";
import localFont from "next/font/local";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/next";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { SplashProvider } from "@/components/Splash";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SITE } from "@/lib/site";
import { JsonLd, ORG_JSONLD } from "@/lib/jsonld";

// Supreme (Fontshare, ITF Free Font License): zelf gehost voor deze website.
const supreme = localFont({
  src: [
    { path: "./fonts/Supreme-Variable.woff2", weight: "100 800", style: "normal" },
    { path: "./fonts/Supreme-VariableItalic.woff2", weight: "100 800", style: "italic" },
  ],
  variable: "--font-supreme",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "WE MOVE | Verhuisbedrijf & sjouwhulp in de Randstad", template: "%s | WE MOVE" },
  description:
    "Verhuizen of extra handen nodig? WE MOVE verhuist particulieren en bedrijven in de Randstad, Bollenstreek en heel Nederland. Vaste prijs vooraf.",
  openGraph: { type: "website", locale: "nl_NL", siteName: "WE MOVE" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={supreme.variable}>
      <body className={clsx("bg-white font-sans text-ink antialiased")}>
        <JsonLd data={ORG_JSONLD} />
        <SmoothScroll />
        <MotionConfig reducedMotion="user">
          <SplashProvider>
            <TopBar />
            <main>{children}</main>
          </SplashProvider>
        </MotionConfig>
        <Analytics />
      </body>
    </html>
  );
}
