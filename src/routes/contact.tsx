import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Section, SectionHeader, Reveal } from "@/components/ui/section";
import { Panel } from "@/components/ui/primitives";
import { ContactForm } from "@/components/forms/contact-form";
import { company } from "@/data/company";

const title = "Contact Us — AICO";
const description =
  "Contact Advanced Imagination ITS Company (AICO) in Jeddah, Kingdom of Saudi Arabia.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        description="Advanced Imagination ITS Company (AICO)"
      />

      <Section>
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <SectionHeader
            eyebrow="Details"
            title="How to reach us"
            description="For partnerships, procurement or press, use the form and note the subject in your message."
          >
            <ul className="mt-10 space-y-4">
              <li>
                <Panel className="flex items-start gap-4 p-5">
                  <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary-bright" />
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Email
                    </span>
                    <a
                      href={`mailto:${company.contact.email}`}
                      className="mt-1 block break-words text-sm underline-offset-4 hover:underline"
                    >
                      {company.contact.email}
                    </a>
                  </span>
                </Panel>
              </li>
              <li>
                <Panel className="flex items-start gap-4 p-5">
                  <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary-bright" />
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Office
                    </span>
                    <address className="mt-1 text-sm not-italic">
                      {company.contact.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </span>
                </Panel>
              </li>
            </ul>
          </SectionHeader>

          <Reveal delay={100}>
            <h2 className="sr-only">Enquiry form</h2>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
