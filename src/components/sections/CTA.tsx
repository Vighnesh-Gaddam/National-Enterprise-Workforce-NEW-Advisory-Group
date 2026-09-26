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
    <section className="bg-[var(--color-accent)]">
      <Container className="py-20 sm:py-24">
        <Reveal className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <h2 className="max-w-lg font-serif text-3xl font-medium leading-tight text-white sm:text-4xl">
            {headline}
          </h2>
          <Link
            href={primaryCTA.href}
            className="inline-flex items-center gap-2 bg-[var(--color-brass)] px-6 py-3 text-sm font-semibold text-[var(--color-accent-deep)] transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
          >
            {primaryCTA.label}
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
