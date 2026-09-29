// src/app/team/page.tsx
import type { Metadata } from "next";
import { FounderCard } from "@/components/sections/FounderCard";
import { TeamMemberCard } from "@/components/sections/TeamMemberCard";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { team } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Team",
  description: "The people behind NEW Advisory Group.",
};

export default function TeamPage() {
  const founders = team.filter((m) => m.role.toLowerCase().includes("founder"));
  const others = team.filter((m) => !m.role.toLowerCase().includes("founder"));

  return (
    <>
      {/* Slim, compact intro — kept short on purpose so it doesn't crowd out the
          people below it. */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="flex flex-col gap-3 py-10 sm:flex-row sm:items-end sm:justify-between sm:py-12">
          <Reveal y={10}>
            <p className="text-sm font-semibold label-tag">Team</p>
            <h1 className="mt-1 font-serif text-2xl font-medium text-[var(--color-ink)] sm:text-3xl">
              The people behind the firm.
            </h1>
          </Reveal>
          <Reveal y={10} delay={0.08}>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--color-muted)] sm:text-right">
              NEW Advisory Group&apos;s judgment is shaped by the people doing the work.
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        {founders.length > 0 && (
          <div className={others.length > 0 ? "mb-16 sm:mb-20" : ""}>
            <Reveal>
              <p className="mb-6 text-sm font-semibold label-tag">
                {founders.length > 1 ? "Founders" : "Founder"}
              </p>
            </Reveal>
            <div className="space-y-6">
              {founders.map((member, i) => (
                <FounderCard key={member.slug} member={member} index={i} />
              ))}
            </div>
          </div>
        )}

        {others.length > 0 && (
          <div>
            <Reveal>
              <p className="mb-6 text-sm font-semibold label-tag">Advisors &amp; Team</p>
            </Reveal>
            <div className="space-y-4">
              {others.map((member, i) => (
                <TeamMemberCard key={member.slug} member={member} index={i} />
              ))}
            </div>
          </div>
        )}
      </Container>

      <CTA headline="Work directly with our team on your next decision." />
    </>
  );
}
