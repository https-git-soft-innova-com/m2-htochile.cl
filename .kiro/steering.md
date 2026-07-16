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
