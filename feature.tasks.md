# Tasks — [SPEC-NNN] [Nombre]

## Resumen de ejecución
- **Total tareas:** N
- **Completadas:** 0/N
- **Estado:** pendiente | en_progreso | completado | bloqueado

## Tareas

### T-1: [Nombre descriptivo]
- **Repo:** [nombre]
- **Archivos:** [rutas específicas]
- **Agente:** [@backend | @frontend | @fulldev]
- **Descripción:** [qué hacer exactamente]
- **Validación:** [cómo verificar que está hecho]
- **Estado:** [ ] pendiente
- **Commit:** —

### T-2: [Nombre descriptivo]
- **Repo:** [nombre]
- **Archivos:** [rutas específicas]
- **Agente:** [@backend | @frontend | @fulldev]
- **Descripción:** [qué hacer exactamente]
- **Dependencia:** T-1
- **Validación:** [cómo verificar]
- **Estado:** [ ] pendiente
- **Commit:** —

### T-3: [Nombre descriptivo]
- **Repo:** [nombre]
- **Archivos:** [rutas específicas]
- **Agente:** [@backend | @frontend | @fulldev]
- **Descripción:** [qué hacer exactamente]
- **Dependencia:** T-1, T-2
- **Validación:** [cómo verificar]
- **Estado:** [ ] pendiente
- **Commit:** —

## Ejecución paralela (waves)
```
Wave 1: T-1 (sin dependencias)
Wave 2: T-2 (depende de T-1)
Wave 3: T-3 (depende de T-1, T-2)
```

## Post-ejecución
- [ ] Todos los tests pasan
- [ ] git status limpio
- [ ] TASKLOG.md actualizado
- [ ] Spec movida a .pi-shared/specs/done/
