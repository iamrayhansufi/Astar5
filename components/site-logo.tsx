import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  priority?: boolean;
  className?: string;
  inverted?: boolean;
};

export function SiteLogo({
  priority = false,
  className = "",
  inverted = false,
}: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${inverted ? "rounded-sm bg-white px-3 py-2" : ""} ${className}`}
    >
      <Image
        src="/logos/astar5-logo.png"
        alt="Astar5 GlobalConsulting"
        width={280}
        height={92}
        className="h-12 w-auto max-w-[220px] object-contain object-left md:h-14 md:max-w-[260px]"
        priority={priority}
      />
    </Link>
  );
}
