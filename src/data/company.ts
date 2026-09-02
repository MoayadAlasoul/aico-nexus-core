import type { Capability, TechnologyLayer, ApproachPhase } from "@/types";

export const company = {
  name: "Advanced Imagination ITS Company",
  shortName: "AICO",
  legalNote: "Advanced Imagination ITS Company (AICO)",
  country: "Saudi Arabia",
  established: "December 2020",
  positioning: "Immersive technology and digital experience development",
  descriptor:
    "Advanced Imagination ITS Company (AICO) is a Saudi technology company established in December 2020 and headquartered in Jeddah, Kingdom of Saudi Arabia, specialising in immersive technology and digital experience development.",
  vision:
    "To become a globally recognized immersive technology company known for creating engaging, innovative, and future-ready digital experiences that generate meaningful value.",
  mission:
    "To help organizations transform ideas into high-quality immersive experiences by combining creativity, emerging technologies, specialist expertise, and a customer-focused delivery approach.",
  contact: {
    email: "info@aico-tech.com",
    addressLines: ["Advanced Imagination ITS Company (AICO)", "Jeddah", "Kingdom of Saudi Arabia"],
  },
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

/** Approved Who We Are narrative (Content V3). */
export const whoWeAreParagraphs = [
  "Advanced Imagination ITS Company (AICO) is a Saudi technology company established in December 2020 and headquartered in Jeddah, Kingdom of Saudi Arabia.",
  "AICO specializes in immersive technology and digital experience development. We help organizations explore and implement new ways to engage customers, enhance experiences, communicate ideas, create content, and bring concepts to life.",
  "Our work brings together creativity, technology, storytelling, content production, technical coordination, and project delivery. Depending on each project's requirements, we work across immersive technologies including Virtual Reality (VR), Augmented Reality (AR), Mixed Reality (MR), Extended Reality (XR), Spatial Computing, CGI, 3D Visualization, Virtual Production, 360° content, and interactive digital experiences.",
  "Our approach begins with the client's objective. We then identify and coordinate the appropriate technologies, content, hardware, software, and specialist capabilities required for the project.",
];

/** Seven approved company values (Content V3). */
export const values = [
  {
    title: "Innovation",
    description:
      "We continuously explore emerging technologies and creative approaches that can create new opportunities for our clients.",
  },
  {
    title: "Integrity",
    description:
      "We build relationships through transparency, professionalism, and responsible business practices.",
  },
  {
    title: "Excellence",
    description:
      "We aim for high standards across experience design, content, technology coordination, and project delivery.",
  },
  {
    title: "Customer Success",
    description:
      "We begin with the client's objectives and focus on creating experiences that support meaningful outcomes.",
  },
  {
    title: "Collaboration",
    description:
      "We bring together clients, creative specialists, technology providers, and technical expertise around a shared project objective.",
  },
  {
    title: "Continuous Learning",
    description:
      "We continuously evaluate new technologies, tools, workflows, and industry developments.",
  },
  {
    title: "Future Thinking",
    description:
      "We look beyond today's tools to understand how emerging technologies can shape tomorrow's experiences.",
  },
];

/** Delivery principles used on Our Approach and Who We Are. */
export const principles = [
  {
    title: "Objective first",
    description:
      "Every engagement begins with the client's objective, audience and environment — not with a technology choice.",
  },
  {
    title: "Creative and technical together",
    description:
      "Experience design, content and technical coordination are planned as one workstream from the start.",
  },
  {
    title: "The right specialists",
    description:
      "We identify and coordinate the technologies, providers and specialist capabilities each project requires.",
  },
  {
    title: "Built to hand over",
    description:
      "Documentation, training and operational readiness are treated as deliverables, not afterthoughts.",
  },
];

export const capabilities: Capability[] = [
  {
    title: "Immersive Experience Development",
    description:
      "Experiences built with VR, AR, MR, XR and spatial computing, coordinated around the objective of each project.",
    icon: "Boxes",
  },
  {
    title: "Digital Content Production",
    description:
      "360° content, interactive media, animation and motion authored for immersive formats.",
    icon: "Clapperboard",
  },
  {
    title: "CGI & 3D Visualization",
    description:
      "High-fidelity imagery, environments and animation that communicate concepts before they exist.",
    icon: "Cuboid",
  },
  {
    title: "Storytelling & Experience Design",
    description:
      "Concept, narrative and audience journey design that gives an experience purpose and structure.",
    icon: "Compass",
  },
  {
    title: "Technology Coordination",
    description:
      "Selecting and coordinating the devices, software, content and specialist providers a project requires.",
    icon: "Network",
  },
  {
    title: "Project & Technical Delivery",
    description:
      "Planning, integration, testing, commissioning and handover through to a working experience.",
    icon: "Workflow",
  },
];

/** Approved "Why AICO" points (Content V3 Point #11). */
export const whyAicoPoints: { title: string; description: string }[] = [
  {
    title: "Innovation-Driven",
    description: "We actively explore emerging technologies and new creative approaches.",
  },
  {
    title: "Customer-Focused",
    description: "Technology selection begins with the client's objective and audience.",
  },
  {
    title: "Flexible Technology Approach",
    description: "We are not restricted to one device, platform, or technology environment.",
  },
  {
    title: "Creative + Technical Thinking",
    description: "We connect storytelling and experience design with practical technology delivery.",
  },
  {
    title: "Access to Specialized Expertise",
    description: "We can coordinate specialist technologies and global providers according to project requirements.",
  },
  {
    title: "End-to-End Coordination",
    description: "We can support the journey from concept and content through technical integration and delivery.",
  },
  {
    title: "Future-Ready",
    description: "Our approach evolves as immersive technology and digital experiences develop.",
  },
  {
    title: "Long-Term Relationships",
    description: "We aim to grow with our clients and support their evolving immersive technology requirements.",
  },
];

/** Technology ecosystem positioning copy (Content V3). */
export const technologyEcosystem = {
  paragraphs: [
    "AICO works with specialized technology providers and solution partners to support the requirements of immersive projects.",
    "Rather than being limited to a single technology or platform, AICO can coordinate the appropriate combination of devices, software, content, production technologies, streaming capabilities, and other specialist components required for each project.",
    "Our technology ecosystem approach allows us to select and coordinate the technologies that best fit the client's objectives, environment, audience, and operational requirements.",
  ],
  /** Only partners with formally established brand-use authorisation. Logos omitted. */
  partners: [
    { name: "Neutral Digital", category: "Technology partner" },
    { name: "MSM.digital", category: "Solution partner" },
  ],
};

/**
 * Enabling technologies we work with — presented as capabilities we coordinate,
 * not as proprietary platforms owned or developed by AICO.
 */
export const technologyLayers: TechnologyLayer[] = [
  {
    name: "Immersive Technologies",
    description:
      "The immersive technologies we work with, selected per project according to the audience and environment.",
    components: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Mixed Reality (MR)",
      "Extended Reality (XR)",
      "Spatial Computing",
      "Interactive digital experiences",
    ],
  },
  {
    name: "Content & Production Technologies",
    description:
      "Production technologies used to create content authored for immersive formats and environments.",
    components: [
      "CGI and 3D Visualization",
      "360° content",
      "Virtual Production",
      "Animation and motion",
      "Real-time engines",
      "Spatial audio",
    ],
  },
  {
    name: "Devices & Hardware",
    description:
      "Devices and display technologies are specified and sourced with specialist providers for each project.",
    components: [
      "Headsets and wearables",
      "Projection systems",
      "LED and large-format displays",
      "Capture and camera systems",
      "Interaction and sensor hardware",
      "Show control hardware",
    ],
  },
  {
    name: "Software & Platforms",
    description:
      "Third-party software and platforms are configured and coordinated to suit the operational needs of the experience.",
    components: [
      "Experience and application software",
      "Device configuration and management tooling",
      "Content management and delivery",
      "Cloud and rendering services",
      "Analytics and reporting tools",
    ],
  },
  {
    name: "Streaming & Distribution",
    description:
      "Streaming and distribution capabilities coordinated with specialist production and streaming providers.",
    components: [
      "Multi-camera and 360° capture",
      "Live graphics and overlays",
      "Streaming and delivery services",
      "Multi-feed and multi-language delivery",
      "On-site technical coordination",
    ],
  },
];

