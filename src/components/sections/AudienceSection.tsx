import type { Audience } from "@/data/siteConfig";
import { Reveal } from "@/components/ui/Reveal";

export function AudienceSection({ audience, index }: { audience: Audience; index: number }) {
  return (
    <Reveal delay={Math.min(index * 0.08, 0.32)}>
      <div className="grid gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-page)] p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-9 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <h3 className="font-serif text-2xl font-medium text-[var(--color-ink)]">
            {audience.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
            {audience.description}
          </p>
        </div>
        <div className="lg:col-span-8">
          <p className="text-base leading-relaxed text-[var(--color-ink)]/85">
            {audience.howWeHelp}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
