import Link from "next/link";
import { Container } from "@/components/container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Draft privacy notice for the Astar5 GlobalConsulting website. This text must be reviewed against actual legal entities, systems, and data practices before publication.",
  path: "/privacy-policy",
});

const sections = [
  { id: "who-we-are", title: "1. Who we are" },
  { id: "information-collected", title: "2. Information collected through this website" },
  { id: "how-used", title: "3. How information may be used" },
  { id: "client-taxpayer", title: "4. Client and taxpayer information handled during services" },
  { id: "sharing", title: "5. Sharing and service providers" },
  { id: "international", title: "6. International processing" },
  { id: "retention", title: "7. Retention and security" },
  { id: "rights", title: "8. Rights and requests" },
  { id: "cookies", title: "9. Cookies and website analytics" },
  { id: "updates", title: "10. Updates and contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <article className="bg-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <aside className="lg:col-span-4">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-muted">
            Website draft
          </p>
          <h1 className="mt-3 font-semibold tracking-tight text-[clamp(2.2rem,3.5vw,3.4rem)] text-navy-deep">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: 26 October 2026 (draft)</p>
          <nav aria-label="Privacy policy sections" className="mt-8 hidden lg:block">
            <ul className="space-y-3 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="text-body hover:text-navy">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className="max-w-2xl space-y-10 text-[1.02rem] leading-relaxed lg:col-span-8">
          <p>
            This draft must be reviewed and completed to reflect Astar5
            GlobalConsulting’s actual legal entity, data practices, service
            model, systems, and applicable laws before publication. It is
            starter copy, not a description of verified controls.
          </p>
          <section id="who-we-are">
            <h2 className="font-semibold tracking-tight text-3xl text-navy-deep">1. Who we are</h2>
            <p className="mt-4">
              ASTAR5 GLOBALCONSULTING PRIVATE LIMITED provides telecalling and
              client communication support for US taxation brands. The India
              office is at DARSHAK CHAMBERS PLOT NO 32 H NO 1-8-303/48/32 PG
              ROAD STREET NO. 1, SINDHI COLONY, SECUNDERABAD-500003. For
              privacy enquiries, call +91 - 91 77336 222 or use the website
              enquiry form. Confirm controller or processor roles before this
              draft policy is published.
            </p>
          </section>
          <section id="information-collected">
            <h2 className="font-semibold tracking-tight text-3xl text-navy-deep">
              2. Information collected through this website
            </h2>
            <p className="mt-4">
              We may collect information submitted through business enquiry
              forms, such as name, business email, company name, phone number,
              website, support requirements, and message content. Do not use
              this public form to submit taxpayer records or sensitive tax
              information.
            </p>
          </section>
          <section id="how-used">
            <h2 className="font-semibold tracking-tight text-3xl text-navy-deep">
              3. How information may be used
            </h2>
            <p className="mt-4">
              Business enquiry information may be used to respond to requests,
              discuss potential services, arrange follow-up, maintain business
              records, protect the website, and meet legal obligations. List
              actual purposes and any analytics or marketing tools used after
              those tools are confirmed.
            </p>
          </section>
          <section id="client-taxpayer">
            <h2 className="font-semibold tracking-tight text-3xl text-navy-deep">
              4. Client and taxpayer information handled during services
            </h2>
            <p className="mt-4">
              Where Astar5 processes client or taxpayer information on behalf of
              a tax brand, the contract and documented instructions should
              define permitted uses, access, security responsibilities,
              retention, deletion, incident reporting, and subcontractors.
            </p>
          </section>
          <section id="sharing">
            <h2 className="font-semibold tracking-tight text-3xl text-navy-deep">
              5. Sharing and service providers
            </h2>
            <p className="mt-4">
              Information may be shared with authorized personnel, service
              providers, or professional advisers where necessary and subject to
              appropriate safeguards. Describe actual recipient categories and
              protections only after they are verified.
            </p>
          </section>
          <section id="international">
            <h2 className="font-semibold tracking-tight text-3xl text-navy-deep">
              6. International processing
            </h2>
            <p className="mt-4">
              Depending on the engagement and systems used, information may be
              accessed or processed in the USA, India, or other locations.
              Describe actual data flows and required transfer safeguards after
              legal review.
            </p>
          </section>
          <section id="retention">
            <h2 className="font-semibold tracking-tight text-3xl text-navy-deep">
              7. Retention and security
            </h2>
            <p className="mt-4">
              Retain information only for periods justified by purpose,
              contract, and applicable law. Describe actual safeguards only
              after verification. This draft does not promise controls that
              have not been implemented.
            </p>
          </section>
          <section id="rights">
            <h2 className="font-semibold tracking-tight text-3xl text-navy-deep">
              8. Rights and requests
            </h2>
            <p className="mt-4">
              Depending on applicable law and the company’s role, individuals
              may have rights relating to access, correction, deletion,
              restriction, objection, or other handling of personal
              information. Contact the designated privacy email once confirmed
              and describe the actual request process.
            </p>
          </section>
          <section id="cookies">
            <h2 className="font-semibold tracking-tight text-3xl text-navy-deep">
              9. Cookies and website analytics
            </h2>
            <p className="mt-4">
              If cookies, analytics, advertising pixels, or similar technologies
              are used, identify them and explain their purpose and available
              preference controls. This draft assumes no analytics or
              advertising tools have been confirmed for the public website.
            </p>
          </section>
          <section id="updates">
            <h2 className="font-semibold tracking-tight text-3xl text-navy-deep">
              10. Updates and contact
            </h2>
            <p className="mt-4">
              The policy may be updated as practices or legal requirements
              change. Current version: 26 October 2026 (draft). Privacy contact
              and business address: to be confirmed. Related terms are
              available on the{" "}
              <Link href="/terms-of-service" className="text-navy underline">
                Terms of Service
              </Link>{" "}
              page.
            </p>
          </section>
        </div>
      </Container>
    </article>
  );
}
