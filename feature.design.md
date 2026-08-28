# Design — [SPEC-NNN] [Nombre]

## Arquitectura

### Componentes afectados
| Componente | Repo | Archivo(s) | Cambio |
|-----------|------|------------|--------|
| [nombre] | [repo] | [ruta] | [crear/modificar/eliminar] |

### Diagrama de secuencia
```
Actor → Componente A → Componente B → BD
  ↓         ↓              ↓
[acción]  [lógica]     [query]     [resultado]
```

## Diseño técnico

### Endpoints (si aplica)
| Método | Ruta | Request | Response | Auth |
|--------|------|---------|----------|------|
| [GET/POST/PUT] | [ruta] | [body] | [response] | [JWT/público] |

### Modelos de datos (si aplica)
```
[Tabla/modelo]
- campo: tipo — descripción
```

### Lógica de negocio
[Descripción del flujo principal y edge cases]

## Manejo de errores
| Error | Causa | Respuesta al usuario |
|-------|-------|---------------------|
| [tipo] | [cuándo ocurre] | [mensaje/acción] |

## Estrategia de testing
- [ ] Unit tests: [qué cubren]
- [ ] Integration tests: [qué cubren]
- [ ] Smoke test manual: [pasos]

## Riesgos y mitigación
| Riesgo | Probabilidad | Mitigación |
|--------|-------------|------------|
| [descripción] | [alta/media/baja] | [acción] |

## Aprobación
- [ ] Felipe aprueba design → pasar a tasks.md
