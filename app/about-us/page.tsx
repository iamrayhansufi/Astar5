import Image from "next/image";
import { ArrowRight, MessagesSquare, RefreshCw, ShieldCheck, UserRoundCheck, Waypoints } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About Astar5 GlobalConsulting | US Tax Brand Support",
  description:
    "Astar5 GlobalConsulting provides telecalling and client communication support for US taxation brands, with a USA and India business presence.",
  path: "/about-us",
});

const approach = [
  {
    icon: MessagesSquare,
    title: "Purposeful communication",
    body: "Each call follows an approved workflow.",
  },
  {
    icon: ShieldCheck,
    title: "Consistent process",
    body: "Use agreed scripts, checklists, call dispositions, and escalation rules.",
  },
  {
    icon: UserRoundCheck,
    title: "Respect for client information",
    body: "Follow data-handling instructions and use authorized systems.",
  },
  {
    icon: Waypoints,
    title: "Professional coordination",
    body: "Record next steps clearly and route questions to the right contact.",
  },
  {
    icon: RefreshCw,
    title: "Continuous feedback",
    body: "Review quality and operational issues with the client team.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="About Astar5 GlobalConsulting"
        description="Astar5 GlobalConsulting provides telecalling and client communication support for US taxation brands. With a USA and India business presence, we help tax service businesses manage routine client conversations through structured workflows, clear communication, and coordinated follow-up."
      />

      <section className="bg-ice py-16 lg:py-24">
        <Container className="max-w-4xl">
          <p className="text-sm font-medium text-muted">Our mission</p>
          <p className="mt-4 text-[clamp(1.8rem,3.4vw,3rem)] font-semibold leading-tight tracking-tight text-navy-deep">
            To help US taxation brands deliver a more organized and responsive
            client communication experience through dependable telecalling
            support.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Container className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/about.jpg"
                alt="Astar5 team collaborating on a client communication plan"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-[clamp(2rem,3.4vw,2.8rem)] font-semibold tracking-tight text-navy-deep">
              Tax-related client communication requires care.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed">
              Callers may have questions about documents, appointments, service
              steps, or request status. Our approach is to use the tax firm’s
              approved information, follow its procedures, and route technical
              or sensitive questions to the appropriate professional.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 lg:py-20">
        <Container>
          <h2 className="text-[clamp(2rem,3.4vw,2.8rem)] font-semibold tracking-tight text-navy-deep">
            Our Approach
          </h2>
          <dl className="mt-10 divide-y divide-line border-y border-line">
            {approach.map((item) => (
              <div
                key={item.title}
                className="grid gap-3 py-6 md:grid-cols-[280px_1fr] md:gap-10"
              >
                <dt className="flex items-center gap-3 text-lg font-semibold tracking-tight text-navy-deep">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ice text-navy">
                    <item.icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  {item.title}
                </dt>
                <dd className="text-base leading-relaxed text-body">{item.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-navy py-16 lg:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-[clamp(2rem,3.4vw,2.8rem)] font-semibold tracking-tight text-white">
            Our Commitment
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            We aim to represent each client brand professionally, communicate
            only approved information, and maintain clear boundaries between
            customer support and tax-professional responsibilities. Service
            scope, training, quality review, security arrangements, and
            performance measures are defined for each engagement.
          </p>
          <p className="mt-8 text-xl font-medium text-white">
            Your telecalling support partner for US taxation brands.
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
