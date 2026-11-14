import type { Metadata } from "next";
import { Jost } from "next/font/google";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/next";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { SITE } from "@/lib/site";

const jost = Jost({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-jost" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "WE MOVE | Verhuizen en sjouwhulp in Den Haag", template: "%s | WE MOVE" },
  description:
    "WE MOVE: verhuisbedrijf in Den Haag met 6+ jaar ervaring. Ook sjouwhulp en hospitality-personeel voor evenementen. Offerte binnen 24 uur.",
  openGraph: { type: "website", locale: "nl_NL", siteName: "WE MOVE" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={jost.variable}>
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
