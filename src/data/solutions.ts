import type { Solution } from "@/types";

/**
 * "What We Deliver" catalogue (Content V3).
 * Eight approved offerings. Editable content source for /solutions/* routes,
 * home page sections and the header mega-menu.
 *
 * NOTE: Artificial Intelligence is intentionally NOT a standalone offering.
 * Legacy AI / Spatial Computing entries are retained (commented out) in git
 * history and can be restored if positioning changes.
 */
export const solutions: Solution[] = [
  {
    slug: "immersive-experiences",
    shortTitle: "Immersive Experiences",
    title: "Immersive Experiences",
    tagline: "Experiences that let audiences step inside an idea",
    summary:
      "We create immersive experiences using virtual, augmented, mixed and extended reality, spatial computing and interactive environments — coordinating the technologies, content and specialist capabilities each project requires.",
    image: "/images/solutions/immersive-technology.jpg",
    icon: "Boxes",
    capabilities: [
      "VR, AR, MR and XR experiences",
      "Interactive experience design",
      "Spatial computing experiences",
      "Multi-user and guided experiences",
      "Device selection and coordination",
      "On-site setup and operational support",
    ],
    outcomes: [
      {
        title: "Deeper engagement",
        description:
          "Audiences participate in a story or environment instead of watching it from the outside.",
      },
      {
        title: "Clearer communication",
        description:
          "Complex ideas, places and concepts become easier to understand when they can be experienced.",
      },
      {
        title: "Fit-for-purpose delivery",
        description:
          "Technologies are selected around the objective, audience and environment of each project.",
      },
    ],
    useCases: [
      "Visitor and destination experiences",
      "Exhibition and pavilion experiences",
      "Training and learning experiences",
      "Brand and product experiences",
    ],
  },
  {
    slug: "immersive-content",
    shortTitle: "Immersive Content",
    title: "Immersive Content",
    tagline: "Digital content authored for immersive formats",
    summary:
      "Digital content production for immersive formats — 360° content, interactive media, animation and motion — developed with creative direction, storytelling and technical coordination.",
    image: "/__l5e/assets-v1/13fdec6e-881a-448e-8e0b-0f120f347f46/immersive-content.png",
    icon: "Clapperboard",
    capabilities: [
      "360° and immersive video content",
      "Interactive digital content",
      "Animation and motion content",
      "Creative direction and storytelling",
      "Content adaptation across formats",
      "Content review and delivery workflows",
    ],
    outcomes: [
      {
        title: "Format-appropriate content",
        description:
          "Content is authored for the surface it will play on rather than adapted after the fact.",
      },
      {
        title: "Consistent storytelling",
        description: "A single narrative direction carries across every screen and environment.",
      },
      {
        title: "Reusable material",
        description: "Assets are structured so they can be reused across channels and languages.",
      },
    ],
    useCases: [
      "Destination and experience storytelling",
      "Corporate and institutional content",
      "Event and venue content",
      "Educational and learning content",
    ],
  },
  {
    slug: "cgi-3d-visualization",
    shortTitle: "CGI & 3D Visualization",
    title: "CGI & 3D Visualization",
    tagline: "High-fidelity imagery for what does not exist yet",
    summary:
      "CGI, 3D visualization and animation that let stakeholders evaluate design intent, environments and concepts with confidence before they are built.",
    image: "/images/solutions/cgi-3d-visualization.jpg",
    icon: "Cuboid",
    capabilities: [
      "Architectural and masterplan visualization",
      "Product and environment rendering",
      "Photoreal lighting and materials",
      "Technical and process animation",
      "Real-time asset optimisation",
      "Look development and shading",
    ],
    outcomes: [
      {
        title: "Confident approvals",
        description: "High-fidelity imagery aligns stakeholders around a single design intent.",
      },
      {
        title: "Reusable assets",
        description: "Models are built once and reused across film, web and real-time channels.",
      },
      {
        title: "Design validation",
        description: "Lighting, materials and scale are tested before physical commitment.",
      },
    ],
    useCases: [
      "Development and masterplan imagery",
      "Concept and design communication",
      "Product and environment visuals",
      "Experience previsualisation",
    ],
  },
  {
    slug: "virtual-production",
    shortTitle: "Virtual Production",
    title: "Virtual Production",
    tagline: "Real-time environments captured in camera",
    summary:
      "Virtual production workflows that combine real-time environments, LED volumes and camera tracking — coordinated with specialist production partners and facilities per project.",
    image: "/images/studio/stage.jpg",
    icon: "Video",
    capabilities: [
      "Virtual production planning",
      "Real-time environment creation",
      "LED volume and stage coordination",
      "Camera tracking and in-camera VFX",
      "Previsualisation and technical rehearsal",
      "Post and finishing coordination",
    ],
    outcomes: [
      {
        title: "Creative control on set",
        description: "Decisions that normally wait for post are made live, in camera.",
      },
      {
        title: "Efficient production",
        description: "Environments are reused across shots, scenes and future productions.",
      },
      {
        title: "Coordinated delivery",
        description:
          "Facilities, technology and specialists are brought together around the production plan.",
      },
    ],
    useCases: [
      "Brand and campaign production",
      "Destination and concept films",
      "Narrative and episodic content",
      "Virtual environments for events",
    ],
  },
  {
    slug: "immersive-live-streaming",
    shortTitle: "Immersive Live Streaming",
    title: "Immersive Live Streaming",
    tagline: "Live capability for immersive and connected audiences",
    summary:
      "Live streaming capability for immersive formats — multi-camera and 360° capture, real-time graphics and distribution — coordinated with specialist production and streaming providers.",
    image: "/images/solutions/immersive-live-streaming.jpg",
    icon: "Radio",
    capabilities: [
      "Multi-camera and 360° capture",
      "Real-time graphics and overlays",
      "Streaming and distribution coordination",
      "Multi-language and multi-feed delivery",
      "On-site technical coordination",
      "Rehearsal and contingency planning",
    ],
    outcomes: [
      {
        title: "Reach beyond the room",
        description: "Remote audiences receive a production designed for them.",
      },
      {
        title: "Planned reliability",
        description: "Signal paths, rehearsals and contingencies are planned before the live moment.",
      },
      {
        title: "Content afterlife",
        description: "Live material can be repurposed for post-event communication.",
      },
    ],
    useCases: [
      "Conferences and corporate events",
      "Launches and keynotes",
      "Hybrid audience programmes",
      "Cultural and entertainment events",
    ],
  },
  {
    slug: "immersive-domes-digital-environments",
    shortTitle: "Domes & Digital Environments",
    title: "Immersive Domes & Digital Environments",
    tagline: "Architecture-scale canvases with content built for the space",
    summary:
      "Design and coordination of domes, projection environments and large-format digital spaces — combining experience design, display technology coordination and content authored for the geometry of the space.",
    image: "/images/solutions/immersive-domes-digital-environments.jpg",
    icon: "Aperture",
    capabilities: [
      "Dome and venue experience design",
      "Projection and LED technology coordination",
      "Fulldome and multi-surface content",
      "Spatial audio coordination",
      "Show control and automation",
      "Operations training and handover",
    ],
    outcomes: [
      {
        title: "Signature environments",
        description: "Spaces become experiences rather than rooms with screens.",
      },
      {
        title: "Content longevity",
        description: "Modular show structures allow programming to evolve over time.",
      },
      {
        title: "Sustained operation",
        description: "Documentation and training keep environments running after handover.",
      },
    ],
    useCases: [
      "Visitor and science centres",
      "Cultural and heritage attractions",
      "Experience centres",
      "Immersive entertainment venues",
    ],
  },
  {
    slug: "experience-design-consulting",
    shortTitle: "Experience Design & Consulting",
    title: "Experience Design & Consulting",
    tagline: "From objective to a defined, deliverable experience",
    summary:
      "We start with the client's objective and define the experience: concept, narrative, audience journey and the technologies, content and capabilities required to deliver it.",
    image: "/images/solutions/spatial-computing.jpg",
    icon: "Compass",
    capabilities: [
      "Objective and audience definition",
      "Experience concept and narrative design",
      "Visitor journey and interaction design",
      "Technology and content requirements mapping",
      "Feasibility and delivery planning",
      "Specialist capability identification",
    ],
    outcomes: [
      {
        title: "Clear direction",
        description: "The experience is defined before technology decisions are made.",
      },
      {
        title: "Right-sized scope",
        description: "Requirements are mapped to the objective, environment and audience.",
      },
      {
        title: "Deliverable plans",
        description: "Concepts arrive with a realistic route to production.",
      },
    ],
    useCases: [
      "Experience concept development",
      "Immersive programme planning",
      "Technology and content roadmaps",
      "Feasibility studies",
    ],
  },
  {
    slug: "technical-integration",
    shortTitle: "Technical Integration",
    title: "Technical Integration",
    tagline: "Bringing devices, software and content together on site",
    summary:
      "Technical coordination and integration of the devices, software, content and specialist services an immersive project depends on — through setup, testing, commissioning and handover.",
    image: "/images/technology-ecosystem/hero.jpg",
    icon: "Workflow",
    capabilities: [
      "Hardware and device coordination",
      "Software and platform configuration",
      "Content deployment and testing",
      "On-site installation and commissioning",
      "Operational documentation",
      "Team training and handover",
    ],
    outcomes: [
      {
        title: "One working system",
        description: "Separate components are integrated into a single, tested experience.",
      },
      {
        title: "Predictable go-live",
        description: "Testing and rehearsal happen before audiences arrive.",
      },
      {
        title: "Operational readiness",
        description: "Documentation and training are treated as deliverables.",
      },
    ],
    useCases: [
      "Venue and exhibition installations",
      "Device fleet setup and configuration",
      "Experience rollouts across locations",
      "Event technical delivery",
    ],
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
