import Link from "next/link"
import { FileText, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { whatsappUrl } from "@/lib/site-data"

export function FinalCta() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "var(--brand)" }}>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/cta-bg.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[var(--brand)]/70" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-24">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
          ¿Necesita una solución para su proceso industrial?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-white/80">
          Nuestro equipo técnico está listo para ayudarle a encontrar el
          instrumento, la válvula o el sistema de control correcto.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="gap-2 bg-accent text-white hover:bg-accent/90">
            <Link href="/contacto">
              <FileText className="size-4" />
              Solicitar Cotización
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <a
              href={whatsappUrl("Hola, necesito hablar con un especialista de HTO.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" />
              Hablar con un Especialista
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
