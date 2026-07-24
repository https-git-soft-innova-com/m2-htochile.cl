# Steering — HTO Chile M2 (Refresh Web)

## Contexto
Refresh comercial de htochile.cl. Landing en Next.js 16 + Tailwind + shadcn/ui + Motion.
Deploy: Vercel. Repo: https-git-soft-innova-com/m2-htochile.cl
Base elegida: Maqueta #2 (htochile-m2.vercel.app)
Elementos a incorporar de M1 y M3 según reunión con Caro.

## Pipeline por issue
```
1. Crear branch feature/issue-N
2. Desarrollar local (Docker)
3. QA local (Lighthouse >95%, SEO técnico)
4. Felipe aprueba visualmente
5. Commit + PR → main
6. Deploy Vercel (automático)
7. Felipe aprueba en producción
8. Lighthouse + SEO audit final
9. Felipe aprueba técnicamente
10. Documentar en steering → siguiente issue
```

## Issues y estado

| # | Título | Estado | Branch |
|---|--------|--------|--------|
| 1 | Actualizar site-data.ts con datos reales | ✅ Cerrado | PR #16 |
| 2 | Hero - Agregar barra de certificaciones | ✅ Cerrado | PR #17 |
| 3 | Hero - Cambiar textos slider | ✅ Hecho en #1 | — |
| 4 | Productos destacados - Reestructurar categorías | ✅ Hecho en #1 | — |
| 5 | Sección Colaboradores - Nueva sección | ✅ Cerrado | — |
| 6 | Modal Biblioteca Técnica - Formulario captura | ✅ Cerrado | PR #18 |
| 7 | Industrias - Agregar faltantes | ✅ Hecho en #1 | — |
| 8 | WhatsApp contextual | ✅ Cerrado | — |
| 9 | Quiénes Somos - Estilo M3 | ✅ Cerrado | PR #20 |
| 10 | Marcas que representamos - Barra logos | ✅ Cerrado | PR #19 |
| 11 | Blog - Subsitio con EM-DASH (MCP) | ⏳ Pendiente | — |
| 12 | Imágenes Hero - Reemplazo | 🚫 Bloqueado (Caro) | — |
| 13 | Productos - Contenido real | ✅ Cerrado | — |
| 14 | Fichas técnicas - Links OneDrive | ✅ Cerrado | — |
| 15 | Colaboradores - Fotos y cargos reales | ✅ Cerrado | — |

## Datos reales HTO Chile (fuente: htochile.cl actual + M1 + M3)

### Contacto
- WhatsApp: +56 9 4207 3252
- Ventas: +56 9 7724 1488
- Email: contacto@htochile.cl
- Oficina: Nueva Providencia 2134, Of. 1001, RM
- Logística: Vista Hermosa 9999, Cerrillos, RM
- Horario: Lun–Vie 09:00–18:00

### Industrias (de reunión + M1 + M3)
- Minería
- Construcción
- Forestal
- Agroindustria
- Alimentos y Bebidas
- Química
- Oil & Gas
- Energía
- Acuicultura

### Productos destacados (orden reunión)
1. Mangueras Hidráulicas (alta, media, extrema presión)
2. Mangueras Industriales (PVC + caucho)
3. Prensas y Maquinaria PRENSSO
4. Conexiones y Acoples

### Marcas (de web actual + M1)
Parker, Gates, Manuli, Semperit, Eaton, Continental, Alfagomma, Transfer Oil, Ryco, Hansa-Flex

### Certificaciones
ISO 9001, DNV, RINA, Lloyd's Register, Bureau Veritas, MSHA, SICEP

### Identidad
- Slogan: "Calidad Total Siempre"
- Misión: Entregar soluciones industriales de alto estándar con tecnología de vanguardia y soporte técnico permanente.
- Visión: Ser la marca líder en tecnología aplicada a conexiones industriales en Chile.
- Origen: Evolución profesional de la marca Hose Total — Hose Total Operaciones.

---

## Registro de cambios

### Issue #1 — Actualizar site-data.ts
- Fecha inicio: 2026-06-23
- Fecha cierre: 2026-06-23
- Commit: f770ef5
- PR: #16 (mergeado)
- Aprobado por: Felipe

