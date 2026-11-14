"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TruckLoader } from "./TruckLoader";

// Laadscherm bij het eerste bezoek in een sessie. Kort gehouden (ca. 1,4 s).
export const Splash = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("wm-splash") === "1";
      sessionStorage.setItem("wm-splash", "1");
    } catch {}
    const t = setTimeout(() => setShow(false), seen ? 0 : 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-white"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <TruckLoader />
          <p className="kicker text-ink/50">We move…</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
