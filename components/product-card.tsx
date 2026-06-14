import Image from "next/image"
import { FileText, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Product, whatsappUrl } from "@/lib/site-data"

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-[var(--brand)]/5">
      <div className="relative aspect-4/3 overflow-hidden bg-secondary/60">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-6 transition-transform duration-500 hover:scale-105"
        />
        <Badge className="absolute left-3 top-3 bg-[var(--brand)] text-white hover:bg-[var(--brand)]">
          {product.category}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-[var(--brand-2)]">
          {product.brand}
        </p>
        <h3 className="mt-1.5 text-base font-semibold leading-snug text-foreground">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.short}
        </p>
        <div className="mt-4 flex flex-col gap-2 pt-1">
          <Button asChild size="sm" className="w-full gap-2 bg-[var(--brand)] text-white hover:bg-[var(--brand-2)]">
            <a
              href={whatsappUrl(`Hola, necesito una cotización del producto: ${product.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" />
              Solicitar Cotización
            </a>
          </Button>
          <Button asChild size="sm" variant="outline" className="w-full gap-2">
            <a href="#" rel="noopener noreferrer">
              <FileText className="size-4" />
              Ficha Técnica
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
