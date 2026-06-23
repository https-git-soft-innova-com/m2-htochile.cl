import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { Logo } from "@/components/logo"
import { industries, productCategories } from "@/lib/site-data"

const socials = [
  {
    label: "LinkedIn",
    path: "M4.98 3.5C4.98 4.88 3.87 6 2.49 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.49 1 3.87 1 4.98 2.12 4.98 3.5zM.22 8h4.54v14H.22V8zm7.5 0h4.35v1.92h.06c.6-1.14 2.07-2.34 4.27-2.34 4.57 0 5.41 3 5.41 6.9V22h-4.53v-6.62c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.5V22H7.72V8z",
  },
  {
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z",
  },
  {
    label: "YouTube",
    path: "M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14c.5-1.88.5-5.8.5-5.8s0-3.92-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z",
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[var(--dark,#0F172A)] text-white" style={{ backgroundColor: "var(--brand)" }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Empresa chilena especializada en mangueras hidráulicas e industriales.
              Representamos marcas internacionales de prestigio, con asesoría técnica
              responsable y cobertura nacional.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-accent hover:text-[var(--brand)]"
                  aria-label={s.label}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Empresa
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><Link href="/quienes-somos" className="hover:text-accent">Quiénes Somos</Link></li>
              <li><Link href="/biblioteca-tecnica" className="hover:text-accent">Biblioteca Técnica</Link></li>
              <li><Link href="/blog" className="hover:text-accent">Blog</Link></li>
              <li><Link href="/contacto" className="hover:text-accent">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Industrias
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {industries.slice(0, 6).map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industrias/${ind.slug}`} className="hover:text-accent">
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                Nueva Providencia 2134, Of. 1001, RM
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-accent" />
                +56 9 7724 1488
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-accent" />
                contacto@htochile.cl
              </li>
            </ul>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-white">
              Productos
            </h3>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-white/70">
              {productCategories.slice(0, 4).map((c) => (
                <li key={c}>
                  <Link href="/productos" className="hover:text-accent">{c}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} HTO Chile. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent">Política de Privacidad</Link>
            <Link href="#" className="hover:text-accent">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
