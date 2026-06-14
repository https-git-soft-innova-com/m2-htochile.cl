import { Reveal } from "@/components/reveal"

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string
  title: string
  description?: string
  image?: string
}) {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      {image && (
        <>
          <img
            src={image || "/placeholder.svg"}
            alt=""
            className="absolute inset-0 size-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/90 to-brand/40" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
