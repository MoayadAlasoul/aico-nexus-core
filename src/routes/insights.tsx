import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { Section, Reveal } from "@/components/ui/section";
import { Panel, Pill } from "@/components/ui/primitives";
import { Media } from "@/components/ui/media";
import { insights } from "@/data/content";

const title = "Insights — AICO on Immersive Experiences & Content";
const description =
  "Notes and perspectives from AICO on immersive experiences, digital content, experience design and the technologies that enable them.";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Perspectives from our engineering and creative teams"
        description="Notes on building intelligent and immersive systems — what works, what breaks and what we would do differently."
      />

      <Section>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 70}>
              <Panel interactive as="article" className="flex h-full flex-col p-0">
                <Media
                  src={post.image}
                  alt={`${post.title} — abstract technology visual`}
                  className="rounded-none border-0 border-b border-border"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <Pill>{post.category}</Pill>
                    <time
                      dateTime={post.date}
                      className="text-xs uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="mt-4 font-display text-lg font-semibold leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <p className="mt-6 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {post.readingTime}
                  </p>
                </div>
              </Panel>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={120} className="mt-12">
          <p className="text-sm text-muted-foreground">
            Article pages are ready to be added as editorial content is published.
          </p>
        </Reveal>
      </Section>

      <CtaSection
        title="Want to go deeper on a topic?"
        description="Our teams run briefings and technical workshops for organisations evaluating immersive and AI programmes."
        secondary={{ label: "Who we are", to: "/who-we-are" }}
      />
    </>
  );
}
