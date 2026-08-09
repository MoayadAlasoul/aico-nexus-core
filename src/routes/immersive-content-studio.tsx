import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { Section, SectionHeader, Reveal } from "@/components/ui/section";
import { Panel } from "@/components/ui/primitives";
import { Media } from "@/components/ui/media";
import { Gallery } from "@/components/ui/gallery";
import { studioServices } from "@/data/company";
import { projects } from "@/data/content";

const title = "Immersive Content Studio — AICO";
const description =
  "AICO's immersive content studio produces fulldome film, virtual production, real-time interactive experiences, animation and spatial audio.";

export const Route = createFileRoute("/immersive-content-studio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/immersive-content-studio" },
    ],
    links: [{ rel: "canonical", href: "/immersive-content-studio" }],
  }),
  component: StudioPage,
});

function StudioPage() {
  return (
    <>
      <PageHero
        eyebrow="Immersive Content Studio"
        title="A studio engineered for immersive formats"
        description="Content for domes, volumes, venues and broadcast is authored differently. Our studio is built around those formats rather than adapted to them."
      />

      <Section>
        <Reveal>
          <Media
            src="/images/studio/stage.jpg"
            alt="Virtual production stage with a large curved LED wall displaying an abstract landscape"
            ratio="21/9"
            priority
          />
        </Reveal>
      </Section>

      <Section className="border-y border-border bg-surface/30">
        <SectionHeader
          eyebrow="Studio services"
          title="Capabilities under one roof"
          description="Direction, production, engineering and finishing share a single pipeline, which keeps quality consistent and schedules honest."
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studioServices.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 60}>
              <Panel interactive className="h-full">
                <h2 className="font-display text-lg font-semibold">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </Panel>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Gallery"
          title="Capability samples"
          description="Illustrative production samples. Client work will be published here as approvals complete."
        />
        <div className="mt-14">
          <Gallery items={projects} />
        </div>
      </Section>

      <CtaSection
        title="Bring a format we haven't built yet"
        description="Dome, volume, projection-mapped facade or something entirely new — we prototype before we promise."
        secondary={{ label: "Studio solutions", to: "/solutions" }}
      />
    </>
  );
}
