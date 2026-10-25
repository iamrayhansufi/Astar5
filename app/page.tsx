import Image from "next/image";
import {
  ArrowRight,
  BookOpenCheck,
  ClipboardCheck,
  ClipboardList,
  ListChecks,
  LockKeyhole,
  MessagesSquare,
  ShieldCheck,
  Waypoints,
} from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { FeatureGrid } from "@/components/feature-grid";
import { HeroSection } from "@/components/hero-section";
import { ProcessSteps } from "@/components/process-steps";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { faqs, insights } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Astar5 GlobalConsulting | Telecalling Support for US Tax Brands",
  description:
    "Telecalling and client communication support for US tax preparation brands, including inbound calls, client follow-up, document reminders, and appointment coordination.",
  path: "/",
});

const serviceCards = [
  {
    href: "/tax-services#inbound",
    title: "Inbound Call Handling",
    description:
      "Manage incoming client calls, general service enquiries, appointment requests, and routine questions using your approved information.",
    image: "/images/service-inbound.jpg",
    imageAlt: "Support specialist handling an inbound client call with a headset",
  },
  {
    href: "/tax-services#outbound",
    title: "Outbound Client Follow-Up",
    description:
      "Coordinate authorized calls for document reminders, missing-information follow-ups, appointment confirmations, and agreed communications.",
    image: "/images/service-outbound.jpg",
    imageAlt: "Professional ready to make an authorized outbound client call",
  },
  {
    href: "/tax-services#documents",
    title: "Document Reminder Coordination",
    description:
      "Remind clients about outstanding items identified by your firm and direct them to designated secure submission channels.",
    image: "/images/service-documents.jpg",
    imageAlt: "Team reviewing notes and documents during a follow-up discussion",
  },
  {
    href: "/tax-services#appointments",
    title: "Appointment and Status Updates",
    description:
      "Help schedule or confirm appointments and share approved process updates so clients know what happens next.",
    image: "/images/service-appointments.jpg",
    imageAlt: "Customer support team coordinating appointments and callbacks",
  },
];

const principles = [
  {
    icon: MessagesSquare,
    title: "Professional client communication",
    body: "Every conversation stays courteous, on-brief, and aligned with the tone of your tax brand.",
  },
  {
    icon: BookOpenCheck,
    title: "Approved scripts and information",
    body: "Agents share only the guidance your team has reviewed, including FAQs and service descriptions.",
  },
  {
    icon: LockKeyhole,
    title: "Secure, authorized workflows",
    body: "Access is limited to the systems, records, and channels your firm has approved for the engagement.",
  },
  {
    icon: Waypoints,
    title: "Appropriate escalation",
    body: "Tax advice, eligibility, refund amounts, and filing decisions are routed to authorized professionals.",
  },
  {
    icon: ClipboardList,
    title: "Clear documentation",
    body: "Call outcomes, outstanding actions, and next steps are recorded in the system you designate.",
  },
  {
    icon: ListChecks,
    title: "Defined service scope",
    body: "Coverage, languages, hours, and responsibilities are confirmed in writing before calls begin.",
  },
];

