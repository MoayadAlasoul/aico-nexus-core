import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { Section, Reveal } from "@/components/ui/section";
import { Panel, DataIcon } from "@/components/ui/primitives";
import { Media } from "@/components/ui/media";
import { solutions } from "@/data/solutions";

const title = "Solutions — AICO";
const description =
  "Seven AICO practices: immersive technology, spatial computing, artificial intelligence, digital content creation, CGI and 3D visualization, immersive live streaming and immersive domes.";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsIndexPage,
});

function SolutionsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Intelligent, immersive and spatial systems"
        description="Seven connected practices delivered by one integrated engineering and creative team — combined around the outcome you need."
      />

      <Section>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 60} className="h-full">
              <Link
                to="/solutions/$slug"
                params={{ slug: s.slug }}
                className="group block h-full focus-visible:outline-none"
              >
                <Panel interactive className="flex h-full flex-col p-0">
                  <Media
                    src={s.image}
                    alt={`${s.title} — abstract technology visual`}
                    className="rounded-none border-0 border-b border-border"
                    imgClassName="group-hover:scale-[1.05]"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      <DataIcon name={s.icon} className="size-4 text-primary-bright" />
                      Solution
                    </span>
                    <h2 className="mt-4 font-display text-xl font-semibold transition-colors group-hover:text-primary-bright">
                      {s.shortTitle}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.summary}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                      Explore
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </div>
                </Panel>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaSection
        title="Most programmes combine several of these"
        description="Tell us the outcome and we will propose the right combination of intelligence, immersion and visualisation."
        secondary={{ label: "Industries", to: "/industries" }}
      />
    </>
  );
}
