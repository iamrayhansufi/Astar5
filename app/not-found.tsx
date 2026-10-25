import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <Container className="py-24 lg:py-32">
        <p className="text-sm font-medium text-muted">
          Page not found
        </p>
        <h1 className="mt-4 max-w-2xl text-[clamp(2.6rem,4.2vw,4.4rem)] font-semibold tracking-tight text-navy-deep">
          This page is not available.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">
          The page you requested does not exist or has been moved. Return to the
          homepage or go to Tax Services to review Astar5 support offerings.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/" icon={ArrowRight}>Back to Home</ButtonLink>
          <ButtonLink href="/tax-services" variant="ghost" icon={ArrowRight}>
            Explore Our Services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
