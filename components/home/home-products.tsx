"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/site-data"

export function HomeProducts() {
  const scroller = useRef<HTMLDivElement>(null)

  const scroll = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 340, behavior: "smooth" })
  }

  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-2)]">
              Productos
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Productos destacados
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Mangueras y componentes hidráulicos diseñados para operar bajo alta presión y condiciones exigentes, con stock disponible en Chile.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Anterior"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Siguiente"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((p) => (
            <div
              key={p.slug}
              className="w-[280px] shrink-0 snap-start sm:w-[320px]"
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/productos">
              Ver catálogo completo
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
