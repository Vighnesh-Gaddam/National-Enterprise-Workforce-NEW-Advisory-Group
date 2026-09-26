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
        className="group relative flex flex-col gap-6 border-t border-[var(--color-border)] py-10 transition-colors duration-200 first:border-t-0 hover:bg-[var(--color-surface)] sm:flex-row sm:items-center sm:gap-8 sm:px-4 sm:py-12"
      >
        {/* Hover accent bar */}
        <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-[var(--color-accent)] transition-transform duration-300 ease-out group-hover:scale-y-100" />

        <div className="flex items-center gap-5 sm:contents">
          <Avatar
            name={member.name}
            src={member.photo}
            className="h-16 w-16 text-lg shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20 sm:text-xl"
          />

          {/* Index — visible only on mobile, next to avatar */}
          <span className="font-serif text-sm text-[var(--color-muted)] sm:hidden">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-between gap-6">
          <div className="min-w-0">
            <div className="flex items-baseline gap-3">
              <span className="hidden font-serif text-sm text-[var(--color-muted)] sm:inline">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-semibold label-tag">{member.role}</p>
            </div>

            <h3 className="mt-2 font-serif text-3xl font-medium text-[var(--color-ink)] transition-colors duration-200 group-hover:text-[var(--color-accent)] sm:text-4xl">
              {member.name}
            </h3>

            <p className="mt-3 max-w-lg text-base leading-relaxed text-[var(--color-muted)]">
              {member.shortIntro}
            </p>
          </div>

          <ArrowUpRight
            size={20}
            className="hidden shrink-0 text-[var(--color-muted)] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-accent)] sm:block"
          />
        </div>
      </Link>
    </Reveal>
  );
}