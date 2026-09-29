"use client";

import { motion, type Variants } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** Animate as a group and stagger the direct children instead of the wrapper itself. */
  stagger?: boolean;
  staggerAmount?: number;
}

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Fades + slides content up into place the first time it scrolls into view.
 * Respects prefers-reduced-motion automatically via framer-motion's defaults.
 */
export function Reveal({
  children,
  delay = 0,
  y = 20,
  className = "",
  stagger = false,
  staggerAmount = 0.08,
}: RevealProps) {
  if (stagger) {
    const container: Variants = {
      hidden: {},
      show: {
        transition: { staggerChildren: staggerAmount, delayChildren: delay },
      },
    };

    return (
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={container}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Use as a direct child of a `stagger` Reveal to inherit the parent's stagger timing. */
export const revealItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function RevealItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={revealItem} className={className}>
      {children}
    </motion.div>
  );
}
