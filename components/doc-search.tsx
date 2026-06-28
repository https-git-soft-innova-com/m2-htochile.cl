"use client"

import { useEffect, useMemo, useState } from "react"
import { Download, FileText, Search, Headset, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { whatsappUrl } from "@/lib/site-data"
import { BibliotecaModal, type BibliotecaFormData } from "@/components/biblioteca-modal"
import emailjs from "@emailjs/browser"

const ALL = "all"
const EMAILJS_SERVICE = "service_6dqm8o9"
const EMAILJS_TEMPLATE = "template_57cl8wb"
const EMAILJS_KEY = "99T7wXl7Ka7OCZqpo"

interface DocItem {
  title: string
  brand: string
  category: string
  type: string
  downloadUrl: string
  lastModified: string
}

export function DocSearch({ compact = false }: { compact?: boolean }) {
  const [docs, setDocs] = useState<DocItem[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState("")
  const [brand, setBrand] = useState(ALL)
  const [category, setCategory] = useState(ALL)
  const [type, setType] = useState(ALL)
  const [modalOpen, setModalOpen] = useState(false)
  const [pendingUrl, setPendingUrl] = useState("")
  const [hasAccess, setHasAccess] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("hto_bib_access")) {
      setHasAccess(true)
    }
  }, [])

  useEffect(() => {
    fetch("/api/docs")
      .then((r) => r.json())
      .then((data) => setDocs(Array.isArray(data) ? data : []))
      .catch(() => setDocs([]))
      .finally(() => setLoading(false))
  }, [])

  const brands = useMemo(() => [...new Set(docs.map((d) => d.brand).filter(Boolean))], [docs])
  const categories = useMemo(() => [...new Set(docs.map((d) => d.category).filter(Boolean))], [docs])
  const types = useMemo(() => [...new Set(docs.map((d) => d.type).filter(Boolean))], [docs])

  const results = useMemo(() => {
    return docs.filter((d) => {
      const q = query.trim().toLowerCase()
      const matchQuery =
        !q ||
        d.title.toLowerCase().includes(q) ||
        d.brand.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q)
      return (
        matchQuery &&
        (brand === ALL || d.brand === brand) &&
        (category === ALL || d.category === category) &&
        (type === ALL || d.type === type)
      )
    })
  }, [docs, query, brand, category, type])

  const shown = compact ? results.slice(0, 4) : results

  function handleDownload(url: string) {
    if (!hasAccess) {
      setPendingUrl(url)
      setModalOpen(true)
      return
    }
    window.open(url, "_blank")
  }

  async function handleModalSubmit(data: BibliotecaFormData) {
    try {
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
        nombre: data.nombre,
        empresa: data.empresa,
        email: data.email,
        celular: data.celular,
      }, EMAILJS_KEY)
    } catch (e) {
      console.error("EmailJS error:", e)
    }
    localStorage.setItem("hto_bib_access", "1")
    setHasAccess(true)
    setModalOpen(false)
    if (pendingUrl) {
      window.open(pendingUrl, "_blank")
      setPendingUrl("")
    }
  }

  return (
    <>
      <BibliotecaModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleModalSubmit}
      />
      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar ficha técnica, catálogo, manual o certificación..."
            className="h-13 pl-12 text-base"
            aria-label="Buscar documentación técnica"
          />
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Select value={brand} onValueChange={setBrand}>
            <SelectTrigger aria-label="Marca">
              <SelectValue placeholder="Marca" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>Todas las marcas</SelectItem>
              {brands.map((b) => (
                <SelectItem key={b} value={b}>{b}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger aria-label="Categoría">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>Todas las categorías</SelectItem>
              {categories.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger aria-label="Tipo de documento">
              <SelectValue placeholder="Tipo Documento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>Todos los tipos</SelectItem>
              {types.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-5 space-y-3">
          {loading && (
            <div className="flex items-center justify-center py-10">
              <Loader2 className="size-6 animate-spin text-muted-foreground" />
            </div>
          )}
          {!loading && shown.length === 0 && (
            <p className="py-8 text-center text-sm text-muted-foreground">
              No se encontraron documentos. Intente con otros filtros.
            </p>
          )}
          {shown.map((d, i) => (
            <div
              key={`${d.title}-${i}`}
              className="flex flex-col gap-4 rounded-xl border border-border bg-background p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-[var(--brand)]">
                  <FileText className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{d.title}</h4>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2">
                    {d.brand && <Badge variant="secondary" className="text-xs">{d.brand}</Badge>}
                    <Badge variant="outline" className="text-xs">{d.type}</Badge>
                    {d.category && <span className="text-xs text-muted-foreground">{d.category}</span>}
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                <Button size="sm" className="gap-1.5 bg-[var(--brand)] text-white hover:bg-[var(--brand-2)]" onClick={() => handleDownload(d.downloadUrl)}>
                  <Download className="size-4" />Descargar
                </Button>
                <Button asChild size="sm" variant="outline" className="gap-1.5">
                  <a
                    href={whatsappUrl(`Hola, necesito ayuda con la documentación técnica: ${d.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Headset className="size-4" />
                    <span className="hidden sm:inline">Asistencia</span>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
