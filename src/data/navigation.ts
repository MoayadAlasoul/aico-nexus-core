import { solutions } from "./solutions";

export const primaryNav = [
  { label: "Who We Are", to: "/who-we-are" },
  { label: "Industries", to: "/industries" },
  { label: "Solutions", to: "/solutions", hasMegaMenu: true },
  { label: "Our Approach", to: "/our-approach" },
  { label: "Technology Ecosystem", to: "/technology-ecosystem" },
  { label: "Studio", to: "/immersive-content-studio" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
] as const;

export const solutionNavItems = solutions.map((s) => ({
  label: s.shortTitle,
  to: `/solutions/${s.slug}`,
  description: s.tagline,
  icon: s.icon,
}));

export const footerNav = [
  {
    heading: "Company",
    links: [
      { label: "Who We Are", to: "/who-we-are" },
      { label: "Our Approach", to: "/our-approach" },
      { label: "Technology Ecosystem", to: "/technology-ecosystem" },
      { label: "Insights", to: "/insights" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Solutions",
    links: solutions.map((s) => ({ label: s.shortTitle, to: `/solutions/${s.slug}` })),
  },
  {
    heading: "Capabilities",
    links: [
      { label: "Industries", to: "/industries" },
      { label: "Immersive Content Studio", to: "/immersive-content-studio" },
      { label: "Solutions Overview", to: "/solutions" },
    ],
  },
];
