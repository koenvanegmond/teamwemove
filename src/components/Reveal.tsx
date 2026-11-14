"use client";
import { motion } from "framer-motion";
import { useSplashDone } from "./Splash";

// Koptekst die regel voor regel omhoog schuift uit een masker.
export const RevealLines = ({
  lines,
  className = "",
  delay = 0.15,
  as = "h1",
}: {
  lines: string[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2";
}) => {
  const Tag = as;
  const ready = useSplashDone();
  return (
    <Tag className={className}>
      {lines.map((l, i) => (
        <span key={l} className="block overflow-hidden pb-[0.06em] pr-[0.1em]">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={ready ? { y: 0 } : { y: "110%" }}
            transition={{ duration: 0.8, delay: delay + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ready = useSplashDone();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const InView = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);
