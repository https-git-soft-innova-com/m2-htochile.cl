"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ChevronRight, Home } from "lucide-react"
import { products } from "@/lib/site-data"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"

const prensas = products.filter((p) => p.group === "prensas")

export default function PrensasPage() {
  const [query, setQuery] = useState("")

  const filtered = prensas.filter((p) => {
    const q = query.toLowerCase()
    if (!q) return true
    return (
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.short.toLowerCase().includes(q)
    )
  })

  return (
    <>
      {/* Breadcrumbs */}
      <nav className="bg-secondary/50 py-3" aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-foreground">
                <Home className="size-3.5" />
                Inicio
              </Link>
            </li>
            <ChevronRight className="size-3.5" />
            <li>
              <Link href="/productos" className="hover:text-foreground">
                Productos
              </Link>
            </li>
            <ChevronRight className="size-3.5" />
            <li className="font-medium text-foreground">Prensas y Maquinaria</li>
          </ol>
        </div>
      </nav>

      <section className="bg-[var(--brand)] py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-white/70 mb-2">
            Catálogo
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">
            Prensas y Maquinaria PRENSSO
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-white/80">
            Prensas hidráulicas, cortadoras, peladoras, insertadoras y
            maquinaria auxiliar para armado profesional de mangueras.
            Representantes exclusivos PRENSSO en Chile.
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
                placeholder="Buscar prensa o maquinaria..."
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
            name: "Prensas y Maquinaria PRENSSO — HTO Chile",
            description: "Prensas hidráulicas, cortadoras, peladoras e insertadoras PRENSSO. Representantes exclusivos en Chile.",
            url: "https://www.htochile.cl/productos/prensas",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: prensas.length,
              itemListElement: prensas.map((p, i) => ({
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
