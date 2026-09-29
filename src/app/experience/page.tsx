import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ClientList } from "@/components/sections/ClientList";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";
import { clients } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Experience",
  description: "Organizations NEW Advisory Group has worked with.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Organizations we've worked with."
        description="A selection of the founder-led and institutional organizations that have engaged NEW Advisory Group."
      />

      <Container className="py-16 sm:py-20">
        <ClientList clients={clients} />
      </Container>

      <CTA headline="Add your organization to this list." />
    </>
  );
}
