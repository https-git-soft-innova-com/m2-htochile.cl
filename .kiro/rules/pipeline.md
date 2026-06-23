# Pipeline HTO Chile M2 — REGLA INAMOVIBLE

Este pipeline se ejecuta SIEMPRE para cada issue. Sin excepciones. Si no se puede cumplir algún paso, consultar antes de avanzar.

## Pasos obligatorios (en orden)

1. **Levantar entorno local** (Docker o pnpm dev) — el sitio debe estar corriendo
2. **Realizar cambios** en branch `feature/issue-N`
3. **QA local** — verificar build OK + revisar visualmente en localhost:3000
4. **Felipe aprueba** — presentar cambios, esperar aprobación explícita
5. **Commit** — solo tras aprobación
6. **PR** — crear PR hacia main
7. **Deploy** — merge + deploy automático Vercel
8. **Felipe aprueba en producción** — verificar en URL de producción
9. **Lighthouse QA** — agente QA ejecuta Lighthouse, debe ser >95%
10. **SEO técnico** — agente de marketing digital revisa SEO
11. **Felipe aprueba técnicamente** — según informe Lighthouse + SEO
12. **Documentar en steering** — registrar cambios, actualizar estado del issue
13. **Continuar con siguiente issue**

## Reglas adicionales
- NUNCA hacer commit sin aprobación de Felipe
- NUNCA hacer PR sin que el sitio esté probado en desarrollo
- NUNCA saltar pasos
- Si un paso no se puede ejecutar → preguntar qué hacer
