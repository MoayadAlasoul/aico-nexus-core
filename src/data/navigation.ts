import { solutions } from "./solutions";

/**
 * Primary navigation (Content V3).
 * "Studio" is intentionally hidden from navigation — the route remains
 * available and can be restored if a studio facility is confirmed.
 */
export const primaryNav = [
  { label: "Who We Are", to: "/who-we-are" },
  { label: "What We Deliver", to: "/solutions", hasMegaMenu: true },
  { label: "Industries", to: "/industries" },
  { label: "Our Approach", to: "/our-approach" },
  { label: "Our Experience", to: "/our-experience" },
  { label: "Technology Ecosystem", to: "/technology-ecosystem" },
  { label: "Insights", to: "/insights" },
  { label: "Contact Us", to: "/contact" },
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
      { label: "Our Experience", to: "/our-experience" },
      { label: "Technology Ecosystem", to: "/technology-ecosystem" },
      { label: "Insights", to: "/insights" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    heading: "What We Deliver",
    links: solutions.map((s) => ({ label: s.shortTitle, to: `/solutions/${s.slug}` })),
  },
  {
    heading: "Capabilities",
    links: [
      { label: "Industries", to: "/industries" },
      { label: "What We Deliver", to: "/solutions" },
    ],
  },
];
