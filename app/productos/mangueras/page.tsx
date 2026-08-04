"use client"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { products } from "@/lib/site-data"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"

const mangueras = products.filter((p) => p.group === "mangueras")

const SUB_FILTERS = [
  { key: "", label: "Todas" },
  { key: "Mangueras Hidráulicas", label: "Hidráulicas" },
  { key: "Mangueras PVC", label: "Industriales / PVC" },
  { key: "Mangueras Industriales", label: "Industriales Caucho" },
]

export default function ManguerasPage() {
  const [query, setQuery] = useState("")
  const [sub, setSub] = useState("")

  const filtered = mangueras.filter((p) => {
    const q = query.toLowerCase()
    if (q && !p.name.toLowerCase().includes(q) && !p.brand.toLowerCase().includes(q) && !p.short.toLowerCase().includes(q)) return false
    if (sub && p.category !== sub) return false
    return true
  })

  return (
    <>
      <section className="bg-[var(--brand)] pt-28 pb-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-white/70 mb-2">
            Catálogo
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">
            Mangueras Hidráulicas e Industriales
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-white/80">
            Mangueras de alta presión, succión, descarga y aplicaciones
            industriales. Marcas Parker, Gates, Continental y Letone con
            certificación SAE, EN y DIN.
          </p>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Buscador + sub-filtros */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar manguera..."
                className="h-12 pl-11"
              />
            </div>
          </div>

          {/* Sub-filtros tipo pills */}
          <div className="mb-8 flex flex-wrap gap-2">
            {SUB_FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setSub(f.key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  sub === f.key
                    ? "bg-[var(--brand)] text-white"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <p className="mb-6 text-sm text-muted-foreground">
            {filtered.length} producto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No se encontraron productos. Intenta con otro término o filtro.
            </p>
          )}
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Mangueras Hidráulicas e Industriales — HTO Chile",
            description: "Mangueras de alta presión, PVC, succión y descarga para minería, construcción e industria. Stock en Chile.",
            url: "https://www.htochile.cl/productos/mangueras",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: mangueras.length,
              itemListElement: mangueras.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "Product",
                  name: p.name,
                  url: `https://www.htochile.cl/productos/${p.slug}`,
                  image: `https://www.htochile.cl${p.image}`,
                  brand: { "@type": "Brand", name: p.brand },
                },
              })),
            },
          }),
        }}
      />
    </>
  )
}
