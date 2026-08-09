import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Max-width page container with responsive gutters. */
export function Container({
  children,
  className,
  as: Tag = "div",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  size?: "default" | "narrow" | "wide";
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        size === "narrow" && "max-w-4xl",
        size === "default" && "max-w-7xl",
        size === "wide" && "max-w-[96rem]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
