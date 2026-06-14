import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { type BlogPost } from "@/lib/site-data"

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-[var(--brand)]/5"
    >
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute left-3 top-3 bg-accent text-white hover:bg-accent">
          {post.category}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{post.date}</span>
          <span className="flex items-center gap-1">
            <Clock className="size-3" />
            {post.readTime}
          </span>
        </div>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-2)]">
          Leer artículo
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
