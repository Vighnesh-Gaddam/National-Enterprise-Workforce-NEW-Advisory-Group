"use client";

import { motion } from "framer-motion";
import type { Client } from "@/data/siteConfig";
import { ArrowUpRight } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
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
      className={compact ? "grid gap-x-8 gap-y-1 sm:grid-cols-2" : ""}
    >
      {clients.map((client) => (
        <motion.li
          key={client.slug}
          variants={item}
          className="flex items-center justify-between border-t border-[var(--color-border)] py-5 last:border-b"
        >
          <div className="flex items-center gap-4">
            <Avatar name={client.name} src={client.logo} shape="square" className="h-10 w-10 text-xs sm:h-11 sm:w-11" />
            <span className="text-lg font-medium text-[var(--color-ink)]">{client.name}</span>
          </div>
          {client.website && (
            <a
              href={client.website}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
}
