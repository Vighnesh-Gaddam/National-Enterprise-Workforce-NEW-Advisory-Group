import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { contact } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Hire Us",
  description: "Start a conversation with NEW Advisory Group.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hire Us"
        title="Let's discuss what you're navigating."
        description="Tell us about your organization and what you're working through. We respond personally to every inquiry."
      />

      <Container narrow className="py-16 sm:py-24">
        <ContactForm />
        <p className="mt-10 border-t border-[var(--color-border)] pt-8 text-sm text-[var(--color-muted)]">
          Prefer email? Reach us directly at{" "}
          <a href={`mailto:${contact.email}`} className="font-medium text-[var(--color-accent)]">
            {contact.email}
          </a>
          .
        </p>
      </Container>
    </>
  );
}
