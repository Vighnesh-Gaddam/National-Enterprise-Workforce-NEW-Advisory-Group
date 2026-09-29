import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategic, financial, and structural advisory for organizations navigating consequential decisions.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Strategic, financial, and structural advisory."
        description="For organizations navigating consequential decisions — organized around the kind of decision in front of you, not a menu of tactics."
      />

      <Container className="py-4 sm:py-8">
        {services.map((service, i) => (
          <ServiceSection key={service.slug} service={service} index={i} />
        ))}
      </Container>

      <CTA headline="Not sure which category fits your situation? Let's talk it through." />
    </>
  );
}
