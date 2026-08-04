"use client"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { products } from "@/lib/site-data"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"

const fittings = products.filter((p) => p.group === "fittings")

export default function FittingsPage() {
  const [query, setQuery] = useState("")

  const filtered = fittings.filter((p) => {
    const q = query.toLowerCase()
    if (!q) return true
    return (
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.short.toLowerCase().includes(q)
    )
  })

  return (
    <>
      <section className="bg-[var(--brand)] pt-28 pb-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-white/70 mb-2">
            Catálogo
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">
            Fittings y Accesorios
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-white/80">
            Conexiones JIC 37°, BSP, ORFS en acero carbono zincado para líneas
            hidráulicas de media y alta presión. Certificación SAE J514.
          </p>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Buscador */}
          <div className="mb-8 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar fitting o conexión..."
                className="h-12 pl-11"
              />
            </div>
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
              No se encontraron productos. Intenta con otro término.
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
            name: "Fittings y Accesorios Hidráulicos — HTO Chile",
            description: "Conexiones JIC 37°, BSP, ORFS en acero carbono para líneas hidráulicas. Stock en Chile.",
            url: "https://www.htochile.cl/productos/fittings",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: fittings.length,
              itemListElement: fittings.map((p, i) => ({
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
