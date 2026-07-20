"use client"

import { useEffect, useMemo, useState } from "react"
import { Download, FileText, Search, Headset, Loader2, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { whatsappUrl } from "@/lib/site-data"
import { BibliotecaModal, type BibliotecaFormData } from "@/components/biblioteca-modal"
import emailjs from "@emailjs/browser"

const ALL = "all"
const EMAILJS_SERVICE = "service_6dqm8o9"
const EMAILJS_TEMPLATE = "template_57cl8wb"
const EMAILJS_KEY = "99T7wXl7Ka7OCZqpo"
const PAGE_SIZE = 10

interface DocItem {
  title: string
  brand: string
  category: string
  type: string
  downloadUrl: string
  lastModified: string
  key: string
}

interface ApiDoc {
  key: string
  titulo: string
  marca: string
  categoria: string
  tipo: string
  url: string
  last_modified: string
}

export function DocSearch({ compact = false }: { compact?: boolean }) {
  const [docs, setDocs] = useState<DocItem[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [pendingUrl, setPendingUrl] = useState("")
  const [page, setPage] = useState(1)
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    // El formulario se muestra SIEMPRE en cada descarga (regla de negocio)
  }, [])

  useEffect(() => {
    const API_URL = "https://161.35.5.30";
    fetch(`${API_URL}/api/docs?limit=100`)
      .then(r => r.json())
      .then((docsRes) => {
        const mapped: DocItem[] = (docsRes.docs || []).map((d: ApiDoc) => ({
          title: d.titulo,
          brand: d.marca,
          category: d.categoria,
          type: d.tipo,
          downloadUrl: d.url,
          lastModified: d.last_modified,
          key: d.key,
        }));
        setDocs(mapped);
      })
      .catch(() => setDocs([]))
      .finally(() => setLoading(false))
  }, [])

  const results = useMemo(() => {
    return docs.filter((d) => {
      const q = query.trim().toLowerCase()
      if (!q) return true
      return (
        d.title.toLowerCase().includes(q) ||
        d.brand.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q)
      )
    })
  }, [docs, query])

  // Reset page when query changes
  useEffect(() => { setPage(1) }, [query])

  // Paginación
  const totalPages = Math.ceil(results.length / PAGE_SIZE)
  const paginatedResults = compact
    ? results.slice(0, 4)
    : results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function handleDownload(url: string, key: string) {
    setPendingUrl(key)
    setModalOpen(true)
  }

  async function handleModalSubmit(data: BibliotecaFormData) {
    setDownloading(true)
    try {
      // 1. Guardar lead en BD del Droplet
      await fetch("https://161.35.5.30/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: data.nombre,
          empresa: data.empresa,
          email: data.email,
          celular: data.celular,
          documento_key: pendingUrl,
        }),
      })

      // 2. Enviar email via EmailJS
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
        to_email: "felipe.ahumada@soft-innova.com",
        nombre: data.nombre,
        empresa: data.empresa,
        email: data.email,
        celular: data.celular,
        documento: pendingUrl,
        mensaje: `Estimado Patricio:\n\nEl cliente ${data.nombre}, de la empresa "${data.empresa}", teléfono ${data.celular}, email ${data.email}, ha realizado una descarga de nuestra Biblioteca Técnica.\n\nDocumento descargado: ${pendingUrl}\n\nSe deja constancia para vuestra gestión.\n\nSaludos Atte.\nHTO Chile — Biblioteca Técnica`,
      }, EMAILJS_KEY)
    } catch (e) {
      console.error("Error:", e)
    }

    // GTM: lead form submit event
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "lead_form_submit",
      lead_source: "biblioteca_tecnica",
      lead_empresa: data.empresa,
      lead_documento: pendingUrl,
    })

    setModalOpen(false)
    setDownloading(false)
    // 3. Descargar el documento
    if (pendingUrl) {
      // GTM: document download event
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "doc_download",
        doc_key: pendingUrl,
      })
      window.open(`https://161.35.5.30/api/docs/download?key=${encodeURIComponent(pendingUrl)}`, "_blank")
      setPendingUrl("")
    }
  }

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault()
    // La búsqueda ya es reactiva, pero esto permite que Enter "funcione"
    setPage(1)
  }

  return (
    <>
      <BibliotecaModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleModalSubmit}
        loading={downloading}
      />
      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
        {/* Buscador con submit en Enter */}
        <form onSubmit={handleSearchSubmit}>
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
        </form>

        {/* Filtros eliminados — se busca por texto libre */}

        {/* Resultados */}
        <div className="mt-5 space-y-3">
          {loading && (
            <div className="flex items-center justify-center py-10">
              <Loader2 className="size-6 animate-spin text-muted-foreground" />
            </div>
          )}
          {!loading && paginatedResults.length === 0 && (
            <p className="py-8 text-center text-sm text-muted-foreground">
              No se encontraron documentos. Intente con otros filtros.
            </p>
          )}
          {paginatedResults.map((d, i) => (
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
                <Button size="sm" className="gap-1.5 bg-[var(--brand)] text-white hover:bg-[var(--brand-2)]" onClick={() => handleDownload(d.downloadUrl, d.key)}>
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

        {/* Paginador — solo en vista completa */}
        {!compact && totalPages > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
              className="gap-1"
            >
              <ChevronLeft className="size-4" /> Anterior
            </Button>
            <span className="px-3 text-sm text-muted-foreground">
              Página {page} de {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={page === totalPages}
              onClick={() => setPage(p => p + 1)}
              className="gap-1"
            >
              Siguiente <ChevronRight className="size-4" />
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
