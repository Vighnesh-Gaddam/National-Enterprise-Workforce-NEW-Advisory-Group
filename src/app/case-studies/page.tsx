import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { listContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Engagement case studies from NEW Advisory Group.",
};

export default function CaseStudiesIndexPage() {
  const studies = listContent("case-studies");

  return (
    <>
      <PageHeader eyebrow="Case Studies" title="How we've worked with organizations like yours." />
      <Container className="py-16 sm:py-20">
        {studies.length === 0 ? (
          <p className="text-[var(--color-muted)]">
            Case studies will be published here as engagements are completed.
          </p>
        ) : (
          <ul>
            {studies.map((study) => (
              <li key={study.slug} className="border-t border-[var(--color-border)] py-8 first:border-t-0">
                <Link href={`/case-studies/${study.slug}`} className="group block">
                  <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)] group-hover:text-[var(--color-accent)]">
                    {study.title}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{study.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
