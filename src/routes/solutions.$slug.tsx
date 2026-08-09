import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { Section, SectionHeader, Reveal } from "@/components/ui/section";
import { Panel, Pill } from "@/components/ui/primitives";
import { Media } from "@/components/ui/media";
import { Button } from "@/components/ui/button";
import { solutions, getSolution } from "@/data/solutions";
import type { Solution } from "@/types";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const solution = getSolution(params.slug);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Solution unavailable — AICO" }, { name: "robots", content: "noindex" }],
      };
    }
    const { solution } = loaderData;
    const title = `${solution.title} — AICO`;
    return {
      meta: [
        { title },
        { name: "description", content: solution.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: solution.summary },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/solutions/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/solutions/${params.slug}` }],
    };
  },
  component: SolutionPage,
});

function SolutionPage() {
  const { solution } = Route.useLoaderData() as { solution: Solution };
  const related = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Solution" title={solution.title} description={solution.tagline}>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="hero">
            <Link to="/contact">
              Discuss this solution
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/solutions">All solutions</Link>
          </Button>
        </div>
      </PageHero>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Media
              src={solution.image}
              alt={`${solution.title} — abstract technology visual`}
              ratio="4/3"
              priority
            />
          </Reveal>
          <SectionHeader eyebrow="Overview" title="What we deliver" description={solution.summary}>
            <ul className="mt-8 space-y-3">
              {solution.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary-bright" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </SectionHeader>
        </div>
      </Section>

      <Section className="border-y border-border bg-surface/30">
        <SectionHeader eyebrow="Outcomes" title="Why organisations choose this" />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {solution.outcomes.map((o, i) => (
            <Reveal as="li" key={o.title} delay={i * 60}>
              <Panel interactive className="h-full">
                <h3 className="font-display text-lg font-semibold">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {o.description}
                </p>
              </Panel>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeader eyebrow="Applications" title="Where it is applied" />
          <Reveal delay={80}>
            <ul className="flex flex-wrap gap-3">
              {solution.useCases.map((u) => (
                <li key={u}>
                  <Pill tone="primary" className="px-4 py-2 text-xs">
                    {u}
                  </Pill>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeader eyebrow="Related" title="Explore adjacent solutions" />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {related.map((r, i) => (
            <Reveal as="li" key={r.slug} delay={i * 60}>
              <Link
                to="/solutions/$slug"
                params={{ slug: r.slug }}
                className="group block h-full focus-visible:outline-none"
              >
                <Panel interactive className="h-full">
                  <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-primary-bright">
                    {r.shortTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.tagline}</p>
                </Panel>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaSection
        title={`Ready to scope a ${solution.shortTitle.toLowerCase()} programme?`}
        description="We start with a short discovery phase that produces an architecture, a roadmap and an honest view of feasibility."
        secondary={{ label: "Our approach", to: "/our-approach" }}
      />
    </>
  );
}
