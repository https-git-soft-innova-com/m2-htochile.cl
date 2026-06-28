import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { FinalCta } from "@/components/final-cta"
import { DocSearch } from "@/components/doc-search"

export const metadata: Metadata = {
  title: "Biblioteca Técnica | HTO Chile",
  description:
    "Fichas técnicas, catálogos, manuales y certificaciones de mangueras hidráulicas e industriales. Descarga documentación de Parker, Gates, Manuli y más.",
}

export default function BibliotecaTecnicaPage() {
  return (
    <>
      <PageHero
        eyebrow="Biblioteca Técnica"
        title="Centro de Documentación Técnica"
        description="Encuentre fichas técnicas, catálogos, manuales y certificaciones de todos nuestros productos en un solo lugar."
        image="/images/about-team.png"
      />
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <DocSearch />
          </Reveal>
        </div>
      </section>
      <FinalCta />
    </>
  )
}
