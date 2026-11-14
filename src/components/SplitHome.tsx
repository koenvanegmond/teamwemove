"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { BRANCHES, type Branch, type BranchKey } from "@/lib/branches";
import { Art, Duotone } from "./Art";
import { Arrow, Chevron, Expand } from "./Icons";
import { RevealLines, FadeUp } from "./Reveal";

const ease = [0.76, 0, 0.24, 1] as const;

export const SplitHome = () => {
  const router = useRouter();
  const [hover, setHover] = useState<BranchKey | null>(null);
  const [go, setGo] = useState<BranchKey | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const set = () => setIsDesktop(mq.matches);
    set();
    mq.addEventListener("change", set);
    router.prefetch("/verhuizen");
    router.prefetch("/sjouwhulp");
    return () => mq.removeEventListener("change", set);
  }, [router]);

  const grow = (k: BranchKey) => (go ? (go === k ? 100 : 0.0001) : hover === k ? 1.45 : 1);

  const open = (b: Branch) => {
    if (go) return;
    setGo(b.key);
  };

  return (
    <section className="relative flex h-[100svh] min-h-[560px] flex-col overflow-hidden md:flex-row">
      {(Object.values(BRANCHES) as Branch[]).map((b, idx) => (
        <motion.div
          key={b.key}
          role="link"
          tabIndex={0}
          aria-label={b.kicker}
          onClick={() => open(b)}
          onKeyDown={(e) => e.key === "Enter" && open(b)}
          onMouseEnter={() => setHover(b.key)}
          onMouseLeave={() => setHover(null)}
          className={clsx("group relative min-h-0 min-w-0 cursor-pointer overflow-hidden text-white outline-none", b.colorClass)}
          style={{ flexBasis: 0 }}
          animate={{ flexGrow: grow(b.key) }}
          transition={{ duration: go ? 0.75 : 0.6, ease }}
          onAnimationComplete={() => go === b.key && router.push(b.href)}
        >
          {b.image && <Duotone src={b.image} color={b.color} />}

          <motion.div
            className={clsx(
              "absolute",
              idx === 0
                ? "right-[-6%] top-[14%] h-[42%] w-[42%] opacity-50 md:opacity-100 md:left-1/2 md:right-auto md:top-1/2 md:h-[62vh] md:w-[62vh] md:-translate-x-1/2 md:-translate-y-1/2"
                : "right-[-4%] top-[10%] h-[40%] w-[40%] opacity-50 md:opacity-100 md:bottom-[4%] md:right-[-2%] md:top-auto md:h-[44vh] md:w-[44vh]"
            )}
            animate={{ scale: hover === b.key ? 1.06 : 1, opacity: go && go !== b.key ? 0 : 1 }}
            transition={{ duration: 0.6, ease }}
          >
            <Art kind={b.key} className="h-full w-full opacity-90" />
          </motion.div>

          <motion.div
            className="relative z-10 flex h-full flex-col justify-center px-6 pt-14 md:px-[clamp(28px,5vw,80px)] md:pt-0"
            animate={{ opacity: go && go !== b.key ? 0 : 1 }}
          >
            <div className="max-w-[460px]">
              <FadeUp delay={0.1 + idx * 0.1}>
                <p className="kicker text-white/80">{b.kicker}</p>
              </FadeUp>
              <RevealLines
                as="h2"
                lines={b.title}
                delay={0.2 + idx * 0.1}
                className="display mt-3 text-[clamp(2.4rem,5.4vw,5.2rem)] drop-shadow-sm"
              />
              <FadeUp delay={0.45 + idx * 0.1}>
                <p className="mt-4 hidden max-w-[340px] text-sm leading-relaxed text-white/85 sm:block">{b.short}</p>
                <span className={clsx("pill mt-6 border-white/80 text-white group-hover:bg-white", b.key === "verhuizen" ? "group-hover:text-brand" : "group-hover:text-sun-dark")}>
                  Ontdek meer <Arrow />
                </span>
              </FadeUp>
            </div>
          </motion.div>

          <span className="absolute bottom-6 left-6 z-10 text-xs font-medium tracking-[0.2em] text-white/70 md:left-[clamp(28px,5vw,80px)]">
            {b.number}
          </span>
        </motion.div>
      ))}

      {/* pijltjes in het midden, zoals in de referentie */}
      {!go && isDesktop && (
        <div className="pointer-events-none absolute inset-0 z-20 hidden items-center justify-center md:flex">
          <motion.div
            className="pointer-events-auto flex gap-1 text-white"
            animate={{ x: hover === "verhuizen" ? "9.2vw" : hover === "sjouwhulp" ? "-9.2vw" : 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Link href="/verhuizen" aria-label="Naar verhuizen" className="rounded-full p-1.5 transition hover:bg-white/15"><Chevron left /></Link>
            <Link href="/sjouwhulp" aria-label="Naar sjouwhulp" className="rounded-full p-1.5 transition hover:bg-white/15"><Chevron /></Link>
          </motion.div>
        </div>
      )}

      {!go && (
        <Link
          href="/contact"
          aria-label="Offerte aanvragen"
          className="absolute bottom-6 right-6 z-20 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/25 text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-white hover:text-brand md:bottom-10 md:right-10 md:h-20 md:w-20"
        >
          <Expand className="h-7 w-7" />
        </Link>
      )}
    </section>
  );
};
