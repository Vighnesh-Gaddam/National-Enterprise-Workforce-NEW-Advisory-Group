import type { ServiceGroup } from "@/data/siteConfig";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceSection({ service, index }: { service: ServiceGroup; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <Reveal delay={Math.min(index * 0.08, 0.32)}>
      <div id={service.slug} className="border-b border-[var(--color-border)] py-16 sm:py-20">
        <div className={`grid gap-10 lg:grid-cols-12 lg:gap-16 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl font-medium text-[var(--color-ink)]">
              {service.category}
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-[var(--color-muted)]">
              {service.description}
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {service.items.map((item) => (
                <li
                  key={item.name}
                  className="border-t border-[var(--color-border)] py-4 text-base font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
