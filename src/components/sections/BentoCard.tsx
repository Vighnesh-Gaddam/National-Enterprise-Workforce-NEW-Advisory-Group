"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
// ❌ remove: import type { LucideIcon } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface BentoCardProps {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode; // ✅ was: icon: LucideIcon
  tone?: "dark" | "light";
  delay?: number;
}

export function BentoCard({
  eyebrow,
  title,
  description,
  href,
  icon, // ✅ no longer destructured as `icon: Icon`
  tone = "light",
  delay = 0,
}: BentoCardProps) {
  const dark = tone === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      <Link
        href={href}
        className={`group relative flex h-full min-h-[15rem] flex-col justify-between overflow-hidden rounded-[1.75rem] border p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
          dark
            ? "border-transparent bg-[var(--color-accent)] text-white"
            : "border-[var(--color-border)] bg-[var(--color-page)] text-[var(--color-ink)] hover:border-[var(--color-accent)]/25"
        }`}
      >
        {dark && (
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--color-brass) 0%, transparent 70%)" }}
          />
        )}

        <div className="relative flex items-center justify-between">
          {/* ✅ color now lives on this wrapper; the icon inherits it via
              currentColor (lucide icons stroke with currentColor by default) */}
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
              dark
                ? "border-white/15 bg-white/10 text-[var(--color-brass-light)]"
                : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)]"
            }`}
          >
            {icon}
          </div>
          <ArrowUpRight
            size={18}
            className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
              dark ? "text-white/50" : "text-[var(--color-muted)]"
            }`}
          />
        </div>

        <div className="relative mt-6">
          <p
            className={`text-xs font-semibold uppercase tracking-widest ${
              dark ? "text-[var(--color-brass-light)]" : "label-tag"
            }`}
          >
            {eyebrow}
          </p>
          <h3 className={`mt-2 font-serif text-xl font-medium leading-tight sm:text-2xl ${dark ? "text-white" : "text-[var(--color-ink)]"}`}>
            {title}
          </h3>
          <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-white/70" : "text-[var(--color-muted)]"}`}>
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}