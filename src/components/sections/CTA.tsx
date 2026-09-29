import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { primaryCTA } from "@/data/siteConfig";

export function CTA({
  headline = "Let's discuss what you're navigating.",
}: {
  headline?: string;
}) {
  return (
    <section className="py-6 sm:py-10">
      <Container>
        <Reveal
          className="relative isolate overflow-hidden rounded-[2rem] bg-[var(--color-accent)] px-8 py-16 sm:px-14 sm:py-20"
        >
          <div
            aria-hidden
            className="mesh-blob-1 pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--color-brass) 0%, transparent 70%)" }}
          />
          <div className="relative flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <h2 className="max-w-lg font-serif text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              {headline}
            </h2>
            <Link
              href={primaryCTA.href}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brass)] px-7 py-3.5 text-sm font-semibold text-[var(--color-accent-deep)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
            >
              {primaryCTA.label}
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
