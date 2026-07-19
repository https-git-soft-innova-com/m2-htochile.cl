import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { Logo } from "@/components/logo"
import { industries, productCategories } from "@/lib/site-data"

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/hto.chile/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/hto-chile/",
    path: "M4.98 3.5C4.98 4.88 3.87 6 2.49 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.49 1 3.87 1 4.98 2.12 4.98 3.5zM.22 8h4.54v14H.22V8zm7.5 0h4.35v1.92h.06c.6-1.14 2.07-2.34 4.27-2.34 4.57 0 5.41 3 5.41 6.9V22h-4.53v-6.62c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.5V22H7.72V8z",
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
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
              <li><Link href="https://blog.htochile.cl" className="hover:text-accent">Blog</Link></li>
              <li><Link href="/#contacto" className="hover:text-accent">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Industrias
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {industries.slice(0, 6).map((ind) => (
                <li key={ind.slug}>
                  <Link href="/#industrias" className="hover:text-accent">
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
                  <Link href="/#productos" className="hover:text-accent">{c}</Link>
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
