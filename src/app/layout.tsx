import type { Metadata } from "next";
import localFont from "next/font/local";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/next";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { SITE } from "@/lib/site";

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
  title: { default: "WE MOVE | Verhuizen en sjouwhulp in Den Haag", template: "%s | WE MOVE" },
  description:
    "WE MOVE: verhuisbedrijf in Den Haag met 6+ jaar ervaring. Ook sjouwhulp en hospitality-personeel voor evenementen. Offerte binnen 24 uur.",
  openGraph: { type: "website", locale: "nl_NL", siteName: "WE MOVE" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={supreme.variable}>
      <body className={clsx("bg-white font-sans text-ink antialiased")}>
        <MotionConfig reducedMotion="user">
          <TopBar />
          <main>{children}</main>
        </MotionConfig>
        <Analytics />
      </body>
    </html>
  );
}
