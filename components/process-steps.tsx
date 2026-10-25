import {
  BookOpenCheck,
  Headset,
  LockKeyhole,
  RefreshCw,
  ScanSearch,
  Waypoints,
} from "lucide-react";
import { processSteps } from "@/lib/content";

const stepIcons = [
  ScanSearch,
  Waypoints,
  BookOpenCheck,
  LockKeyhole,
  Headset,
  RefreshCw,
];

export function ProcessSteps() {
  return (
    <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {processSteps.map((step, index) => {
        const Icon = stepIcons[index];
        return (
          <li
            key={step.title}
            className={`rounded-2xl p-6 ${
              index === 0
                ? "bg-navy text-white md:col-span-2 xl:col-span-1"
                : "bg-ice text-navy-deep"
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                  index === 0 ? "bg-white/12 text-white" : "bg-white text-navy"
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <span
                className={`text-sm font-semibold tabular-nums ${
                  index === 0 ? "text-white/55" : "text-navy"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3
              className={`mt-5 text-[1.25rem] font-semibold tracking-tight ${
                index === 0 ? "text-white" : "text-navy-deep"
              }`}
            >
              {step.title}
            </h3>
            <p
              className={`mt-3 text-base leading-relaxed ${
                index === 0 ? "text-white/75" : "text-body"
              }`}
            >
              {step.body}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
