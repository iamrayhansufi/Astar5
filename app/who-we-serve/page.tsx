import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { CtaSection } from "@/components/cta-section";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Who We Serve",
  description:
    "Astar5 works with US tax preparation firms, tax service businesses, multi-preparer teams, and seasonal tax brands that need structured client communication support.",
  path: "/who-we-serve",
});

const audiences = [
  {
    title: "Tax Preparation Firms",
    body: "Support client calls, appointment coordination, document reminders, and approved updates so tax preparers can focus on return preparation and professional review.",
    image: "/images/who-firms.jpg",
    imageAlt: "Tax preparation team meeting in a conference room",
  },
  {
    title: "Tax Filing and Tax Service Businesses",
    body: "Help manage seasonal call volumes, routine service enquiries, client follow-ups, and communication steps that keep cases moving through your established process.",
    image: "/images/who-filing.jpg",
    imageAlt: "Professionals discussing a tax-service client process",
  },
  {
    title: "Multi-Preparer and Distributed Teams",
    body: "Coordinate communication across an agreed workflow, including callback requests, follow-up ownership, and routing to the correct team or tax professional.",
    image: "/images/who-distributed.jpg",
    imageAlt: "Colleagues coordinating work across a distributed team",
  },
  {
    title: "Tax Brands With Seasonal Demand",
    body: "Discuss support during periods when call volume increases. Coverage, ramp-up time, working hours, and capacity must be agreed before launch.",
    image: "/images/who-seasonal.jpg",
    imageAlt: "Support team prepared for higher seasonal call volume",
  },
];

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        kicker="Who we serve"
        title="Support for US Taxation Brands"
        description="Astar5 works with businesses that provide US tax preparation and tax return services and need reliable support for routine client communication. We learn how your firm serves clients, what information your team can share, and when a call must be transferred or escalated."
      />

      <section className="bg-white py-16 lg:py-20">
        <Container className="grid gap-5 md:grid-cols-2">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="overflow-hidden rounded-2xl border border-line bg-paper"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={audience.image}
                  alt={audience.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h2 className="text-[1.5rem] font-semibold tracking-tight text-navy-deep">
                  {audience.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-body">
                  {audience.body}
                </p>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-ice py-16 lg:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-[clamp(2rem,3.6vw,3.1rem)] font-semibold tracking-tight text-navy-deep">
            A Support Model That Fits Your Operation
          </h2>
          <p className="mt-5 text-lg leading-relaxed">
            Every tax business has its own tools, client journey, service
            standards, and escalation rules. We work with your designated
            contact to document the workflow before handling client calls.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" icon={ArrowRight}>
              Discuss Your Requirements
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Talk with us about your tax business."
        description="Share how your firm serves clients and where communication support would help most."
      />
    </>
  );
}
