import { Hero } from "@/components/sections/Hero";
import { BentoCard } from "@/components/sections/BentoCard";
import { ClientList } from "@/components/sections/ClientList";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Building2, Briefcase, Users, Compass } from "lucide-react";
import { company, about, clients } from "@/data/siteConfig";
import { boldPhrase } from "@/lib/text";

export default function HomePage() {
  const featuredClients = clients.filter((c) => c.featured).slice(0, 5);

  return (
    <>
      <Hero
        eyebrow={company.name}
        headline={company.tagline}
        supporting={boldPhrase(about.whoWeAre, "National Enterprise & Workforce (NEW) Advisory Group")}
        primaryCta={{ label: "Hire Us", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Approach", href: "/how-we-work" }}
        stat={company.established}
        statLabel="Established"
      />

      {/* Scrolling ticker of organizations we've worked with */}
      <TrustMarquee clients={clients} />

      {/* Short introduction */}
      <section className="border-b border-[var(--color-border)]">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <p className="max-w-2xl text-balance font-serif text-2xl font-medium leading-relaxed text-[var(--color-ink)] sm:text-3xl">
              {about.whatWeBelieve}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Four ways in — a bento grid instead of a stacked list, so each
          topic reads as its own destination rather than another row. */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <p className="mb-3 text-sm font-semibold label-tag">Explore</p>
            <h2 className="max-w-xl font-serif text-3xl font-medium text-[var(--color-ink)] sm:text-4xl">
              Four ways we create clarity.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <BentoCard
              tone="dark"
              eyebrow="About"
              title="A firm built on accountability."
              description="We integrate into the decision-making process, bringing a bias toward action."
              href="/about"
              icon={<Building2 size={20} strokeWidth={1.75} />}
            />
            <BentoCard
              eyebrow="Services"
              title="Strategic, financial, and structural."
              description="From M&A to financing to how the business is structured."
              href="/services"
              icon={<Briefcase size={20} strokeWidth={1.75} />}
              delay={0.06}
            />
            <BentoCard
              eyebrow="Who We Serve"
              title="Founder-led to institutional."
              description="Startups, nonprofits, licensed firms, and institutions."
              href="/who-we-serve"
              icon={<Users size={20} strokeWidth={1.75} />}
              delay={0.12}
            />
            <BentoCard
              eyebrow="How We Work"
              title="Assess. Strategize. Execute."
              description="A disciplined process, applied with the same rigor every time."
              href="/how-we-work"
              icon={<Compass size={20} strokeWidth={1.75} />}
              delay={0.18}
            />
          </div>
        </Container>
      </section>

      {/* Experience preview */}
      <section className="border-b border-[var(--color-border)]">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-sm font-semibold label-tag">Experience</p>
                <h2 className="font-serif text-3xl font-medium text-[var(--color-ink)] sm:text-4xl">
                  Selected experience
                </h2>
              </div>
            </div>
          </Reveal>
          <ClientList clients={featuredClients} />
          <div className="mt-8">
            <Button href="/experience" variant="ghost">
              View full experience
            </Button>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
