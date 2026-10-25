"use client";

import Image from "next/image";
import { ArrowRight, Headphones, Phone, PhoneOutgoing, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { ButtonLink } from "@/components/button-link";
import { siteConfig } from "@/lib/site-config";

const deskItems = [
  { icon: Headphones, label: "Inbound calls" },
  { icon: PhoneOutgoing, label: "Authorized follow-up" },
  { icon: ShieldCheck, label: "Defined escalation" },
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <div className="grid min-h-[36rem] lg:min-h-[42rem] lg:grid-cols-2">
        <div className="flex items-start justify-end px-5 py-16 sm:px-8 lg:px-12 lg:pt-20 lg:pb-24">
          <motion.div
            className="w-full max-w-xl text-white"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-medium text-white/60">
              USA and India operations for US tax brands
            </p>
            <h1 className="mt-5 text-[clamp(2.5rem,5vw,4.2rem)] font-semibold tracking-tight text-white">
              Your Tax Clients Deserve Clear, Consistent Communication.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/78">
              Astar5 GlobalConsulting supports US tax preparation brands with
              professional telecalling: inbound enquiries, document follow-ups,
              appointment coordination, and approved process updates.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact" variant="on-dark" icon={ArrowRight}>
                Discuss Your Requirements
              </ButtonLink>
              <ButtonLink href="/tax-services" variant="secondary" icon={ArrowRight}>
                Explore Our Services
              </ButtonLink>
            </div>
            <a
              href={siteConfig.phoneHref}
              className="mt-6 inline-flex min-h-11 cursor-pointer items-center gap-2 text-base text-white/80 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" strokeWidth={1.75} />
              {siteConfig.phoneDisplay}
            </a>
          </motion.div>
        </div>

        <div className="relative min-h-[22rem] lg:min-h-full">
          <Image
            src="/images/hero-calldesk.jpg"
            alt="Support specialist coordinating client communication from a quiet desk"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <motion.aside
            className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-navy-deep/78 p-4 backdrop-blur-sm sm:inset-x-auto sm:bottom-8 sm:left-8 sm:w-80"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-medium text-white/55">On the desk today</p>
            <ul className="mt-3 space-y-2">
              {deskItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl bg-white/10 px-3 py-2.5 text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/12">
                    <item.icon className="h-4 w-4" strokeWidth={1.7} />
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
