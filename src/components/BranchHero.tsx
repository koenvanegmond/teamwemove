"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { other, type Branch } from "@/lib/branches";
import { whatsappLink } from "@/lib/site";
import { Art, Duotone } from "./Art";
import { Chevron, Whatsapp } from "./Icons";
import { BackButton } from "./BackButton";
import { useSplashDone } from "./Splash";
import { FadeUp, RevealLines } from "./Reveal";

const ease = [0.76, 0, 0.24, 1] as const;

export const BranchHero = ({ b }: { b: Branch }) => {
  const router = useRouter();
  const o = other(b.key);
  const [switching, setSwitching] = useState(false);
  const ready = useSplashDone();
  // Hoverkleur van knoppen = kleur van de andere tak, zodat hij afsteekt.
  const hoverCls = b.key === "verhuizen" ? "btn-coral" : "";

  useEffect(() => {
    router.prefetch(o.href);
  }, [router, o.href]);

  return (
    <section className={clsx("relative flex h-[100svh] min-h-[600px] overflow-hidden text-white", b.colorClass)}>
      {b.image && <Duotone src={b.image} color={b.color} />}

      <div className="relative flex min-w-0 flex-1">
        <div className="absolute right-[-8%] top-[9%] h-[26%] w-[50%] opacity-50 md:opacity-100 md:right-[4%] md:top-1/2 md:h-[66vh] md:w-[66vh] md:-translate-y-1/2">
          <motion.div
          className="h-full w-full"
          initial={{ opacity: 0, x: 60, rotate: 6 }}
          animate={ready ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: 60, rotate: 6 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <Art kind={b.key} className="h-full w-full" />
        </motion.div>
        </div>

        <div className="relative z-10 flex w-full flex-col justify-end px-6 pb-10 pt-24 md:justify-center md:px-[clamp(28px,7vw,120px)] md:pb-0">
          <div className="max-w-[560px]">
            <FadeUp>
              <BackButton tone={b.key === "verhuizen" ? "brand" : "coral"} />
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="kicker mt-8 text-white/80">{b.kicker}</p>
            </FadeUp>
            <RevealLines lines={b.title} className="display mt-3 text-[clamp(2.8rem,6.6vw,6.4rem)]" />
            <FadeUp delay={0.45}>
              <p className="mt-5 max-w-[420px] text-[15px] leading-relaxed text-white/85">{b.intro}</p>
              <ul className="mt-5 grid max-w-[440px] grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-white/90">
                {b.bullets.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="h-1 w-3 rounded-full bg-white/70" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href={`/contact?type=${b.key}`} className={clsx("btn", hoverCls)}>
                  {b.cta}
                </Link>
                <a
                  href={whatsappLink(b.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx("btn btn-ghost", hoverCls)}
                >
                  <Whatsapp className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </FadeUp>
          </div>
        </div>

        <motion.a
          href="#meer"
          aria-label="Ontdek alles"
          className="scrollBtn absolute bottom-6 right-6 z-10 md:bottom-10 md:right-10"
          style={(b.key === "verhuizen" ? { "--scroll-bg": "#E5484D", "--scroll-hover": "#E5484D" } : { "--scroll-bg": "#0E3CA0", "--scroll-hover": "#0E3CA0" }) as React.CSSProperties}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <svg className="svgIcon" viewBox="0 0 384 512" aria-hidden="true">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </motion.a>
      </div>

      {/* strook van de andere tak, klik om te wisselen */}
      <motion.button
        type="button"
        onClick={() => setSwitching(true)}
        aria-label={`Wissel naar ${o.kicker}`}
        className={clsx(
          "group relative z-20 flex w-12 shrink-0 flex-col items-center justify-center gap-6 text-white md:w-[76px]",
          o.colorClass
        )}
        initial={{ x: 80 }}
        animate={{ x: 0 }}
        whileHover={{ width: 110 }}
        transition={{ duration: 0.5, ease }}
      >
        <Chevron className="h-6 w-6 transition group-hover:translate-x-1" />
        <span className="kicker whitespace-nowrap [writing-mode:vertical-rl]">{o.kicker}</span>
      </motion.button>

      {switching && (
        <motion.div
          className={clsx("fixed inset-y-0 right-0 z-[60]", o.colorClass)}
          initial={{ width: 76 }}
          animate={{ width: "100vw" }}
          transition={{ duration: 0.75, ease }}
          onAnimationComplete={() => router.push(o.href)}
        />
      )}
    </section>
  );
};
