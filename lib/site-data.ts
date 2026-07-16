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
    image: "/images/industries/mineria.jpg",
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
    image: "/images/industries/construccion.jpg",
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
    image: "/images/industries/forestal.jpg",
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
    image: "/images/industries/agricola.jpg",
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
    image: "/images/industries/sector-alimentos.jpg",
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
    image: "/images/industries/quimica.jpg",
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
    image: "/images/industries/combustible.jpg",
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
    slug: "manufactura",
    name: "Manufactura",
    image: "/images/industries/manufactura.jpg",
    short: "Soluciones hidráulicas y neumáticas para producción.",
    description:
      "Mangueras, prensas y maquinaria para líneas de producción industrial, ensamblaje y automatización.",
    challenges: [
      "Alta exigencia de producción continua",
      "Múltiples líneas hidráulicas y neumáticas",
      "Precisión en prensado y corte",
    ],
    solutions: [
      "Prensas y cortadoras PRENSSO",
      "Mangueras hidráulicas de media y alta presión",
      "Conexiones rápidas para cambio ágil",
    ],
  },
  {
    slug: "acuicultura",
    name: "Acuicultura",
    image: "/images/industries/acuicola.jpg",
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
  {
    slug: "automotriz",
    name: "Automotriz",
    image: "/images/industries/automotriz.jpg",
    short: "Hidráulica y neumática para talleres y flotas.",
    description:
      "Mangueras y conexiones para sistemas hidráulicos de vehículos, equipos de diagnóstico y talleres mecánicos.",
    challenges: [
      "Diversidad de medidas y conexiones",
      "Compatibilidad con fluidos de freno y dirección",
      "Resistencia a aceites y temperaturas",
    ],
    solutions: [
      "Mangueras SAE para sistemas automotrices",
      "Conexiones métricas y JIC para talleres",
      "Prensas portátiles para servicio móvil",
    ],
  },
  {
    slug: "naval",
    name: "Naval",
    image: "/images/industries/naval.jpg",
    short: "Resistencia marina para flotas y astilleros.",
    description:
      "Mangueras y conexiones para sistemas hidráulicos navales, grúas portuarias y equipos de cubierta.",
    challenges: [
      "Corrosión por agua salada permanente",
      "Vibraciones y movimiento constante",
      "Normativas marítimas estrictas",
    ],
    solutions: [
      "Mangueras con recubrimiento marino",
      "Conexiones en acero inoxidable 316",
      "Certificaciones Lloyd's y DNV",
    ],
  },
  {
    slug: "transporte",
    name: "Transporte",
    image: "/images/industries/transporte.jpg",
    short: "Mangueras para flotas de carga y pasajeros.",
    description:
      "Soluciones hidráulicas y neumáticas para camiones, buses, grúas móviles y equipos de transporte pesado.",
    challenges: [
      "Uso intensivo y vibración en ruta",
      "Sistemas de freno y dirección hidráulica",
      "Mantenimiento en terreno",
    ],
    solutions: [
      "Mangueras de freno DOT certificadas",
      "Mangueras para dirección hidráulica",
      "Servicio móvil con prensas portátiles PRENSSO",
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
  "Prensas Hidráulicas",
  "Cortadoras",
  "Peladoras",
  "Insertadoras",
  "Maquinaria Auxiliar",
  "Conexiones y Acoples",
]

export const productBrands = ["Parker", "Gates", "Manuli", "Semperit", "Eaton", "Continental", "Alfagomma", "PRENSSO"]

export const products: Product[] = [
  // === MANGUERAS ===
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
  // === PRENSAS HIDRÁULICAS PRENSSO ===
  {
    slug: "prensa-hidraulica-phv65tfp",
    name: "Prensa Hidráulica PHV65 TFP",
    category: "Prensas Hidráulicas",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/products/prensa-phv65tfp.jpg",
    short:
      "Prensa hidráulica de alto rendimiento para prensado de mangueras de hasta 2\". Operación trifásica con panel digital.",
    specs: [
      { label: "Capacidad", value: 'Hasta 2"' },
      { label: "Fuerza", value: "65 toneladas" },
      { label: "Alimentación", value: "Trifásica 380V" },
      { label: "Panel", value: "Digital programable" },
    ],
  },
  {
    slug: "prensa-manual-pm30",
    name: "Prensa Manual PM30",
    category: "Prensas Hidráulicas",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/products/prensa-pm30.jpg",
    short:
      "Prensa manual compacta ideal para talleres con bajo volumen. Operación sin electricidad.",
    specs: [
      { label: "Capacidad", value: 'Hasta 1-1/4"' },
      { label: "Fuerza", value: "30 toneladas" },
      { label: "Operación", value: "Manual hidráulica" },
      { label: "Portabilidad", value: "Compacta y liviana" },
    ],
  },
  {
    slug: "prensa-hidraulica-mm40",
    name: "Prensa Hidráulica Manual MM40",
    category: "Prensas Hidráulicas",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/products/prensa-mm40.jpg",
    short:
      "Prensa hidráulica de accionamiento manual con 40 toneladas de fuerza. Ideal para servicio móvil.",
    specs: [
      { label: "Capacidad", value: 'Hasta 1-1/2"' },
      { label: "Fuerza", value: "40 toneladas" },
      { label: "Operación", value: "Manual hidráulica" },
      { label: "Uso", value: "Taller y terreno" },
    ],
  },
  {
    slug: "prensa-hidraulica-mp10t",
    name: "Prensa Hidráulica MP10T",
    category: "Prensas Hidráulicas",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/products/prensa-mp10t.jpg",
    short:
      "Prensa eléctrica de producción intensiva con panel táctil y dados intercambiables. Alta precisión de prensado.",
    specs: [
      { label: "Capacidad", value: 'Hasta 2"' },
      { label: "Fuerza", value: "100 toneladas" },
      { label: "Alimentación", value: "Trifásica 380V" },
      { label: "Control", value: "Panel táctil digital" },
    ],
  },
  {
    slug: "prensa-hidraulica-mp6ts",
    name: "Prensa Hidráulica MP6TS",
    category: "Prensas Hidráulicas",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/products/prensa-mp6ts.jpg",
    short:
      "Prensa hidráulica compacta de 60 toneladas con sistema automático de abertura. Producción media-alta.",
    specs: [
      { label: "Capacidad", value: 'Hasta 1-1/2"' },
      { label: "Fuerza", value: "60 toneladas" },
      { label: "Alimentación", value: "Trifásica 380V" },
      { label: "Sistema", value: "Abertura automática" },
    ],
  },
  {
    slug: "prensa-hidraulica-phv110tfp",
    name: "Prensa Hidráulica PHV110 TFP",
    category: "Prensas Hidráulicas",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/products/prensa-phv110tfp.jpg",
    short:
      "Prensa industrial de máxima capacidad para mangueras de hasta 4\". Uso intensivo en plantas de producción.",
    specs: [
      { label: "Capacidad", value: 'Hasta 4"' },
      { label: "Fuerza", value: "110 toneladas" },
      { label: "Alimentación", value: "Trifásica 380V" },
      { label: "Panel", value: "Digital programable TFP" },
    ],
  },
  // === CORTADORAS PRENSSO ===
  {
    slug: "cortadora-mc300",
    name: "Cortadora de Mangueras MC300",
    category: "Cortadoras",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/products/cortadora-mc300.jpg",
    short:
      "Cortadora eléctrica trifásica para mangueras hidráulicas. Corte limpio y preciso con disco diamantado.",
    specs: [
      { label: "Capacidad", value: 'Hasta 2"' },
      { label: "Motor", value: "Trifásico 380V 60Hz" },
      { label: "Disco", value: "Diamantado intercambiable" },
      { label: "Uso", value: "Taller industrial" },
    ],
  },
  {
    slug: "cortadora-mc3002-neumatica",
    name: "Cortadora Neumática MC3002",
    category: "Cortadoras",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/products/cortadora-mc3002.jpg",
    short:
      "Cortadora neumática de alta velocidad para líneas de producción. Operación con aire comprimido.",
    specs: [
      { label: "Capacidad", value: 'Hasta 2"' },
      { label: "Accionamiento", value: "Neumático" },
      { label: "Presión aire", value: "6-8 bar" },
      { label: "Velocidad", value: "Alta producción" },
    ],
  },
  {
    slug: "cortadora-mc4000",
    name: "Cortadora Industrial MC4000",
    category: "Cortadoras",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/products/cortadora-mc4000.jpg",
    short:
      "Cortadora de alta capacidad para mangueras de gran diámetro. Diseñada para producción intensiva.",
    specs: [
      { label: "Capacidad", value: 'Hasta 4"' },
      { label: "Motor", value: "Trifásico de alta potencia" },
      { label: "Disco", value: "Industrial reforzado" },
      { label: "Estructura", value: "Robusta con protección" },
    ],
  },
  // === PELADORAS PRENSSO ===
  {
    slug: "peladora-md3003",
    name: "Peladora de Mangueras MD3003",
    category: "Peladoras",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/products/peladora-md3003.jpg",
    short:
      "Peladora eléctrica trifásica para remoción de cubierta externa de mangueras antes del prensado.",
    specs: [
      { label: "Capacidad", value: 'Hasta 3"' },
      { label: "Motor", value: "Trifásico 380V 60Hz" },
      { label: "Tipo pelado", value: "Externo e interno" },
      { label: "Ajuste", value: "Profundidad regulable" },
    ],
  },
  {
    slug: "peladora-manual-mmd1000",
    name: "Peladora Manual MMD1000",
    category: "Peladoras",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/products/peladora-mmd1000.jpg",
    short:
      "Peladora manual compacta para talleres. Ideal para pelado rápido sin necesidad de energía eléctrica.",
    specs: [
      { label: "Capacidad", value: 'Hasta 1-1/4"' },
      { label: "Operación", value: "Manual" },
      { label: "Tipo pelado", value: "Externo" },
      { label: "Portabilidad", value: "Compacta para terreno" },
    ],
  },
  // === INSERTADORA ===
  {
    slug: "insertadora-mmt200",
    name: "Insertadora de Terminales MMT200",
    category: "Insertadoras",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/products/insertadora-mmt200.jpg",
    short:
      "Insertadora hidráulica para colocación de terminales en mangueras. Agiliza el proceso de ensamblaje.",
    specs: [
      { label: "Capacidad", value: 'Hasta 2"' },
      { label: "Fuerza", value: "Hidráulica" },
      { label: "Operación", value: "Semi-automática" },
      { label: "Uso", value: "Línea de ensamblaje" },
    ],
  },
  // === MAQUINARIA AUXILIAR PRENSSO ===
  {
    slug: "termo-sellado-psc60",
    name: "Máquina Termo Sellado PSC60",
    category: "Maquinaria Auxiliar",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/products/termo-sellado-psc60.jpg",
    short:
      "Máquina de termo sellado para protección de extremos de mangueras. Sello térmico limpio y profesional.",
    specs: [
      { label: "Tipo", value: "Termo sellado" },
      { label: "Temperatura", value: "Regulable" },
      { label: "Alimentación", value: "Monofásica 220V" },
      { label: "Aplicación", value: "Sellado de extremos" },
    ],
  },
  {
    slug: "difusor-calor-pdc80",
    name: "Difusor de Calor Térmico PDC80",
    category: "Maquinaria Auxiliar",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/products/difusor-pdc80.jpg",
    short:
      "Difusor térmico para facilitar la inserción de conexiones en mangueras de caucho. Calentamiento uniforme.",
    specs: [
      { label: "Tipo", value: "Difusor de calor" },
      { label: "Temperatura", value: "Hasta 200°C" },
      { label: "Alimentación", value: "Monofásica 220V" },
      { label: "Uso", value: "Pre-inserción de terminales" },
    ],
  },
  {
    slug: "aplicador-espiral-mce60",
    name: "Aplicador de Espiral MCE60",
    category: "Maquinaria Auxiliar",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/products/aplicador-mce60.jpg",
    short:
      "Máquina para aplicación de protección espiral en mangueras hidráulicas. Protege contra abrasión externa.",
    specs: [
      { label: "Tipo", value: "Aplicador de espiral" },
      { label: "Capacidad", value: "Múltiples diámetros" },
      { label: "Operación", value: "Semi-automática" },
      { label: "Protección", value: "Anti-abrasión" },
    ],
  },
  {
    slug: "organizador-pdv1000d",
    name: "Organizador de Mangueras PDV1000-D",
    category: "Maquinaria Auxiliar",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/products/organizador-pdv1000d.jpg",
    short:
      "Organizador desmontable para almacenamiento y despacho de mangueras. Optimiza espacio en taller.",
    specs: [
      { label: "Tipo", value: "Organizador desmontable" },
      { label: "Capacidad", value: "Hasta 1000 kg" },
      { label: "Material", value: "Acero reforzado" },
      { label: "Montaje", value: "Modular desmontable" },
    ],
  },
  {
    slug: "banco-prueba-mllts300",
    name: "Banco de Prueba y Limpieza MLLTS300",
    category: "Maquinaria Auxiliar",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/products/banco-mllts300.jpg",
    short:
      "Banco de prueba hidrostática y limpieza de mangueras. Verificación de estanqueidad post-prensado.",
    specs: [
      { label: "Presión prueba", value: "Hasta 300 bar" },
      { label: "Función", value: "Prueba + limpieza" },
      { label: "Alimentación", value: "Trifásica 380V" },
      { label: "Certificación", value: "Norma SAE" },
    ],
  },
  {
    slug: "banco-prueba-btm700",
    name: "Banco de Prueba BTM700",
    category: "Maquinaria Auxiliar",
    brand: "PRENSSO",
    industry: "Manufactura",
    image: "/images/products/banco-btm700.jpg",
    short:
      "Banco de prueba de alta presión para ensayos de mangueras hidráulicas. Capacidad industrial.",
    specs: [
      { label: "Presión prueba", value: "Hasta 700 bar" },
      { label: "Función", value: "Prueba hidrostática" },
      { label: "Alimentación", value: "Mono/Trifásica" },
      { label: "Registro", value: "Digital con certificado" },
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
  { title: "Manual Prensa Hidráulica PHV65 TFP", brand: "PRENSSO", category: "Prensas Hidráulicas", type: "Manual", model: "PHV65 TFP" },
  { title: "Manual Prensa Hidráulica PHV110 TFP", brand: "PRENSSO", category: "Prensas Hidráulicas", type: "Manual", model: "PHV110 TFP" },
  { title: "Ficha Técnica Prensa MP10T", brand: "PRENSSO", category: "Prensas Hidráulicas", type: "Ficha Técnica", model: "MP10T" },
  { title: "Ficha Técnica Prensa MP6TS", brand: "PRENSSO", category: "Prensas Hidráulicas", type: "Ficha Técnica", model: "MP6TS" },
  { title: "Ficha Técnica Cortadora MC300", brand: "PRENSSO", category: "Cortadoras", type: "Ficha Técnica", model: "MC300" },
  { title: "Ficha Técnica Cortadora MC4000", brand: "PRENSSO", category: "Cortadoras", type: "Ficha Técnica", model: "MC4000" },
  { title: "Ficha Técnica Cortadora Neumática MC3002", brand: "PRENSSO", category: "Cortadoras", type: "Ficha Técnica", model: "MC3002" },
  { title: "Ficha Técnica Peladora MD3003", brand: "PRENSSO", category: "Peladoras", type: "Ficha Técnica", model: "MD3003" },
  { title: "Ficha Técnica Peladora Manual MMD1000", brand: "PRENSSO", category: "Peladoras", type: "Ficha Técnica", model: "MMD1000" },
  { title: "Manual Insertadora MMT200", brand: "PRENSSO", category: "Insertadoras", type: "Manual", model: "MMT200" },
  { title: "Ficha Técnica Termo Sellado PSC60", brand: "PRENSSO", category: "Maquinaria Auxiliar", type: "Ficha Técnica", model: "PSC60" },
  { title: "Ficha Técnica Aplicador Espiral MCE60", brand: "PRENSSO", category: "Maquinaria Auxiliar", type: "Ficha Técnica", model: "MCE60" },
  { title: "Ficha Técnica Banco Prueba BTM700", brand: "PRENSSO", category: "Maquinaria Auxiliar", type: "Ficha Técnica", model: "BTM700" },
  { title: "Ficha Técnica Banco MLLTS300", brand: "PRENSSO", category: "Maquinaria Auxiliar", type: "Ficha Técnica", model: "MLLTS300" },
  { title: "Certificación ISO 9001 Manuli", brand: "Manuli", category: "Mangueras Hidráulicas", type: "Certificación", model: "Manuli Hydraulics" },
  { title: "Ficha Técnica Manguera PVC Succión", brand: "Continental", category: "Mangueras PVC", type: "Ficha Técnica", model: "PVC Spiral" },
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
    image: "/images/industries/mineria.jpg",
    date: "2 May 2026",
    readTime: "7 min",
  },
  {
    slug: "normativas-sae-en-din-mangueras",
    title: "Normativas SAE, EN y DIN: qué exige cada estándar en mangueras",
    category: "Normativas",
    excerpt:
      "Guía comparativa de los estándares internacionales para selección y certificación.",
    image: "/images/industries/quimica.jpg",
    date: "20 Abr 2026",
    readTime: "9 min",
  },
  {
    slug: "almacenamiento-mangueras-industriales",
    title: "Cómo almacenar mangueras industriales correctamente",
    category: "Industrial",
    excerpt:
      "Evite degradación prematura con estas prácticas de almacenamiento y manipulación.",
    image: "/images/industries/manufactura.jpg",
    date: "8 Abr 2026",
    readTime: "6 min",
  },
]
