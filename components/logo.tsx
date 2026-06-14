import { cn } from "@/lib/utils"

export function Logo({
  className,
  variant = "default",
}: {
  className?: string
  variant?: "default" | "light"
}) {
  return (
    <img
      src={variant === "light" ? "/logo-hto-white.png" : "/logo-hto.png"}
      alt="HTO Chile"
      className={cn("h-10 w-auto", className)}
    />
  )
}