export default function HomePage() {
  const [featuredService, ...otherServices] = serviceCards;

  return (
    <>
      <HeroSection />

      <section className="bg-white py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading title="Professional Support. Clearer Client Communication." />
          </Reveal>
          <div className="lg:col-span-7">
            <FeatureGrid
              items={[
                {
                  icon: MessagesSquare,
                  title: "Professional Communication",
                  description:
                    "Clear, courteous conversations aligned with the tax brand's approved guidance.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Organized Follow-Ups",
                  description:
                    "Structured reminders, callbacks, appointment coordination, and documented next steps.",
                },
                {
                  icon: ShieldCheck,
                  title: "Responsible Coordination",
                  description:
                    "Clear escalation paths for questions requiring the tax firm's authorized professionals.",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      <section className="bg-ice py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              title="Telecalling Support Built Around Your Workflow."
              description="Tax season brings a high volume of questions, reminders, document requests, and status enquiries. Astar5 provides structured telecalling support designed around your service model, communication standards, and escalation process."
            />
          </Reveal>
          <div className="mt-12 grid gap-4">
            <Reveal>
              <ServiceCard {...featuredService} featured />
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {otherServices.map((card, index) => (
                <Reveal key={card.href} delay={index * 0.06}>
                  <ServiceCard {...card} />
                </Reveal>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <ButtonLink href="/tax-services" icon={ArrowRight}>
              Explore Our Services
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-12 lg:py-14">
        <Container className="grid gap-8 md:grid-cols-3">
          {[
            "Consistent call workflows",
            "Clear follow-up documentation",
            "Defined escalation paths",
          ].map((item) => (
            <p
              key={item}
              className="border-l border-white/20 pl-5 text-lg font-medium text-white"
            >
              {item}
            </p>
          ))}
        </Container>
      </section>

      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <div className="relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl md:aspect-[16/8]">
              <Image
                src="/images/about.jpg"
                alt="Team reviewing a client communication workflow together"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <Reveal className="relative z-10 mx-auto -mt-16 max-w-xl rounded-2xl bg-white p-7 shadow-soft md:-mt-20 md:p-10 lg:ml-12 lg:mr-auto">
              <p className="text-sm font-medium text-muted">About Astar5</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold tracking-tight text-navy-deep">
                A Dedicated Support Partner for US Taxation Brands.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body">
                With a USA and India business presence, we help tax service
                businesses manage routine client conversations through structured
                workflows, clear communication, and coordinated follow-up. We work
                alongside your existing processes so tax professionals can focus
                on work that requires their expertise.
              </p>
              <div className="mt-6">
                <ButtonLink href="/about-us" variant="ghost" icon={ArrowRight}>
                  Learn About Us
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              title="A Structured Approach to Telecalling Support."
              description="Before calls begin, both teams agree on the work in scope, approved information, client verification requirements, and the escalation process."
            />
          </Reveal>
          <div className="mt-12">
            <ProcessSteps />
          </div>
          <div className="mt-10">
            <ButtonLink href="/how-it-works" variant="ghost" icon={ArrowRight}>
              See how an engagement is set up
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-ice py-20 lg:py-24">
        <Container>
          <h2 className="max-w-2xl text-[clamp(2rem,3.6vw,3.2rem)] font-semibold tracking-tight text-navy-deep">
            Built on clear rules, not guesswork.
          </h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-12">
            <figure className="relative min-h-80 overflow-hidden rounded-2xl lg:col-span-5">
              <Image
                src="/images/principle-desk.jpg"
                alt="Headset, checklist, and notebook arranged on a call support desk"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </figure>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              {principles.map((item) => (
                <article key={item.title} className="rounded-2xl bg-white p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ice text-navy">
                    <item.icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 text-[1.1rem] font-semibold tracking-tight text-navy-deep">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-body">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-[clamp(2rem,3.6vw,3.2rem)] font-semibold tracking-tight text-navy-deep">
              Built Around Your Service Standards.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg leading-relaxed">
              Each engagement follows the communication workflows, systems, and
              escalation rules approved by the tax brand. We do not invent a
              generic script for every client. We document how your firm serves
              people, what information can be shared, and when a call must move
              to an authorized professional.
            </p>
            <ul className="mt-8 space-y-3 text-base leading-relaxed text-body">
              <li className="border-l-2 border-navy pl-4">
                Workflows are written with your designated contact before calls begin.
              </li>
              <li className="border-l-2 border-navy pl-4">
                Agents stay within the topics and contact rules you approve.
              </li>
              <li className="border-l-2 border-navy pl-4">
                Reporting and quality feedback are reviewed against the agreed process.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 lg:py-24">
        <Container>
          <SectionHeading
            title="Notes for tax brands preparing their support model."
            description="These planning notes are for operational discussion. They are not tax advice and do not describe a specific client engagement."
          />
          <div className="mt-10 divide-y divide-line border-y border-line">
            {insights.map((item) => (
              <article
                key={item.title}
                className="grid gap-5 py-6 sm:grid-cols-[88px_1fr] sm:items-center"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="88px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-[1.2rem] font-semibold tracking-tight text-navy-deep">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-base leading-relaxed text-body">
                    {item.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-[clamp(2rem,3.6vw,3.2rem)] font-semibold tracking-tight text-navy-deep">
              Common questions from tax businesses.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={faqs.slice(0, 5)} />
            <div className="mt-8">
              <ButtonLink href="/contact" icon={ArrowRight}>
                Discuss Your Requirements
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
