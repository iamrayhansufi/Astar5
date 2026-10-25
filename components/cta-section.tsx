import { ArrowRight, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site-config";

type CtaSectionProps = {
  title?: string;
  description?: string;
};

export function CtaSection({
  title = "Ready to Strengthen Your Client Communication?",
  description = "Tell us about your tax business, expected call volume, and the support model that fits your workflow.",
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-navy-mid/50 blur-3xl" />
      <Container className="relative grid gap-10 py-16 lg:grid-cols-12 lg:items-end lg:py-20">
        <div className="lg:col-span-7">
          <p className="text-sm font-medium text-white/55">Next step</p>
          <h2 className="mt-3 max-w-2xl text-[clamp(2.1rem,3.8vw,3.3rem)] font-semibold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/75">
            {description}
          </p>
        </div>
        <div className="space-y-5 lg:col-span-5">
          <a
            href={siteConfig.phoneHref}
            className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl bg-white/8 px-4 text-white transition-colors hover:bg-white/12"
          >
            <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex cursor-pointer items-start gap-3 rounded-xl bg-white/8 px-4 py-3 text-white/75 transition-colors hover:bg-white/12 hover:text-white"
          >
            <MapPin className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.75} />
            <span className="text-base leading-relaxed">{siteConfig.address}</span>
          </a>
          <ButtonLink href="/contact" variant="on-dark" icon={ArrowRight} className="w-full sm:w-auto">
            Discuss Your Requirements
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
