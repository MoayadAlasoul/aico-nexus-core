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

/**
 * Approved card content for /solutions only (Point #6).
 * Kept local to this page so detail routes and other sections keep their own copy.
 */
const approvedCardContent: Record<string, { title: string; description: string }> = {
  "immersive-experiences": {
    title: "Immersive Experiences",
    description:
      "Engaging interactive experiences designed to place users closer to the story, environment, product, service, or information being presented.",
  },
  "immersive-content": {
    title: "Immersive Content",
    description:
      "Premium immersive and interactive content for tourism, hospitality, aviation, entertainment, marketing, culture, training, and other relevant applications.",
  },
  "cgi-3d-visualization": {
    title: "CGI & 3D Visualization",
    description:
      "High-quality 3D environments, product visualization, animation, digital assets, and CGI content for interactive and immersive applications.",
  },
  "virtual-production": {
    title: "Virtual Production",
    description:
      "Modern production approaches that combine digital environments, real-time visualization, and creative production workflows.",
  },
  "immersive-live-streaming": {
    title: "Immersive Live Streaming",
    description:
      "Immersive live experiences that extend selected events beyond the physical venue through appropriate capture, streaming, content delivery, and viewing technologies.",
  },
  "immersive-domes-digital-environments": {
    title: "Immersive Domes & Digital Environments",
    description:
      "Large-scale immersive environments and dome experiences developed in different sizes and configurations, including customized immersive content for projection and audiovisual environments.",
  },
  "experience-design-consulting": {
    title: "Experience Design & Consulting",
    description:
      "Discovery, concept development, use-case definition, experience planning, technology selection, and user journey design.",
  },
  "technical-integration": {
    title: "Technical Integration",
    description:
      "Coordination and integration of the hardware, software, content, devices, infrastructure, and specialist technologies required for each project.",
  },
};

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
