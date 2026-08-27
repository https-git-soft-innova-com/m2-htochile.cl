import type { Metadata } from "next"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contáctese con HTO Chile para solicitar una cotización o consultar por nuestras soluciones industriales.",
}

export default function ContactoPage() {
  return <ContactSection />
}
