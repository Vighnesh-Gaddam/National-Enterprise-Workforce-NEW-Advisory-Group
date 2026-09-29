import Link from "next/link";
import { company, navigation, contact, primaryCTA } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-serif text-xl font-semibold text-[var(--color-accent)]">
              {company.name}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">
              {company.tagline} Established {company.established}.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold label-tag">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-ink)]/80 transition-colors hover:text-[var(--color-accent)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold label-tag">Connect</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-[var(--color-ink)]/80 transition-colors hover:text-[var(--color-accent)]"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <Link href={primaryCTA.href} className="text-sm font-semibold text-[var(--color-accent)]">
                  {primaryCTA.label}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-[var(--color-border)] pt-8 text-xs text-[var(--color-muted)] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Established {company.established}</p>
        </div>
      </div>
    </footer>
  );
}