### Issue #2 — Hero - Agregar barra de certificaciones
- Fecha inicio: 2026-06-23
- Fecha cierre: 2026-06-23
- Commit: 1983513
- PR: #17 (mergeado)
- Aprobado por: Felipe
- Detalle: 3 cards glass (ISO 9001, DNV·RINA·Lloyd's, Presencia en Todo Chile)

### Issue #6 — Modal Biblioteca Técnica
- Fecha inicio: 2026-06-23
- Fecha cierre: 2026-06-23
- PR: #18 (mergeado)
- Aprobado por: Felipe
- Detalle: Modal persiana, formulario Nombre/Empresa/Email/Celular, checkbox Ley 21.719

### Issue #10 — Marcas que representamos
- Fecha inicio: 2026-06-23
- Fecha cierre: 2026-06-23
- PR: #19 (mergeado)
- Aprobado por: Felipe
- Detalle: Barra marquee scroll infinito entre Hero y Benefits

### Issue #9 — Quiénes Somos estilo M3
- Fecha inicio: 2026-06-23
- Fecha cierre: 2026-06-23
- PR: #20 (mergeado)
- Aprobado por: Felipe
- Detalle: 4 cards Misión/Visión/Origen/Slogan, contenido real HTO

---

## Pendientes para mañana
1. **#11** — Blog subsitio con EM-DASH (MCP)
2. **#12-#15** — Bloqueados por contenido de Caro

---

## Infraestructura desplegada

### Droplet DigitalOcean (161.35.5.30)
- Ubuntu 24.04 hardened (SSH key only, UFW 22/80/443, Fail2Ban)
- Node.js 22 + Nginx reverse proxy (rate limit 30r/s)
- API Docs: `/api/docs`, `/api/docs/filters`, `/api/docs/download`, `/api/leads`
- SQLite: tablas `documentos` (60 PDFs indexados) + `leads` (captura formulario)
- Cron cada 2h: indexa bucket DO Spaces → SQLite
- Systemd service: auto-restart, enabled on boot
- Dominio pendiente: `api.docs.htochile.cl` (esperando Cloudflare/NIC.cl)

### DigitalOcean Spaces
- Bucket: `docs-hto-chile` (sfo3)
- 60 PDFs PRENSSO subidos y organizados por carpetas
- Acceso privado — descargas via proxy del Droplet

### EmailJS
- Service: `service_6dqm8o9`
- Template biblioteca: `template_57cl8wb`
- Template contacto: `template_cq8aj7j`
- Destinatario dev: felipe.ahumada@soft-innova.com
- Destinatario prod: patricio.ahumada@htochile.cl

---

## Registro de cambios (continuación)

### Sesión 2026-06-24 — Certificaciones + Quiénes Somos
- Logos reales certificaciones (9 logos desde htochile.cl)
- Eliminar sección Valores de Quiénes Somos (alinear con M3)
- Deploy a Vercel (primer deploy manual con CLI)

### Sesión 2026-06-30 — Colaboradores
- Sección Colaboradores con efecto grayscale → color al hover
- 5 colaboradores con fotos reales + LinkedIn
- Ubicada entre Productos y Biblioteca Técnica

### Sesión 2026-07-09/10 — Droplet + API Docs
- Hardening completo del Droplet
- API Node.js + SQLite + Cron Spaces
- 60 PDFs subidos al bucket e indexados
- Smoke tests 7/7 PASS
- OWASP security tests 6/6 PASS

### Sesión 2026-07-12 — Biblioteca funcional
- Buscador sin dropdowns (solo texto libre)
- Paginador 10 por página
- Formulario siempre aparece (captura leads)
- Leads en BD + email via EmailJS
- Descarga via proxy (sin bucket público)

### Sesión 2026-07-15 — Productos PRENSSO reales + Imágenes Industrias
- Issue #13 cerrado: Contenido real de productos integrado
- 12 industrias con imágenes reales de HTO Chile (PNG → JPG optimizado 80-164KB)
- 22 productos en site-data.ts:
  - 4 productos mangueras/conexiones (existentes)
  - 6 prensas hidráulicas PRENSSO (PHV65TFP, PM30, MM40, MP10T, MP6TS, PHV110TFP)
  - 3 cortadoras (MC300, MC3002 neumática, MC4000)
  - 2 peladoras (MD3003, MMD1000 manual)
  - 1 insertadora (MMT200)
  - 6 maquinaria auxiliar (PSC60, PDC80, MCE60, PDV1000-D, MLLTS300, BTM700)
- 21 fichas técnicas en techDocs
- Imágenes de productos optimizadas a 600px/80% quality (20-52KB)
- Nuevas industrias agregadas: Automotriz, Naval, Transporte, Manufactura
- Build Next.js exitoso
- Pendientes para cerrar v1: #8 WhatsApp contextual, #11 Blog EM-DASH, #12 Hero (confirmar), SEO técnico

### Sesión 2026-07-16 — Cierre #8 + RRSS Footer
- Issue #8 cerrado: WhatsApp contextual ya funcionaba correctamente
- Footer actualizado: eliminados X (Twitter) y YouTube
- RRSS reales integradas con URLs:
  - Instagram: https://www.instagram.com/hto.chile/
  - LinkedIn: https://www.linkedin.com/company/hto-chile/
- Links abren en nueva pestaña (target="_blank")
- Build exitoso
- Pendientes: #11 Blog EM-DASH, #12 Hero (por confirmar), sitemap+robots+GA4+GTM (esperando IDs)

### Sesión 2026-07-16 (cont.) — GTM + GA4 + SEO técnico
- Google Tag Manager GTM-NM2T3545 integrado (head script + body noscript)
- Google Analytics 4: G-3H2VB5DJL3 (se activa via GTM)
- Metadata SEO corregida: título, description, keywords relevantes a mangueras/PRENSSO
- Open Graph + Twitter Card configurados
- canonical URL: https://htochile.cl
- sitemap.xml dinámico: 41 URLs (7 estáticas + 12 industrias + 22 productos)
- robots.txt: permite todo, bloquea /api/ y /_next/
- Build exitoso con rutas /sitemap.xml y /robots.txt generadas
- Pendiente: verificación Search Console (requiere DNS htochile.cl activo)
- Pendiente: configurar activadores y etiquetas en GTM (GA4 pageview + eventos)
- Pendiente NIC.cl: traspaso DNS en curso (~5 días hábiles desde semana pasada)

### Sesión 2026-07-16 (cont. 2) — DataLayer eventos GTM
- Eventos dataLayer implementados en el código:
  1. `whatsapp_click` — sección + página de origen
  2. `lead_form_submit` — empresa + documento solicitado
  3. `doc_download` — key del documento descargado
- Build exitoso
- GTM configuración pendiente: crear activadores + etiquetas en panel de Google

### Cierre de sesión 2026-07-16 — STOP hasta dominio
- PR #21 creado: feature/productos-industrias-seo → main
- Commit: b7f3e32 (38 archivos, +644/-74)
- **EN PAUSA hasta tener dominio htochile.cl (NIC.cl traspaso en curso)**

## Pendientes bloqueados por dominio NIC.cl — ✅ RESUELTOS (2026-07-17)

Dominio htochile.cl traspasado a Cloudflare. NS cambiados en NIC.cl.

---

## Sesión 2026-07-17/18 — Migración completa htochile.cl

### Resumen ejecutivo
- PR #21 mergeado → main (38 archivos, +670 líneas)
- Dominio htochile.cl en Cloudflare (NS cambiados en NIC.cl)
- Página "Sitio en mantenimiento" desplegada en Vercel
- Blog EM-DASH creado y desplegado en Cloudflare Workers
- 6 artículos migrados del blog anterior
- SSL configurado en Droplet para api.docs.htochile.cl
- QA Report generado (Score 7.5/10)
- SEO Audit generado (Score 8/10)
- Guía de migración WordPress → EM-DASH creada

### DNS Cloudflare configurado

| Type | Name | Target | Proxy |
|------|------|--------|-------|
| CNAME | @ | cname.vercel-dns.com | DNS only |
| CNAME | www | cname.vercel-dns.com | DNS only |
| A | api.docs | 161.35.5.30 | Proxied |
| MX | @ | htochile-cl.mail.protection.outlook.com | DNS only |
| TXT | @ | v=spf1 include:spf.protection.outlook.com -all | DNS only |
| TXT | default._domainkey | DKIM key | DNS only |
| TXT | _dmarc | v=DMARC1; p=none; | DNS only |

### Blog EM-DASH (Cloudflare Workers)

- **URL Worker:** https://htochile-blog.htochile.workers.dev
- **Custom domain pendiente:** blog.htochile.cl (eliminar CNAME viejo primero)
- **Cuenta CF:** htochilecl@gmail.com (d1361f54a94074823119c3eccfbb0f17)
- **D1 Database:** htochile-blog-db (ID: b6c7c96a-b922-4b27-98c1-d16cb628a83b)
- **KV Session:** 0bdae78de8814a93bef9a6d78bac467a
- **Workers subdomain:** htochile.workers.dev
- **API Token:** [almacenado en .env local — no commitear]
- **R2 Access Key ID:** [almacenado en .env local — no commitear]
- **R2 Access Key Secret:** [almacenado en .env local — no commitear]
- **S3 Endpoint:** https://d1361f54a94074823119c3eccfbb0f17.r2.cloudflarestorage.com
- **Proyecto local:** /Volumes/ICOV/Proyectos/htochile-blog
- **6 posts published:**
  1. como-seleccionar-manguera-hidraulica (Hidráulica)
  2. pvc-vs-caucho-manguera-industrial (Industrial)
  3. reduccion-fallas-flota-minera (Casos de Éxito)
  4. prensado-correcto-mangueras (Maquinaria)
  5. normativas-sae-en-din-mangueras (Normativas)
  6. almacenamiento-mangueras-industriales (Industrial)
- **Estado:** ✅ Funcional con branding HTO Chile

### SSL Droplet (api.docs.htochile.cl)

- Certificado self-signed generado: /etc/ssl/certs/cloudflare-origin.pem
- Nginx escucha en 443 + redirige 80→443
- Puerto 443 abierto en UFW
- TLS 1.3 + AES-256-GCM
- HSTS configurado (31536000s includeSubDomains)
- **Pendiente:** Cambiar SSL mode a "Full" en Cloudflare para que el proxy funcione

### Página mantenimiento (temporal)

- Layout sin header/footer/WhatsApp
- Imagen: hero-mining-hoses.jpg (mangueras hidráulicas en faena)
- Logo naranja HTO
- 100% viewport responsive
- Contacto: Patricio Ahumada, patricio.ahumada@htochile.cl, +56 9 7724 1488
- Respaldo landing completa: app/page.full.tsx

### Informes generados

- **QA Report:** /Volumes/ICOV/Proyectos/htochile-m2/QA-REPORT.md (Score 7.5/10)
- **SEO Audit:** /Volumes/ICOV/Proyectos/htochile-m2/SEO-AUDIT.md (Score 8/10)
- **Guía Migración:** /Volumes/ICOV/Proyectos/htochile-blog/MIGRATION-GUIDE.md

### QA — Issues encontrados

| Severidad | Issue | Acción |
|-----------|-------|--------|
| Media | Security headers faltantes en Vercel | Agregar en next.config.js |
| Media | Nginx version expuesta | `server_tokens off;` |
| Baja | No CSP en ningún servicio | Configurar post-lanzamiento |

### SEO — Pendientes post-lanzamiento

1. Verificar Google Search Console (agregar TXT record)
2. Submit sitemap.xml
3. Activar GTM (crear activadores + etiquetas en panel)
4. Agregar structured data (Organization, LocalBusiness, Product)
5. Keywords research con GA4 data (mes 2)

---

## Pendientes para próxima sesión

| Tarea | Prioridad | Bloqueado por |
|-------|-----------|---------------|
| Cambiar SSL mode a Full en Cloudflare | Alta | Felipe (panel CF) |
| Agregar CNAME @ en Cloudflare (si no está) | Alta | Felipe (panel CF) |
| Agregar dominio htochile.cl en panel Vercel | Alta | Felipe (panel Vercel) |
| Fix blog frontend (body vacío) | Alta | Debugging páginas Astro |
| Agregar security headers en next.config.js | Media | — |
| Ocultar nginx version | Media | — |
| Configurar blog.htochile.cl en DNS | Media | Felipe: agregar CNAME blog → htochile-blog.fahumada-d15.workers.dev (Proxied) |
| Restaurar landing completa (page.full.tsx → page.tsx) | Alta | Cuando se decida lanzar |
| Verificar Search Console | Media | DNS activo + dominio verificado |
| Configurar GTM activadores | Media | Sitio en producción |
| Hero imágenes (#12) | Baja | Fotos de Caro |
| Structured data | Baja | Post-lanzamiento |

### Sesión 2026-07-18 (continuación) — Blog funcional + Security + DNS

- Blog EM-DASH: branding HTO Chile aplicado (logo, header, footer, GTM, links)
- Blog funciona en: https://htochile-blog.fahumada-d15.workers.dev
- Custom domain configurado: blog.htochile.cl (requiere CNAME en Cloudflare)
- Security headers agregados en Next.js (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- Nginx: server_tokens off (ya no expone versión)
- Commit: e45dc9c (security headers)

### 🚀 LANZAMIENTO — 2026-07-18 19:45 CLT

- **Commit:** e98297e — Landing completa restaurada
- **URL activa:** https://www.htochile.cl ✅
- **Deploy:** Vercel producción
- **Contenido:** Landing completa con Hero, Marcas, Benefits, Industrias, Productos, Equipo, Biblioteca, Blog, CTA, Footer
- **Funcional:** WhatsApp contextual, GTM, GA4 (via GTM), sitemap.xml, robots.txt

### Pendiente de Felipe en Cloudflare

1. ~~SSL/TLS → Full~~ ✅ Hecho
2. **DNS → CNAME `@` → `cname.vercel-dns.com` (DNS only)** — para que htochile.cl sin www funcione
3. ~~Blog: Verificar cuenta CF~~ ✅ Resuelto - cuenta htochilecl@gmail.com
4. **api.docs:** Certificado SSL edge pendiente de emisión por Cloudflare (puede tomar hasta 24h)
5. **R2:** Aceptar TOS en https://dash.cloudflare.com/d1361f54a94074823119c3eccfbb0f17/r2

### Sesión 2026-07-19 (noche) — Fixes urgentes + Productos

- **Biblioteca Técnica arreglada** — Mixed content HTTP→HTTPS (commit bae1a8b)
- **Annie-AI eliminada** del blog completamente (CTA + structured data)
- **Link Inicio blog** → www.htochile.cl
- **Header/Footer blog** — ahora coherente con landing (mismo nav, 4 columnas footer)
- **Imágenes + autor cards blog** — hero-mining-hoses.jpg fallback + "HTO Chile" default
- **Catálogo productos** — `/productos` con buscador + filtro categoría (commit ec05c13)
- **Página individual producto** — `/productos/[slug]` con imagen, specs, formulario ficha técnica, WhatsApp cotización
- **ProductCard** — ahora linkea a la página individual del producto
- **CTA blog verificado** — "Hablar con Especialista" + "Ver Fichas Técnicas"
- **Links menú corregidos** — anchors `/#industrias`, `/#productos`, `/#contacto` + IDs en secciones
- **Blog artículos en home** — 3 artículos reales (PRENSSO, Forceline, Minería)

### Sesión 2026-07-22/23 — Hero real + Marcas + Productos nuevos

- **Hero:** 4 fotos reales HTO Chile (convertidas JPG 80%, bg-cover bg-center)
- **Marcas:** Carrusel comentado, solo logos PRENSSO + Letone estáticos (grayscale → color hover, mixBlendMode multiply)
- **Productos destacados:** Imágenes reales (Manguera R2, R15, PVC, Conexión JIC, Prensa PHV65)
- **8 nuevos productos Letone** agregados al catálogo:
  - PVC Agua/Aire Negra 300 PSI
  - PVC Aire/Agua Amarilla 300 PSI
  - Cristal Reforzada Atóxica
  - Cristal Reforzada
  - PVC Amarilla Succión y Descarga Liviana
  - PVC Verde Succión y Descarga Reforzada
  - PVC Naranja Succión y Descarga Pesada
  - Manguera Vapor Frigorífico
- **10 fichas técnicas PDF** subidas al Droplet en `/root/docs-storage/MANGUERAS PVC LETONE/`
- Commit: bf2408b

### Sesión 2026-07-24 — Cierre proyecto (en progreso)

- **Imágenes blog:** extractFirstImage utility creada. Cada artículo muestra su imagen real correspondiente.
- Deploy blog exitoso.

### Pendientes para cerrar proyecto

| Tarea | Detalle |
|-------|---------|
| GTM activadores | Pixel Facebook + LinkedIn conversions |
| GA4 | Publicar contenedor GTM |
| Search Console | Verificar DNS TXT + submit sitemap |
| AEO | Structured data (Organization, Product, Article) |
| htochile.cl sin www | CNAME @ en Cloudflare |
| api.docs.htochile.cl | SSL edge certificado (esperar o re-emitir) |
| R2 | Aceptar TOS en dashboard CF |

### Artículos del blog (contenido real de HTO Chile)

| # | Slug | Título | Fecha original |
|---|------|--------|----------------|
| 1 | despacho-tecnico-perforacion | Despacho técnico para perforación industrial | 2026-02-12 |
| 2 | maquinaria-prensso | Refuerza capacidad técnica con maquinaria PRENSSO | 2026-02-12 |
| 3 | alianza-inaflex | Relación estratégica con Inaflex | 2026-02-12 |
| 4 | armado-hidraulico-mmt200 | Línea de armado hidráulico con MMT200 | 2026-02-12 |
| 5 | gestion-manguera-pvc-internacional | Gestión internacional manguera PVC | 2026-02-19 |
| 6 | mangueras-gran-diametro-mineria | Logística mangueras gran diámetro minería | 2026-02-26 |
| 7 | visita-forceline-brasil | Visita Forceline en Brasil | 2026-03-13 |
| 8 | almacenamiento-mangueras | Almacenamiento correcto de mangueras | 2026-03-24 |
| 9 | hto-chile-recorre-el-pais | Recorre el país con Prensso Maquinarias | 2026-03-27 |
