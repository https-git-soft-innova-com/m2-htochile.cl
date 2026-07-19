# QA Report — HTO Chile Infrastructure
**Fecha:** 2026-07-18 | **Auditor:** Agente QA automatizado

## 1. Disponibilidad

| Endpoint | Status | Tiempo | Resultado |
|----------|--------|--------|-----------|
| htochile-m2.vercel.app (Web) | ✅ 200 | <500ms | HTML válido |
| 161.35.5.30/health (API) | ✅ 200 | <200ms | JSON `{"status":"ok","docs":60}` |
| 161.35.5.30/api/docs (Docs) | ✅ 200 | <300ms | JSON array, 4+ docs |
| htochile-blog.workers.dev | ✅ 200 | <800ms | HTML (body vacío - requiere fix frontend) |

## 2. Security Headers

| Header | Vercel (Web) | Droplet (API) | Blog (CF Workers) |
|--------|:---:|:---:|:---:|
| X-Frame-Options | ❌ | ✅ DENY | ✅ SAMEORIGIN |
| X-Content-Type-Options | ❌ | ✅ nosniff | ✅ nosniff |
| Strict-Transport-Security | ✅ 63072000s | ✅ 31536000s | ❌ |
| Referrer-Policy | ❌ | ✅ strict-origin-when-cross-origin | ✅ strict-origin-when-cross-origin |
| X-XSS-Protection | ❌ | ✅ 1; mode=block | ❌ |
| Permissions-Policy | ❌ | ❌ | ✅ camera=(), microphone=(), geolocation=(), payment=() |
| CSP | ❌ | ❌ | ❌ |

### Observaciones Security Headers
- **Vercel** solo tiene HSTS (provisto por la plataforma). Los demás headers deben agregarse en `next.config.js` o middleware.
- **Droplet** tiene la mejor configuración de security headers.
- **Blog** (Cloudflare Workers) tiene buena configuración base vía EM-DASH.
- **Ningún servicio** tiene Content-Security-Policy configurado.

## 3. Rate Limiting

| Endpoint | Configurado | Test (5 requests rápidos) |
|----------|:-----------:|:-------------------------:|
| API Droplet | ✅ 30r/s burst=50 | ✅ 5/5 = 200 (dentro de límite) |
| Vercel | ✅ (plataforma) | N/A |
| Blog Workers | ✅ (Cloudflare) | N/A |

## 4. SSL/TLS

| Servicio | Protocolo | Cipher | Certificado |
|----------|-----------|--------|-------------|
| Vercel | TLS 1.3 | ✅ AES-256-GCM | ✅ Let's Encrypt (automático) |
| Droplet | TLS 1.3 | ✅ TLS_AES_256_GCM_SHA384 | ⚠️ Self-signed (válido con CF Full mode) |
| Blog | TLS 1.3 | ✅ (Cloudflare) | ✅ Cloudflare Edge |

## 5. OWASP Top 10 — Verificaciones Básicas

| Check | Estado | Notas |
|-------|:------:|-------|
| A01: Broken Access Control | ✅ | API /admin no expuesta, autenticación requerida en EM-DASH |
| A02: Cryptographic Failures | ✅ | TLS 1.3 en todos los servicios |
| A03: Injection | ✅ | API usa queries parametrizadas (SQLite) |
| A04: Insecure Design | ✅ | Rate limiting, CORS controlado |
| A05: Security Misconfiguration | ⚠️ | Nginx expone versión (`nginx/1.24.0`), Vercel expone `server: Vercel` |
| A06: Vulnerable Components | ⚠️ | Verificar dependencias con `npm audit` |
| A07: Auth Failures | ✅ | EM-DASH requiere auth, API no tiene auth sensible expuesta |
| A08: Data Integrity | ✅ | Subresource integrity via Next.js build hashes |
| A09: Logging & Monitoring | ⚠️ | GTM/GA4 configurados, falta monitoreo de errores (Sentry) |
| A10: SSRF | ✅ | No hay endpoints que acepten URLs como input |

## 6. Información Expuesta

| Item | Estado | Acción |
|------|:------:|--------|
| Nginx version header | ⚠️ Expuesto | Agregar `server_tokens off;` en nginx.conf |
| Vercel server header | ℹ️ Informativo | No es un riesgo real |
| Stack trace en errores | ✅ No expuesto | Verificado |
| .env / secrets | ✅ No expuesto | Verificado |

## 7. Resumen y Recomendaciones

### Crítico (hacer ahora)
1. **Agregar security headers en Vercel/Next.js** — X-Frame-Options, X-Content-Type-Options, Referrer-Policy via `next.config.js` headers
2. **Ocultar versión de Nginx** — `server_tokens off;` en `/etc/nginx/nginx.conf`

### Importante (hacer pronto)
3. Agregar Content-Security-Policy básico en todos los servicios
4. Ejecutar `npm audit` en ambos proyectos
5. Configurar monitoreo de errores (Sentry o similar)

### Mejoras (nice-to-have)
6. Implementar CORS explícito en API Droplet
7. Agregar `Permissions-Policy` en Vercel
8. Configurar HSTS en Blog Workers

---
**Score general: 7.5/10** — Infraestructura bien configurada, security headers incompletos en Vercel.