export const approachPhases: ApproachPhase[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand the client's objectives, audience, environment, challenges, and desired outcome.",
    deliverables: [],
  },
  {
    step: "02",
    title: "Define",
    description:
      "Identify the use case, scope, experience requirements, technology needs, and success criteria.",
    deliverables: [],
  },
  {
    step: "03",
    title: "Design",
    description:
      "Develop the user journey, creative concept, content direction, interaction model, and technical requirements.",
    deliverables: [],
  },
  {
    step: "04",
    title: "Create",
    description:
      "Produce the required immersive content, CGI, 3D assets, interactive elements, and digital experiences.",
    deliverables: [],
  },
  {
    step: "05",
    title: "Integrate",
    description:
      "Coordinate and integrate the relevant devices, software, content, infrastructure, and specialist technologies.",
    deliverables: [],
  },
  {
    step: "06",
    title: "Deliver",
    description:
      "Implement, test, optimize, and prepare the experience for launch or operational use.",
    deliverables: [],
  },
  {
    step: "07",
    title: "Support",
    description:
      "Provide training, knowledge transfer, technical coordination, and support according to project requirements.",
    deliverables: [],
  },
];


/**
 * HIDDEN (Content V3): studio service content is retained for future use but is
 * no longer surfaced in navigation or on the home page, as no in-house studio or
 * proprietary production facility is claimed.
 */
export const studioServices = [
  {
    title: "Fulldome & Immersive Film",
    description:
      "Content authored for dome geometry, multi-surface projection and large-format environments.",
  },
  {
    title: "Virtual Production",
    description: "Real-time environment and LED volume workflows coordinated with specialist facilities.",
  },
  {
    title: "Animation & Motion",
    description: "Narrative animation, technical explainers and brand motion content.",
  },
  {
    title: "Real-Time Interactive",
    description: "Interactive installations and configurators built with real-time engines.",
  },
  {
    title: "Spatial Audio",
    description: "Object-based sound design coordinated for the acoustics of the space.",
  },
  {
    title: "Post & Finishing",
    description: "Colour, conform and mastering coordinated for each distribution format.",
  },
];
