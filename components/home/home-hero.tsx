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
        <div className="max-w-3xl">
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
              <Link href="/contacto">
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
          className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3"
        >
          <div className="rounded-lg border border-white/15 bg-white/5 p-4 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/10">
            <div className="mb-1.5 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
              <span className="text-sm font-bold text-white">ISO 9001</span>
            </div>
            <p className="text-xs leading-relaxed text-white/60">Procesos certificados y orientados a la calidad.</p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-4 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/10">
            <div className="mb-1.5 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
              <span className="text-sm font-bold text-white">DNV · RINA · Lloyd&apos;s</span>
            </div>
            <p className="text-xs leading-relaxed text-white/60">Productos respaldados por certificaciones internacionales.</p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-4 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/10">
            <div className="mb-1.5 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
              <span className="text-sm font-bold text-white">Presencia en Todo Chile</span>
            </div>
            <p className="text-xs leading-relaxed text-white/60">Cobertura comercial y logística nacional.</p>
          </div>
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
