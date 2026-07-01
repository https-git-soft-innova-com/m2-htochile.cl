"use client"

import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

interface Collaborator {
  name: string
  role: string
  image: string
  linkedin?: string
}

const collaborators: Collaborator[] = [
  {
    name: "Patricio Arce",
    role: "Gerente General",
    image: "/images/team/placeholder-1.svg",
    linkedin: "#",
  },
  {
    name: "Carolina Arce",
    role: "Gerente Comercial",
    image: "/images/team/placeholder-2.svg",
    linkedin: "#",
  },
  {
    name: "Colaborador 3",
    role: "Cargo",
    image: "/images/team/placeholder-3.svg",
    linkedin: "#",
  },
  {
    name: "Colaborador 4",
    role: "Cargo",
    image: "/images/team/placeholder-4.svg",
    linkedin: "#",
  },
]

export function HomeTeam() {
  return (
    <section className="bg-secondary/50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nuestro Equipo"
          title="Colaboradores"
          description="Las personas detrás de la calidad y la asesoría técnica que nos distingue."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {collaborators.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.08}>
              <div className="group flex flex-col items-center text-center">
                {/* Foto circular con efecto gris → color */}
                <div className="relative size-36 overflow-hidden rounded-full border-4 border-border shadow-lg transition-all duration-500 group-hover:border-[var(--brand)] group-hover:shadow-xl">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="size-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                {/* Nombre */}
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {person.name}
                </h3>
                {/* Cargo */}
                <p className="mt-1 text-sm text-muted-foreground">
                  {person.role}
                </p>
                {/* LinkedIn */}
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${person.name}`}
                    className="mt-3 inline-flex size-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all duration-300 hover:bg-[#0A66C2] hover:text-white"
                  >
                    <LinkedinIcon className="size-4" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
