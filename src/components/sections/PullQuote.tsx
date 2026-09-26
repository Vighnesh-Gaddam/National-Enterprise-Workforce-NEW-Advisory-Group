import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function PullQuote({ label, quote }: { label: string; quote: string }) {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-accent)]">
      <Container narrow className="py-20 sm:py-28">
        <Reveal>
          <p className="mb-6 text-sm font-semibold label-tag-inverse">{label}</p>
          <p className="text-balance font-serif text-2xl font-medium leading-relaxed text-white sm:text-3xl">
            {quote}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
