// src/components/sections/TeamMemberCard.tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { TeamMember } from "@/data/siteConfig";
import { Reveal } from "@/components/ui/Reveal";
import { Avatar } from "@/components/ui/Avatar";

export function TeamMemberCard({
  member,
  index = 0,
}: {
  member: TeamMember;
  index?: number;
}) {
  return (
    <Reveal delay={Math.min(index * 0.08, 0.32)}>
      <Link
        href={`/team/${member.slug}`}
        className="group flex flex-col gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-page)] p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/25 hover:shadow-md sm:flex-row sm:items-center sm:gap-8 sm:p-8"
      >
        <Avatar
          name={member.name}
          src={member.photo}
          className="h-16 w-16 shrink-0 text-lg transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20 sm:text-xl"
        />

        <div className="flex min-w-0 flex-1 items-center justify-between gap-6">
          <div className="min-w-0">
            <p className="text-sm font-semibold label-tag">{member.role}</p>
            <h3 className="mt-2 font-serif text-2xl font-medium text-[var(--color-ink)] transition-colors duration-200 group-hover:text-[var(--color-accent)] sm:text-3xl">
              {member.name}
            </h3>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-[var(--color-muted)]">
              {member.shortIntro}
            </p>
          </div>

          <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white sm:flex">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
