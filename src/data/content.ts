import type { Project, Partner, Insight } from "@/types";

/**
 * PLACEHOLDER CAPABILITY SAMPLES (Content V3).
 * These are illustrative capability samples, not client work, and must not be
 * presented as delivered or completed projects. Images are neutral abstract
 * visuals. Removed in V3: artificial intelligence sample, live-streaming
 * project sample (no completed project claims), aviation/airline references.
 */
export const projects: Project[] = [
  {
    slug: "immersive-dome-concept",
    title: "Immersive Dome Concept",
    category: "Domes & Digital Environments",
    description:
      "Capability sample: a fulldome show structure combining projection coordination, spatial audio and modular content programming.",
    image: "/images/solutions/immersive-domes-digital-environments.jpg",
    disciplines: ["Experience design", "Show control", "Content production"],
  },
  {
    slug: "interactive-experience-concept",
    title: "Interactive Experience Concept",
    category: "Immersive Experiences",
    description:
      "Capability sample: an interactive VR/AR experience concept with guided journey, content structure and device coordination.",
    image: "/images/solutions/immersive-technology.jpg",
    disciplines: ["Experience design", "Interaction design", "Device coordination"],
  },
  {
    slug: "environment-visualization-concept",
    title: "Environment Visualization Concept",
    category: "CGI & 3D Visualization",
    description:
      "Capability sample: photoreal environment imagery and animation produced from a single reusable asset pipeline.",
    image: "/images/solutions/cgi-3d-visualization.jpg",
    disciplines: ["Look development", "Environment art", "Technical animation"],
  },
  {
    slug: "masterplan-visualization",
    title: "Masterplan Visualization Study",
    category: "CGI & 3D Visualization",
    description:
      "Capability sample: masterplan visualization exploring scale, materials and lighting for a destination concept.",
    image: "/images/gallery/work-dome.jpg",
    disciplines: ["Visualization", "Concept development", "Animation"],
  },
  {
    slug: "virtual-production-concept",
    title: "Virtual Production Concept",
    category: "Virtual Production",
    description:
      "Capability sample: a virtual production workflow with real-time environments, camera tracking and in-camera finishing.",
    image: "/images/studio/stage.jpg",
    disciplines: ["Virtual production", "Real-time graphics", "Post coordination"],
  },
  {
    slug: "digital-content-concept",
    title: "Immersive Content Concept",
    category: "Immersive Content",
    description:
      "Capability sample: 360° and interactive content structured for reuse across immersive formats and languages.",
    image: "/images/solutions/digital-content-creation.jpg",
    disciplines: ["Creative direction", "360° content", "Motion design"],
  },
];

/**
 * Technology and solution partners. Only relationships with formally
 * established brand-use authorisation are listed. Logos are displayed only
 * once written brand approval is in place (logo left empty until then).
 */
export const partners: Partner[] = [
  { id: "neutral-digital", name: "Neutral Digital", category: "Technology partner", logo: "" },
  { id: "msm-digital", name: "MSM.digital", category: "Solution partner", logo: "" },
];

/** PLACEHOLDER editorial content — replace with published AICO articles. */
export const insights: Insight[] = [
  {
    slug: "immersive-experiences-enterprise-shift",
    title: "Why immersive experiences are becoming a communication standard",
    excerpt:
      "Immersive formats are moving from novelty to everyday communication. What changes when audiences can step inside the story?",
    category: "Perspective",
    readingTime: "6 min read",
    date: "2026-05-18",
    image: "/images/solutions/immersive-technology.jpg",
  },
  {
    slug: "choosing-immersive-technology",
    title: "Choosing immersive technology around the objective, not the trend",
    excerpt:
      "VR, AR, MR and XR each solve different problems. Starting from the objective keeps technology decisions honest.",
    category: "Practice",
    readingTime: "7 min read",
    date: "2026-04-02",
    image: "/images/solutions/spatial-computing.jpg",
  },
  {
    slug: "designing-for-dome-geometry",
    title: "Designing for dome geometry, not rectangular habits",
    excerpt:
      "Immersive venues punish content authored for flat screens. Composition, pacing and sound all need rethinking.",
    category: "Craft",
    readingTime: "5 min read",
    date: "2026-02-24",
    image: "/images/solutions/immersive-domes-digital-environments.jpg",
  },
];

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);
