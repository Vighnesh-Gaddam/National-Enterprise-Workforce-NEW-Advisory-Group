// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation, primaryCTA, company } from "@/data/siteConfig";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[var(--color-page)]/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "border-[var(--color-border)] shadow-[0_2px_16px_-4px_rgba(11,18,64,0.12)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <Link href="/" aria-label={`${company.name} — Home`} className="block">
            <Image
              src="/logo-mark-ink.png"
              alt={company.name}
              width={198}
              height={98}
              priority
              className="h-7 w-auto sm:h-11"
            />
          </Link>
        </motion.div>

        {/* Desktop nav — items drop in one by one */}
        <motion.nav
          className="hidden items-center gap-8 lg:flex"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
          }}
        >
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <motion.div
                key={item.href}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
                }}
              >
                <Link
                  href={item.href}
                  data-active={active}
                  className={`nav-link text-sm font-medium transition-colors ${
                    active ? "text-[var(--color-accent)]" : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>

        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
            className="hidden sm:block"
          >
            <Link
              href={primaryCTA.href}
              className="inline-block rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[var(--color-accent-deep)] hover:shadow-md active:scale-[0.97]"
            >
              {primaryCTA.label}
            </Link>
          </motion.div>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-[var(--color-ink)] lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-page)] lg:hidden"
          >
            <motion.ul
              className="flex flex-col gap-1 px-6 py-6"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {navigation.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: EASE } },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-medium text-[var(--color-ink)]"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                className="mt-3"
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: EASE } },
                }}
              >
                <Link
                  href={primaryCTA.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-[var(--color-accent)] px-4 py-3 text-center text-sm font-semibold text-white active:scale-[0.97]"
                >
                  {primaryCTA.label}
                </Link>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}