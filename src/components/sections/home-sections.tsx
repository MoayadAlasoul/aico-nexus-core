import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader, Reveal, Eyebrow } from "@/components/ui/section";
import { FeatureCard, Panel, Pill, DataIcon } from "@/components/ui/primitives";
import { Media } from "@/components/ui/media";
import { Gallery } from "@/components/ui/gallery";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import { capabilities, technologyLayers, technologyEcosystem, company } from "@/data/company";
import { projects, partners, insights } from "@/data/content";

export function WhoWeAreSection() {
  return (
    <Section id="who-we-are">
      <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeader
          eyebrow="Who we are"
          title="A Saudi company specialising in immersive technology"
          description={company.descriptor}
        >
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            We help organizations explore and implement new ways to engage customers, enhance
            experiences, communicate ideas, create content, and bring concepts to life —
            combining creativity, technology, storytelling, content production, technical
            coordination and project delivery.
          </p>
          <Button asChild variant="outline" size="lg" className="mt-8">
            <Link to="/who-we-are">
              About AICO
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </SectionHeader>

        <Reveal delay={120} className="grid gap-5 sm:grid-cols-2">
          <Panel className="sm:col-span-2">
            <Eyebrow>Mission</Eyebrow>
            <p className="mt-4 text-pretty font-display text-lg leading-snug sm:text-xl">
              {company.mission}
            </p>
          </Panel>
          <Panel>
            <Eyebrow>Vision</Eyebrow>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{company.vision}</p>
          </Panel>
          <Panel>
            <Eyebrow>Based in</Eyebrow>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Jeddah, Kingdom of Saudi Arabia. Established {company.established}.
            </p>
          </Panel>
        </Reveal>
      </div>
    </Section>
  );
}

export function CapabilitiesSection() {
  return (
    <Section className="border-y border-border bg-surface/30">
      <SectionHeader
        eyebrow="Core capabilities"
        title="Creativity, technology and delivery in one team"
        description="Every project draws on the same capability set, assembled around the objective you need to achieve."
      />
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <Reveal as="li" key={c.title} delay={i * 60}>
            <FeatureCard icon={c.icon} title={c.title} description={c.description} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export function SolutionsSection() {
  return (
    <Section id="solutions">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow="What we deliver"
          title="Eight core offerings"
          description="From immersive experiences and content to visualization, production and technical integration — combined per project."
          className="max-w-2xl"
        />
        <Reveal delay={100}>
          <Button asChild variant="outline">
            <Link to="/solutions">
              What we deliver
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <h3 className="mt-4 font-display text-xl font-semibold transition-colors group-hover:text-primary-bright">
                    {s.shortTitle}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.tagline}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
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
  );
}

export function IndustriesSection() {
  return (
    <Section className="border-y border-border bg-surface/30">
      <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <SectionHeader
          eyebrow="Industries"
          title="Sectors where immersive experiences change engagement"
          description="We focus on sectors where audiences, destinations and stories benefit most from immersive experiences and digital content."
        >
          <Button asChild variant="outline" className="mt-8">
            <Link to="/industries">
              Explore industries
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </SectionHeader>

        <ul className="grid gap-4 sm:grid-cols-2">
          {industries.map((ind, i) => (
            <Reveal as="li" key={ind.slug} delay={i * 50}>
              <Panel interactive className="flex h-full items-start gap-4 p-5">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-primary/20">
                  <DataIcon name={ind.icon} className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-base font-semibold">{ind.name}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                    {ind.summary}
                  </span>
                </span>
              </Panel>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function TechnologyEcosystemSection() {
  return (
    <Section id="technology-ecosystem">
      <SectionHeader
        eyebrow="Technology ecosystem"
        title="Coordinated technologies, not a single platform"
        description={technologyEcosystem.paragraphs[1]!}
      />
      <ol className="mt-14 space-y-4">
        {technologyLayers.map((layer, i) => (
          <Reveal as="li" key={layer.name} delay={i * 60}>
            <Panel interactive className="grid gap-6 lg:grid-cols-[auto_1fr_1.1fr] lg:items-start">
              <span className="font-display text-sm text-muted-foreground">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold sm:text-xl">{layer.name}</h3>
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
      <Reveal delay={120} className="mt-10">
        <Button asChild variant="outline">
          <Link to="/technology-ecosystem">
            See the full ecosystem
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </Reveal>
    </Section>
  );
}

export function SelectedWorkSection() {
  return (
    <Section id="work" className="border-y border-border bg-surface/30">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow="Our experience"
          title="Capability samples"
          description="Illustrative examples of the experiences and content we develop. Client case studies will be published as approvals complete."
          className="max-w-2xl"
        />
        <Reveal delay={100}>
          <Button asChild variant="outline">
            <Link to="/our-experience">
              Our experience
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </div>
      <div className="mt-14">
        <Gallery items={projects} />
      </div>
    </Section>
  );
}

export function PartnersSection() {
  return (
    <Section>
      <SectionHeader
        align="center"
        eyebrow="Ecosystem"
        title="Technology and solution partners"
        description="We work with specialized technology providers and solution partners to support the requirements of immersive projects."
      />
      <ul className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
        {partners.map((p, i) => (
          <Reveal as="li" key={p.id} delay={i * 60}>
            <div className="surface-panel flex h-24 flex-col items-center justify-center gap-1.5 rounded-lg px-3 text-center">
              <span className="font-display text-sm font-semibold">{p.name}</span>
              <span className="text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                {p.category}
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export function InsightsSection() {
  return (
    <Section id="insights" className="border-t border-border bg-surface/30">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow="Insights"
          title="Perspectives from our teams"
          description="Notes and points of view on immersive experiences, digital content and experience design."
          className="max-w-2xl"
        />
        <Reveal delay={80}>
          <Button asChild variant="outline">
            <Link to="/insights">
              All insights
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </div>
      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {insights.map((post, i) => (
          <Reveal as="li" key={post.slug} delay={i * 70}>
            <Panel interactive as="article" className="flex h-full flex-col p-0">
              <Media
                src={post.image}
                alt={`${post.title} — abstract technology visual`}
                className="rounded-none border-0 border-b border-border"
              />
              <div className="flex flex-1 flex-col p-6">
                <Pill>{post.category}</Pill>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug">
                  {post.title}
                </h3>
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
    </Section>
  );
}
