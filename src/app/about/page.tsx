import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PullQuote } from "@/components/sections/PullQuote";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";
import { about, company } from "@/data/siteConfig";


export const metadata: Metadata = {
  title: "About",
  description: about.whoWeAre,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Firm"
        title={`Who ${company.name} is, and why we work differently.`}
      />

      <Container narrow className="py-16 sm:py-24">
        <div className="space-y-20">
          <div>
            <p className="mb-4 text-sm font-semibold label-tag">
              Who We Are
            </p>
            <p className="text-balance font-serif text-2xl font-medium leading-relaxed text-[var(--color-ink)] sm:text-3xl">
              {about.whoWeAre}
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold label-tag">
              What We Believe
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-ink)]/90">
              {about.whatWeBelieve}
            </p>
          </div>
        </div>
      </Container>

      <PullQuote
        label={`Established ${about.establishedStatement.year}`}
        quote={about.establishedStatement.statement}
      />

      <Container narrow className="py-16 sm:py-24">
        <p className="mb-4 text-sm font-semibold label-tag">
          Our Approach
        </p>
        <p className="text-lg leading-relaxed text-[var(--color-ink)]/90">
          {about.ourApproach}
        </p>
      </Container>

      <CTA headline="Discuss the structural decisions in front of your organization." />
    </>
  );
}
