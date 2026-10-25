import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ProcessSteps } from "@/components/process-steps";
import { clientInputs } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "How It Works",
  description:
    "See how Astar5 sets up telecalling support for tax brands, from scoping and approved scripts to secure channels, call handling, and review.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        kicker="How it works"
        title="A Structured Approach to Telecalling Support"
        description="We aim to make outsourced call support straightforward to set up and clear to manage. Before calls begin, both teams agree on the work in scope, approved information, client verification requirements, and escalation process."
      />

      <section className="bg-white py-16 lg:py-20">
        <Container>
          <h2 className="max-w-2xl text-[clamp(2rem,3.6vw,3.1rem)] font-semibold tracking-tight text-navy-deep">
            Six steps before and after calls begin
          </h2>
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </Container>
      </section>

      <section className="bg-ice py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-[clamp(2rem,3.6vw,3.1rem)] font-semibold tracking-tight text-navy-deep">
              What we need from your team
            </h2>
            <p className="mt-5 text-lg leading-relaxed">
              These inputs keep conversations accurate, authorized, and easy to
              escalate. They are confirmed before any client call is handled.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {clientInputs.map((item, index) => (
              <li
                key={item}
                className="rounded-2xl bg-white p-5 text-base leading-relaxed"
              >
                <span className="mb-2 block text-sm font-semibold tabular-nums text-navy">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-navy py-16 lg:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-[clamp(2rem,3.6vw,3.1rem)] font-semibold tracking-tight text-white">
            Clear boundaries matter
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            Agents communicate within the scope approved by your business. They
            do not independently provide tax advice, make tax determinations,
            promise refunds, change tax return information, or claim a return
            has been filed unless confirmed by the authorized tax firm and the
            agent is permitted to communicate it.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="on-dark" icon={ArrowRight}>
              Discuss Your Requirements
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
