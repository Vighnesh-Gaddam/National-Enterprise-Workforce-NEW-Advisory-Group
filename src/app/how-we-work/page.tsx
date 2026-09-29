import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProcessStep } from "@/components/sections/ProcessStep";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";
import { howWeWork } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "How We Work",
  description: "Assess. Strategize. Execute. A disciplined process for structural decisions.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="How We Work"
        title="A disciplined process, not a stack of deliverables."
        description="Three phases, applied with the same rigor regardless of the organization's size or stage."
      />

      <Container className="py-4 sm:py-8">
        {howWeWork.map((phase, i) => (
          <ProcessStep key={phase.number} phase={phase} isLast={i === howWeWork.length - 1} index={i} />
        ))}
      </Container>

      <CTA headline="Ready to start with an honest assessment?" />
    </>
  );
}
