"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { FileText, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { heroSlides, stats, whatsappUrl } from "@/lib/site-data"

export function HomeHero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % heroSlides.length),
      5000,
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* background slider */}
      <AnimatePresence mode="sync">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroSlides[active].image}')` }}
          aria-hidden="true"
        />
      </AnimatePresence>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, var(--brand) 0%, color-mix(in oklch, var(--brand) 82%, transparent) 45%, color-mix(in oklch, var(--brand) 30%, transparent) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl lg:max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.span
              key={heroSlides[active].title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
            >
              <span className="size-2 rounded-full bg-accent" />
              {heroSlides[active].title}
            </motion.span>
          </AnimatePresence>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Especialistas en mangueras hidráulicas e industriales.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/85"
          >
            Cotizaciones en 2 horas. Despacho en 24 horas. Soporte técnico
            especializado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="gap-2 bg-accent text-white hover:bg-accent/90">
              <Link href="/#contacto">
                <FileText className="size-4" />
                Solicitar Cotización
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a
                href={whatsappUrl("Hola, necesito hablar con un especialista de HTO.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4" />
                Hablar con un Especialista
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Formulario rápido WhatsApp */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-sm rounded-2xl border border-white/15 bg-transparent p-6 backdrop-blur-sm"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-green-500/20">
              <MessageCircle className="size-5 text-green-400" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Consultas rápidas</h3>
              <p className="text-sm text-white/70">Te llamamos nosotros</p>
            </div>
          </div>
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const nombre = (form.elements.namedItem("nombre") as HTMLInputElement).value
              const telefono = (form.elements.namedItem("telefono") as HTMLInputElement).value
              const email = (form.elements.namedItem("email") as HTMLInputElement).value
              const msg = `Hola, soy ${nombre}. Mi teléfono: ${telefono}, email: ${email}. Necesito que me contacten.`
              window.open(whatsappUrl(msg), "_blank")
            }}
          >
            <input
              name="nombre"
              type="text"
              required
              placeholder="Nombre"
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/50 outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/40"
            />
            <input
              name="telefono"
              type="tel"
              required
              placeholder="+569 12312312"
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/50 outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/40"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Correo electrónico"
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/50 outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/40"
            />
            <label className="flex items-start gap-2 mt-1">
              <input
                type="checkbox"
                required
                className="mt-1 size-4 rounded border-white/30 accent-accent"
              />
              <span className="text-xs leading-tight text-white/70">
                Autorizo el tratamiento de mis datos personales con fines estadísticos y de contacto comercial, conforme a la Ley 21.719 sobre Protección de Datos Personales de Chile.
              </span>
            </label>
            <Button
              type="submit"
              size="sm"
              className="mt-2 w-full gap-2 bg-green-600 text-white hover:bg-green-700"
            >
              <MessageCircle className="size-4" />
              Enviar por WhatsApp
            </Button>
          </form>
        </motion.div>
        </div>

        {/* floating statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/15 bg-white/10 backdrop-blur-md sm:max-w-3xl lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 px-5 py-5">
              <div className="text-2xl font-bold text-accent sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-white/80">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* certifications bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-6 px-6 py-4 sm:max-w-3xl"
        >
          {[
            { src: "/images/certificaciones/iso-9001.png", alt: "ISO 9001" },
            { src: "/images/certificaciones/dnvgl.png", alt: "DNV GL" },
            { src: "/images/certificaciones/lloyds-register.png", alt: "Lloyd's Register" },
            { src: "/images/certificaciones/bureau-veritas.png", alt: "Bureau Veritas" },
            { src: "/images/certificaciones/rina.png", alt: "RINA" },
            { src: "/images/certificaciones/msha.png", alt: "MSHA" },
            { src: "/images/certificaciones/department-of-labor.png", alt: "Department of Labor" },
            { src: "/images/certificaciones/asociacion-industrial-antofagasta.png", alt: "Asociación Industrial de Antofagasta" },
            { src: "/images/certificaciones/sicep.png", alt: "SICEP" },
          ].map((cert) => (
            <img
              key={cert.alt}
              src={cert.src}
              alt={cert.alt}
              className="h-10 w-auto brightness-0 invert opacity-80 transition-opacity hover:opacity-100"
            />
          ))}
        </motion.div>

        {/* slide indicators */}
        <div className="mt-8 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Ir a slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-8 bg-accent" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
