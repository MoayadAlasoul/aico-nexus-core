import type { ReactNode } from "react";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

/** Resolve a lucide icon by name from data files. */
export function DataIcon({ name, className }: { name: string; className?: string }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Circle;
  return <Icon aria-hidden="true" className={cn("size-5", className)} />;
}

/** Small status/category pill. */
export function Pill({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: "default" | "accent" | "primary";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.14em]",
        tone === "default" && "border-border text-muted-foreground",
        tone === "accent" && "border-accent/40 bg-accent/10 text-foreground",
        tone === "primary" && "border-primary-bright/40 bg-primary/15 text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Bordered content panel with hover lift — the base card used sitewide. */
export function Panel({
  children,
  className,
  interactive = false,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={cn(
        "surface-panel relative overflow-hidden rounded-xl p-6 sm:p-7",
        interactive &&
          "transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-elegant)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Icon + title + copy card. */
export function FeatureCard({
  icon,
  title,
  description,
  footer,
  className,
}: {
  icon?: string;
  title: string;
  description: string;
  footer?: ReactNode;
  className?: string;
}) {
  return (
    <Panel interactive as="article" className={cn("flex h-full flex-col", className)}>
      {icon ? (
        <span className="mb-6 inline-flex size-12 items-center justify-center rounded-lg border border-border bg-primary/20 text-foreground">
          <DataIcon name={icon} className="size-5" />
        </span>
      ) : null}
      <h3 className="font-display text-lg font-semibold sm:text-xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      {footer ? <div className="mt-6 pt-2">{footer}</div> : null}
    </Panel>
  );
}
