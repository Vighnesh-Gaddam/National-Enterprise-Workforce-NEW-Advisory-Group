import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DotGrid } from "@/components/ui/graphics";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-brass) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-6 hidden h-36 w-56 overflow-hidden rounded-2xl opacity-70 sm:block"
      >
        <DotGrid id="page-header-dots" />
      </div>
      <Container className="relative py-20 sm:py-28">
        <Reveal y={14}>
          <p className="mb-5 inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-page)] px-3.5 py-1 text-sm font-semibold label-tag shadow-sm">
            {eyebrow}
          </p>
          <h1 className="max-w-2xl text-balance font-serif text-4xl font-medium leading-[1.15] text-[var(--color-ink)] sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
              {description}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
