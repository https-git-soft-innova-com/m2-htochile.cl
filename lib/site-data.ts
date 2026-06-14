export const WHATSAPP_NUMBER = "56912345678"

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes Somos", href: "/quienes-somos" },
  { label: "Industrias", href: "/industrias" },
  { label: "Productos", href: "/productos" },
  { label: "Biblioteca Técnica", href: "/biblioteca-tecnica" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
]

export const heroSlides = [
  {
    title: "Instrumentación Industrial",
    image: "/images/hero-instrumentation.png",
  },
  { title: "Automatización de Procesos", image: "/images/hero-automation.png" },
  { title: "Soluciones para Minería", image: "/images/hero-mining.png" },
  { title: "Soluciones para Agua", image: "/images/hero-water.png" },
  { title: "Soluciones para Energía", image: "/images/hero-energy.png" },
]

export const stats = [
  { value: "+20", label: "Años de experiencia" },
  { value: "100%", label: "Cobertura nacional" },
  { value: "2 hrs", label: "Cotización" },
  { value: "24 hrs", label: "Despacho" },
]

export const benefits = [
  {
    icon: "Clock",
    title: "Cotización en 2 horas",
    description:
      "Respuesta técnica y comercial ágil para que su proyecto no se detenga.",
  },
  {
    icon: "Truck",
    title: "Despacho en 24 horas",
    description:
      "Logística nacional optimizada con stock permanente de productos clave.",
  },
  {
    icon: "Headset",
    title: "Soporte Técnico",
    description:
      "Ingenieros especialistas disponibles para asesorar cada aplicación.",
  },
  {
    icon: "MapPin",
    title: "Cobertura Nacional",
    description:
      "Presencia en todo Chile, desde la minería del norte al sur productivo.",
  },
  {
    icon: "BadgeCheck",
    title: "Productos Certificados",
    description:
      "Marcas líderes mundiales con certificaciones internacionales vigentes.",
  },
  {
    icon: "Lightbulb",
    title: "Asesoría Especializada",
    description:
      "Diseñamos la solución correcta para cada proceso y condición operativa.",
  },
]

export type Industry = {
  slug: string
  name: string
  image: string
  short: string
  description: string
  challenges: string[]
  solutions: string[]
}

