"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export type ServiceCardProps = {
  href: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export function ServiceCard({
  href,
  title,
  description,
  image,
  imageAlt,
  featured = false,
}: ServiceCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`group h-full overflow-hidden rounded-2xl border border-line bg-white ${
        featured ? "lg:grid lg:grid-cols-[1.15fr_0.85fr]" : "flex flex-col"
      }`}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={href} className="flex h-full flex-col lg:contents">
        <div
          className={`relative overflow-hidden bg-ice ${
            featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-[22rem]" : "aspect-[16/10]"
          }`}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes={featured ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 1024px) 100vw, 33vw"}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col justify-end p-6 sm:p-7">
          <h3
            className={`font-semibold tracking-tight text-navy-deep ${
              featured ? "text-[1.7rem] lg:text-[2rem]" : "text-[1.25rem]"
            }`}
          >
            {title}
          </h3>
          <p className="mt-3 flex-1 text-base leading-relaxed text-body">
            {description}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-base font-medium text-navy">
            Explore Service
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.75}
            />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
