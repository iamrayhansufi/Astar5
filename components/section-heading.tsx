type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  const titleColor = tone === "dark" ? "text-white" : "text-navy-deep";
  const bodyColor = tone === "dark" ? "text-white/75" : "text-body";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium text-muted">{eyebrow}</p>
      ) : null}
      <h2
        className={`text-[clamp(2rem,3.6vw,3.2rem)] font-semibold tracking-tight ${titleColor}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-lg leading-relaxed ${bodyColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
