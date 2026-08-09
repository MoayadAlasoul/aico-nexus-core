import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { Section, SectionHeader, Reveal } from "@/components/ui/section";
import { Panel, Pill } from "@/components/ui/primitives";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { technologyLayers } from "@/data/company";

const title = "Technology Ecosystem — AICO";
const description =
  "AICO's layered technology ecosystem: experience, intelligence, spatial data, platform and governance layers designed to operate as one system.";

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
        title="One architecture across five layers"
        description="Experience, intelligence, spatial data, platform and governance are designed together so capability compounds instead of fragmenting."
      />

      <Section>
        <SectionHeader
          eyebrow="Architecture"
          title="Explore each layer"
          description="Select a layer to see the components we design, integrate and operate."
        />
        <Reveal delay={80} className="mt-12">
          <Tabs defaultValue={technologyLayers[0]?.name}>
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

      <Section className="border-y border-border bg-surface/30">
        <SectionHeader
          eyebrow="Full stack"
          title="The ecosystem at a glance"
          description="A reference model we adapt to each organisation's existing platforms and standards."
        />
        <ol className="mt-14 space-y-4">
          {technologyLayers.map((layer, i) => (
            <Reveal as="li" key={layer.name} delay={i * 60}>
              <Panel interactive className="grid gap-6 lg:grid-cols-[auto_1fr_1.1fr] lg:items-start">
                <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{layer.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {layer.description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2 lg:justify-end">
                  {layer.components.map((c) => (
                    <li key={c}>
                      <Pill>{c}</Pill>
                    </li>
                  ))}
                </ul>
              </Panel>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CtaSection
        title="Integrate with what you already run"
        description="We design for the platforms, identity systems and security standards already in place at your organisation."
        secondary={{ label: "Our approach", to: "/our-approach" }}
      />
    </>
  );
}
