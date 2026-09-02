import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { Section, SectionHeader, Reveal, Eyebrow } from "@/components/ui/section";
import { Panel, FeatureCard } from "@/components/ui/primitives";
import { Media } from "@/components/ui/media";
import { company, whoWeAreParagraphs, values, capabilities } from "@/data/company";

const title = "Who We Are — AICO Immersive Technology Company in Jeddah";
const description =
  "Advanced Imagination ITS Company (AICO) is a Saudi technology company established in December 2020 in Jeddah, specialising in immersive technology and digital experience development.";

export const Route = createFileRoute("/who-we-are")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/who-we-are" },
      { name: "twitter:card", content: "summary_large_image" },
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
        title="An immersive technology and digital experience company"
        description={whoWeAreParagraphs[0]}
      />

      <Section>
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeader
            eyebrow="About AICO"
            title="What we do"
            description={whoWeAreParagraphs[1]}
          >
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {whoWeAreParagraphs[2]}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {whoWeAreParagraphs[3]}
            </p>
          </SectionHeader>
          <Reveal delay={100}>
            <Media
              src="/images/solutions/immersive-technology.jpg"
              alt="Abstract immersive environment representing digital experience development"
              ratio="4/3"
            />
          </Reveal>
        </div>
      </Section>

      <Section className="border-y border-border bg-surface/30">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Panel className="h-full">
              <Eyebrow>Vision</Eyebrow>
              <p className="mt-4 text-pretty font-display text-lg leading-snug sm:text-xl">
                {company.vision}
              </p>
            </Panel>
          </Reveal>
          <Reveal delay={80}>
            <Panel className="h-full">
              <Eyebrow>Mission</Eyebrow>
              <p className="mt-4 text-pretty font-display text-lg leading-snug sm:text-xl">
                {company.mission}
              </p>
            </Panel>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Values" title="Seven values that guide how we work" />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 60}>
              <Panel interactive className="h-full">
                <h2 className="font-display text-lg font-semibold sm:text-xl">{v.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </Panel>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeader
          eyebrow="Capabilities"
          title="What our teams do"
          description="Capabilities are combined per project rather than sold as fixed packages."
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
        title="Start with your objective"
        description="Tell us what you want your audience to experience and we will identify the technologies, content and specialists required to deliver it."
        secondary={{ label: "Our approach", to: "/our-approach" }}
      />
    </>
  );
}
