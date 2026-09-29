import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";
import { Avatar } from "@/components/ui/Avatar";
import { team } from "@/data/siteConfig";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: member.name,
    description: member.shortIntro,
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <>
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-16 sm:py-24">
          <Link
            href="/team"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-accent)]"
          >
            <ArrowLeft size={15} /> All Team
          </Link>

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <div className="mb-6 flex items-center gap-5">
                <Avatar
                  name={member.name}
                  src={member.photo}
                  className="h-16 w-16 text-lg sm:h-20 sm:w-20 sm:text-xl"
                />
                <div>
                  <p className="text-sm font-semibold label-tag">
                    {member.role}
                  </p>
                  <h1 className="font-serif text-3xl font-medium text-[var(--color-ink)] sm:text-4xl">
                    {member.name}
                  </h1>
                </div>
              </div>
              <p className="max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
                {member.shortIntro}
              </p>
              {member.linkedinUrl && (
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:opacity-70"
                >
                  <ExternalLink size={15} /> LinkedIn
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-16 sm:py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="space-y-16 lg:col-span-8">
            {member.biography.length > 0 && (
              <div>
                <p className="mb-4 text-sm font-semibold label-tag">
                  Biography
                </p>
                <div className="space-y-4">
                  {member.biography.map((para, i) => (
                    <p key={i} className="text-base leading-relaxed text-[var(--color-ink)]/90">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {member.experience.length > 0 && (
              <div>
                <p className="mb-4 text-sm font-semibold label-tag">
                  Experience
                </p>
                <ul className="space-y-3">
                  {member.experience.map((exp) => (
                    <li
                      key={exp.org}
                      className="rounded-xl border border-[var(--color-border)] bg-[var(--color-page)] p-5 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <p className="font-medium text-[var(--color-ink)]">{exp.org}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">
                        {exp.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-sm lg:col-span-4 lg:p-8">
            {member.education.length > 0 && (
              <div>
                <p className="mb-4 text-sm font-semibold label-tag">
                  Education
                </p>
                <ul className="space-y-4">
                  {member.education.map((edu) => (
                    <li key={edu.institution + edu.program}>
                      <p className="text-sm font-medium text-[var(--color-ink)]">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-[var(--color-muted)]">
                        {edu.program}
                        {edu.distinction ? ` — ${edu.distinction}` : ""}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {member.credentials.length > 0 && (
              <div>
                <p className="mb-4 text-sm font-semibold label-tag">
                  Credentials
                </p>
                <ul className="space-y-2">
                  {member.credentials.map((c) => (
                    <li key={c} className="text-sm text-[var(--color-ink)]/90">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {member.affiliations.length > 0 && (
              <div>
                <p className="mb-4 text-sm font-semibold label-tag">
                  Affiliations
                </p>
                <ul className="space-y-2">
                  {member.affiliations.map((a) => (
                    <li key={a} className="text-sm text-[var(--color-ink)]/90">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>

      <CTA />
    </>
  );
}
