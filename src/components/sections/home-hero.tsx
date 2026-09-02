import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { useScrollOffset } from "@/hooks/use-scroll-offset";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { company } from "@/data/company";

const particles = [
  { left: "8%", top: "22%", size: 3, delay: "0s", duration: "9s" },
  { left: "18%", top: "68%", size: 2, delay: "1.4s", duration: "11s" },
  { left: "32%", top: "38%", size: 2, delay: "2.2s", duration: "13s" },
  { left: "47%", top: "78%", size: 3, delay: "0.6s", duration: "10s" },
  { left: "62%", top: "28%", size: 2, delay: "3s", duration: "12s" },
  { left: "74%", top: "60%", size: 3, delay: "1.1s", duration: "14s" },
  { left: "86%", top: "34%", size: 2, delay: "2.6s", duration: "11s" },
  { left: "93%", top: "72%", size: 2, delay: "0.3s", duration: "13s" },
];

/** Home hero: immersive technology canvas, layered light, restrained parallax. */
export function HomeHero() {
  const offset = useScrollOffset();
  const reduced = usePrefersReducedMotion();
  const parallax = reduced ? 0 : Math.min(offset * 0.14, 90);

  return (
    <section className="relative isolate flex min-h-[82svh] items-center overflow-hidden pb-16 pt-28 sm:min-h-[92svh] sm:pb-24 sm:pt-40">
      {/* Background image layer */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img
          src="/images/home/hero.jpg"
          alt=""
          width={1920}
          height={1088}
          className="size-full object-cover opacity-[0.78]"
          style={{
            transform: `translate3d(0, ${parallax * 0.5}px, 0) scale(1.06)`,
            filter: "contrast(1.12) brightness(1.08) saturate(1.05)",
          }}
        />

        <span className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-[0.78]" />
        <span className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
        <span className="absolute -left-32 top-1/4 size-[42rem] animate-[drift_22s_ease-in-out_infinite] rounded-full bg-primary/25 blur-[150px]" />
        <span className="absolute -right-24 top-1/3 size-[32rem] rounded-full bg-accent/10 blur-[140px]" />

        {/* Very subtle particles */}
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-foreground/50"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animation: reduced
                ? undefined
                : `fade-in 1s ease-out ${p.delay} both, drift ${p.duration} ease-in-out ${p.delay} infinite`,
            }}
          />
        ))}
      </div>

      <Container size="wide" className="relative">
        <div
          className="max-w-4xl"
          style={{ transform: `translate3d(0, ${-parallax * 0.18}px, 0)` }}
        >
          <div className="animate-fade-in">
            <Eyebrow>{company.country} · Immersive Technology & Digital Experiences</Eyebrow>
          </div>

          <h1 className="mt-5 text-balance font-display text-[2.05rem] font-semibold leading-[1.08] sm:mt-7 sm:text-6xl sm:leading-[1.03] lg:text-[4.6rem] animate-rise">
            Engineering Immersive Experiences.
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient">Delivering Real Impact.</span>
          </h1>

          <p
            className="mt-5 max-w-2xl text-pretty text-[0.95rem] leading-relaxed text-muted-foreground sm:mt-7 sm:text-xl animate-rise"
            style={{ animationDelay: "120ms" }}
          >
            AICO creates immersive experiences, digital content, and interactive environments
            that help organizations engage audiences, tell stories, enhance learning, and
            create new ways to experience the world.
          </p>

          <div
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center animate-rise"
            style={{ animationDelay: "240ms" }}
          >
            <Button
              asChild
              variant="hero"
              size="lg"
              className="w-full sm:h-14 sm:w-auto sm:px-9 sm:text-base"
            >
              <Link to="/solutions">
                Explore What We Deliver
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>

            <Button
              asChild
              variant="glass"
              size="lg"
              className="w-full sm:h-14 sm:w-auto sm:px-9 sm:text-base"
            >
              <Link to="/contact">
                <MessageSquare aria-hidden="true" />
                Talk to Our Team
              </Link>
            </Button>
          </div>

          <dl
            className="mt-10 grid max-w-3xl gap-x-8 gap-y-5 border-t border-border pt-7 sm:mt-16 sm:gap-y-6 sm:pt-8 sm:grid-cols-3 animate-fade-in"
            style={{ animationDelay: "360ms" }}
          >
            {[
              {
                term: "Immersive Experiences",
                detail: "VR, AR, MR, XR and interactive environments",
              },
              {
                term: "Immersive Content",
                detail: "CGI, 3D, 360° and interactive digital content",
              },
              {
                term: "Delivery & Coordination",
                detail: "Experience design, integration and project delivery",
              },
            ].map((item) => (
              <div key={item.term}>
                <dt className="font-display text-sm font-semibold">{item.term}</dt>
                <dd className="mt-1.5 text-sm text-muted-foreground">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
