import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function PullQuote({ label, quote }: { label: string; quote: string }) {
  return (
    <section className="py-6 sm:py-10">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-[var(--color-accent)] px-8 py-16 sm:px-14 sm:py-20">
          <div
            aria-hidden
            className="mesh-blob-2 pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, #3D4FA8 0%, transparent 70%)" }}
          />
          <div className="relative">
            <p className="mb-6 text-sm font-semibold label-tag-inverse">{label}</p>
            <p className="text-balance font-serif text-2xl font-medium leading-relaxed text-white sm:text-3xl">
              {quote}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
