import type { LucideIcon } from "lucide-react";

export function IconBadge({
  icon: Icon,
  className = "",
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center border border-[var(--color-border)] bg-[var(--color-page)] text-[var(--color-accent)] ${className}`}
    >
      <Icon size={20} strokeWidth={1.75} />
    </div>
  );
}
