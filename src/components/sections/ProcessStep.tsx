import type { ProcessPhase } from "@/data/siteConfig";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessStep({
  phase,
  isLast,
  index = 0,
}: {
  phase: ProcessPhase;
  isLast: boolean;
  index?: number;
}) {
  return (
    <Reveal delay={Math.min(index * 0.08, 0.32)}>
      <div className={!isLast ? "border-b border-[var(--color-border)]" : ""}>
        <div className="grid gap-6 py-14 sm:py-20 lg:grid-cols-12 lg:gap-10">
          <div className="relative lg:col-span-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[var(--color-accent)]/20 bg-[var(--color-page)] font-serif text-xl font-semibold text-[var(--color-accent)] shadow-sm">
              {phase.number}
            </div>
            {!isLast && (
              <div className="absolute left-7 top-16 hidden h-32 w-px -translate-x-1/2 bg-gradient-to-b from-[var(--color-border)] to-transparent lg:block" />
            )}
          </div>
          <div className="lg:col-span-10">
            <h3 className="font-serif text-3xl font-medium tracking-tight text-[var(--color-ink)] sm:text-4xl">
              {phase.title}
            </h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
              {phase.description}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
