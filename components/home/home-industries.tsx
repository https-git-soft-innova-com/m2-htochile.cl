import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { industries } from "@/lib/site-data"

export function HomeIndustries() {
  return (
    <section className="bg-secondary/50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industrias"
          title="Sectores que confían en nosotros"
          description="Soluciones especializadas adaptadas a las exigencias de cada industria en Chile."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 4) * 0.06}>
              <Link
                href={`/industrias/${ind.slug}`}
                className="group relative block h-72 overflow-hidden rounded-xl"
              >
                <Image
                  src={ind.image || "/placeholder.svg"}
                  alt={ind.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, var(--brand) 8%, color-mix(in oklch, var(--brand) 30%, transparent) 55%, transparent 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-semibold text-white">{ind.name}</h3>
                  <p className="mt-1 line-clamp-2 max-h-0 overflow-hidden text-sm text-white/80 opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
                    {ind.short}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    Ver soluciones
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
