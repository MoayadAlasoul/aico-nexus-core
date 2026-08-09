import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { primaryNav, solutionNavItems } from "@/data/navigation";
import { DataIcon } from "@/components/ui/primitives";

/** Premium mobile navigation drawer. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="glass" size="icon" aria-label="Open navigation menu" className="lg:hidden">
          <Menu aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full border-border bg-background p-0 sm:max-w-md [&>button]:hidden"
      >
        <SheetTitle className="sr-only">Site navigation</SheetTitle>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Logo />
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
            >
              <X aria-hidden="true" />
            </Button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="space-y-1">
              {primaryNav.map((item) =>
                "hasMegaMenu" in item && item.hasMegaMenu ? (
                  <li key={item.to}>
                    <button
                      type="button"
                      aria-expanded={solutionsOpen}
                      onClick={() => setSolutionsOpen((v) => !v)}
                      className="flex w-full min-h-11 cursor-pointer items-center justify-between rounded-md px-3 py-3 font-display text-base font-medium transition-colors hover:bg-secondary"
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={`size-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {solutionsOpen ? (
                      <ul className="mb-2 ml-3 space-y-1 border-l border-border pl-3">
                        <li>
                          <Link
                            to="/solutions"
                            onClick={() => setOpen(false)}
                            className="flex min-h-11 items-center rounded-md px-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                          >
                            All solutions
                          </Link>
                        </li>
                        {solutionNavItems.map((s) => (
                          <li key={s.to}>
                            <Link
                              to={s.to}
                              onClick={() => setOpen(false)}
                              className="flex min-h-11 items-center gap-3 rounded-md px-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                              <DataIcon name={s.icon} className="size-4 shrink-0 text-primary-bright" />
                              <span className="min-w-0">{s.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ) : (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      activeProps={{ className: "text-foreground bg-secondary" }}
                      inactiveProps={{ className: "text-muted-foreground" }}
                      className="flex min-h-11 items-center rounded-md px-3 py-3 font-display text-base font-medium transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="border-t border-border p-5">
            <Button asChild variant="hero" size="lg" className="w-full">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Start a project
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
