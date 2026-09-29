import Link from "next/link";
import { Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-brass) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
      />

      <Container narrow className="relative py-24">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-page)] shadow-sm">
          <Compass size={26} strokeWidth={1.5} className="text-[var(--color-accent)]" />
        </div>
        <p className="mb-4 text-sm font-semibold label-tag">404</p>
        <h1 className="font-serif text-5xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-6xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-[var(--color-muted)]">
          The page you&apos;re looking for may have moved or never existed. Let&apos;s get you back
          on track.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="/" variant="primary">
            Back to home
          </Button>
          <Link
            href="/contact"
            className="text-sm font-semibold text-[var(--color-accent)] underline decoration-[var(--color-brass)] decoration-2 underline-offset-4 hover:text-[var(--color-accent-deep)]"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </section>
  );
}
