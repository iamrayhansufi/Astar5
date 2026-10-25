export const faqs = [
  {
    question: "What does Astar5 GlobalConsulting provide?",
    answer:
      "Telecalling and client communication support for US taxation brands, based on an agreed scope.",
  },
  {
    question: "Does Astar5 prepare or file tax returns?",
    answer:
      "Astar5 is positioned as a telecalling support partner. Tax preparation, professional review, and filing are handled by the tax brand and authorized professionals unless a separate verified arrangement states otherwise.",
  },
  {
    question: "What types of calls can your team handle?",
    answer:
      "Depending on scope: inbound enquiries, client follow-up, document reminders, appointment coordination, callback requests, and approved process updates.",
  },
  {
    question: "Can your team answer tax questions?",
    answer:
      "Agents may share approved general service information. Questions about tax advice, eligibility, deductions, tax positions, refund amounts, or filing decisions must be escalated.",
  },
  {
    question: "Can you work with our scripts and systems?",
    answer:
      "Scripts, system access, training, call recording, and reporting requirements are reviewed and agreed before launch.",
  },
  {
    question: "Can you support seasonal call volumes?",
    answer:
      "Seasonal coverage can be discussed. Capacity, onboarding time, hours, and service levels must be confirmed in the proposal.",
  },
  {
    question: "How do you handle taxpayer information?",
    answer:
      "Information must be handled only through approved systems and documented client instructions, applicable law, and the final contract. Do not submit sensitive tax information through the public enquiry form.",
  },
  {
    question: "How do we get started?",
    answer:
      "Submit a business enquiry describing your tax brand, call types, expected volume, preferred hours, and support needs.",
  },
] as const;

export const processSteps = [
  {
    title: "Understand Your Operation",
    body: "Discuss your business model, call types, client journey, expected volumes, time zones, operating hours, and existing support process.",
  },
  {
    title: "Define Scope and Responsibilities",
    body: "Confirm which calls are handled, which topics can be answered, what must be escalated, how appointments are coordinated, and what information can be recorded.",
  },
  {
    title: "Approve Scripts and Workflows",
    body: "Review call guides, FAQs, identity-verification steps, document reminder wording, status-update rules, opt-out procedures, and escalation contacts.",
  },
  {
    title: "Confirm Systems and Secure Channels",
    body: "Agree on access to phone systems, CRM or case-management tools, approved knowledge resources, and secure document-submission processes. Access should be limited to what is needed.",
  },
  {
    title: "Begin Client Communication",
    body: "Follow the approved process, document call outcomes in the agreed system, and route questions or exceptions to the designated contact.",
  },
  {
    title: "Review and Refine",
    body: "Review agreed reporting, recurring enquiries, call outcomes, quality feedback, and process issues to identify improvements.",
  },
] as const;

export const clientInputs = [
  "Approved scripts, service descriptions, FAQs, and client communication templates.",
  "A clear list of permitted call types and topics requiring escalation.",
  "Defined identity-verification and authorization procedures.",
  "Approved contact lists and confirmation that contact is permitted.",
  "Access to required systems through authorized accounts.",
  "A named point of contact for decisions, exceptions, and quality feedback.",
] as const;

export const supportOptions = [
  "Inbound Calls",
  "Outbound Client Follow-Up",
  "Appointment Coordination",
  "Document Reminders",
  "General Client Support",
  "Other",
] as const;

export const insights = [
  {
    title: "Preparing Client Communication Workflows for Tax Season",
    summary:
      "How tax brands can document call types, hours, and escalation points before peak demand arrives.",
    image: "/images/insight-workflows.jpg",
    imageAlt: "Professional working through a structured communication plan on a laptop",
  },
  {
    title: "Building a Clear Document Follow-Up Process",
    summary:
      "A practical way to remind clients about outstanding items without collecting sensitive tax files on unsecured channels.",
    image: "/images/insight-documents.jpg",
    imageAlt: "Desk with organized financial documents and a calculator",
  },
  {
    title: "Managing Tax-Service Enquiries Professionally",
    summary:
      "Keep inbound conversations courteous, on-script, and ready to transfer when a tax professional is required.",
    image: "/images/insight-enquiries.jpg",
    imageAlt: "Notebook and pen used for structured enquiry notes",
  },
  {
    title: "Defining Escalation Rules for Tax Support Teams",
    summary:
      "Set clear boundaries so routine updates stay with support and tax determinations stay with authorized professionals.",
    image: "/images/insight-escalation.jpg",
    imageAlt: "Team discussing process and responsibility in a meeting",
  },
] as const;
