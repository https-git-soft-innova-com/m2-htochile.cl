---
description: "Crea un bugfix spec: bugfix.md + design.md + tasks.md para corregir un bug"
---

# /bug — Crear spec de bugfix

@arquitecto activa el skill `spec-driven` y crea un bugfix spec.

## Instrucciones
1. Documenta el bug en `bugfix.md`:
   - **Current Behavior**: qué pasa hoy (pasos para reproducir)
   - **Expected Behavior**: qué debería pasar
   - **Unchanged Behavior**: qué debe seguir funcionando (no romper)
2. Investiga la causa raíz (skill `systematic-debugging`).
3. Escribe `design.md` con el approach de fix.
4. Escribe `tasks.md` con tasks y DoD.
5. Presenta a Felipe para **Puerta 1**.

Para bugs urgentes en producción, Felipe usa [HOTFIX-PROD] y el flujo
se acorta: bugfix.md mínimo → @fulldev corrige → @reviewer → smoke → merge.
