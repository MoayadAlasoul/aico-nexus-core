import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";

/** Standard interior page header used by every route except the home page. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  image,
  imageAlt = "",
  imageOpacityClass = "opacity-40",
  overlayOpacityClass = "opacity-90",
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
  imageOpacityClass?: string;
  overlayOpacityClass?: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-border pb-12 pt-28 sm:pb-20 sm:pt-40">
      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt}
            className={`pointer-events-none absolute inset-0 -z-20 size-full object-cover ${imageOpacityClass}`}
            width={1920}
            height={1080}
            loading="eager"
          />
          <span className={`pointer-events-none absolute inset-0 -z-10 bg-[image:var(--gradient-hero)] ${overlayOpacityClass}`} />
          <span className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-background to-transparent" />
        </>
      ) : (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-hero)]"
        />
      )}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 size-[45rem] rounded-full bg-accent/10 blur-[130px]"
      />
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-balance font-display text-[2rem] font-semibold leading-[1.1] sm:mt-6 sm:text-5xl sm:leading-[1.05] lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-[0.95rem] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
          {description}
        </p>
        {children ? <div className="mt-8 sm:mt-10">{children}</div> : null}
      </Container>
    </header>
  );
}

