/** Shared content models. Business content lives in src/data, never in components. */

export interface Solution {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  /** Replaceable image path under public/images/solutions */
  image: string;
  icon: string;
  capabilities: string[];
  outcomes: { title: string; description: string }[];
  useCases: string[];
}

export interface Industry {
  slug: string;
  name: string;
  summary: string;
  focusAreas: string[];
  icon: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  /** Internal placeholder description — replace with approved case study copy. */
  description: string;
  image: string;
  disciplines: string[];
}

export interface Partner {
  id: string;
  name: string;
  category: string;
  logo: string;
}

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  date: string;
  image: string;
}

export interface Capability {
  title: string;
  description: string;
  icon: string;
}

export interface TechnologyLayer {
  name: string;
  description: string;
  components: string[];
}

export interface ApproachPhase {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface NavLink {
  label: string;
  to: string;
}
