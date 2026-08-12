import { Link } from "@tanstack/react-router";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

/** AICO brand mark. Uses the official uploaded logo image. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label={`${company.shortName} — home`}
      className={cn("group inline-flex items-center", className)}
    >
      <img
        src="/images/aico-logo.png"
        alt="AICO"
        className="h-12 w-auto"
      />
    </Link>
  );
}