export const industries: Industry[] = [
  {
    slug: "mineria",
    name: "Minería",
    image: "/images/hero-mining.png",
    short: "Instrumentación robusta para entornos exigentes de minería.",
    description:
      "Soluciones de medición y control diseñadas para resistir las condiciones más severas de la operación minera chilena.",
    challenges: [
      "Ambientes corrosivos y abrasivos",
      "Continuidad operacional crítica 24/7",
      "Mediciones en pulpa y procesos hidrometalúrgicos",
    ],
    solutions: [
      "Flujómetros y transmisores de presión de alta resistencia",
      "Analizadores de proceso y densidad",
      "Sistemas de control y monitoreo remoto",
    ],
  },
  {
    slug: "energia",
    name: "Energía",
    image: "/images/hero-energy.png",
    short: "Control y medición para generación y distribución eléctrica.",
    description:
      "Tecnología confiable para plantas de generación térmica, renovable y subestaciones eléctricas.",
    challenges: [
      "Alta disponibilidad y eficiencia energética",
      "Monitoreo de variables críticas en tiempo real",
      "Cumplimiento normativo y de seguridad",
    ],
    solutions: [
      "Instrumentación de temperatura y presión de alta precisión",
      "Sistemas SCADA y de adquisición de datos",
      "Válvulas de control y seguridad",
    ],
  },
  {
    slug: "agua",
    name: "Agua y Sanitarias",
    image: "/images/hero-water.png",
    short: "Soluciones integrales para tratamiento y distribución de agua.",
    description:
      "Medición y automatización para plantas de tratamiento de agua potable, aguas servidas y redes de distribución.",
    challenges: [
      "Control de caudal y calidad del agua",
      "Gestión eficiente de redes extensas",
      "Cumplimiento de normativas sanitarias",
    ],
    solutions: [
      "Flujómetros electromagnéticos y ultrasónicos",
      "Analizadores de pH, cloro y turbiedad",
      "Telemetría y control de estaciones de bombeo",
    ],
  },
  {
    slug: "alimentos",
    name: "Alimentos y Bebidas",
    image: "/images/industry-food.png",
    short: "Instrumentación higiénica para procesos sanitarios.",
    description:
      "Tecnología sanitaria que asegura inocuidad, trazabilidad y eficiencia en la industria alimentaria.",
    challenges: [
      "Requerimientos de higiene y limpieza CIP",
      "Trazabilidad y control de lotes",
      "Precisión en dosificación y mezclas",
    ],
    solutions: [
      "Instrumentos con certificación sanitaria 3-A y EHEDG",
      "Medición de flujo másico y nivel",
      "Sistemas de control de proceso integrados",
    ],
  },
  {
    slug: "celulosa",
    name: "Celulosa y Papel",
    image: "/images/industry-pulp.png",
    short: "Control de procesos para plantas de celulosa y papel.",
    description:
      "Soluciones de medición para procesos continuos de alta exigencia en la industria forestal.",
    challenges: [
      "Procesos continuos de alta temperatura",
      "Medición en fluidos viscosos y fibrosos",
      "Optimización de consumo energético",
    ],
    solutions: [
      "Transmisores de presión y temperatura industriales",
      "Medición de consistencia y nivel",
      "Válvulas de control de alto rendimiento",
    ],
  },
  {
    slug: "quimica",
    name: "Química",
    image: "/images/industry-chemical.png",
    short: "Instrumentación segura para procesos químicos.",
    description:
      "Tecnología certificada para áreas clasificadas y manejo de fluidos agresivos.",
    challenges: [
      "Áreas clasificadas y atmósferas explosivas",
      "Fluidos corrosivos y peligrosos",
      "Seguridad funcional SIL",
    ],
    solutions: [
      "Instrumentación con certificación Ex / ATEX",
      "Materiales especiales resistentes a la corrosión",
      "Sistemas instrumentados de seguridad (SIS)",
    ],
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    image: "/images/industry-oilgas.png",
    short: "Medición fiscal y control para hidrocarburos.",
    description:
      "Soluciones de alta precisión para upstream, midstream y downstream.",
    challenges: [
      "Medición fiscal de alta exactitud",
      "Ambientes de alta presión y temperatura",
      "Cumplimiento de estándares API",
    ],
    solutions: [
      "Flujómetros Coriolis y ultrasónicos",
      "Instrumentación certificada para zonas peligrosas",
      "Sistemas de medición custody transfer",
    ],
  },
  {
    slug: "manufactura",
    name: "Manufactura",
    image: "/images/industry-manufacturing.png",
    short: "Automatización para líneas productivas eficientes.",
    description:
      "Soluciones de control y automatización que aumentan la productividad y reducen costos operativos.",
    challenges: [
      "Optimización de líneas de producción",
      "Integración de sistemas heterogéneos",
      "Mantenimiento predictivo",
    ],
    solutions: [
      "Controladores PLC y HMI",
      "Sensores industriales y de visión",
      "Sistemas de monitoreo y MES",
    ],
  },
]

export type Product = {
  slug: string
  name: string
  category: string
  brand: string
  industry: string
  image: string
  short: string
  specs: { label: string; value: string }[]
}

export const productCategories = [
  "Transmisores",
  "Flujómetros",
  "Válvulas",
  "Controladores",
  "Sensores",
  "Analizadores",
]

export const productBrands = ["Prensso", "BRASMANG", "MANGUEPLAST", "Honeywell", "Schneider"]

