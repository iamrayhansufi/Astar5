import Link from "next/link";
import { Container } from "@/components/container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Starter terms for the Astar5 GlobalConsulting website. Submitting an enquiry does not create a service engagement. Final terms require legal review.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <article className="bg-white">
      <Container className="max-w-3xl py-16 lg:py-24">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-muted">
          Starter copy
        </p>
        <h1 className="mt-3 text-[clamp(2.2rem,3.5vw,3.4rem)] font-semibold tracking-tight text-navy-deep">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated: 26 October 2026 (draft)</p>
        <div className="mt-10 space-y-6 text-[1.02rem] leading-relaxed">
          <p>
            Website content is provided for general information about Astar5
            GlobalConsulting’s telecalling support services. Submitting an
            enquiry does not itself create a service engagement. Scope, fees,
            responsibilities, confidentiality, data handling, security
            requirements, compliance duties, and other terms must be set out in
            a separate written agreement before services commence.
          </p>
          <p>
            Astar5’s telecalling support is not a substitute for tax advice or
            tax preparation by appropriately authorized professionals. No
            website statement guarantees a tax refund, tax outcome, or
            government processing time. Tax brands remain responsible for
            approving information shared with their clients and defining which
            questions must be escalated.
          </p>
          <p>
            Final terms should specify the applicable legal entity, governing
            law, jurisdiction, intellectual-property terms, third-party
            services, disclaimers, and limitations of liability after legal
            review. This page is starter copy, not legal advice.
          </p>
          <p>
            For the current draft privacy notice, see the{" "}
            <Link href="/privacy-policy" className="text-navy underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </Container>
    </article>
  );
}
