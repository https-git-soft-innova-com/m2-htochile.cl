import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
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
    default: "HTO Chile | Mangueras Hidráulicas e Industriales — Prensas PRENSSO",
    template: "%s | HTO Chile",
  },
  description:
    "Mangueras hidráulicas, industriales y PVC. Prensas, cortadoras y maquinaria PRENSSO. Marcas Parker, Gates, Manuli. Cotización en 2 horas, despacho en 24 horas. Cobertura nacional Chile.",
  keywords: [
    "mangueras hidráulicas Chile",
    "mangueras industriales",
    "prensas hidráulicas PRENSSO",
    "cortadoras de mangueras",
    "conexiones hidráulicas",
    "Parker Chile",
    "Gates Chile",
    "mangueras minería",
    "mangueras PVC",
    "maquinaria hidráulica",
    "HTO Chile",
    "mangueras alta presión",
  ],
  authors: [{ name: "HTO Chile" }],
  creator: "HTO Chile",
  publisher: "HTO Chile",
  metadataBase: new URL("https://htochile.cl"),
  alternates: {
    canonical: "https://htochile.cl",
  },
  openGraph: {
    title: "HTO Chile | Mangueras Hidráulicas e Industriales",
    description:
      "Soluciones en mangueras hidráulicas, industriales y maquinaria PRENSSO para la industria chilena. +20 años de experiencia, cobertura nacional.",
    type: "website",
    locale: "es_CL",
    url: "https://htochile.cl",
    siteName: "HTO Chile",
    images: [
      {
        url: "/images/hero-hydraulic-1.jpg",
        width: 1200,
        height: 630,
        alt: "HTO Chile - Mangueras Hidráulicas e Industriales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HTO Chile | Mangueras Hidráulicas e Industriales",
    description:
      "Mangueras hidráulicas, industriales y maquinaria PRENSSO. Cotización en 2 hrs, despacho en 24 hrs.",
    images: ["/images/hero-hydraulic-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "PENDING_SEARCH_CONSOLE_VERIFICATION",
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NM2T3545');`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NM2T3545"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsappButton />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
