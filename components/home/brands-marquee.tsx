import { productBrands } from "@/lib/site-data"

const brands = [...productBrands, "Transfer Oil", "Ryco", "Hansa-Flex"]

export function BrandsMarquee() {
  return (
    <section className="overflow-hidden border-y border-border bg-secondary/30 py-10">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Marcas que representamos
      </p>
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-16">
          {brands.map((b) => (
            <span key={b} className="whitespace-nowrap text-2xl font-bold text-foreground/30 transition hover:text-[var(--brand)]">
              {b}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee items-center gap-16" aria-hidden="true">
          {brands.map((b) => (
            <span key={b} className="whitespace-nowrap text-2xl font-bold text-foreground/30 transition hover:text-[var(--brand)]">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
