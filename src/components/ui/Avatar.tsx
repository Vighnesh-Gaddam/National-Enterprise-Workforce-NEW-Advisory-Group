function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

// Deterministic brand-safe palette so avatars aren't all identical, without needing
// real photography. Swap in `src` (a real headshot/logo) whenever one is available —
// this is purely a placeholder that upgrades itself once `photo`/`logo` fields are set.
const PALETTES = [
  { bg: "var(--color-accent)", fg: "#FFFFFF" },
  { bg: "var(--color-brass)", fg: "var(--color-accent-deep)" },
  { bg: "var(--color-ink)", fg: "#FFFFFF" },
];

function paletteFor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  return PALETTES[hash % PALETTES.length];
}

export function Avatar({
  name,
  src,
  shape = "circle",
  className = "h-12 w-12 text-sm",
}: {
  name: string;
  src?: string;
  shape?: "circle" | "square";
  className?: string;
}) {
  const shapeClass = shape === "circle" ? "rounded-full" : "";

  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={name} className={`shrink-0 object-cover ${shapeClass} ${className}`} />
    );
  }

  const { bg, fg } = paletteFor(name);

  return (
    <div
      aria-hidden
      className={`flex shrink-0 items-center justify-center font-serif font-medium ${shapeClass} ${className}`}
      style={{ backgroundColor: bg, color: fg }}
    >
      {getInitials(name)}
    </div>
  );
}
