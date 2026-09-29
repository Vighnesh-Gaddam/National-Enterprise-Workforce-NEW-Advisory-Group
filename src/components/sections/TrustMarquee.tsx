import type { Client } from "@/data/siteConfig";

export function TrustMarquee({ clients, label = "Trusted by" }: { clients: Client[]; label?: string }) {
  // Duplicate the track so the CSS animation can loop seamlessly at -50%.
  const track = [...clients, ...clients];

  return (
    <div className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:px-8">
        <p className="shrink-0 text-sm font-semibold label-tag sm:w-32">{label}</p>

        <div className="marquee-mask relative flex-1 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-3">
            {track.map((client, i) => (
              <span
                key={`${client.slug}-${i}`}
                className="whitespace-nowrap rounded-full border border-[var(--color-border)] bg-[var(--color-page)] px-4 py-2 font-serif text-base text-[var(--color-ink)]/75 shadow-sm sm:text-lg"
              >
                {client.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
