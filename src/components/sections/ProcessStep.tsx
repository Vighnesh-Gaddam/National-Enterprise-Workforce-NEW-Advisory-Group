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
        <div className="grid gap-4 py-14 sm:py-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-2">
            <p className="font-serif text-2xl font-medium text-[var(--color-brass)]">{phase.number}</p>
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
