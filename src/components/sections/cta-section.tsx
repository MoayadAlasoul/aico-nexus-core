import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Reveal } from "@/components/ui/section";

/** Reusable closing call-to-action band. */
export function CtaSection({
  eyebrow = "Start a conversation",
  title,
  description,
  primary = { label: "Contact AICO", to: "/contact" },
  secondary,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-hero)] opacity-90"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/2 left-1/2 size-[70rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />
      <Container className="relative">
        <Reveal className="surface-panel rounded-2xl p-8 backdrop-blur-xl sm:p-12 lg:p-16">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-3xl text-balance font-display text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild variant="hero" size="lg">
              <Link to={primary.to}>
                {primary.label}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            {secondary ? (
              <Button asChild variant="outline" size="lg">
                <Link to={secondary.to}>{secondary.label}</Link>
              </Button>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
