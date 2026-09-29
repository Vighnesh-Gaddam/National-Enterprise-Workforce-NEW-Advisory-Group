import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";
import { whoWeServe } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "From founder-led startups to institutional organizations — the kinds of organizations NEW Advisory Group partners with.",
};

export default function WhoWeServePage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Serve"
        title="Organizations at different stages, held to the same standard."
        description="From founder-led startups to institutional organizations — the work changes, the discipline doesn't."
      />

      <Container className="space-y-5 py-14 sm:space-y-6 sm:py-20">
        {whoWeServe.map((audience, i) => (
          <AudienceSection key={audience.slug} audience={audience} index={i} />
        ))}
      </Container>

      <CTA headline="Recognize your organization here? Let's talk." />
    </>
  );
}
