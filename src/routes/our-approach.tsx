import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { Section, SectionHeader, Reveal } from "@/components/ui/section";
import { Panel, Pill } from "@/components/ui/primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { approachPhases, principles } from "@/data/company";

const title = "Our Approach — AICO";
const description =
  "AICO's delivery approach: discover, define, design, create, integrate, deliver, and support.";

/** Toggle non-V3 sections (Delivery questions, Principles) for future restoration. */
const SHOW_NON_V3_SECTIONS = false;

export const Route = createFileRoute("/our-approach")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/our-approach" },
    ],
    links: [{ rel: "canonical", href: "/our-approach" }],
  }),
  component: ApproachPage,
});

function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Our approach"
        title="Seven phases from objective to delivered experience"
        description="A structured delivery approach that starts with your objective and coordinates the technologies, content, and specialists required."
        image="/images/our-approach/hero.jpg"
        imageAlt="Advanced technology visualization of Saudi Arabia — AICO approach"
        imageOpacityClass="opacity-100"
        overlayOpacityClass="opacity-50"
      />

      <Section>
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {approachPhases.map((phase, i) => (
            <Reveal as="li" key={phase.step} delay={i * 60}>
              <Panel interactive className="flex h-full flex-col">
                <span className="font-display text-sm tracking-[0.2em] text-primary-bright">
                  {phase.step}
                </span>
                <h2 className="mt-4 font-display text-xl font-semibold">{phase.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {phase.description}
                </p>
                {phase.deliverables.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {phase.deliverables.map((d) => (
                      <li key={d}>
                        <Pill>{d}</Pill>
                      </li>
                    ))}
                  </ul>
                )}
              </Panel>
            </Reveal>
          ))}
        </ol>
      </Section>

      {SHOW_NON_V3_SECTIONS && (
        <Section className="border-y border-border bg-surface/30">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <SectionHeader
              eyebrow="Delivery questions"
              title="How engagements usually run"
              description="Common questions from teams evaluating a first programme with AICO."
            />
            <Reveal delay={100}>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="engage">
                  <AccordionTrigger>How does an engagement start?</AccordionTrigger>
                  <AccordionContent>
                    With a short discovery phase. We map stakeholders, constraints and the outcome
                    that defines success, then propose a scoped architecture and roadmap before any
                    production commitment.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="teams">
                  <AccordionTrigger>Who works on the project?</AccordionTrigger>
                  <AccordionContent>
                    A single integrated team: solution architect, experience designer, engineers and
                    the creative disciplines the work requires. There is no handoff between an agency
                    and a technology vendor.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="handover">
                  <AccordionTrigger>What happens after launch?</AccordionTrigger>
                  <AccordionContent>
                    Documentation, training and an operations runbook are deliverables. From there we
                    either support the system or enable your team to run it independently.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Reveal>
          </div>
        </Section>
      )}

      {SHOW_NON_V3_SECTIONS && (
        <Section>
          <SectionHeader eyebrow="Principles" title="What we hold constant" />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 60}>
                <Panel interactive className="h-full">
                  <h3 className="font-display text-base font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </Panel>
              </Reveal>
            ))}
          </ul>
        </Section>
      )}

      <CtaSection
        title="Start with a discovery phase"
        description="A short, focused engagement that produces an architecture, a roadmap and a clear view of feasibility."
        secondary={{ label: "Technology ecosystem", to: "/technology-ecosystem" }}
      />
    </>
  );
}

