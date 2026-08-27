# Bugfix Analysis — [SPEC-NNN] [Nombre del Bug]

## Resumen
[Descripción del bug en 2-3 líneas]

## Contexto
- **Módulo:** [Reparto Mobile | CRM Call Center | Gestión]
- **Repos afectados:** [lista]
- **Reportado por:** [quién]
- **Severidad:** [crítico | alto | medio | bajo]
- **Usuarios impactados:** [quiénes]

## Reproducción
1. [Paso 1]
2. [Paso 2]
3. [Paso N]
4. **Resultado:** [qué pasa]

## Comportamiento actual (Defecto)
```
CURRENT BEHAVIOR:
WHEN [condición]
THEN the system [comportamiento incorrecto]
```

## Comportamiento esperado (Correcto)
```
EXPECTED BEHAVIOR:
WHEN [condición]
THEN the system SHALL [comportamiento correcto]
```

## Comportamiento sin cambio (Prevención de regresión)
```
UNCHANGED BEHAVIOR:
WHEN [condición]
THEN the system SHALL CONTINUE TO [comportamiento existente que NO debe romperse]
```

```
UNCHANGED BEHAVIOR:
WHEN [otra condición]
THEN the system SHALL CONTINUE TO [otro comportamiento que debe mantenerse]
```

## Hipótesis de causa raíz
[Dónde crees que está el problema — archivo, función, lógica]

## Restricciones del fix
- [Qué NO se puede modificar]
- [Qué funcionalidad adyacente debe verificarse]

## Aprobación
- [ ] Felipe confirma análisis → pasar a design.md
