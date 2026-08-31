import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "aviation",
    name: "Aviation",
    summary:
      "Immersive visualisation, digital content and experience environments for aviation destinations, facilities and passenger experiences.",
    focusAreas: [
      "Aviation experiences",
      "Destination visualisation",
      "Immersive content",
    ],
    icon: "Plane",
  },

  {
    slug: "tourism-hospitality",
    name: "Tourism & Hospitality",
    summary:
      "Immersive experiences and visual content that bring destinations, hospitality environments and visitor journeys to life.",
    focusAreas: [
      "Destination experiences",
      "Hospitality environments",
      "Visitor engagement",
    ],
    icon: "Hotel",
  },

  {
    slug: "entertainment-experiences",
    name: "Entertainment & Experiences",
    summary:
      "Immersive content and experiential environments designed to engage audiences and create memorable entertainment experiences.",
    focusAreas: [
      "Immersive entertainment",
      "Experiential environments",
      "Audience engagement",
    ],
    icon: "Sparkles",
  },

  {
    slug: "destination-development",
    name: "Destination Development",
    summary:
      "Visualisation and immersive content that communicate the vision, identity and experience of emerging destinations and developments.",
    focusAreas: [
      "Destination visualisation",
      "Masterplan experiences",
      "Development storytelling",
    ],
    icon: "Building2",
  },
];

export const getIndustry = (slug: string) =>
  industries.find((i) => i.slug === slug);
