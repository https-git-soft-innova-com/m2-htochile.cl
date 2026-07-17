import { Mail, Phone, Wrench } from "lucide-react"

export default function UnderConstructionPage() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-20 text-center">
      <div className="mx-auto max-w-xl space-y-8">
        {/* Icono */}
        <div className="flex justify-center">
          <div className="rounded-full bg-primary/10 p-6">
            <Wrench className="h-12 w-12 text-primary" />
          </div>
        </div>

        {/* Mensaje principal */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Nuestro sitio se está actualizando
          </h1>
          <p className="text-lg text-muted-foreground">
            Estamos trabajando para ofrecerle una mejor experiencia. Pronto estaremos de vuelta.
          </p>
        </div>

        {/* Contacto comercial */}
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">
            Para temas comerciales, comuníquese con:
          </h2>
          <div className="space-y-3">
            <p className="text-xl font-medium">Patricio Ahumada</p>
            <a
              href="mailto:patricio.ahumada@htochile.cl"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Mail className="h-4 w-4" />
              patricio.ahumada@htochile.cl
            </a>
            <div className="pt-1">
              <a
                href="tel:+56974241488"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Phone className="h-4 w-4" />
                +56 9 7724 1488
              </a>
            </div>
          </div>
        </div>

        {/* Agradecimiento */}
        <p className="text-muted-foreground">
          Por su comprensión, ¡muchísimas gracias!
        </p>
      </div>
    </section>
  )
}
