export const siteConfig = {
  name: "Astar5 GlobalConsulting",
  legalName: "ASTAR5 GLOBALCONSULTING PRIVATE LIMITED",
  shortName: "Astar5",
  tagline: "Reliable Conversations. Organized Tax Support.",
  description:
    "Telecalling and client communication support for US tax preparation brands, including inbound calls, client follow-up, document reminders, and appointment coordination.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  phoneDisplay: "+91 - 91 77336 222",
  phoneHref: "tel:+919177336222",
  address:
    "DARSHAK CHAMBERS PLOT NO 32 H NO 1-8-303/48/32 PG ROAD STREET NO. 1, SINDHI COLONY, SECUNDERABAD-500003",
  mapsUrl:
    "https://maps.google.com/maps?q=17.4415283203125%2C78.47931671142578&z=17&hl=en",
} as const;
