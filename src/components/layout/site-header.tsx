import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { DataIcon } from "@/components/ui/primitives";
import { primaryNav, solutionNavItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

/** Global site header with solutions mega-menu and mobile drawer. */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMegaOpen(false);
  }, [pathname]);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Container size="wide" className="flex h-20 items-center justify-between gap-6">
        <Logo className="shrink-0" />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) =>
              "hasMegaMenu" in item && item.hasMegaMenu ? (
                <li key={item.to} onMouseEnter={openMega} onMouseLeave={scheduleClose}>
                  <Link
                    to={item.to}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                    onFocus={openMega}
                    className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn("size-3.5 transition-transform", megaOpen && "rotate-180")}
                    />
                  </Link>
                </li>
              ) : (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeProps={{ className: "text-foreground" }}
                    className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">
              Start a project
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <MobileNav />
        </div>
      </Container>

      {/* Solutions mega-menu */}
      <div
        onMouseEnter={openMega}
        onMouseLeave={scheduleClose}
        className={cn(
          "absolute inset-x-0 top-full hidden origin-top border-b border-border bg-popover/95 backdrop-blur-2xl transition-all duration-300 lg:block",
          megaOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0",
        )}
      >
        <Container size="wide" className="grid gap-8 py-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              What we deliver
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold leading-tight">
              Immersive experiences, content and environments
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Eight core offerings, combined per project around your objective and audience.
            </p>
            <Button asChild variant="outline" size="sm" className="mt-6">
              <Link to="/solutions">
                View all
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {solutionNavItems.map((s) => (
              <li key={s.to}>
                <Link
                  to={s.to}
                  className="group flex items-start gap-3 rounded-lg border border-transparent p-3 transition-colors hover:border-border hover:bg-secondary/60"
                >
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-primary/20">
                    <DataIcon name={s.icon} className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-sm font-semibold transition-colors group-hover:text-primary-bright">
                      {s.label}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                      {s.description}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
}
