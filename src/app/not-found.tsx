import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container narrow className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="mb-4 text-sm font-semibold label-tag">404</p>
      <h1 className="font-serif text-4xl font-medium text-[var(--color-ink)]">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-[var(--color-muted)]">
        The page you&apos;re looking for may have moved or never existed.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary">
          Back to home
        </Button>
      </div>
    </Container>
  );
}
