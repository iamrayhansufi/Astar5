import { NextResponse } from "next/server";
import { supportOptions } from "@/lib/content";

type EnquiryPayload = {
  fullName?: string;
  businessEmail?: string;
  companyName?: string;
  website?: string;
  market?: string;
  phone?: string;
  supportRequired?: string;
  coverage?: string;
  description?: string;
  consent?: boolean;
};

function isSupportOption(value: string) {
  return (supportOptions as readonly string[]).includes(value);
}

export async function POST(request: Request) {
  let body: EnquiryPayload;

  try {
    body = (await request.json()) as EnquiryPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "The enquiry could not be read. Please try again." },
      { status: 400 },
    );
  }

  const fullName = body.fullName?.trim() ?? "";
  const businessEmail = body.businessEmail?.trim() ?? "";
  const companyName = body.companyName?.trim() ?? "";
  const website = body.website?.trim() ?? "";
  const market = body.market?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const supportRequired = body.supportRequired?.trim() ?? "";
  const coverage = body.coverage?.trim() ?? "";
  const description = body.description?.trim() ?? "";

  if (!fullName || !businessEmail || !companyName || !supportRequired || !description) {
    return NextResponse.json(
      { ok: false, message: "Please complete the required fields and try again." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessEmail)) {
    return NextResponse.json(
      { ok: false, message: "Enter a valid business email address." },
      { status: 400 },
    );
  }

  if (!isSupportOption(supportRequired)) {
    return NextResponse.json(
      { ok: false, message: "Select a valid support type." },
      { status: 400 },
    );
  }

  if (!body.consent) {
    return NextResponse.json(
      { ok: false, message: "Consent is required to send this enquiry." },
      { status: 400 },
    );
  }

  const enquiry = {
    fullName,
    businessEmail,
    companyName,
    website,
    market,
    phone,
    supportRequired,
    coverage,
    description,
    submittedAt: new Date().toISOString(),
  };

  // Integration point: set ENQUIRY_WEBHOOK_URL to a secure HTTPS endpoint
  // that accepts this JSON payload (email provider, CRM, or form service).
  const webhook = process.env.ENQUIRY_WEBHOOK_URL;

  if (!webhook) {
    return NextResponse.json(
      {
        ok: false,
        code: "NOT_CONNECTED",
        message:
          "This enquiry form is not connected to a delivery service yet. Your details were validated on this page, but they have not been sent. Please try again once official contact details are confirmed.",
      },
      { status: 503 },
    );
  }

  const webhookResponse = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(enquiry),
  });

  if (!webhookResponse.ok) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "The enquiry could not be delivered. Please try again shortly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      "Your enquiry has been sent. If the requirement appears relevant, the team will contact you using the details provided.",
  });
}
