import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "government-public-sector",
    name: "Government & Public Sector",
    summary:
      "Digital transformation programmes, national showcases and command environments that communicate strategy with clarity.",
    focusAreas: ["National initiatives", "Command environments", "Public engagement"],
    icon: "Landmark",
  },
  {
    slug: "energy-industrial",
    name: "Energy & Industrial",
    summary:
      "Digital twins, operational visualisation and immersive training for complex, safety-critical assets.",
    focusAreas: ["Asset twins", "Operational training", "Process visualisation"],
    icon: "Factory",
  },
  {
    slug: "real-estate-giga-projects",
    name: "Real Estate & Giga Projects",
    summary:
      "Masterplan visualisation, sales environments and experience centres that make future developments tangible.",
    focusAreas: ["Masterplan CGI", "Sales galleries", "Experience centres"],
    icon: "Building2",
  },
  {
    slug: "culture-tourism-entertainment",
    name: "Culture, Tourism & Entertainment",
    summary:
      "Immersive attractions, domes and digital environments designed as destinations in their own right.",
    focusAreas: ["Immersive venues", "Heritage storytelling", "Live experiences"],
    icon: "Sparkles",
  },
  {
    slug: "education-research",
    name: "Education & Research",
    summary:
      "Spatial learning environments and simulation tools that make advanced subjects accessible.",
    focusAreas: ["Simulation labs", "Fulldome learning", "Research visualisation"],
    icon: "GraduationCap",
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    summary:
      "Data-rich visual systems, AI assistants and secure interactive reporting for regulated environments.",
    focusAreas: ["Data visualisation", "Grounded assistants", "Client experience"],
    icon: "LineChart",
  },
  {
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    summary:
      "Medical visualisation, procedural training and scientific communication built on accurate 3D foundations.",
    focusAreas: ["Medical CGI", "Procedural training", "Scientific storytelling"],
    icon: "HeartPulse",
  },
  {
    slug: "retail-consumer",
    name: "Retail & Consumer",
    summary:
      "Product visualisation, virtual environments and content pipelines that sustain always-on commerce.",
    focusAreas: ["Product CGI", "Virtual retail", "Content operations"],
    icon: "ShoppingBag",
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
