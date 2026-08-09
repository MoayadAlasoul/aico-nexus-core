import { Link } from "@tanstack/react-router";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { company } from "@/data/company";
import { footerNav } from "@/data/navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface/40">
      <Container size="wide" className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {company.descriptor}
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic text-muted-foreground">
              {company.contact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <a
                href={`mailto:${company.contact.email}`}
                className="mt-3 inline-block text-foreground underline-offset-4 hover:underline"
              >
                {company.contact.email}
              </a>
            </address>
          </div>

          <nav aria-label="Footer" className="grid gap-10 sm:grid-cols-3">
            {footerNav.map((group) => (
              <div key={group.heading}>
                <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {group.heading}
                </h2>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.to + link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div aria-hidden="true" className="hairline my-12" />

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} {company.legalNote}. All rights reserved. {company.country}.
          </p>
          <ul className="flex flex-wrap items-center gap-5">
            {company.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
