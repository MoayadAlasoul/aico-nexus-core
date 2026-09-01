import type { Solution } from "@/types";

/**
 * Solution catalogue. Editable content source for /solutions/* routes,
 * home page sections and the header mega-menu.
 */
export const solutions: Solution[] = [
  {
    slug: "immersive-technology",
    shortTitle: "Immersive Technology",
    title: "Immersive Technology",
    tagline: "Extended reality systems engineered for enterprise scale",
    summary:
      "We design and deploy virtual, augmented and mixed reality environments that turn complex information into experiences people understand instantly — from operational training to experiential brand spaces.",
    image: "/images/solutions/immersive-technology.jpg",
    icon: "Boxes",
    capabilities: [
      "Virtual and augmented reality applications",
      "Interactive experience design",
      "Real-time engine development",
      "Multi-user immersive environments",
      "Hardware integration and deployment",
      "Experience analytics instrumentation",
    ],
    outcomes: [
      {
        title: "Faster comprehension",
        description:
          "Spatial storytelling compresses complex technical narratives into a single guided experience.",
      },
      {
        title: "Repeatable delivery",
        description:
          "Modular experience frameworks let programmes scale across venues, languages and devices.",
      },
      {
        title: "Measurable engagement",
        description:
          "Instrumented experiences produce behavioural data that informs the next iteration.",
      },
    ],
    useCases: [
      "Executive briefing centres",
      "Operational and safety training",
      "Product configurators",
      "Exhibition and pavilion experiences",
    ],
  },
  {
    slug: "spatial-computing",
    shortTitle: "Spatial Computing",
    title: "Spatial Computing",
    tagline: "Digital intelligence anchored to physical space",
    summary:
      "Spatial platforms that connect environments, sensors and data into a single interactive layer — enabling teams to visualise, simulate and operate physical assets in real time.",
    image: "/images/solutions/spatial-computing.jpg",
    icon: "Scan",
    capabilities: [
      "Digital twin architecture",
      "3D scanning, photogrammetry and reality capture",
      "Spatial data pipelines",
      "Real-time simulation environments",
      "Location-aware interfaces",
      "Headset and large-format deployment",
    ],
    outcomes: [
      {
        title: "Operational clarity",
        description: "One spatial model becomes the shared reference for planning and operations.",
      },
      {
        title: "Reduced risk",
        description: "Scenarios are simulated digitally before committing physical resources.",
      },
      {
        title: "Connected data",
        description: "Live systems feed the spatial layer so decisions reflect current conditions.",
      },
    ],
    useCases: [
      "Facility and infrastructure twins",
      "Urban and masterplan visualisation",
      "Command and control environments",
      "Site planning and logistics simulation",
    ],
  },
   /* 
   {
    slug: "artificial-intelligence",
    shortTitle: "Artificial Intelligence",
    title: "Artificial Intelligence",
    tagline: "Applied intelligence with enterprise-grade governance",
    summary:
      "We build AI systems that fit real operating environments: grounded assistants, computer vision pipelines, generative production tooling and decision support — designed with security and governance from day one.",
    image: "/images/solutions/artificial-intelligence.jpg",
    icon: "BrainCircuit",
    capabilities: [
      "AI strategy and opportunity mapping",
      "Retrieval-grounded assistants and agents",
      "Computer vision and video intelligence",
      "Generative content pipelines",
      "Model integration and orchestration",
      "Evaluation, governance and monitoring",
    ],
    outcomes: [
      {
        title: "Grounded answers",
        description: "Systems are anchored to approved knowledge sources with traceable citations.",
      },
      {
        title: "Production readiness",
        description: "Evaluation harnesses and monitoring accompany every deployed model.",
      },
      {
        title: "Human oversight",
        description: "Escalation and review paths keep accountability with your teams.",
      },
    ],
    useCases: [
      "Knowledge assistants",
      "Automated content production",
      "Visual inspection and monitoring",
      "Decision support dashboards",
    ],
  },
  */
  {
    slug: "digital-content-creation",
    shortTitle: "Digital Content Creation",
    title: "Digital Content Creation",
    tagline: "Creative technology for brands operating at scale",
    summary:
      "An integrated content capability spanning creative direction, motion design, real-time graphics and campaign production — built to sustain high-volume output without diluting craft.",
    image: "/images/solutions/digital-content-creation.jpg",
    icon: "Clapperboard",
    capabilities: [
      "Creative direction and art direction",
      "Motion design and animation",
      "Real-time and procedural graphics",
      "Brand systems for digital environments",
      "Localisation-ready content architecture",
      "Content operations and asset management",
    ],
    outcomes: [
      {
        title: "Consistent identity",
        description: "A single design system governs every screen, surface and format.",
      },
      {
        title: "Higher throughput",
        description: "Template and pipeline engineering multiplies creative capacity.",
      },
      {
        title: "Channel fit",
        description: "Assets are produced once and adapted for every destination.",
      },
    ],
    useCases: [
      "Campaign and launch content",
      "Corporate and investor storytelling",
      "Event and venue graphics",
      "Product marketing libraries",
    ],
  },
  {
    slug: "cgi-3d-visualization",
    shortTitle: "CGI & 3D Visualization",
    title: "CGI & 3D Visualization",
    tagline: "Photoreal imagery for what does not exist yet",
    summary:
      "High-fidelity CGI, architectural visualisation and product rendering that let stakeholders evaluate design intent with confidence long before construction or manufacture.",
    image: "/images/solutions/cgi-3d-visualization.jpg",
    icon: "Cuboid",
    capabilities: [
      "Architectural and masterplan visualisation",
      "Product and industrial rendering",
      "Photoreal environments and lighting",
      "Technical and process animation",
      "Real-time asset optimisation",
      "Look development and shading",
    ],
    outcomes: [
      {
        title: "Confident approvals",
        description: "Photoreal imagery aligns stakeholders around a single design intent.",
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
      "Product launch visuals",
      "Manufacturing and process films",
      "Interior and experience previsualisation",
    ],
  },
  {
    slug: "immersive-live-streaming",
    shortTitle: "Immersive Live Streaming",
    title: "Immersive Live Streaming",
    tagline: "Broadcast-grade live production for connected audiences",
    summary:
      "Live production engineered for immersive formats — multi-camera capture, real-time graphics, virtual production and reliable distribution to on-site and remote audiences simultaneously.",
    image: "/images/solutions/immersive-live-streaming.jpg",
    icon: "Radio",
    capabilities: [
      "Multi-camera and 360° capture",
      "Real-time graphics and AR overlays",
      "Virtual production and LED volumes",
      "Low-latency distribution architecture",
      "Multi-language and multi-feed delivery",
      "Redundant on-site technical operations",
    ],
    outcomes: [
      {
        title: "Reach without compromise",
        description: "Remote audiences receive a production designed for them, not a side feed.",
      },
      {
        title: "Operational reliability",
        description: "Redundant signal paths and rehearsed runbooks protect live moments.",
      },
      {
        title: "Reusable content",
        description: "Every live production yields an archive ready for post-event campaigns.",
      },
    ],
    useCases: [
      "Corporate and government events",
      "Product launches and keynotes",
      "Sports and entertainment coverage",
      "Hybrid conferences",
    ],
  },
  {
    slug: "immersive-domes-digital-environments",
    shortTitle: "Domes & Digital Environments",
    title: "Immersive Domes & Digital Environments",
    tagline: "Architecture-scale canvases with engineered content",
    summary:
      "End-to-end design of domes, projection environments and large-format digital venues — combining spatial design, display engineering and bespoke content built for the geometry of the space.",
    image: "/images/solutions/immersive-domes-digital-environments.jpg",
    icon: "Aperture",
    capabilities: [
      "Dome and venue experience design",
      "Projection and LED system engineering",
      "Fulldome and multi-surface content production",
      "Spatial audio design",
      "Show control and automation",
      "Operations training and handover",
    ],
    outcomes: [
      {
        title: "Signature destinations",
        description: "Venues become attractions rather than rooms with screens.",
      },
      {
        title: "Content longevity",
        description: "Modular show structures allow programming to evolve seasonally.",
      },
      {
        title: "Sustained performance",
        description: "Documentation and training keep venues running after handover.",
      },
    ],
    useCases: [
      "Visitor and science centres",
      "Cultural and heritage attractions",
      "Corporate experience centres",
      "Immersive entertainment venues",
    ],
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
