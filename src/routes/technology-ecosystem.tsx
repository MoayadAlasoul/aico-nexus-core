import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { Section, SectionHeader, Reveal } from "@/components/ui/section";
import { Panel } from "@/components/ui/primitives";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { technologyLayers, technologyEcosystem } from "@/data/company";

const title = "Technology Ecosystem — AICO Immersive Technology Partners";
const description =
  "AICO works with specialized technology providers and solution partners, coordinating the devices, software, content, production and streaming technologies each immersive project requires.";

export const Route = createFileRoute("/technology-ecosystem")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/technology-ecosystem" },
    ],
    links: [{ rel: "canonical", href: "/technology-ecosystem" }],
  }),
  component: EcosystemPage,
});

function EcosystemPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology ecosystem"
        title="An ecosystem of specialized technologies and partners"
        description={technologyEcosystem.paragraphs[0]}
        image="/images/technology-ecosystem/hero.jpg"
        imageAlt="AICO technology ecosystem — immersive visualisation and digital environments"
      />

      <Section>
        <SectionHeader
          eyebrow="Approach"
          title="Not limited to a single technology or platform"
          description={technologyEcosystem.paragraphs[1]}
        >
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {technologyEcosystem.paragraphs[2]}
          </p>
        </SectionHeader>
      </Section>

      <Section className="border-y border-border bg-surface/30">
        <SectionHeader
          eyebrow="Enabling technologies"
          title="Explore the technologies we coordinate"
          description="These technologies enable the experiences we deliver. Select a category to see the components we specify, configure and integrate with specialist providers."
        />
        <Reveal delay={80} className="mt-12">
          <Tabs defaultValue={technologyLayers[0]!.name}>
            <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
              {technologyLayers.map((layer) => (
                <TabsTrigger
                  key={layer.name}
                  value={layer.name}
                  className="rounded-full border border-border px-4 py-2 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground sm:text-sm"
                >
                  {layer.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {technologyLayers.map((layer) => (
              <TabsContent key={layer.name} value={layer.name} className="mt-8">
                <Panel className="p-7 sm:p-10">
                  <h3 className="font-display text-2xl font-semibold">{layer.name}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {layer.description}
                  </p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {layer.components.map((c) => (
                      <li
                        key={c}
                        className="rounded-lg border border-border bg-elevated/50 px-4 py-3 text-sm"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </Panel>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Partners"
          title="Technology and solution partners"
          description="We work with specialized technology providers and solution partners to support the requirements of immersive projects. Partner logos are displayed only where brand-use authorization is formally established."
        />
        <ul className="mt-14 grid max-w-2xl gap-4 sm:grid-cols-2">
          {technologyEcosystem.partners.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 60}>
              <Panel interactive className="h-full">
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.category}</p>
              </Panel>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaSection
        title="We coordinate the technologies your project needs"
        description="Share the objective, environment and audience, and we will identify the devices, software, content and specialist providers required."
        secondary={{ label: "Our approach", to: "/our-approach" }}
      />
    </>
  );
}
