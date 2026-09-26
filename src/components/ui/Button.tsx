import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base = "inline-flex items-center gap-2 text-sm font-semibold transition-all";

  const styles = {
    primary:
      "bg-[var(--color-accent)] px-6 py-3 text-white hover:-translate-y-0.5 hover:bg-[var(--color-accent-deep)] hover:shadow-md",
    secondary:
      "border border-[var(--color-accent)]/35 px-6 py-3 text-[var(--color-accent)] hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/5",
    ghost:
      "group px-0 py-0 text-[var(--color-accent)] underline decoration-[var(--color-brass)] decoration-2 underline-offset-4 hover:text-[var(--color-accent-deep)]",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}
