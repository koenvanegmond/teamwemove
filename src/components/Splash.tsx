"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TruckLoader } from "./TruckLoader";
import { LogoFull } from "./Logo";

// Laadscherm met rijdende wagen: verschijnt elke keer dat de site geopend wordt.
// Animaties op de pagina wachten tot dit scherm weg is (useSplashDone).
const SPLASH_MS = 1600;
const SplashDone = createContext(false);
export const useSplashDone = () => useContext(SplashDone);

export const SplashProvider = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), SPLASH_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = show ? "hidden" : "";
    if (show) return;
    // pagina-animaties starten terwijl het laadscherm wegschuift
    const t = setTimeout(() => setDone(true), 250);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <SplashDone.Provider value={done}>
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            key="splash"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-white"
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <LogoFull className="h-16 w-auto md:h-20" iconColor="#0E3CA0" textColor="#0B1226" />
            </motion.div>
            <TruckLoader />
            <p className="kicker text-ink/50">We move…</p>
          </motion.div>
        )}
      </AnimatePresence>
    </SplashDone.Provider>
  );
};