export const products: Product[] = [
  {
    slug: "transmisor-presion-pro",
    name: "Transmisor de Presión Cerabar PRO",
    category: "Transmisores",
    brand: "Prensso",
    industry: "Minería",
    image: "/images/product-transmitter.png",
    short:
      "Transmisor de presión de alta precisión para procesos exigentes con salida HART.",
    specs: [
      { label: "Rango", value: "0 – 400 bar" },
      { label: "Precisión", value: "±0.05%" },
      { label: "Salida", value: "4–20 mA HART" },
      { label: "Certificación", value: "ATEX / IECEx" },
    ],
  },
  {
    slug: "flujometro-electromagnetico",
    name: "Flujómetro Electromagnético Promag",
    category: "Flujómetros",
    brand: "Prensso",
    industry: "Agua y Sanitarias",
    image: "/images/product-flowmeter.png",
    short:
      "Medición de caudal precisa para agua, aguas residuales y fluidos conductivos.",
    specs: [
      { label: "Diámetro", value: "DN15 – DN2000" },
      { label: "Precisión", value: "±0.2%" },
      { label: "Salida", value: "Modbus / 4–20 mA" },
      { label: "Protección", value: "IP68" },
    ],
  },
  {
    slug: "valvula-control-fisher",
    name: "Válvula de Control Fisher easy-e",
    category: "Válvulas",
    brand: "BRASMANG",
    industry: "Energía",
    image: "/images/product-valve.png",
    short:
      "Válvula globo de control con actuador neumático para regulación precisa.",
    specs: [
      { label: "Tamaño", value: '1/2" – 12"' },
      { label: "Clase", value: "ANSI 150 – 600" },
      { label: "Actuador", value: "Neumático" },
      { label: "Material", value: "Acero inox 316" },
    ],
  },
  {
    slug: "plc-simatic-s7",
    name: "Controlador PLC SIMATIC S7-1500",
    category: "Controladores",
    brand: "BRASMANG",
    industry: "Manufactura",
    image: "/images/product-plc.png",
    short:
      "Controlador modular de alto rendimiento para automatización industrial avanzada.",
    specs: [
      { label: "CPU", value: "Hasta 70 ns/inst" },
      { label: "Comunicación", value: "PROFINET / OPC UA" },
      { label: "I/O", value: "Modular expandible" },
      { label: "Diagnóstico", value: "Integrado" },
    ],
  },
  {
    slug: "sensor-temperatura-rtd",
    name: "Sensor de Temperatura RTD iTHERM",
    category: "Sensores",
    brand: "MANGUEPLAST",
    industry: "Alimentos y Bebidas",
    image: "/images/product-sensor.png",
    short:
      "Termómetro RTD de respuesta rápida con diseño higiénico para alimentos.",
    specs: [
      { label: "Rango", value: "-200 a 600 °C" },
      { label: "Sensor", value: "Pt100 clase AA" },
      { label: "Conexión", value: "Higiénica / roscada" },
      { label: "Respuesta", value: "< 1.5 s" },
    ],
  },
  {
    slug: "analizador-liquidos-liquiline",
    name: "Analizador de Líquidos Liquiline",
    category: "Analizadores",
    brand: "MANGUEPLAST",
    industry: "Química",
    image: "/images/product-analyzer.png",
    short:
      "Transmisor multiparámetro para medición de pH, conductividad y oxígeno disuelto.",
    specs: [
      { label: "Parámetros", value: "pH / ORP / O₂ / Cond." },
      { label: "Entradas", value: "Hasta 8 sensores" },
      { label: "Salida", value: "4–20 mA / Modbus" },
      { label: "Display", value: "Color táctil" },
    ],
  },
]

export type TechDoc = {
  title: string
  brand: string
  category: string
  type: "Ficha Técnica" | "Catálogo" | "Manual" | "Certificación"
  model: string
}

export const docTypes = ["Ficha Técnica", "Catálogo", "Manual", "Certificación"]

