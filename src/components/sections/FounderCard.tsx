import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { TeamMember } from "@/data/siteConfig";
import { Reveal } from "@/components/ui/Reveal";
import { Avatar } from "@/components/ui/Avatar";

export function FounderCard({ member, index = 0 }: { member: TeamMember; index?: number }) {
  return (
    <Reveal delay={Math.min(index * 0.1, 0.3)}>
      <Link
        href={`/team/${member.slug}`}
        className="group grid items-center gap-8 border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-colors hover:bg-[var(--color-page)] hover:border-[var(--color-accent)]/30 sm:p-10 lg:grid-cols-12 lg:gap-12"
      >
        <div className="flex justify-center lg:col-span-3 lg:justify-start">
          <Avatar
            name={member.name}
            src={member.photo}
            className="h-28 w-28 text-3xl sm:h-32 sm:w-32 sm:text-4xl"
          />
        </div>

        <div className="lg:col-span-9">
          <p className="text-sm font-semibold label-tag">{member.role}</p>
          <h2 className="mt-2 font-serif text-3xl font-medium text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)] sm:text-4xl">
            {member.name}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
            {member.shortIntro}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
            Read full profile
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}