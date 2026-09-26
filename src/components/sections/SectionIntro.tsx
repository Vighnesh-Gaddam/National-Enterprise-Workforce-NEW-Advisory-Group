import { Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { IllustrationPanel } from "@/components/ui/graphics";

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
  reverse?: boolean;
  icon?: LucideIcon;
  children?: React.ReactNode;
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "Explore",
  reverse = false,
  icon,
  children,
}: SectionIntroProps) {
  return (
    <div
      className={`grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        {icon && <IconBadge icon={icon} className="mb-5" />}
        <p className="mb-4 text-sm font-semibold label-tag">{eyebrow}</p>
        <h2 className="font-serif text-3xl font-medium leading-tight text-[var(--color-ink)] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>
        <div className="mt-7">
          <Button href={href} variant="ghost">
            {linkLabel}
          </Button>
        </div>
      </div>

      {/* Fill the second column with a visual — either what was passed in, or a
          generated illustration — so the row never collapses to empty white space. */}
      <div className="hidden lg:block">
        {children ?? (
          <IllustrationPanel
            icon={icon ?? Building2}
            label={eyebrow}
            patternId={`section-intro-${slugify(eyebrow)}`}
          />
        )}
      </div>
    </div>
  );
}
