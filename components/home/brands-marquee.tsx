import Image from "next/image"

// import { productBrands } from "@/lib/site-data"
// const brands = [...productBrands, "Transfer Oil", "Ryco", "Hansa-Flex"]

export function BrandsMarquee() {
  return (
    <section className="overflow-hidden border-y border-border bg-secondary/30 py-10">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Marcas que representamos
      </p>

      {/* Logos estáticos */}
      <div className="flex items-center justify-center gap-20 px-4">
        <Image
          src="/images/brands/prensso-logo.png"
          alt="PRENSSO"
          width={400}
          height={135}
          className="h-28 w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
          style={{ mixBlendMode: "multiply" }}
        />
        <div className="h-28 w-auto overflow-hidden flex items-center">
          <Image
            src="/images/brands/letone-logo.png"
            alt="Letone"
            width={400}
            height={170}
            className="h-[140px] w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
      </div>

      {/* Carrusel original comentado
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
      */}
    </section>
  )
}
