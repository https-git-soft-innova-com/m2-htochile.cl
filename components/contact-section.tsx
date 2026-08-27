"use client"

import { FormEvent, useState } from "react"
import emailjs from "@emailjs/browser"
import { Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const EMAILJS_SERVICE = "service_6dqm8o9"
const EMAILJS_TEMPLATE = "template_57cl8wb"
const EMAILJS_KEY = "99T7wXl7Ka7OCZqpo"
const CONTACT_EMAIL = "patricio.ahumada@htochile.cl"
const CONTACT_CC_EMAIL = "felipe.ahumada@soft-innova.com"
const ADDRESS = "Vista Hermosa 9999, 9220038 Santiago, Cerrillos, Región Metropolitana"

export function ContactSection() {
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSending(true)
    setStatus("idle")

    const form = event.currentTarget
    const data = new FormData(form)
    const nombre = String(data.get("nombre") || "").trim()
    const empresa = String(data.get("empresa") || "").trim()
    const asunto = String(data.get("asunto") || "").trim()
    const observaciones = String(data.get("observaciones") || "").trim()

    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          to_email: CONTACT_EMAIL,
          cc_email: CONTACT_CC_EMAIL,
          nombre,
          empresa,
          asunto,
          mensaje: `Nueva consulta de contacto\n\nNombre: ${nombre}\nEmpresa: ${empresa}\nAsunto: ${asunto}\n\nObservaciones:\n${observaciones}`,
        },
        EMAILJS_KEY,
      )
      form.reset()
      setStatus("success")
    } catch (error) {
      console.error("Error al enviar el formulario de contacto:", error)
      setStatus("error")
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contacto" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Contacto</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hablemos de su proyecto
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Cuéntenos cómo podemos ayudarle. Nuestro equipo se pondrá en contacto con usted.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:grid-cols-2">
          <div className="flex flex-col">
            <iframe
              title="Ubicación de HTO Chile en Vista Hermosa 9999"
              src="https://www.google.com/maps?q=Vista+Hermosa+9999,+9220038+Santiago,+Cerrillos,+Regi%C3%B3n+Metropolitana&output=embed"
              className="min-h-[360px] w-full flex-1 border-0 lg:min-h-[590px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex items-start gap-3 border-t border-border p-5">
              <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-foreground">HTO Chile</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{ADDRESS}</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-accent/10">
                <Mail className="size-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Envíenos un mensaje</h3>
                <p className="text-sm text-muted-foreground">Responderemos a la brevedad.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="contact-nombre" className="text-sm font-medium text-foreground">Nombre *</label>
                  <Input id="contact-nombre" name="nombre" placeholder="Su nombre" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-empresa" className="text-sm font-medium text-foreground">Empresa *</label>
                  <Input id="contact-empresa" name="empresa" placeholder="Nombre de su empresa" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-asunto" className="text-sm font-medium text-foreground">Asunto *</label>
                <Input id="contact-asunto" name="asunto" placeholder="¿En qué podemos ayudarle?" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-observaciones" className="text-sm font-medium text-foreground">Observaciones *</label>
                <Textarea
                  id="contact-observaciones"
                  name="observaciones"
                  placeholder="Escriba aquí su consulta"
                  className="min-h-36 resize-y"
                  required
                />
              </div>
              <Button type="submit" disabled={sending} className="w-full gap-2 bg-[var(--brand)] text-white hover:bg-[var(--brand-2)]">
                <Send className="size-4" />
                {sending ? "Enviando..." : "Enviar consulta"}
              </Button>
              {status === "success" && (
                <p role="status" className="text-sm font-medium text-green-700">Su consulta fue enviada correctamente.</p>
              )}
              {status === "error" && (
                <p role="alert" className="text-sm font-medium text-red-600">No pudimos enviar su consulta. Inténtelo nuevamente.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
