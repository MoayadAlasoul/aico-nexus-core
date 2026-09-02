import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "aviation",
    name: "Aviation",
    summary:
      "Immersive customer experiences, training, destination discovery, visualization, and digital engagement.",
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
      "Destination storytelling, virtual exploration, interactive guest experiences, and immersive content that inspires travel and discovery.",
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
      "Immersive storytelling, interactive environments, live experiences, digital entertainment, and dome experiences.",
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
      "Immersive visualization, storytelling, digital experiences, and interactive content that help communicate destinations and future visitor experiences.",
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
