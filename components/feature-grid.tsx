import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function FeatureGrid({ items }: { items: FeatureItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.05}>
          <article className="grid gap-4 py-7 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-ice text-navy">
              <item.icon className="h-5 w-5" strokeWidth={1.6} />
            </div>
            <div>
              <h3 className="text-[1.35rem] font-semibold tracking-tight text-navy-deep">
                {item.title}
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-body">
                {item.description}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
