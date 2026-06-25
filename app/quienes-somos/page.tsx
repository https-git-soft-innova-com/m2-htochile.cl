import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { FinalCta } from "@/components/final-cta"
import { Target, Eye, Sparkles, Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Quiénes Somos | HTO Chile",
  description:
    "Empresa chilena especializada en mangueras hidráulicas e industriales. Representamos marcas internacionales con asesoría técnica responsable y cobertura nacional.",
}

export default function QuienesSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes Somos"
        title="Una empresa chilena que eleva las buenas prácticas del rubro"
        description="HTO Chile SpA es una empresa especializada en mangueras hidráulicas e industriales, creada con el objetivo de fortalecer y elevar las buenas prácticas del rubro."
        image="/images/about-team.png"
      />

      {/* Intro */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img
              src="/images/about-team.png"
              alt="Equipo HTO Chile"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-2)]">
              Nuestra Historia
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Asesoría técnica responsable
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Trabajamos con fabricantes internacionales de prestigio, cumpliendo altos
              estándares de calidad y certificación: mangueras de baja, media, alta y
              extrema presión en caucho y termoplásticos, junto a conexiones y acoples originales.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              En el ámbito industrial, incorporamos soluciones en PVC y caucho fabricadas
              con material virgen para aplicaciones exigentes de abrasión, presión,
              temperatura y uso especializado.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Creemos en una asesoría técnica responsable, enfocada en proponer siempre
              la mejor solución para cada necesidad, con respaldo técnico, capacitación
              y presencia en terreno.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Misión / Visión / Origen / Slogan — estilo M3 */}
      <section className="bg-secondary/50 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex size-12 items-center justify-center rounded-xl bg-[var(--brand)] text-white">
                <Target className="size-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-foreground">Misión</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Entregar soluciones industriales de alto estándar con tecnología de
                vanguardia y soporte técnico permanente.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex size-12 items-center justify-center rounded-xl bg-[var(--brand)] text-white">
                <Eye className="size-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-foreground">Visión</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Ser la marca líder en tecnología aplicada a conexiones industriales en Chile.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex size-12 items-center justify-center rounded-xl bg-[var(--brand)] text-white">
                <Sparkles className="size-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-foreground">Origen</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Evolución profesional de la marca Hose Total — Hose Total Operaciones.
                Nacimos del conocimiento práctico del rubro para elevarlo.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-white">
                <Quote className="size-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-foreground">Slogan</h3>
              <p className="mt-3 text-xl font-semibold italic text-[var(--brand)]">
                Calidad · Total · Siempre
              </p>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Compromiso con la calidad, integralidad en las soluciones y disponibilidad permanente.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
