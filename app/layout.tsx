import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappButton } from "@/components/whatsapp-button"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "HTO Chile | Instrumentación y Automatización Industrial",
    template: "%s | HTO Chile",
  },
  description:
    "Soluciones de instrumentación, automatización, válvulas, sensores y control de procesos para la industria chilena. Cotización en 2 horas, despacho en 24 horas.",
  keywords: [
    "instrumentación industrial",
    "automatización de procesos",
    "válvulas industriales",
    "sensores",
    "control de procesos",
    "Chile",
    "minería",
    "energía",
  ],
  generator: "v0.app",
  openGraph: {
    title: "HTO Chile | Instrumentación y Automatización Industrial",
    description:
      "Soluciones de instrumentación y automatización para la industria chilena.",
    type: "website",
    locale: "es_CL",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsappButton />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
