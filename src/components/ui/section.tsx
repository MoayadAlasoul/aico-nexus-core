import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { useReveal } from "@/hooks/use-reveal";

/** Scroll-reveal wrapper used across every section. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-revealed={revealed}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

/** Small uppercase label that introduces a section. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-8 bg-accent" />
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow className={align === "center" ? "justify-center" : ""}>{eyebrow}</Eyebrow> : null}
      <Heading
        className={cn(
          "mt-5 text-balance font-display font-semibold leading-[1.08]",
          Heading === "h1"
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl lg:text-[2.75rem]",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </Reveal>
  );
}

/** Vertical rhythm wrapper for page sections. */
export function Section({
  children,
  className,
  id,
  containerSize = "default",
  bare = false,
  label,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  containerSize?: "default" | "narrow" | "wide";
  bare?: boolean;
  label?: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn("relative py-20 sm:py-24 lg:py-32", className)}
    >
      {bare ? children : <Container size={containerSize}>{children}</Container>}
    </section>
  );
}
