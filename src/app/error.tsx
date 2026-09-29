"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #B3403A 0%, transparent 70%)" }}
      />

      <Container narrow className="relative py-24">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#B3403A]/25 bg-[var(--color-page)] shadow-sm">
          <AlertTriangle size={26} strokeWidth={1.5} className="text-[#B3403A]" />
        </div>
        <p className="mb-4 text-sm font-semibold label-tag">Error</p>
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          Something went wrong.
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-[var(--color-muted)]">
          An unexpected error occurred while loading this page. You can try again, or head back to
          the homepage.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-accent-deep)] hover:shadow-lg active:scale-[0.97]"
          >
            Try again
          </button>
          <Button href="/" variant="secondary">
            Back to home
          </Button>
        </div>
      </Container>
    </section>
  );
}