export const techDocs: TechDoc[] = [
  { title: "Ficha Técnica Cerabar PMP71B", brand: "Endress+Hauser", category: "Transmisores", type: "Ficha Técnica", model: "PMP71B" },
  { title: "Catálogo Flujómetros Promag W", brand: "Endress+Hauser", category: "Flujómetros", type: "Catálogo", model: "Promag W 400" },
  { title: "Manual Válvula Fisher easy-e", brand: "Emerson", category: "Válvulas", type: "Manual", model: "easy-e GX" },
  { title: "Certificación ATEX SIMATIC S7", brand: "Siemens", category: "Controladores", type: "Certificación", model: "S7-1500" },
  { title: "Ficha Técnica Sensor iTHERM TM411", brand: "Endress+Hauser", category: "Sensores", type: "Ficha Técnica", model: "TM411" },
  { title: "Manual Analizador Liquiline CM44", brand: "Honeywell", category: "Analizadores", type: "Manual", model: "CM44" },
  { title: "Catálogo Válvulas de Control", brand: "Emerson", category: "Válvulas", type: "Catálogo", model: "Serie 2024" },
  { title: "Certificación SIL Transmisores", brand: "Schneider", category: "Transmisores", type: "Certificación", model: "Foxboro IDP10" },
  { title: "Ficha Técnica Caudalímetro Coriolis", brand: "Emerson", category: "Flujómetros", type: "Ficha Técnica", model: "Micro Motion" },
]

export type BlogPost = {
  slug: string
  title: string
  category: string
  excerpt: string
  image: string
  date: string
  readTime: string
}

export const blogCategories = ["Automatización", "Instrumentación", "Casos de Éxito", "Innovación", "Normativas"]

export const blogPosts: BlogPost[] = [
  {
    slug: "tendencias-automatizacion-industrial-2026",
    title: "Tendencias en automatización industrial para 2026",
    category: "Automatización",
    excerpt:
      "Cómo la digitalización y el IIoT están transformando las plantas de proceso en Chile.",
    image: "/images/blog-1.png",
    date: "12 Jun 2026",
    readTime: "6 min",
  },
  {
    slug: "calibracion-instrumentos-presion",
    title: "Guía práctica de calibración de instrumentos de presión",
    category: "Instrumentación",
    excerpt:
      "Buenas prácticas para mantener la exactitud y trazabilidad de su instrumentación.",
    image: "/images/blog-2.png",
    date: "28 May 2026",
    readTime: "8 min",
  },
  {
    slug: "digital-twin-mineria",
    title: "Digital Twin: el futuro del monitoreo en minería",
    category: "Innovación",
    excerpt:
      "El gemelo digital permite anticipar fallas y optimizar la operación minera.",
    image: "/images/blog-3.png",
    date: "15 May 2026",
    readTime: "5 min",
  },
  {
    slug: "caso-exito-planta-agua",
    title: "Caso de éxito: modernización de planta de agua potable",
    category: "Casos de Éxito",
    excerpt:
      "Reducción del 30% en pérdidas tras la implementación de telemetría avanzada.",
    image: "/images/hero-water.png",
    date: "2 May 2026",
    readTime: "7 min",
  },
  {
    slug: "normativa-areas-clasificadas",
    title: "Normativas para instrumentación en áreas clasificadas",
    category: "Normativas",
    excerpt:
      "Qué exigen las certificaciones ATEX e IECEx en la industria química.",
    image: "/images/industry-chemical.png",
    date: "20 Abr 2026",
    readTime: "9 min",
  },
  {
    slug: "eficiencia-energetica-flujometros",
    title: "Eficiencia energética con medición de flujo inteligente",
    category: "Instrumentación",
    excerpt:
      "Cómo la medición precisa de caudal reduce costos operativos.",
    image: "/images/product-flowmeter.png",
    date: "8 Abr 2026",
    readTime: "6 min",
  },
]
