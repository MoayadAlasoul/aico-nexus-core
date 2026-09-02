import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { Section, Reveal, SectionHeader } from "@/components/ui/section";
import { Panel, Pill, DataIcon } from "@/components/ui/primitives";
import { industries } from "@/data/industries";

const title = "Industries — AICO Immersive Experiences by Sector";
const description =
  "AICO delivers immersive experiences and digital content across aviation, tourism and hospitality, entertainment and experiences, and destination development.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sectors where immersive experiences create engagement"
        description="We focus on sectors where audiences, destinations and stories benefit most from immersive experiences, digital content and interactive environments."
      />

      <Section>
        <SectionHeader
          eyebrow="Sector focus"
          title="Where we operate"
          description="Each sector engagement is shaped by its own audience, environment and operational requirements."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {industries.map((ind, i) => (
            <Reveal as="li" key={ind.slug} delay={i * 60}>
              <Panel interactive className="flex h-full flex-col">
                <span className="inline-flex size-12 items-center justify-center rounded-lg border border-border bg-primary/20">
                  <DataIcon name={ind.icon} />
                </span>
                <h2 className="mt-6 font-display text-xl font-semibold">{ind.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {ind.summary}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {ind.focusAreas.map((f) => (
                    <li key={f}>
                      <Pill tone="primary">{f}</Pill>
                    </li>
                  ))}
                </ul>
              </Panel>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaSection
        title="Not seeing your sector?"
        description="Our capability set transfers across industries. Tell us the problem and we will map it to the right combination of disciplines."
        secondary={{ label: "View solutions", to: "/solutions" }}
      />
    </>
  );
}
