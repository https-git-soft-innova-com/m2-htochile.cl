"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface BibliotecaModalProps {
  open: boolean
  onClose: () => void
  onSubmit: (data: BibliotecaFormData) => void
}

export interface BibliotecaFormData {
  nombre: string
  empresa: string
  email: string
  celular: string
  aceptaLey: boolean
}

export function BibliotecaModal({ open, onClose, onSubmit }: BibliotecaModalProps) {
  const [form, setForm] = useState<BibliotecaFormData>({
    nombre: "",
    empresa: "",
    email: "",
    celular: "",
    aceptaLey: false,
  })

  const isValid =
    form.nombre.trim() !== "" &&
    form.empresa.trim() !== "" &&
    form.email.includes("@") &&
    form.celular.trim() !== "" &&
    form.aceptaLey

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isValid) return
    onSubmit(form)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* modal — slide down (persiana) */}
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-x-0 top-0 z-50 mx-auto mt-16 w-full max-w-lg px-4 sm:mt-24"
          >
            <div className="rounded-2xl border border-border bg-card shadow-2xl">
              {/* header */}
              <div className="flex items-center justify-between border-b border-border px-6 py-5">
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    Biblioteca Técnica
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Ingresa tus datos para un mejor servicio
                  </p>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Cerrar"
                  className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* body */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-5 px-6 pb-5">
                <div className="space-y-2">
                  <Label htmlFor="bib-nombre">Nombre *</Label>
                  <Input
                    id="bib-nombre"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bib-empresa">Empresa *</Label>
                  <Input
                    id="bib-empresa"
                    value={form.empresa}
                    onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                    placeholder="Nombre de tu empresa"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bib-email">Email *</Label>
                  <Input
                    id="bib-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="correo@empresa.cl"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bib-celular">Celular *</Label>
                  <Input
                    id="bib-celular"
                    type="tel"
                    value={form.celular}
                    onChange={(e) => setForm({ ...form, celular: e.target.value })}
                    placeholder="+56 9 1234 5678"
                    required
                  />
                </div>

                {/* checkbox ley 21.719 */}
                <div className="flex items-start gap-3 rounded-lg border border-border bg-secondary/50 p-3">
                  <input
                    id="bib-ley"
                    type="checkbox"
                    checked={form.aceptaLey}
                    onChange={(e) => setForm({ ...form, aceptaLey: e.target.checked })}
                    className="mt-0.5 size-4 shrink-0 rounded border-border accent-[var(--brand)]"
                  />
                  <label htmlFor="bib-ley" className="text-xs leading-relaxed text-muted-foreground">
                    Declaro que entrego mis datos personales de forma voluntaria, conforme a la Ley 21.719 de Protección de Datos Personales, autorizando su uso con fines estadísticos y de contacto comercial por parte de HTO Chile.
                  </label>
                </div>

                {/* actions */}
                <div className="flex gap-3 pt-2">
                  <Button
                    type="submit"
                    disabled={!isValid}
                    className="flex-1 bg-[var(--brand)] text-white hover:bg-[var(--brand-2)]"
                  >
                    Enviar
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
