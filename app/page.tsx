import { Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function MaintenancePage() {
  return (
    <section className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
      {/* Imagen de fondo 100% viewport */}
      <Image
        src="/images/hero-mining-hoses.jpg"
        alt="Mangueras hidráulicas industriales - HTO Chile"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-xl space-y-8 px-6 text-center">
        {/* Logo naranja */}
        <div className="flex justify-center">
          <img
            src="/logo-hto.png"
            alt="HTO Chile"
            className="h-16 w-auto sm:h-20"
          />
        </div>

        {/* Mensaje principal */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Nuestro sitio está en mantenimiento
          </h1>
          <p className="text-lg text-white/80">
            Estamos trabajando para ofrecerle una mejor experiencia. Pronto estaremos de vuelta.
          </p>
        </div>

        {/* Contacto comercial */}
        <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
          <h2 className="mb-4 text-lg font-semibold text-white">
            Para temas comerciales, comuníquese con:
          </h2>
          <div className="space-y-3">
            <p className="text-xl font-medium text-white">Patricio Ahumada</p>
            <a
              href="mailto:patricio.ahumada@htochile.cl"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 hover:underline"
            >
              <Mail className="h-4 w-4" />
              patricio.ahumada@htochile.cl
            </a>
            <div className="pt-1">
              <a
                href="tel:+56977241488"
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 hover:underline"
              >
                <Phone className="h-4 w-4" />
                +56 9 7724 1488
              </a>
            </div>
          </div>
        </div>

        {/* Agradecimiento */}
        <p className="text-white/70">
          Por su comprensión, ¡muchísimas gracias!
        </p>
      </div>
    </section>
  )
}
