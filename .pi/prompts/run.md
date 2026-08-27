---
description: "Ejecuta los tasks de un spec aprobado secuencialmente, delegando al agente correcto"
---

# /run {nombre} — Ejecutar spec aprobado

Lee `.pi/specs/features/{nombre}/tasks.md` o `.pi/specs/bugs/{nombre}/tasks.md`.

Para cada task con Status: TODO:
1. Identifica el agente asignado (@backend, @frontend o @fulldev).
2. Delega el task con contexto del design.md.
3. El agente ejecuta, actualiza Status a DONE, registra en HANDOFF.md.
4. Pasa al siguiente task.

Si un task falla o se bloquea → Status: BLOCKED, registra por qué, y
pregunta a Felipe cómo proceder antes de continuar.

Al completar todos los tasks → @reviewer revisa → @qa valida →
@arquitecto resume para Puerta 2.
