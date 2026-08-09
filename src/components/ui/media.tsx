import { cn } from "@/lib/utils";

/**
 * Image wrapper with a token-based gradient placeholder underneath, so
 * replaceable image paths degrade elegantly if an asset is missing.
 */
export function Media({
  src,
  alt,
  className,
  imgClassName,
  ratio = "16/9",
  priority = false,
  sizes,
}: {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  ratio?: "16/9" | "4/3" | "1/1" | "3/4" | "21/9";
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-[image:var(--gradient-hero)]",
        className,
      )}
      style={{ aspectRatio: ratio.replace("/", " / ") }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          onError={(e) => {
            e.currentTarget.style.visibility = "hidden";
          }}
          className={cn(
            "size-full object-cover transition-transform duration-[1200ms] ease-out",
            imgClassName,
          )}
        />
      ) : null}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
      />
    </div>
  );
}
