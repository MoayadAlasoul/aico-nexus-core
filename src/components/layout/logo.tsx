import { Link } from "@tanstack/react-router";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

/** AICO wordmark. Geometric mark + typographic lockup, built from tokens. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label={`${company.shortName} — home`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="relative grid size-9 place-items-center overflow-hidden rounded-md bg-[image:var(--gradient-primary)]">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
          <path
            d="M12 2.5 21 21H3L12 2.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="text-primary-foreground"
          />
          <circle cx="12" cy="14.5" r="2.6" className="fill-accent" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-[0.14em]">AICO</span>
        <span className="mt-1 text-[0.55rem] uppercase tracking-[0.28em] text-muted-foreground">
          Advanced Imagination
        </span>
      </span>
    </Link>
  );
}
