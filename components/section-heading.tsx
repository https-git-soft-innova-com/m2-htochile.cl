import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: "center" | "left"
  light?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-sm font-semibold uppercase tracking-[0.18em]",
            light ? "text-accent" : "text-[var(--brand-2)]",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl",
          light ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-pretty text-base leading-relaxed sm:text-lg",
            light ? "text-white/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
