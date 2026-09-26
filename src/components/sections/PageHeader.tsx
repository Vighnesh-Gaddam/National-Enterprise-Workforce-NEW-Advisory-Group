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
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 hidden h-40 w-64 opacity-70 sm:block">
        <DotGrid id="page-header-dots" />
      </div>
      <Container className="relative py-20 sm:py-28">
        <Reveal y={14}>
          <p className="mb-5 text-sm font-semibold label-tag">{eyebrow}</p>
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
