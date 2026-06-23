export const WHATSAPP_NUMBER = "56942073252"

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
    title: "Mangueras Hidráulicas",
    image: "/images/hero-instrumentation.png",
  },
  { title: "Mangueras Industriales PVC", image: "/images/hero-automation.png" },
  { title: "Soluciones para Minería", image: "/images/hero-mining.png" },
  { title: "Acuicultura e Industria", image: "/images/hero-water.png" },
  { title: "Maquinaria PRENSSO", image: "/images/hero-energy.png" },
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
    short: "Alta y extrema presión para faenas mineras.",
    description:
      "Mangueras hidráulicas y conexiones diseñadas para resistir las condiciones más severas de la operación minera chilena.",
    challenges: [
      "Ambientes corrosivos y abrasivos",
      "Continuidad operacional crítica 24/7",
      "Alta presión en equipos de perforación y carga",
    ],
    solutions: [
      "Mangueras SAE 100 R12/R13/R15 de extrema presión",
      "Conexiones y acoples originales certificados",
      "Servicio en terreno y recambio inmediato",
    ],
  },
  {
    slug: "construccion",
    name: "Construcción",
    image: "/images/hero-energy.png",
    short: "Maquinaria pesada e hidráulica para obras civiles.",
    description:
      "Soluciones hidráulicas para equipos de movimiento de tierra, grúas y maquinaria de construcción.",
    challenges: [
      "Equipos sometidos a vibración y esfuerzo continuo",
      "Condiciones de obra con polvo y humedad",
      "Tiempos de parada costosos",
    ],
    solutions: [
      "Mangueras de media y alta presión para maquinaria",
      "Acoples rápidos y fittings JIC/BSP",
      "Despacho en 24 horas a obra",
    ],
  },
  {
    slug: "forestal",
    name: "Forestal",
    image: "/images/industry-pulp.png",
    short: "Flexibilidad y resistencia mecánica en terreno.",
    description:
      "Mangueras y conexiones para equipos forestales: harvester, forwarder y procesadores.",
    challenges: [
      "Terrenos irregulares y clima adverso",
      "Equipos con múltiples líneas hidráulicas",
      "Lejanía de centros de abastecimiento",
    ],
    solutions: [
      "Mangueras compactas de alta presión",
      "Stock en zonas forestales del sur",
      "Asesoría técnica para selección de presión y radio",
    ],
  },
  {
    slug: "agroindustria",
    name: "Agroindustria",
    image: "/images/industry-food.png",
    short: "Riego, pulverización y maquinaria agrícola.",
    description:
      "Mangueras PVC y caucho para riego, aspersión, conducción de fluidos y equipos agrícolas.",
    challenges: [
      "Exposición UV y cambios de temperatura",
      "Conducción de agua y químicos agrícolas",
      "Necesidad de flexibilidad y ligereza",
    ],
    solutions: [
      "Mangueras PVC para riego y succión",
      "Mangueras de caucho para pulverización",
      "Conexiones camlock y racores agrícolas",
    ],
  },
  {
    slug: "alimentos",
    name: "Alimentos y Bebidas",
    image: "/images/industry-food.png",
    short: "Mangueras sanitarias para procesos alimentarios.",
    description:
      "Soluciones con certificación alimentaria para conducción de líquidos, vapor y limpieza CIP.",
    challenges: [
      "Requerimientos de higiene y limpieza CIP",
      "Trazabilidad y normas sanitarias",
      "Resistencia a temperaturas de esterilización",
    ],
    solutions: [
      "Mangueras de caucho con certificación alimentaria",
      "Mangueras de silicona y PTFE",
      "Conexiones sanitarias clamp y DIN",
    ],
  },
  {
    slug: "quimica",
    name: "Química",
    image: "/images/industry-chemical.png",
    short: "Resistencia a fluidos agresivos y abrasivos.",
    description:
      "Mangueras industriales para conducción de químicos, ácidos, solventes y fluidos corrosivos.",
    challenges: [
      "Fluidos altamente corrosivos",
      "Áreas clasificadas y seguridad",
      "Resistencia a presión y temperatura simultánea",
    ],
    solutions: [
      "Mangueras de caucho con liner químico resistente",
      "Mangueras PTFE y composite",
      "Conexiones en acero inoxidable",
    ],
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    image: "/images/industry-oilgas.png",
    short: "Conexiones certificadas para hidrocarburos.",
    description:
      "Mangueras y acoples para transferencia de combustibles, aceites y gases industriales.",
    challenges: [
      "Transferencia de combustibles y aceites",
      "Cumplimiento de normas API y EN",
      "Ambientes con riesgo de explosión",
    ],
    solutions: [
      "Mangueras para combustibles con certificación",
      "Acoples secos (dry disconnect)",
      "Mangueras antiestáticas y resistentes al fuego",
    ],
  },
  {
    slug: "energia",
    name: "Energía e Industria",
    image: "/images/hero-energy.png",
    short: "Procesos críticos de generación y distribución.",
    description:
      "Mangueras hidráulicas para turbinas, generadores, compresores y sistemas de refrigeración industrial.",
    challenges: [
      "Alta temperatura y presión continua",
      "Disponibilidad 24/7 en plantas",
      "Fluidos hidráulicos y térmicos especiales",
    ],
    solutions: [
      "Mangueras termoplásticas y de caucho para alta temperatura",
      "Conexiones ORFS y fittings de acero inoxidable",
      "Servicio técnico preventivo programado",
    ],
  },
  {
    slug: "acuicultura",
    name: "Acuicultura",
    image: "/images/hero-water.png",
    short: "Soluciones para ambientes marinos y de cultivo.",
    description:
      "Mangueras industriales para centros de cultivo, alimentación, sistemas de aire y conducción en ambientes marinos.",
    challenges: [
      "Ambiente salino altamente corrosivo",
      "Conducción de aire, agua y alimento",
      "Operaciones offshore y remotas",
    ],
    solutions: [
      "Mangueras PVC y caucho resistentes a agua de mar",
      "Mangueras de aire para oxigenación",
      "Conexiones anticorrosivas y acoples rápidos",
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
  "Mangueras Hidráulicas",
  "Mangueras Industriales",
  "Mangueras PVC",
  "Prensas y Maquinaria",
  "Conexiones y Acoples",
  "Cortadoras",
]

export const productBrands = ["Parker", "Gates", "Manuli", "Semperit", "Eaton", "Continental", "Alfagomma", "PRENSSO"]

export const products: Product[] = [
  {
    slug: "manguera-hidraulica-alta-presion",
    name: "Manguera Hidráulica Alta Presión SAE 100 R2",
    category: "Mangueras Hidráulicas",
    brand: "Parker",
    industry: "Minería",
    image: "/images/product-transmitter.png",
    short:
      "Manguera de caucho con doble trenzado de acero para aplicaciones de alta presión en maquinaria pesada.",
    specs: [
      { label: "Presión", value: "Hasta 5.800 PSI" },
      { label: "Temperatura", value: "-40°C a +100°C" },
      { label: "Norma", value: "SAE 100 R2AT / EN 853 2SN" },
      { label: "Diámetros", value: '1/4" a 2"' },
    ],
  },
  {
    slug: "manguera-extrema-presion-r15",
    name: "Manguera Extrema Presión SAE 100 R15",
    category: "Mangueras Hidráulicas",
    brand: "Gates",
    industry: "Minería",
    image: "/images/product-flowmeter.png",
    short:
      "Manguera de 4 y 6 espirales de acero para equipos de minería y perforación con presiones extremas.",
    specs: [
      { label: "Presión", value: "Hasta 6.000 PSI" },
      { label: "Temperatura", value: "-40°C a +121°C" },
      { label: "Norma", value: "SAE 100 R15" },
      { label: "Aplicación", value: "Minería y perforación" },
    ],
  },
  {
    slug: "manguera-pvc-succion",
    name: "Manguera PVC Succión y Descarga",
    category: "Mangueras PVC",
    brand: "Continental",
    industry: "Agroindustria",
    image: "/images/product-valve.png",
    short:
      "Manguera PVC reforzada con espiral rígido para succión y descarga de agua, aire y líquidos.",
    specs: [
      { label: "Presión", value: "Hasta 150 PSI" },
      { label: "Temperatura", value: "-10°C a +60°C" },
      { label: "Material", value: "PVC material virgen" },
      { label: "Diámetros", value: '3/4" a 8"' },
    ],
  },
  {
    slug: "prensa-hidraulica-prensso",
    name: "Prensa Hidráulica PRENSSO P32",
    category: "Prensas y Maquinaria",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/product-plc.png",
    short:
      "Prensa de mangueras de operación intensiva para talleres y faenas industriales. Máxima precisión de prensado.",
    specs: [
      { label: "Capacidad", value: 'Hasta 2"' },
      { label: "Fuerza", value: "320 toneladas" },
      { label: "Operación", value: "Eléctrica / manual" },
      { label: "Dados", value: "Intercambiables" },
    ],
  },
  {
    slug: "conexiones-jic-acero",
    name: "Conexiones JIC 37° Acero Carbono",
    category: "Conexiones y Acoples",
    brand: "Parker",
    industry: "Construcción",
    image: "/images/product-sensor.png",
    short:
      "Fittings JIC 37° en acero carbono con acabado zinc para líneas hidráulicas de media y alta presión.",
    specs: [
      { label: "Norma", value: "SAE J514 / JIC 37°" },
      { label: "Material", value: "Acero carbono zincado" },
      { label: "Presión", value: "Hasta 5.000 PSI" },
      { label: "Medidas", value: '1/4" a 1-1/2"' },
    ],
  },
  {
    slug: "cortadora-mangueras-prensso",
    name: "Cortadora de Mangueras PRENSSO C20",
    category: "Cortadoras",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/product-analyzer.png",
    short:
      "Cortes limpios, precisos y seguros en mangueras hidráulicas y neumáticas. Optimiza tiempos de ensamblaje.",
    specs: [
      { label: "Capacidad", value: 'Hasta 2"' },
      { label: "Motor", value: "Eléctrico trifásico" },
      { label: "Disco", value: "Diamantado intercambiable" },
      { label: "Uso", value: "Taller e industrial" },
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
  { title: "Ficha Técnica Manguera SAE 100 R2", brand: "Parker", category: "Mangueras Hidráulicas", type: "Ficha Técnica", model: "SAE 100 R2AT" },
  { title: "Catálogo Mangueras Hidráulicas Alta Presión", brand: "Gates", category: "Mangueras Hidráulicas", type: "Catálogo", model: "MegaSys" },
  { title: "Manual Prensa Hidráulica P32", brand: "PRENSSO", category: "Prensas y Maquinaria", type: "Manual", model: "P32" },
  { title: "Certificación ISO 9001 Manuli", brand: "Manuli", category: "Mangueras Hidráulicas", type: "Certificación", model: "Manuli Hydraulics" },
  { title: "Ficha Técnica Manguera PVC Succión", brand: "Continental", category: "Mangueras PVC", type: "Ficha Técnica", model: "PVC Spiral" },
  { title: "Manual Cortadora C20", brand: "PRENSSO", category: "Prensas y Maquinaria", type: "Manual", model: "C20" },
  { title: "Catálogo Conexiones JIC/BSP/ORFS", brand: "Parker", category: "Conexiones y Acoples", type: "Catálogo", model: "Triple-Lok / EO" },
  { title: "Certificación SAE Mangueras Extrema Presión", brand: "Gates", category: "Mangueras Hidráulicas", type: "Certificación", model: "MXT R15" },
  { title: "Ficha Técnica Manguera Industrial Caucho", brand: "Alfagomma", category: "Mangueras Industriales", type: "Ficha Técnica", model: "Serie Industrial" },
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

export const blogCategories = ["Hidráulica", "Industrial", "Casos de Éxito", "Maquinaria", "Normativas"]

export const blogPosts: BlogPost[] = [
  {
    slug: "como-seleccionar-manguera-hidraulica",
    title: "Cómo seleccionar correctamente una manguera hidráulica de alta presión",
    category: "Hidráulica",
    excerpt:
      "Presión de trabajo, radio mínimo de curvatura, compatibilidad de fluido y temperatura: los 4 factores clave.",
    image: "/images/blog-1.png",
    date: "12 Jun 2026",
    readTime: "6 min",
  },
  {
    slug: "pvc-vs-caucho-manguera-industrial",
    title: "PVC vs caucho: qué manguera industrial conviene en cada faena",
    category: "Industrial",
    excerpt:
      "Diferencias en abrasión, temperatura y costo total de operación para elegir correctamente.",
    image: "/images/blog-2.png",
    date: "28 May 2026",
    readTime: "8 min",
  },
  {
    slug: "reduccion-fallas-flota-minera",
    title: "Reducción de fallas en flota minera con mangueras certificadas SAE 100 R15",
    category: "Casos de Éxito",
    excerpt:
      "Cambio del programa de mantención preventiva redujo paradas no programadas en un 40%.",
    image: "/images/blog-3.png",
    date: "15 May 2026",
    readTime: "5 min",
  },
  {
    slug: "prensado-correcto-mangueras",
    title: "Guía de prensado correcto de mangueras hidráulicas",
    category: "Maquinaria",
    excerpt:
      "Parámetros de prensado, diámetros de dado y verificación de ensamblaje seguro.",
    image: "/images/hero-mining.png",
    date: "2 May 2026",
    readTime: "7 min",
  },
  {
    slug: "normativas-sae-en-din-mangueras",
    title: "Normativas SAE, EN y DIN: qué exige cada estándar en mangueras",
    category: "Normativas",
    excerpt:
      "Guía comparativa de los estándares internacionales para selección y certificación.",
    image: "/images/industry-chemical.png",
    date: "20 Abr 2026",
    readTime: "9 min",
  },
  {
    slug: "almacenamiento-mangueras-industriales",
    title: "Cómo almacenar mangueras industriales correctamente",
    category: "Industrial",
    excerpt:
      "Evite degradación prematura con estas prácticas de almacenamiento y manipulación.",
    image: "/images/product-flowmeter.png",
    date: "8 Abr 2026",
    readTime: "6 min",
  },
]
