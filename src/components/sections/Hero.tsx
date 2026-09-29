"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  eyebrow?: string;
  headline: string;
  supporting?: React.ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

const EASE = [0.22, 1, 0.36, 1] as const;

const headlineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.15 } },
};

const wordVariant = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: EASE } },
};

export function Hero({ eyebrow, headline, supporting, primaryCta, secondaryCta }: HeroProps) {
  const words = headline.split(" ");
  const restDelay = words.length * 0.045 + 0.35;

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-accent)] text-white">
      {/* Dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Animated gradient mesh */}
      <div
        aria-hidden
        className="mesh-blob-1 pointer-events-none absolute -right-32 -top-40 h-[32rem] w-[32rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-brass) 0%, transparent 70%)", opacity: 0.5 }}
      />
      <div
        aria-hidden
        className="mesh-blob-2 pointer-events-none absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, #3D4FA8 0%, transparent 70%)", opacity: 0.45 }}
      />

      <Container className="relative flex min-h-[calc(100svh-4.25rem)] items-center py-14 sm:min-h-[calc(100svh-5.25rem)] sm:py-16">
        <div className="max-w-4xl">
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm"
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: restDelay }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-white/70"
            >
              {supporting}
            </motion.p>
          )}

          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: restDelay + 0.1 }}
              className="mt-11 flex flex-wrap items-center gap-4"
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
      </Container>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center sm:flex"
        animate={{ y: [0, 6, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={20} className="text-white/60" />
      </motion.div>
    </section>
  );
}
