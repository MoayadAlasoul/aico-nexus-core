import type { Project, Partner, Insight } from "@/types";

/**
 * PLACEHOLDER CONTENT.
 * These are illustrative capability samples, not client work. Replace with
 * approved AICO case studies before launch. Images are neutral abstract
 * technology visuals — do not present them as delivered projects.
 */
export const projects: Project[] = [
  {
    slug: "immersive-dome-concept",
    title: "Immersive Dome Concept",
    category: "Domes & Digital Environments",
    description:
      "Capability sample: a fulldome show structure combining projection engineering, spatial audio and modular content programming.",
    image: "/images/gallery/work-dome.jpg",
    disciplines: ["Experience design", "Show control", "Content production"],
  },
  {
    slug: "digital-twin-operations",
    title: "Digital Twin Operations Environment",
    category: "Spatial Computing",
    description:
      "Capability sample: a live operational twin linking reality capture, telemetry and scenario simulation in one spatial interface.",
    image: "/images/gallery/work-twin.jpg",
    disciplines: ["Reality capture", "Data pipelines", "Real-time UI"],
  },
  {
    slug: "grounded-ai-assistant",
    title: "Grounded Enterprise Assistant",
    category: "Artificial Intelligence",
    description:
      "Capability sample: a retrieval-grounded assistant with citation tracing, evaluation harness and human escalation paths.",
    image: "/images/gallery/work-ai.jpg",
    disciplines: ["Retrieval architecture", "Evaluation", "Interface design"],
  },
  {
    slug: "masterplan-visualization",
    title: "Masterplan Visualization Suite",
    category: "CGI & 3D Visualization",
    description:
      "Capability sample: photoreal masterplan imagery and animation produced from a single reusable asset pipeline.",
    image: "/images/gallery/work-cgi.jpg",
    disciplines: ["Look development", "Environment art", "Technical animation"],
  },
  {
    slug: "virtual-production-stage",
    title: "Virtual Production Stage",
    category: "Immersive Content Studio",
    description:
      "Capability sample: an LED volume workflow with real-time compositing, camera tracking and on-set finishing.",
    image: "/images/gallery/work-studio.jpg",
    disciplines: ["Virtual production", "Real-time graphics", "Post pipeline"],
  },
  {
    slug: "immersive-live-broadcast",
    title: "Immersive Live Broadcast",
    category: "Immersive Live Streaming",
    description:
      "Capability sample: multi-camera immersive capture with augmented graphics and redundant low-latency distribution.",
    image: "/images/gallery/work-live.jpg",
    disciplines: ["Live operations", "AR graphics", "Distribution"],
  },
];

/**
 * PLACEHOLDER partner slots. No partnership is claimed or implied.
 * Replace name/logo once agreements and brand approvals are in place.
 */
export const partners: Partner[] = [
  { id: "partner-1", name: "Partner Slot 01", category: "Technology", logo: "" },
  { id: "partner-2", name: "Partner Slot 02", category: "Cloud", logo: "" },
  { id: "partner-3", name: "Partner Slot 03", category: "Hardware", logo: "" },
  { id: "partner-4", name: "Partner Slot 04", category: "Real-time engines", logo: "" },
  { id: "partner-5", name: "Partner Slot 05", category: "Research", logo: "" },
  { id: "partner-6", name: "Partner Slot 06", category: "Systems integration", logo: "" },
];

/** PLACEHOLDER editorial content — replace with published AICO articles. */
export const insights: Insight[] = [
  {
    slug: "spatial-computing-enterprise-shift",
    title: "Why spatial computing is becoming an enterprise discipline",
    excerpt:
      "Spatial interfaces are moving from novelty to infrastructure. What changes when the model of your facility becomes the interface to it?",
    category: "Perspective",
    readingTime: "6 min read",
    date: "2026-05-18",
    image: "/images/home/insight-spatial.jpg",
  },
  {
    slug: "governed-ai-production",
    title: "Governed AI: what production readiness actually requires",
    excerpt:
      "Evaluation harnesses, escalation paths and monitoring are not overhead. They are the difference between a demo and a system.",
    category: "Engineering",
    readingTime: "8 min read",
    date: "2026-04-02",
    image: "/images/home/insight-ai.jpg",
  },
  {
    slug: "designing-for-dome-geometry",
    title: "Designing for dome geometry, not rectangular habits",
    excerpt:
      "Immersive venues punish content authored for flat screens. Composition, pacing and sound all need rethinking.",
    category: "Craft",
    readingTime: "5 min read",
    date: "2026-02-24",
    image: "/images/home/insight-dome.jpg",
  },
];

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);
