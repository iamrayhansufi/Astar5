import Image from "next/image";
import { ArrowRight, CalendarCheck, FileText, Headphones, PhoneOutgoing, Radio, UserRound } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { CtaSection } from "@/components/cta-section";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Telecalling Support for US Tax Preparation Brands",
  description:
    "Support your tax business with inbound call handling, authorized client follow-up, document reminders, appointment coordination, and approved tax-process communication.",
  path: "/tax-services",
});

const services = [
  {
    id: "inbound",
    title: "Inbound Tax Enquiry Handling",
    body: "Receive and route incoming calls from existing or prospective customers of your tax business. Share approved general service information, record the reason for the call, capture callback requests, and escalate questions that require a tax professional.",
    image: "/images/service-inbound.jpg",
    imageAlt: "Support specialist handling inbound tax-service enquiries",
    icon: Headphones,
  },
  {
    id: "outbound",
    title: "Outbound Client Calling",
    body: "Support authorized client follow-up, including appointment confirmations, reminders, requests for outstanding information, and agreed service communications. Contact rules, call windows, scripts, and opt-out handling should be confirmed before launch.",
    image: "/images/service-outbound.jpg",
    imageAlt: "Professional prepared for authorized outbound client calling",
    icon: PhoneOutgoing,
  },
  {
    id: "documents",
    title: "Document Follow-Up Coordination",
    body: "Remind clients about documents or information your firm has identified as outstanding. Follow your approved checklist and direct clients to designated secure submission channels. Sensitive tax documents should not be requested through ordinary calls, email, or unsecured messaging unless approved procedures permit it.",
    image: "/images/service-documents.jpg",
    imageAlt: "Notes and documents used to track outstanding client information",
    icon: FileText,
  },
  {
    id: "appointments",
    title: "Appointment Scheduling and Confirmation",
    body: "Coordinate appointment requests, confirmations, rescheduling, and callbacks using your approved calendar or booking workflow, where included in scope.",
    image: "/images/service-appointments.jpg",
    imageAlt: "Team coordinating appointment requests and confirmations",
    icon: CalendarCheck,
  },
  {
    id: "status",
    title: "Tax Return Status Communication",
    body: "Share status updates only when supplied or authorized by your tax firm and within caller verification and access rules. Questions about tax positions, eligibility, refund amounts, or filing decisions must be routed to the appropriate professional.",
    image: "/images/insight-workflows.jpg",
    imageAlt: "Structured notes used to communicate approved process updates",
    icon: Radio,
  },
  {
    id: "client-service",
    title: "Client Service and Follow-Up",
    body: "Maintain consistent client communication by recording call outcomes, noting outstanding actions, routing complaints, and communicating next steps defined by your team.",
    image: "/images/page-contact.jpg",
    imageAlt: "Professional available for routine client service communication",
    icon: UserRound,
  },
];

export default function TaxServicesPage() {
  return (
    <>
      <PageHero
        kicker="Tax services"
        title="Telecalling Support for US Tax Preparation and Tax Return Brands"
        description="Astar5 GlobalConsulting provides communication and coordination support to businesses offering US tax preparation and tax return services. We help tax brands manage client conversations and routine follow-up through a structured, service-focused approach."
      />

      <section className="bg-white py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-medium text-muted">Service index</p>
              <nav aria-label="Tax services" className="mt-5 space-y-2">
                {services.map((service, index) => (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    className="flex items-baseline gap-3 rounded-md px-3 py-2 text-base text-body hover:bg-ice hover:text-navy"
                  >
                    <span className="text-sm tabular-nums text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {service.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
          <div className="lg:col-span-8">
            <p className="max-w-2xl text-lg leading-relaxed">
              Our role is to support your client communication process. Tax
              advice, tax return preparation, professional review, signing, and
              filing are handled by your firm and appropriately authorized
              professionals.
            </p>
            <div className="mt-12 space-y-10">
              {services.map((service, index) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-28 grid gap-6 border-t border-line pt-10 sm:grid-cols-[160px_1fr]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-square">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold tabular-nums text-navy">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-2 flex items-center gap-3 text-[1.7rem] font-semibold tracking-tight text-navy-deep">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ice text-navy">
                        <service.icon className="h-5 w-5" strokeWidth={1.7} />
                      </span>
                      {service.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-body">
                      {service.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 lg:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-[clamp(2rem,3.6vw,3.1rem)] font-semibold tracking-tight text-white">
            Flexible Support Scope
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            Support may be configured for tax-season peaks, agreed business
            hours, or ongoing operations. Staffing, coverage, languages, systems,
            service levels, reporting, and pricing are confirmed in a written
            proposal or statement of work.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="on-dark" icon={ArrowRight}>
              Discuss Your Requirements
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Discuss telecalling support for your tax brand."
        description="Share expected call types, hours, and systems so we can talk through a practical support model."
      />
    </>
  );
}
