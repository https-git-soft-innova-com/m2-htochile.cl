"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, MessageCircle, FileText } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { nav, whatsappUrl } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const onDark = !scrolled && pathname === "/"

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label="HTO Chile - Inicio">
          <Logo variant={onDark ? "light" : "default"} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-accent"
                    : onDark
                      ? "text-white/85 hover:text-white"
                      : "text-foreground/75 hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            asChild
            variant="outline"
            className={cn(
              "gap-2",
              onDark &&
                "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white",
            )}
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
          <Button asChild className="gap-2 bg-accent text-white hover:bg-accent/90">
            <Link href="/contacto">
              <FileText className="size-4" />
              Solicitar Cotización
            </Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-md lg:hidden",
            onDark ? "text-white" : "text-foreground",
          )}
        >
          <Menu className="size-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[var(--brand)] lg:hidden"
          >
            <div className="flex h-18 items-center justify-between px-4 py-3 sm:px-6">
              <Logo variant="light" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="inline-flex size-10 items-center justify-center rounded-md text-white"
              >
                <X className="size-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-4 py-6 sm:px-6">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={item.href}
                    className="block border-b border-white/10 py-4 text-xl font-semibold text-white"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90">
                  <Link href="/contacto">Solicitar Cotización</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <a
                    href={whatsappUrl("Hola, necesito hablar con un especialista de HTO.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hablar con un Especialista
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
