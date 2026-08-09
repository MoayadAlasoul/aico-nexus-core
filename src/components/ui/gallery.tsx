import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Media } from "@/components/ui/media";
import { Pill } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/section";
import type { Project } from "@/types";

/** Reusable gallery grid with an accessible lightbox modal. */
export function Gallery({ items }: { items: Project[] }) {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Reveal as="li" key={item.slug} delay={index * 70}>
            <button
              type="button"
              onClick={() => setActive(item)}
              aria-label={`View details for ${item.title}`}
              className="group block w-full cursor-pointer text-left"
            >
              <Media
                src={item.image}
                alt={`${item.title} — abstract capability visual`}
                imgClassName="group-hover:scale-[1.06]"
              />
              <div className="mt-5">
                <Pill>{item.category}</Pill>
                <h3 className="mt-3 font-display text-lg font-semibold transition-colors group-hover:text-primary-bright">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </button>
          </Reveal>
        ))}
      </ul>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl border-border bg-popover">
          {active ? (
            <div>
              <Media
                src={active.image}
                alt={`${active.title} — abstract capability visual`}
                className="rounded-lg"
              />
              <Pill className="mt-6">{active.category}</Pill>
              <DialogTitle className="mt-3 font-display text-2xl font-semibold">
                {active.title}
              </DialogTitle>
              <DialogDescription className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {active.description}
              </DialogDescription>
              <ul className="mt-5 flex flex-wrap gap-2">
                {active.disciplines.map((d) => (
                  <li key={d}>
                    <Pill tone="primary">{d}</Pill>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
