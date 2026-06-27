import Reveal from "./Reveal";

export default function SectionHeader({ eyebrow, title, description, align = "center", className = "" }) {
  const centered = align === "center";

  return (
    <Reveal
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
      as="header"
    >
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-teal">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
