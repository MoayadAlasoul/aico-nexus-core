import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { Section, SectionHeader, Reveal } from "@/components/ui/section";
import { Panel, Pill, DataIcon } from "@/components/ui/primitives";
import { Gallery } from "@/components/ui/gallery";
import { solutions } from "@/data/solutions";
import { projects } from "@/data/content";

const title = "Our Experience — AICO Immersive Experience Capabilities";
const description =
  "The experience AICO brings to immersive projects: experience design, immersive content, CGI and 3D visualization, virtual production, technology coordination and technical delivery.";

export const Route = createFileRoute("/our-experience")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/our-experience" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/our-experience" }],
  }),
  component: OurExperiencePage,
});

function OurExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Our experience"
        title="Experience across immersive technology and digital content"
        description="Our experience spans experience design, immersive content, visualization, production coordination and technical delivery. Client case studies are published here as approvals are completed."
      />

      <Section>
        <SectionHeader
          eyebrow="Areas of experience"
          title="Where our experience is concentrated"
          description="Each project draws on a different combination of these areas, selected around the client's objective."
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 60}>
              <Panel interactive className="flex h-full flex-col">
                <span className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-primary/20">
                  <DataIcon name={s.icon} />
                </span>
                <h2 className="mt-5 font-display text-lg font-semibold">{s.shortTitle}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.tagline}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.capabilities.slice(0, 3).map((c) => (
                    <li key={c}>
                      <Pill>{c}</Pill>
                    </li>
                  ))}
                </ul>
              </Panel>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="border-y border-border bg-surface/30">
        <SectionHeader
          eyebrow="Capability samples"
          title="Illustrative capability samples"
          description="These samples illustrate the types of experiences and content we develop. They are not presented as completed client projects."
        />
        <div className="mt-14">
          <Gallery items={projects} />
        </div>
      </Section>

      <CtaSection
        title="Tell us what you want your audience to experience"
        description="Share the objective, environment and audience. We will identify the technologies, content and specialist capabilities the project needs."
        secondary={{ label: "What we deliver", to: "/solutions" }}
      />
    </>
  );
}
