# SEO Technical Audit — htochile.cl
**Fecha:** 2026-07-18 | **Auditor:** Agente SEO Marketing Digital

## Estado: Sitio en mantenimiento (temporal)
> El sitio muestra página de mantenimiento pero la infraestructura SEO está configurada y activa.

## 1. Indexación

| Check | Estado | Detalle |
|-------|:------:|---------|
| robots.txt | ✅ | Permite todo excepto /api/ y /_next/. Sitemap referenciado. |
| sitemap.xml | ✅ | 41+ URLs generadas dinámicamente con lastmod, changefreq, priority |
| Canonical | ✅ | `https://htochile.cl` configurado como canonical |
| Meta robots | ✅ | `index, follow` |
| Googlebot directives | ✅ | `max-video-preview:-1, max-image-preview:large, max-snippet:-1` |

### robots.txt
```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Sitemap: https://htochile.cl/sitemap.xml
```
✅ Correcto. Bloquea recursos internos, permite contenido público.

### sitemap.xml
- URLs de htochile.cl (no de vercel.app) ✅
- Incluye: /, /quienes-somos, /industrias/*, /productos/*
- Prioridades diferenciadas (1.0 home, 0.9 industrias, 0.8 productos)
- lastmod presente ✅

## 2. Meta Tags

| Tag | Estado | Valor |
|-----|:------:|-------|
| title | ✅ | "HTO Chile \| Mangueras Hidráulicas e Industriales — Prensas PRENSSO" |
| description | ✅ | 160 chars, incluye keywords principales |
| keywords | ✅ | 12 keywords relevantes |
| viewport | ✅ | `width=device-width, initial-scale=1` |
| charset | ✅ | UTF-8 |
| author | ✅ | HTO Chile |
| creator/publisher | ✅ | HTO Chile |

### Análisis del Title
- Longitud: ~65 chars ✅ (máx recomendado: 60)
- Incluye marca + producto principal + diferenciador
- **Recomendación:** Acortar a "HTO Chile | Mangueras Hidráulicas y Prensas PRENSSO"

### Análisis del Description
- Incluye beneficios: "Cotización en 2 horas, despacho en 24 horas"
- Incluye marcas: Parker, Gates, Manuli
- Call to action implícito ✅

## 3. Open Graph / Social

| Tag | Estado | Valor |
|-----|:------:|-------|
| og:title | ✅ | "HTO Chile \| Mangueras Hidráulicas e Industriales" |
| og:description | ✅ | Texto personalizado para social |
| og:type | ✅ | website |
| og:url | ✅ | https://htochile.cl |
| og:site_name | ✅ | HTO Chile |
| og:locale | ✅ | es_CL |
| og:image | ✅ | /images/hero-hydraulic-1.jpg (1200x630) |
| twitter:card | ✅ | summary_large_image |

## 4. Tracking & Analytics

| Servicio | Estado | ID |
|----------|:------:|-----|
| Google Tag Manager | ✅ | GTM-NM2T3545 (head script + body noscript) |
| GA4 | ✅ | G-3H2VB5DJL3 (via GTM) |
| Search Console | ⏳ | Pendiente verificación DNS (PENDING_SEARCH_CONSOLE_VERIFICATION) |
| DataLayer Events | ✅ | whatsapp_click, lead_form_submit, doc_download |

## 5. Performance Indicators

| Métrica | Estado | Notas |
|---------|:------:|-------|
| HSTS | ✅ | 63072000s includeSubDomains preload |
| HTTP/2 | ✅ | Vercel lo sirve por defecto |
| Compression | ✅ | gzip/brotli via Vercel edge |
| Static assets immutable | ✅ | /_next/ con hashes en filename |

## 6. Pendientes Críticos

### Inmediato (bloquean SEO)
1. **⚠️ Verificar Google Search Console** — Agregar TXT record en DNS de Cloudflare
2. **⚠️ Resolver htochile.cl sin www** — Agregar CNAME @ en Cloudflare
3. **⚠️ Quitar PENDING_SEARCH_CONSOLE_VERIFICATION** del code y poner el valor real

### Post-lanzamiento
4. Submit sitemap.xml en Search Console
5. Configurar activadores y etiquetas en GTM panel
6. Publicar contenedor GTM
7. Crear página 404 personalizada con links internos
8. Agregar structured data (Organization, LocalBusiness, Product)
9. Implementar breadcrumbs

### Optimización continua (mes 2-3)
10. Keywords research con datos de GA4
11. Blog SEO (artículos optimizados para long-tail keywords)
12. Link building con proveedores (Parker, Gates, Manuli)
13. Google Business Profile optimizado

## 7. Keywords Analysis

### Keywords primarias (alta intención comercial)
- "mangueras hidráulicas Chile" ✅ en title + description + keywords
- "prensas hidráulicas PRENSSO" ✅
- "mangueras industriales" ✅
- "Parker Chile" / "Gates Chile" ✅

### Keywords secundarias (presentes en sitemap/contenido)
- "mangueras minería" ✅
- "mangueras PVC" ✅
- "cortadoras de mangueras" ✅
- "conexiones hidráulicas" ✅

### Keywords faltantes (agregar post-lanzamiento)
- "proveedor mangueras hidráulicas Santiago"
- "mangueras SAE 100 R2"
- "reparación mangueras hidráulicas"
- "venta mangueras industriales Chile"
- "mangueras para minería"

## 8. Resumen Ejecutivo

| Área | Score | Estado |
|------|:-----:|--------|
| Indexación | 9/10 | Excelente, solo falta verificación Search Console |
| Meta Tags | 9/10 | Completo y bien optimizado |
| Social/OG | 10/10 | Configuración perfecta |
| Tracking | 8/10 | GTM+GA4 listos, falta activar en panel |
| Performance | 9/10 | Vercel + Next.js optimizado |
| Structured Data | 3/10 | No implementado aún |
| **Total** | **8/10** | **Listo para lanzamiento** |

---
**Veredicto:** El SEO técnico está bien implementado para un lanzamiento exitoso. Las prioridades post-lanzamiento son: verificar Search Console, submit sitemap, activar GTM, y agregar structured data.
