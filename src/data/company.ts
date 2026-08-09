import type { Capability, TechnologyLayer, ApproachPhase } from "@/types";

export const company = {
  name: "Advanced Imagination ITS Company",
  shortName: "AICO",
  legalNote: "Advanced Imagination ITS Company (AICO)",
  country: "Saudi Arabia",
  positioning: "Artificial intelligence, immersive technology and spatial computing",
  descriptor:
    "AICO is a technology and innovation company building intelligent, immersive and spatial systems for organisations operating at national and global scale.",
  mission:
    "To engineer intelligent and immersive systems that help organisations understand complex realities and act on them with confidence.",
  vision:
    "A future where every organisation can experience its data, its assets and its ambitions in three dimensions.",
  // TODO: replace with official contact details before launch.
  contact: {
    email: "info@aico.example",
    phone: "+966 00 000 0000",
    addressLines: ["Advanced Imagination ITS Company", "Riyadh", "Kingdom of Saudi Arabia"],
  },
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

export const principles = [
  {
    title: "Engineering discipline",
    description:
      "Immersive work is software work. Every experience is built on tested, documented and maintainable foundations.",
  },
  {
    title: "Design integrity",
    description:
      "Craft is not decoration. Composition, typography and motion carry meaning in everything we deliver.",
  },
  {
    title: "Governed intelligence",
    description:
      "AI systems ship with evaluation, monitoring and human oversight designed in from the first sprint.",
  },
  {
    title: "Built to hand over",
    description:
      "Documentation, training and operational readiness are deliverables, not afterthoughts.",
  },
];

export const capabilities: Capability[] = [
  {
    title: "Applied Artificial Intelligence",
    description:
      "Grounded assistants, computer vision and generative pipelines engineered for governed production environments.",
    icon: "BrainCircuit",
  },
  {
    title: "Immersive Experience Engineering",
    description:
      "Real-time engines, extended reality and interactive systems designed for reliability at venue scale.",
    icon: "Boxes",
  },
  {
    title: "Spatial Computing & Digital Twins",
    description:
      "Reality capture, spatial data pipelines and simulation environments that mirror physical assets.",
    icon: "Scan",
  },
  {
    title: "CGI & Visualization",
    description:
      "Photoreal rendering, architectural visualisation and technical animation from a unified asset pipeline.",
    icon: "Cuboid",
  },
  {
    title: "Creative Technology & Content",
    description:
      "Creative direction, motion design and content operations that sustain high-volume output.",
    icon: "Clapperboard",
  },
  {
    title: "Digital Transformation",
    description:
      "Architecture, integration and change enablement that connect new capability to existing systems.",
    icon: "Workflow",
  },
];

export const technologyLayers: TechnologyLayer[] = [
  {
    name: "Experience Layer",
    description:
      "The surfaces people touch — headsets, domes, large-format displays, web, mobile and live broadcast.",
    components: [
      "Real-time engines",
      "XR runtimes",
      "Web and mobile clients",
      "Show control",
      "Broadcast and streaming",
    ],
  },
  {
    name: "Intelligence Layer",
    description:
      "Models, retrieval and orchestration that turn raw information into grounded, usable answers.",
    components: [
      "Model orchestration",
      "Retrieval and vector search",
      "Computer vision",
      "Generative pipelines",
      "Evaluation and guardrails",
    ],
  },
  {
    name: "Spatial Data Layer",
    description:
      "The geometric and semantic backbone: captured reality, structured assets and live telemetry.",
    components: [
      "Reality capture",
      "Digital twin models",
      "Asset and scene pipelines",
      "Geospatial services",
      "Telemetry ingestion",
    ],
  },
  {
    name: "Platform & Cloud Layer",
    description:
      "Secure, scalable infrastructure with the render, streaming and integration capacity these workloads demand.",
    components: [
      "Cloud and hybrid infrastructure",
      "Render and GPU orchestration",
      "Identity and access",
      "Integration and APIs",
      "Observability",
    ],
  },
  {
    name: "Governance Layer",
    description:
      "Security, compliance and operational practice applied consistently across every engagement.",
    components: [
      "Security architecture",
      "Data governance",
      "AI policy and review",
      "Quality assurance",
      "Documentation and handover",
    ],
  },
];

export const approachPhases: ApproachPhase[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We map the operating context, stakeholders, constraints and the outcome that defines success.",
    deliverables: ["Opportunity map", "Stakeholder alignment", "Success metrics"],
  },
  {
    step: "02",
    title: "Architect",
    description:
      "Experience, data and platform architecture are designed together so nothing is retrofitted later.",
    deliverables: ["Solution architecture", "Experience blueprint", "Delivery roadmap"],
  },
  {
    step: "03",
    title: "Prototype",
    description:
      "A working vertical slice proves the hardest assumptions before full production begins.",
    deliverables: ["Interactive prototype", "Technical validation", "Risk register"],
  },
  {
    step: "04",
    title: "Produce",
    description:
      "Creative and engineering teams work in one pipeline, with review gates at every milestone.",
    deliverables: ["Production build", "Asset library", "QA reporting"],
  },
  {
    step: "05",
    title: "Deploy",
    description:
      "Integration, on-site commissioning and rehearsal until the system performs under real conditions.",
    deliverables: ["Deployed system", "Commissioning report", "Operations runbook"],
  },
  {
    step: "06",
    title: "Evolve",
    description:
      "Instrumentation and structured reviews turn the first release into a long-term programme.",
    deliverables: ["Performance review", "Enhancement backlog", "Team enablement"],
  },
];

export const studioServices = [
  {
    title: "Fulldome & Immersive Film",
    description:
      "Original content authored for dome geometry, multi-surface projection and large-format venues.",
  },
  {
    title: "Virtual Production",
    description: "LED volume and real-time compositing workflows that collapse post into principal.",
  },
  {
    title: "Animation & Motion",
    description: "Narrative animation, technical explainers and brand motion systems.",
  },
  {
    title: "Real-Time Interactive",
    description: "Interactive installations and configurators driven by real-time engines.",
  },
  {
    title: "Spatial Audio",
    description: "Object-based sound design engineered for the acoustics of the room.",
  },
  {
    title: "Post & Finishing",
    description: "Colour, conform and mastering for every distribution format.",
  },
];
