import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "on-dark";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: LucideIcon;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-mid border border-transparent",
  secondary:
    "bg-transparent text-white border border-white/35 hover:bg-white/10",
  ghost:
    "bg-transparent text-navy border border-navy/20 hover:border-navy hover:bg-ice",
  "on-dark":
    "bg-white text-navy-deep hover:bg-ice border border-transparent",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  icon: Icon,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md px-6 py-3 text-base font-medium tracking-tight transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
      {Icon ? <Icon className="h-4 w-4" strokeWidth={1.75} /> : null}
    </Link>
  );
}
