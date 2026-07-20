"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, MessageCircle } from "lucide-react"
import { products, whatsappUrl } from "@/lib/site-data"
import { Button } from "@/components/ui/button"
import { BibliotecaModal, type BibliotecaFormData } from "@/components/biblioteca-modal"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const EMAILJS_SERVICE = "service_6dqm8o9"
const EMAILJS_TEMPLATE = "template_57cl8wb"
const EMAILJS_KEY = "99T7wXl7Ka7OCZqpo"

export default function ProductoPage() {
  const params = useParams()
  const slug = params?.slug as string
  const product = products.find((p) => p.slug === slug)
  const [modalOpen, setModalOpen] = useState(false)
  const [downloading, setDownloading] = useState(false)

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Producto no encontrado</h1>
          <Link href="/productos" className="mt-4 text-accent hover:underline">← Volver al catálogo</Link>
        </div>
      </div>
    )
  }

  async function handleDownload(data: BibliotecaFormData) {
    setDownloading(true)
    try {
      await fetch("https://161.35.5.30/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: data.nombre,
          empresa: data.empresa,
          email: data.email,
          celular: data.celular,
          documento_key: `ficha-tecnica-${product.slug}`,
        }),
      })
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
        to_email: "felipe.ahumada@soft-innova.com",
        nombre: data.nombre,
        empresa: data.empresa,
        email: data.email,
        celular: data.celular,
        documento: `Ficha Técnica - ${product.name}`,
        mensaje: `Solicitud de ficha técnica del producto: ${product.name} (${product.brand})`,
      }, EMAILJS_KEY)
    } catch (e) {
      console.error(e)
    }
    // GTM event
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "lead_form_submit",
        lead_source: "producto",
        lead_producto: product.name,
      })
    }
    setDownloading(false)
    setModalOpen(false)
    // Redirect to biblioteca where they can search for the doc
    window.open("https://www.htochile.cl/biblioteca-tecnica", "_blank")
  }

  return (
    <>
      <BibliotecaModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleDownload}
        loading={downloading}
      />

      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link href="/productos" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" />
            Volver al catálogo
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            {/* Imagen */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-secondary/20">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <p className="text-sm font-medium text-accent">{product.brand} · {product.category}</p>
              <h1 className="mt-2 text-2xl font-bold sm:text-3xl">{product.name}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{product.short}</p>

              {/* Specs */}
              <div className="mt-8 space-y-3">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Especificaciones</h2>
                <div className="divide-y divide-border rounded-xl border border-border">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between px-4 py-3">
                      <span className="text-sm font-medium">{spec.label}</span>
                      <span className="text-sm text-muted-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="gap-2 bg-accent text-white hover:bg-accent/90"
                  onClick={() => setModalOpen(true)}
                >
                  <Download className="size-4" />
                  Descargar Ficha Técnica
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <a
                    href={whatsappUrl(`Hola, necesito una cotización del producto: ${product.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4" />
                    Solicitar Cotización
                  </a>
                </Button>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Industria recomendada: {product.industry}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
