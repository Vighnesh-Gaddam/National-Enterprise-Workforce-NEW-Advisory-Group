"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GrowthMark } from "@/components/ui/graphics";

interface HeroProps {
  eyebrow?: string;
  headline: string;
  supporting?: React.ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Small figure shown in the corner stat chip, e.g. a founding year. */
  stat?: string;
  statLabel?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const headlineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.15 } },
};

const wordVariant = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: EASE } },
};

export function Hero({
  eyebrow,
  headline,
  supporting,
  primaryCta,
  secondaryCta,
  stat,
  statLabel = "Est.",
}: HeroProps) {
  const words = headline.split(" ");
  const restDelay = words.length * 0.04 + 0.3;

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-accent)] text-white">
      {/* Dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        aria-hidden
        className="mesh-blob-1 pointer-events-none absolute -right-32 -top-40 h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-brass) 0%, transparent 70%)", opacity: 0.45 }}
      />

      {/* Sized to clear the sticky header so the CTAs are always visible without
          scrolling, instead of relying on a huge fixed py- value. */}
      <Container className="relative flex min-h-[calc(100svh-4.25rem)] items-center py-14 sm:min-h-[calc(100svh-5.25rem)] sm:py-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm"
                style={{ color: "var(--color-brass-light)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-brass)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-brass)]" />
                </span>
                {eyebrow}
              </motion.div>
            )}

            <motion.h1
              initial="hidden"
              animate="show"
              variants={headlineContainer}
              className="text-balance font-serif text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl"
            >
              {words.map((word, i) => (
                <motion.span key={i} variants={wordVariant} className="mr-[0.22em] inline-block">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {supporting && (
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: EASE, delay: restDelay }}
                className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
              >
                {supporting}
              </motion.p>
            )}

            {(primaryCta || secondaryCta) && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: EASE, delay: restDelay + 0.1 }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                {primaryCta && (
                  <Button href={primaryCta.href} variant="primary" inverse>
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="secondary" inverse>
                    {secondaryCta.label}
                  </Button>
                )}
              </motion.div>
            )}
          </div>

          {/* Asymmetric visual column — a tilted brass card anchoring a big
              stat, with the growth mark floating on top. Hidden below lg so
              it never competes for the vertical space the CTAs need. */}
          <div className="relative hidden lg:col-span-5 lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
              className="relative aspect-[4/5] w-full max-w-sm rounded-[2rem] bg-[var(--color-brass)] p-8 shadow-2xl"
            >
              <div className="-rotate-3">
                {stat && (
                  <>
                    <p className="font-serif text-7xl font-bold leading-none text-[var(--color-accent-deep)]">
                      {stat}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-deep)]/70">
                      {statLabel}
                    </p>
                  </>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24, rotate: -6 }}
              animate={{ opacity: 1, x: 0, rotate: -4 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
              className="absolute -bottom-8 -left-10 w-44 xl:w-52"
            >
              <GrowthMark className="shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-5 hidden justify-center sm:flex"
        animate={{ y: [0, 6, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={20} className="text-white/60" />
      </motion.div>
    </section>
  );
}
