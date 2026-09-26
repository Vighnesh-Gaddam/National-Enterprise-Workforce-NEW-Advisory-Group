import { Hero } from "@/components/sections/Hero";
import { SectionIntro } from "@/components/sections/SectionIntro";
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
        eyebrow={`${company.name} · Established ${company.established}`}
        headline={company.tagline}
        supporting={boldPhrase(about.whoWeAre, "National Enterprise & Workforce (NEW) Advisory Group")}
        primaryCta={{ label: "Hire Us", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Approach", href: "/how-we-work" }}
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

      {/* Preview sections */}
      <Container>
        <div className="divide-y divide-[var(--color-border)]">
          <Reveal>
            <SectionIntro
              eyebrow="About"
              title="A firm built on accountability, not detached advice."
              description="We integrate into the decision-making process, bringing a bias toward action and outcomes that hold under pressure."
              href="/about"
              linkLabel="About the Firm"
              icon={Building2}
            />
          </Reveal>

          <Reveal>
            <SectionIntro
              eyebrow="Services"
              title="Strategic, financial, and structural advisory."
              description="For organizations navigating consequential decisions — from M&A to financing to how the business is structured."
              href="/services"
              linkLabel="Explore Services"
              icon={Briefcase}
              reverse
            />
          </Reveal>

          <Reveal>
            <SectionIntro
              eyebrow="Who We Serve"
              title="From founder-led startups to institutional organizations."
              description="Startups, 501(c)(3) and 501(c)(4) organizations, professionally licensed firms, and institutions."
              href="/who-we-serve"
              linkLabel="See Who We Serve"
              icon={Users}
            />
          </Reveal>

          <Reveal>
            <SectionIntro
              eyebrow="How We Work"
              title="Assess. Strategize. Execute."
              description="A disciplined process for identifying the highest-leverage decisions and following through on them."
              href="/how-we-work"
              linkLabel="See Our Process"
              icon={Compass}
              reverse
            />
          </Reveal>
        </div>
      </Container>

      {/* Experience preview */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
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
