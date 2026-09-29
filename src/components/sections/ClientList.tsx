"use client";

import { motion } from "framer-motion";
import type { Client } from "@/data/siteConfig";
import { ArrowUpRight } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

export function ClientList({ clients, compact = false }: { clients: Client[]; compact?: boolean }) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={container}
      className={compact ? "grid gap-3 sm:grid-cols-2" : "space-y-3"}
    >
      {clients.map((client) => (
        <motion.li
          key={client.slug}
          variants={item}
          className="group flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-page)] px-5 py-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/25 hover:shadow-md"
        >
          <div className="flex min-w-0 items-center gap-4">
            <Avatar name={client.name} src={client.logo} shape="square" className="h-10 w-10 shrink-0 text-xs sm:h-11 sm:w-11" />
            <span className="truncate text-lg font-medium text-[var(--color-ink)]">{client.name}</span>
          </div>
          {client.website && (
            <a
              href={client.website}
              target="_blank"
              rel="noreferrer"
              className="ml-4 shrink-0 text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent)]"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
}
