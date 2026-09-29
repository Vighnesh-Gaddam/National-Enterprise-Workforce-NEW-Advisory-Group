import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  /** Use on dark backgrounds (e.g. the hero) so secondary/ghost stay legible. */
  inverse?: boolean;
}

export function Button({ href, children, variant = "primary", inverse = false }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full text-sm font-semibold transition-all duration-200";

  const styles = {
    primary: inverse
      ? "bg-white px-6 py-3.5 text-[var(--color-accent)] shadow-lg shadow-black/10 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
      : "bg-[var(--color-accent)] px-6 py-3.5 text-white shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-accent-deep)] hover:shadow-lg active:scale-[0.97]",
    secondary: inverse
      ? "border border-white/25 px-6 py-3.5 text-white hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/5 active:scale-[0.97]"
      : "border border-[var(--color-accent)]/25 px-6 py-3.5 text-[var(--color-accent)] hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 active:scale-[0.97]",
    ghost: `group rounded-none px-0 py-0 underline decoration-2 underline-offset-4 ${
      inverse
        ? "text-white decoration-[var(--color-brass)] hover:text-white/80"
        : "text-[var(--color-accent)] decoration-[var(--color-brass)] hover:text-[var(--color-accent-deep)]"
    }`,
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}
