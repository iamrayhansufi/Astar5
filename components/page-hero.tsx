import { ArrowRight, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site-config";

type PageHeroProps = {
  kicker?: string;
  title: string;
  description: string;
  showCta?: boolean;
};

export function PageHero({
  kicker,
  title,
  description,
  showCta = true,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-navy-mid/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-navy/50 blur-3xl" />
      <Container className="relative max-w-4xl py-16 lg:py-20">
        {kicker ? (
          <p className="text-sm font-medium text-white/55">{kicker}</p>
        ) : null}
        <h1 className="mt-3 text-[clamp(2.3rem,4vw,3.8rem)] font-semibold tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {showCta ? (
            <ButtonLink href="/contact" variant="on-dark" icon={ArrowRight}>
              Discuss Your Requirements
            </ButtonLink>
          ) : null}
          <a
            href={siteConfig.phoneHref}
            className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-md border border-white/25 px-5 text-base text-white transition-colors hover:bg-white/10"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
