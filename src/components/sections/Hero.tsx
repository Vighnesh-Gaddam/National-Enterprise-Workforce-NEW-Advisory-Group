"use client";

import { motion } from "framer-motion";
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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero({ eyebrow, headline, supporting, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      {/* Subtle brass accent glow — decorative only */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-brass) 0%, transparent 70%)" }}
      />

      <Container className="relative py-18 sm:py-24">
        <motion.div initial="hidden" animate="show" variants={container} className="max-w-3xl">
          {eyebrow && (
            <motion.p variants={item} className="mb-5 text-sm font-semibold label-tag">
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            variants={item}
            className="text-balance font-serif text-4xl font-medium leading-[1.1] text-[var(--color-ink)] sm:text-5xl lg:text-6xl"
          >
            {headline}
          </motion.h1>
          {supporting && (
            <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
              {supporting}
            </motion.p>
          )}
          {(primaryCta || secondaryCta) && (
            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </Button>
              )}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
