import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { Section, Reveal } from "@/components/ui/section";
import { Panel, DataIcon } from "@/components/ui/primitives";
import { Media } from "@/components/ui/media";
import { solutions } from "@/data/solutions";

const title = "What We Deliver — AICO Immersive Experiences & Content";
const description =
  "Eight AICO offerings: immersive experiences, immersive content, CGI and 3D visualization, virtual production, immersive live streaming, domes and digital environments, experience design and technical integration.";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsIndexPage,
});

function SolutionsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="What we deliver"
        title="Immersive experiences, content and digital environments"
        description="Eight core offerings, combined per project around the client's objective, audience and environment."
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
                      What we deliver
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
        title="Most projects combine several of these"
        description="Tell us the objective and we will propose the right combination of experience design, content, technology and delivery."
        secondary={{ label: "Industries", to: "/industries" }}
      />
    </>
  );
}
