"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { products, productCategories } from "@/lib/site-data"
import { Input } from "@/components/ui/input"

export default function ProductosPage() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("")

  const filtered = products
    .filter((p) => {
      const q = query.toLowerCase()
      if (q && !p.name.toLowerCase().includes(q) && !p.brand.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q)) return false
      if (category && p.category !== category) return false
      return true
    })
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <>
      <section className="bg-[var(--brand)] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-white/70 mb-2">Catálogo</p>
          <h1 className="text-3xl font-bold sm:text-4xl">Productos HTO Chile</h1>
          <p className="mt-3 text-lg text-white/80">Mangueras, prensas, cortadoras y maquinaria hidráulica con certificación internacional.</p>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Buscador + filtro */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar producto, marca o categoría..."
                className="h-12 pl-11"
              />
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-12 rounded-md border border-border bg-background px-4 text-sm"
            >
              <option value="">Todas las categorías</option>
              {productCategories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <p className="mb-6 text-sm text-muted-foreground">{filtered.length} productos encontrados</p>

          {/* Grid de productos */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <Link
                key={product.slug}
                href={`/productos/${product.slug}`}
                className="group rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative mb-3 aspect-square overflow-hidden rounded-lg bg-secondary/30">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform group-hover:scale-105"
                  />
                </div>
                <p className="text-xs font-medium text-accent">{product.brand}</p>
                <h3 className="mt-1 text-sm font-semibold leading-snug line-clamp-2">{product.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{product.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
