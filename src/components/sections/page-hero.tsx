import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";

/** Standard interior page header used by every route except the home page. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-border pb-16 pt-32 sm:pb-20 sm:pt-40">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-hero)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 size-[45rem] rounded-full bg-accent/10 blur-[130px]"
      />
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </header>
  );
}
