import {
  BadgeCheck,
  Clock,
  Headset,
  Lightbulb,
  MapPin,
  Truck,
  type LucideIcon,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { benefits } from "@/lib/site-data"

const icons: Record<string, LucideIcon> = {
  Clock,
  Truck,
  Headset,
  MapPin,
  BadgeCheck,
  Lightbulb,
}

export function HomeBenefits() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Por qué HTO"
          title="La forma más rápida y confiable de equipar su planta"
          description="Combinamos velocidad de respuesta, stock disponible y conocimiento técnico para que su operación nunca se detenga."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = icons[b.icon]
            return (
              <Reveal key={b.title} delay={i * 0.07}>
                <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-[var(--brand)]/5">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-secondary text-[var(--brand)] transition-colors group-hover:bg-accent group-hover:text-[var(--brand)]">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
