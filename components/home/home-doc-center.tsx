import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { DocSearch } from "@/components/doc-search"

export function HomeDocCenter() {
  return (
    <section className="bg-secondary/50 py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Biblioteca Técnica"
          title="Centro de Documentación Técnica"
          description="Encuentre fichas técnicas, catálogos, manuales y certificaciones de todos nuestros productos en un solo lugar."
        />
        <Reveal className="mt-10">
          <DocSearch compact />
        </Reveal>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/biblioteca-tecnica">
              Explorar biblioteca completa
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
