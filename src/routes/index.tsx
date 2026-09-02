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
        title="Let's design the experience your audience will remember"
        description="Tell us about the objective, audience or story you need to bring to life. We will identify and coordinate the technologies, content and specialist capabilities required."
        secondary={{ label: "Explore what we deliver", to: "/solutions" }}
      />
    </>
  );
}
