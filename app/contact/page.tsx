import { MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Contact Astar5 GlobalConsulting | Telecalling Support",
  description:
    "Discuss telecalling support for your US tax preparation or tax return business. Share your operation details and Astar5 will follow up if the requirement is relevant.",
  path: "/contact",
});

const nextSteps = [
  "We review your enquiry and the type of support requested.",
  "If the requirement appears relevant, we contact you using the details provided.",
  "We discuss workflow, coverage, systems, training, data handling, and scope before preparing a proposal.",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Let’s Discuss Your Telecalling Support Requirements"
        description="Do you operate a US tax preparation or tax return business and need help managing client calls, appointment coordination, document reminders, or routine service enquiries? Share details about your operation, and our team will contact you to discuss next steps."
        showCta={false}
      />

      <section className="bg-paper py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-semibold tracking-tight text-navy-deep">
              Contact information
            </h2>
            <dl className="mt-8 space-y-6 text-base">
              <div>
                <dt className="text-muted">Company</dt>
                <dd className="mt-1 font-medium text-navy-deep">
                  {siteConfig.legalName}
                </dd>
              </div>
              <div>
                <dt className="text-muted">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center gap-2 font-medium text-navy-deep hover:text-navy"
                  >
                    <Phone className="h-4 w-4" strokeWidth={1.75} />
                    {siteConfig.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">India office</dt>
                <dd className="mt-1">
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-start gap-2 leading-relaxed text-navy-deep hover:text-navy"
                  >
                    <MapPin className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.75} />
                    <span>{siteConfig.address}</span>
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-8 max-w-md text-base leading-relaxed text-body">
              Use the enquiry form for a written request, or call the India
              office to discuss a tax-brand support requirement. Do not send
              taxpayer records through this public form.
            </p>
            <div className="mt-10">
              <h3 className="text-[1.5rem] font-semibold tracking-tight text-navy-deep">
                What happens next?
              </h3>
              <ol className="mt-5 space-y-4">
                {nextSteps.map((step, index) => (
                  <li key={step} className="text-base leading-relaxed">
                    <span className="mr-2 text-sm font-semibold tabular-nums text-navy">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6 sm:p-8 lg:col-span-7">
            <h2 className="text-[1.7rem] font-semibold tracking-tight text-navy-deep">
              Business enquiry
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body">
              Please do not submit taxpayer names, Social Security numbers, tax
              identification numbers, dates of birth, bank details, tax returns,
              passwords, or other sensitive taxpayer information through this
              public enquiry form.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
