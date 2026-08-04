import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Wrench, Cable, Gauge } from "lucide-react"

export const metadata: Metadata = {
  title: "Productos | HTO Chile — Mangueras, Fittings y Prensas Hidráulicas",
  description:
    "Catálogo de productos HTO Chile: mangueras hidráulicas e industriales, fittings y conexiones, prensas y maquinaria PRENSSO. Stock en Chile, despacho en 24h.",
}

const categories = [
  {
    slug: "mangueras",
    title: "Mangueras",
    subtitle: "Hidráulicas · Industriales · PVC",
    description:
      "Mangueras para alta presión, succión, descarga y aplicaciones industriales. Marcas Parker, Gates, Continental y Letone.",
    image: "/images/products/manguera-hidraulica-r2.jpg",
    icon: Cable,
    count: 11,
  },
  {
    slug: "fittings",
    title: "Fittings y Accesorios",
    subtitle: "Conexiones · Acoples · JIC · BSP",
    description:
      "Conexiones JIC 37°, BSP, ORFS en acero carbono zincado para líneas hidráulicas de media y alta presión.",
    image: "/images/products/conexion-jic-real.jpg",
    icon: Wrench,
    count: 1,
  },
  {
    slug: "prensas",
    title: "Prensas y Maquinaria",
    subtitle: "PRENSSO · Cortadoras · Peladoras",
    description:
      "Prensas hidráulicas, cortadoras, peladoras, insertadoras y maquinaria auxiliar PRENSSO para armado profesional de mangueras.",
    image: "/images/products/prensa-phv65-real.jpg",
    icon: Gauge,
    count: 18,
  },
]

export default function ProductosPage() {
  return (
    <>
      <section className="bg-[var(--brand)] pt-28 pb-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-white/70 mb-2">
            Catálogo
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">
            Productos HTO Chile
          </h1>
          <p className="mt-3 text-lg text-white/80 max-w-2xl mx-auto">
            Mangueras, conexiones, prensas y maquinaria hidráulica con
            certificación internacional. Stock en Chile, despacho en 24 horas.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <Link
                  key={cat.slug}
                  href={`/productos/${cat.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-accent/40"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="flex size-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <Icon className="size-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white">
                          {cat.title}
                        </h2>
                        <p className="text-sm text-white/80">{cat.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {cat.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-medium text-accent">
                        {cat.count} productos →
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Productos HTO Chile",
            description:
              "Catálogo de productos HTO Chile: mangueras hidráulicas e industriales, fittings y conexiones, prensas y maquinaria.",
            url: "https://www.htochile.cl/productos",
            mainEntity: categories.map((c) => ({
              "@type": "ItemList",
              name: c.title,
              url: `https://www.htochile.cl/productos/${c.slug}`,
              numberOfItems: c.count,
            })),
          }),
        }}
      />
    </>
  )
}
