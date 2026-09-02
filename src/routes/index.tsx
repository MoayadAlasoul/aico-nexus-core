import { createFileRoute } from "@tanstack/react-router";
import { HomeHero } from "@/components/sections/home-hero";
import {
  WhoWeAreSection,
  CapabilitiesSection,
  SolutionsSection,
  IndustriesSection,
  TechnologyEcosystemSection,
  SelectedWorkSection,
  PartnersSection,
  InsightsSection,
} from "@/components/sections/home-sections";
import { CtaSection } from "@/components/sections/cta-section";

const title = "AICO — Immersive Experiences & Digital Content | Saudi Arabia";

const description =
  "AICO creates immersive experiences, digital content and interactive environments that help organizations engage audiences, tell stories and enhance learning.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Advanced Imagination ITS Company",
          alternateName: "AICO",
          description,
          foundingDate: "2020-12",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jeddah",
            addressCountry: "SA",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HomeHero />
      <WhoWeAreSection />
      <CapabilitiesSection />
      <SolutionsSection />
      <IndustriesSection />
      <TechnologyEcosystemSection />
      <SelectedWorkSection />
      <PartnersSection />
      <InsightsSection />
      <CtaSection
        title="Have an idea for an immersive experience?"
        description="Talk to AICO about your objective, audience, and environment. We can help you explore the right creative and technology approach and turn the concept into a practical project."
        primary={{ label: "Start a Conversation", to: "/contact" }}
        secondary={{ label: "Discuss Your Project", to: "/contact" }}
      />
    </>
  );
}
