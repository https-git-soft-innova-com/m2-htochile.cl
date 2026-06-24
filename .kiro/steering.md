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
| 5 | Sección Colaboradores - Nueva sección | ⏳ Pendiente | — |
| 6 | Modal Biblioteca Técnica - Formulario captura | ✅ Cerrado | PR #18 |
| 7 | Industrias - Agregar faltantes | ✅ Hecho en #1 | — |
| 8 | WhatsApp contextual | ⏳ Pendiente | — |
| 9 | Quiénes Somos - Estilo M3 | ✅ Cerrado | PR #20 |
| 10 | Marcas que representamos - Barra logos | ✅ Cerrado | PR #19 |
| 11 | Blog - Subsitio con EM-DASH (MCP) | ⏳ Pendiente | — |
| 12 | Imágenes Hero - Reemplazo | 🚫 Bloqueado (Caro) | — |
| 13 | Productos - Contenido real | 🚫 Bloqueado (Caro) | — |
| 14 | Fichas técnicas - Links OneDrive | 🚫 Bloqueado (Caro) | — |
| 15 | Colaboradores - Fotos y cargos reales | 🚫 Bloqueado (Caro) | — |

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
1. **#5** — Sección Colaboradores (placeholders foto+cargo)
2. **#8** — WhatsApp contextual (mensaje según página)
3. **#11** — Blog subsitio con EM-DASH (MCP)
4. **#12-#15** — Bloqueados por contenido de Caro
