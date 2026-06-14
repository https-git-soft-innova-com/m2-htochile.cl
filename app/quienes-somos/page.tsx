import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { FinalCta } from "@/components/final-cta"
import { Target, Eye, ShieldCheck, Users, TrendingUp, HeartHandshake } from "lucide-react"

export const metadata: Metadata = {
  title: "Quiénes Somos | HTO Chile",
  description:
    "Más de 20 años entregando soluciones de instrumentación y automatización industrial en Chile, con cobertura nacional y soporte técnico especializado.",
}

const values = [
  { icon: ShieldCheck, title: "Confiabilidad", text: "Productos certificados y procesos que garantizan continuidad operacional." },
  { icon: TrendingUp, title: "Excelencia Técnica", text: "Ingenieros especialistas que dominan cada aplicación industrial." },
  { icon: HeartHandshake, title: "Compromiso", text: "Acompañamos a nuestros clientes durante todo el ciclo de vida del proyecto." },
  { icon: Users, title: "Cercanía", text: "Atención personalizada y presencia a lo largo de todo Chile." },
]

const milestones = [
  { year: "2004", text: "Fundación de HTO Chile en Santiago, enfocada en instrumentación de procesos." },
  { year: "2010", text: "Expansión a la zona norte para atender la creciente demanda minera." },
  { year: "2016", text: "Incorporación de líneas de automatización y representación de marcas líderes." },
  { year: "2021", text: "Apertura del centro de soporte técnico y laboratorio de calibración." },
  { year: "2026", text: "Cobertura nacional completa y plataforma digital de documentación técnica." },
]

export default function QuienesSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes Somos"
        title="Más de 20 años equipando la industria chilena"
        description="Somos un socio técnico especializado en instrumentación y automatización, comprometido con la continuidad operacional de cada planta que atendemos."
        image="/images/about-team.png"
      />

      {/* Intro */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img
              src="/images/about-team.png"
              alt="Equipo de ingeniería de HTO Chile en terreno"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-2">
              Nuestra Historia
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Conocimiento técnico al servicio de su proceso
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Desde 2004 entregamos soluciones de medición y control a las
              industrias más exigentes de Chile. Combinamos representación de
              marcas líderes mundiales con un equipo de ingenieros que entiende
              las particularidades de cada operación.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nuestra propuesta de valor es simple: cotización en 2 horas,
              despacho en 24 horas y soporte técnico que resuelve. Así
              aseguramos que su planta nunca se detenga.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-secondary py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {[
            { icon: Target, title: "Misión", text: "Entregar soluciones de instrumentación y automatización confiables, con la velocidad y el soporte técnico que la industria chilena necesita para operar sin interrupciones." },
            { icon: Eye, title: "Visión", text: "Ser el socio técnico de referencia en instrumentación y automatización industrial en Chile, reconocidos por nuestra excelencia, cercanía y capacidad de respuesta." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand text-white">
                  <item.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-2">
              Nuestros Valores
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Los principios que guían nuestro trabajo
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-accent/15 text-brand">
                    <v.icon className="size-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-brand py-20 text-white lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Trayectoria
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Dos décadas de crecimiento
            </h2>
          </Reveal>
          <div className="mt-14 space-y-8">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.06}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-accent">{m.year}</span>
                    {i < milestones.length - 1 && (
                      <span className="mt-2 h-full w-px flex-1 bg-white/20" />
                    )}
                  </div>
                  <p className="pb-2 leading-relaxed text-white/80">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
