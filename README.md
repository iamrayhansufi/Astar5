# Astar5 GlobalConsulting

Production-ready Next.js website for Astar5 GlobalConsulting, a USA- and India-based B2B telecalling support partner for US tax preparation and tax return brands.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React

## Local development

```bash
npm install
npm run dev
```

## Contact form

The enquiry form validates on the client and posts to `/api/enquiry`. Delivery is not enabled until `ENQUIRY_WEBHOOK_URL` is set. See `.env.example`. The form will not report a successful send unless that endpoint is configured and responds successfully.

## Content notes

- Official email, phone, and office addresses are placeholders until verified.
- Privacy Policy and Terms of Service are starter drafts for legal review.
- The site does not present Astar5 as a tax preparation firm or a lead-generation agency.
