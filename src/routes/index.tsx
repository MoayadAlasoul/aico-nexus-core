/*
import { createFileRoute } from "@tanstack/react-router";
import { HomeHero } from "@/components/sections/home-hero";
import {
  WhoWeAreSection,
  CapabilitiesSection,
  SolutionsSection,
  IndustriesSection,
  TechnologyEcosystemSection,
  StudioSection,
  SelectedWorkSection,
  PartnersSection,
  InsightsSection,
} from "@/components/sections/home-sections";
import { CtaSection } from "@/components/sections/cta-section";

const title = "AICO — Advanced Imagination ITS Company | AI, Immersive & Spatial Technology";
const description =
  "AICO is a Saudi technology company engineering artificial intelligence, immersive technology, spatial computing, CGI and immersive media systems for global organisations.";

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
          address: { "@type": "PostalAddress", addressCountry: "SA" },
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
      <StudioSection />
      <SelectedWorkSection />
      <PartnersSection />
      <InsightsSection />
      <CtaSection
        title="Let's design the system your next decade depends on"
        description="Tell us about the environment, audience or dataset you need to bring to life. We will assemble the right team and show you what is possible."
        secondary={{ label: "Explore solutions", to: "/solutions" }}
      />
    </>
  );
}
*/
import { createFileRoute } from "@tanstack/react-router";
import { HomeHero } from "@/components/sections/home-hero";
import {
  WhoWeAreSection,
  CapabilitiesSection,
  SolutionsSection,
  IndustriesSection,
  TechnologyEcosystemSection,
  StudioSection,
  SelectedWorkSection,
  PartnersSection,
  InsightsSection,
} from "@/components/sections/home-sections";
import { CtaSection } from "@/components/sections/cta-section";

const title =
  "AICO — Advanced Imagination ITS Company | Immersive Experiences & Content";

const description =
  "AICO is a Saudi creative technology company delivering immersive experiences, immersive content, CGI, 3D visualisation and digital environments for leading organisations and destinations.";

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
          address: { "@type": "PostalAddress", addressCountry: "SA" },
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
      <StudioSection />
      <SelectedWorkSection />
      <PartnersSection />
      <InsightsSection />
      <CtaSection
        title="Let's design the experience your next decade depends on"
        description="Tell us about the destination, audience or story you need to bring to life. We will assemble the right creative and technical team to make it real."
        secondary={{ label: "Explore what we deliver", to: "/solutions" }}
      />
    </>
  );
}
