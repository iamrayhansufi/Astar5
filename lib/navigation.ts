export type NavItem = {
  href: string;
  label: string;
};

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/tax-services", label: "Tax Services" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export const footerCompanyLinks: NavItem[] = mainNav;

export const footerServiceLinks: NavItem[] = [
  { href: "/tax-services#inbound", label: "Inbound Call Handling" },
  { href: "/tax-services#outbound", label: "Outbound Client Follow-Up" },
  { href: "/tax-services#documents", label: "Document Reminders" },
  { href: "/tax-services#appointments", label: "Appointment Coordination" },
  { href: "/tax-services#status", label: "Status Communication" },
  { href: "/tax-services#client-service", label: "Client Service Support" },
];

export const footerLegalLinks: NavItem[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];
