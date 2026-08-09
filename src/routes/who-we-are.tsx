import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { Section, SectionHeader, Reveal } from "@/components/ui/section";
import { Panel, FeatureCard } from "@/components/ui/primitives";
import { Media } from "@/components/ui/media";
import { company, principles, capabilities } from "@/data/company";

const title = "Who We Are — AICO";
const description =
  "Advanced Imagination ITS Company (AICO) is a Saudi technology company engineering intelligent, immersive and spatial systems for organisations operating at scale.";

export const Route = createFileRoute("/who-we-are")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/who-we-are" },
    ],
    links: [{ rel: "canonical", href: "/who-we-are" }],
  }),
  component: WhoWeArePage,
});

function WhoWeArePage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="A technology company built around imagination and engineering"
        description={company.descriptor}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeader
            eyebrow="Purpose"
            title="Why AICO exists"
            description={company.mission}
          >
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {company.vision}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We operate from {company.country}, working with organisations whose ambitions require
              more than conventional software: national programmes, industrial operators, cultural
              institutions and global brands.
            </p>
          </SectionHeader>
          <Reveal delay={100}>
            <Media
              src="/images/solutions/artificial-intelligence.jpg"
              alt="Abstract network of connected nodes representing applied intelligence"
              ratio="4/3"
            />
          </Reveal>
        </div>
      </Section>

      <Section className="border-y border-border bg-surface/30">
        <SectionHeader
          eyebrow="How we work"
          title="Four principles that govern every engagement"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 60}>
              <Panel interactive className="h-full">
                <h3 className="font-display text-lg font-semibold sm:text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </Panel>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Capabilities"
          title="What our teams do"
          description="Disciplines are combined per engagement rather than sold as fixed packages."
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 60}>
              <FeatureCard icon={c.icon} title={c.title} description={c.description} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaSection
        title="Work with a team that ships"
        description="Bring us a hard problem in intelligence, immersion or visualisation and we will show you a route to a working system."
        secondary={{ label: "Our approach", to: "/our-approach" }}
      />
    </>
  );
}
