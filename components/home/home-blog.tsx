import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/blog-card"
import { blogPosts } from "@/lib/site-data"

export function HomeBlog() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title="Últimos artículos técnicos"
          description="Conocimiento, tendencias y casos de éxito de la industria de instrumentación y automatización."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/blog">
              Ver todos los artículos
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
