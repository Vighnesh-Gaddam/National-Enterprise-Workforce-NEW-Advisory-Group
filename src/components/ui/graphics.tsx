import type { LucideIcon } from "lucide-react";

/** Subtle repeating dot texture. Pass a unique `id` when using more than once per page. */
export function DotGrid({ id = "dot-grid", className = "" }: { id?: string; className?: string }) {
  return (
    <svg aria-hidden className={className} width="100%" height="100%" preserveAspectRatio="none">
      <defs>
        <pattern id={id} width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1.6" fill="var(--color-brass)" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/** Abstract ascending-bars mark used as the Hero's visual anchor. */
export function GrowthMark({ className = "" }: { className?: string }) {
  const base = 300;
  const width = 60;
  const bars = [
    { x: 40, h: 90, color: "var(--color-accent)" },
    { x: 110, h: 150, color: "var(--color-accent)" },
    { x: 180, h: 115, color: "var(--color-brass)" },
    { x: 250, h: 200, color: "var(--color-accent)" },
  ];

  return (
    <svg viewBox="0 0 350 320" fill="none" className={className} aria-hidden>
      <rect x="0.5" y="0.5" width="349" height="319" stroke="var(--color-border)" />
      <DotGrid id="growth-mark-dots" className="opacity-60" />
      {/* corner bracket, echoing the wordmark's mark */}
      <path d="M24 24 V64 M24 24 H64" stroke="var(--color-brass)" strokeWidth="2" />
      {bars.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={base - b.h}
          width={width}
          height={b.h}
          fill={b.color}
          opacity={i === bars.length - 1 ? 1 : 0.85}
        />
      ))}
      <path
        d={`M${bars[0].x + width / 2} ${base - bars[0].h} L${bars[1].x + width / 2} ${base - bars[1].h} L${bars[2].x + width / 2} ${base - bars[2].h} L${bars[3].x + width / 2} ${base - bars[3].h}`}
        stroke="var(--color-brass)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={bars[3].x + width / 2} cy={base - bars[3].h} r="5" fill="var(--color-brass)" />
    </svg>
  );
}

/** Textured panel with a centered icon — fills empty grid slots with a purposeful visual. */
export function IllustrationPanel({
  icon: Icon,
  label,
  patternId,
  className = "",
}: {
  icon: LucideIcon;
  label?: string;
  patternId: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] ${className}`}
    >
      <DotGrid id={patternId} className="absolute inset-0 opacity-50" />
      <div className="relative flex h-20 w-20 items-center justify-center border border-[var(--color-accent)]/20 bg-[var(--color-page)]">
        <Icon size={32} strokeWidth={1.5} className="text-[var(--color-accent)]" />
      </div>
      {label && (
        <p className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
          {label}
        </p>
      )}
    </div>
  );
}
