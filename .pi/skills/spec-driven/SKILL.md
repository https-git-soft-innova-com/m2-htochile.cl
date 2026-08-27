---
description: "Spec-driven development workflow: requirements → design → tasks for features and bugfixes. Inspired by Kiro specs, adapted for Pi multi-agent."
---

# Skill: spec-driven

Usa este skill para cualquier trabajo que no sea un one-liner. Antes de
escribir código, se documenta QUÉ, CÓMO y EN QUÉ ORDEN.

## Tipos de spec

### Feature Spec (.pi/specs/features/{nombre}/)
Para funcionalidad nueva. 3 archivos:

**requirements.md** — QUÉ construir
```markdown
# Feature: {nombre}
## User Stories
- Como {rol}, quiero {acción}, para {beneficio}
## Acceptance Criteria
- [ ] AC1: {criterio verificable}
- [ ] AC2: ...
## Out of Scope
- {qué NO se toca}
## Dependencies
- {features o sistemas que deben existir primero}
```

**design.md** — CÓMO construirlo
```markdown
# Design: {nombre}
## Architecture
{qué componentes se crean/modifican, cómo se conectan}
## Data Flow
{de dónde vienen los datos, cómo se transforman, a dónde van}
## Files to Create/Modify
| File | Action | Description |
|---|---|---|
| src/... | CREATE | ... |
| src/... | MODIFY | ... |
## Error Handling
{qué puede fallar y cómo se maneja}
## Testing Strategy
{qué tests se escriben, qué cubren}
```

**tasks.md** — EN QUÉ ORDEN (ejecutable)
```markdown
# Tasks: {nombre}
## Task 1: {título}
- **Agent:** @backend | @frontend | @fulldev
- **Files:** src/...
- **Do:** {instrucción concreta, ejecutable}
- **DoD:** {cómo se verifica que está hecho}
- **Status:** TODO | IN_PROGRESS | DONE | BLOCKED
## Task 2: ...
```

### Bugfix Spec (.pi/specs/bugs/{nombre}/)
Para bugs. 3 archivos:

**bugfix.md** — QUÉ está roto (reemplaza requirements.md)
```markdown
# Bug: {nombre}
## Current Behavior
{qué pasa hoy — pasos para reproducir}
## Expected Behavior
{qué debería pasar}
## Unchanged Behavior
{qué debe seguir funcionando exactamente igual — no romper}
## Root Cause (si se conoce)
{hipótesis o causa confirmada}
```

**design.md** — CÓMO arreglarlo (mismo formato que feature)

**tasks.md** — EN QUÉ ORDEN (mismo formato)

### Quick Spec (.pi/specs/quick/{nombre}.md)
Para cambios pequeños (< 1 hora). Un solo archivo:
```markdown
# Quick: {nombre}
## What
{qué hacer, en 2-3 líneas}
## Files
{archivos a tocar}
## DoD
- [ ] {criterio 1}
- [ ] {criterio 2}
## Status: TODO | DONE
```

## Flujo con agentes

1. Felipe describe la necesidad.
2. **@arquitecto** crea el spec (prompt /feature, /bug o /quick).
3. Felipe revisa y aprueba (**Puerta 1** = aprobar el spec, no solo los tasks).
4. @arquitecto delega tasks al ejecutor correspondiente.
5. El ejecutor actualiza **Status** en tasks.md al completar cada task.
6. @reviewer revisa el diff de cada task.
7. @qa valida el spec completo (todos los AC/DoD cumplidos).
8. @arquitecto resume para **Puerta 2** de Felipe.

## Reglas
- Un spec = una rama Git: `feature/{nombre}` o `fix/{nombre}`.
- Cada task es un commit atómico referenciando el spec.
- Si un task crece demasiado, @arquitecto lo parte en subtasks (nuevo spec si es necesario).
- Specs completados se mueven a `.pi/specs/done/` (archivo, no se borran).
- El spec es la fuente de verdad, no los comentarios en el PR.
