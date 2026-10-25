import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { SiteLogo } from "@/components/site-logo";
import {
  footerCompanyLinks,
  footerLegalLinks,
  footerServiceLinks,
} from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="max-w-sm">
          <SiteLogo inverted />
          <p className="mt-6 text-base leading-relaxed text-white/75">
            Telecalling and client communication support for US tax preparation
            and tax return brands, delivered through USA and India operations.
          </p>
        </div>
        <FooterColumn title="Company" links={footerCompanyLinks} />
        <FooterColumn title="Tax Services" links={footerServiceLinks} />
        <div>
          <p className="text-[0.78rem] font-medium uppercase tracking-[0.16em] text-white/55">
            Contact
          </p>
          <p className="mt-5 text-base font-medium text-white">
            {siteConfig.legalName}
          </p>
          <ul className="mt-5 space-y-4 text-base text-white/75">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/70" strokeWidth={1.75} />
              <a href={siteConfig.phoneHref} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/70" strokeWidth={1.75} />
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="leading-relaxed hover:text-white"
              >
                {siteConfig.address}
              </a>
            </li>
          </ul>
          <ul className="mt-8 space-y-3">
            {footerLegalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-base text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.legalName}. All rights reserved.</p>
          <p>B2B telecalling support for US taxation brands.</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-[0.78rem] font-medium uppercase tracking-[0.16em] text-white/55">
        {title}
      </p>
      <ul className="mt-5 space-y-3">
        {links.map((item) => (
          <li key={`${item.href}-${item.label}`}>
            <Link
              href={item.href}
              className="text-base text-white/75 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
