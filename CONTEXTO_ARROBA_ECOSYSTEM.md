# Prompt de Contexto — Arroba Ecosystem (Solución completa)
# Pegar al inicio de una nueva conversación en Claude.ai para configurar Pi

---

## Quién soy
Felipe Ahumada Araya, CTO de Soft-Tech Innovación SpA. Ingeniero informático.

## Mi herramienta de desarrollo
Pi (pi.dev) como harness principal, configurado con 4 proveedores:
- Anthropic (Claude Sonnet) → conversación + @arquitecto
- Moonshot (Kimi K3) → @backend, @frontend, @fulldev
- OpenAI (GPT-4o) → @reviewer
- DeepSeek → @qa

Auth configurado en ~/.pi/agent/auth.json. 12 skills instalados en .agents/skills/.

---

## Proyecto: Arroba Ecosystem
**Cliente:** Arroba (Red Arroba)
**Tipo:** Solución completa de ventas, CRM y gestión para empresa de telecomunicaciones
**Estado:** EN PRODUCCIÓN — los 7 repos están en producción activa
**Base local:** /Volumes/ICOV/Proyectos/arroba-ecosystem/

### Qué hace cada módulo

**Reparto Móvil** — App de terreno para vendedores:
- Venta de chips móviles
- Creación de PDV (almacenes, botillerías, tiendas)
- Captación de leads en terreno
- Venta de fibra en terreno

**CRM Call Center** — Backoffice para operadores:
- Reciben las captaciones de leads de Reparto
- Concretan ventas de fibra
- Gestión de llamadas y seguimiento

**Gestión** — Administración central:
- Visualiza datos de Reparto Móvil y Call Center
- Gestiona PDV, rutas, bodega
- Integración de cambios en bodega
- Creación de usuarios con datos del banco
- Crons de procesos automáticos

---

## Los 7 repos

### Módulo 1: Reparto Móvil (2 repos)

| Repo | Ruta | Stack |
|---|---|---|
| **Móvil App** | /Volumes/ICOV/Proyectos/arroba-ecosystem/reparto.mobile.redarroba.cl | React Native |
| **Móvil API** | /Volumes/ICOV/Proyectos/arroba-ecosystem/api.redarroba.cl | Hono + Prisma + PostgreSQL |

### Módulo 2: CRM Call Center (2 repos)

| Repo | Ruta | Stack |
|---|---|---|
| **CRM Back** | /Volumes/ICOV/Proyectos/arroba-ecosystem/back.callcenter | Strapi + PostgreSQL |
| **CRM Front** | /Volumes/ICOV/Proyectos/arroba-ecosystem/front.callcenter | React + Next.js |

### Módulo 3: Gestión (3 repos)

| Repo | Ruta | Stack |
|---|---|---|
| **Gestión API** | /Volumes/ICOV/Proyectos/arroba-ecosystem/redarroba.cl/back-web-reparto_v2.0 | Python + FastAPI + PostgreSQL |
| **Gestión Front** | /Volumes/ICOV/Proyectos/arroba-ecosystem/redarroba.cl/ (front, ruta exacta verificar) | React + Next.js |
| **Gestión Crons** | /Volumes/ICOV/Proyectos/arroba-ecosystem/redarroba.cl/crons-reparto | Python |

### Documentación existente
**Ruta:** /Volumes/ICOV/Proyectos/arroba-ecosystem/redarroba.cl/docs-reparto-web_v2.0
No hay steering de Kiro. Los docs existentes cubren los 3 módulos.

---

## Stack consolidado

| Tecnología | Dónde se usa |
|---|---|
| React Native | Reparto Móvil app |
| Hono + Prisma | Reparto Móvil API |
| Strapi | CRM Call Center back |
| Python + FastAPI | Gestión API |
| Python | Gestión Crons |
| React + Next.js | CRM Front + Gestión Front |
| PostgreSQL | Todas las APIs |

**IMPORTANTE:** stack mixto — Hono/TypeScript + Python/FastAPI + Strapi + React Native.
Los agentes deben manejar los 4 stacks según el repo que toquen.

---

## NECESIDAD CRÍTICA: Modo desarrollo vs producción

Este sistema está EN PRODUCCIÓN con usuarios reales (vendedores en terreno,
operadores de call center, gestores). Los cambios rápidos y hotfixes son
frecuentes y urgentes. Se necesitan dos modos de operación claros:

**Modo /dev (desarrollo planificado)**
- @backend y @frontend separados
- Flujo completo: issue → aprobación → código → review → QA → aprobación → merge
- Para features nuevas, refactors, integraciones

**Modo /prod (producción / hotfixes)**
- @fulldev consolidado
- Flujo corto: Felipe pide [HOTFIX-PROD] → @fulldev corrige → @reviewer rápido → smoke test → merge
- Para bugs en producción, cambios urgentes del cliente
- CRÍTICO: no romper nada que esté funcionando

---

## TAREA: Configurar Pi para los 7 repos

### Decisión arquitectónica previa
Antes de crear archivos, decidir con Claude:

**Opción A — Un .pi/ por repo (7 configuraciones independientes)**
Cada repo tiene su AGENTS.md, agentes y steering propios. Más aislado pero
más duplicación.

**Opción B — Configuración compartida + override por repo**
Un repo de configuración base (o carpeta en arroba-ecosystem/) con steering,
agentes y principios comunes, y cada repo solo tiene un AGENTS.md liviano que
referencia la base y agrega lo específico de su stack.

Recomendación: Opción B — los principios, flujo de trabajo y reglas son los
mismos para los 7 repos. Solo cambia el stack y los skills relevantes.

### Paso 1 — Inventario de los 7 repos (30 min)
Ejecutar en cada repo y pegar la salida:

```bash
BASE="/Volumes/ICOV/Proyectos/arroba-ecosystem"

for repo in \
  "reparto.mobile.redarroba.cl" \
  "api.redarroba.cl" \
  "back.callcenter" \
  "front.callcenter" \
  "redarroba.cl/back-web-reparto_v2.0" \
  "redarroba.cl/crons-reparto" \
  "redarroba.cl"; do
  
  echo "=========================================="
  echo "REPO: $repo"
  echo "=========================================="
  cd "$BASE/$repo" 2>/dev/null || { echo "NO ENCONTRADO"; continue; }
  
  # Git status
  git status --short 2>/dev/null | head -5 || echo "Sin git"
  
  # Package/requirements
  cat package.json 2>/dev/null | head -20 || true
  cat requirements.txt 2>/dev/null | head -20 || true
  
  # Estructura
  find . -maxdepth 2 -type f -not -path '*/node_modules/*' -not -path '*/.git/*' -not -path '*/dist/*' -not -path '*/__pycache__/*' | head -30
  
  echo ""
done

# Docs existentes
echo "=========================================="
echo "DOCS"
echo "=========================================="
ls -la "$BASE/redarroba.cl/docs-reparto-web_v2.0/"
```

### Paso 2 — Crear estructura Pi (Claude la genera con el inventario)
Pedir a Claude:

```
Dado este inventario de 7 repos del ecosistema Arroba, crea:

1. Una carpeta de configuración base compartida con:
   - steering/ (product.md, tech-stack.md, conventions.md, principles.md)
   - Plantilla de AGENTS.md reutilizable
   - docs/tracking/ (HANDOFF.md, TASKLOG.md — uno por módulo)

2. Para CADA repo, un AGENTS.md específico que:
   - Referencia la configuración base
   - Define el stack de ESE repo
   - Asigna los skills correctos según el stack:
     - React Native (móvil): react-best-practices, systematic-debugging
     - Hono + Prisma (API móvil): clean-code, solid, owasp-security
     - Strapi (CRM back): clean-code, owasp-security
     - FastAPI (Gestión API): fastapi-python, clean-code, solid, owasp-security
     - React + Next.js (fronts): vercel-react-best-practices, next-best-practices, shadcn, ui-ux-pro-max
     - Python crons: clean-code, systematic-debugging

3. Agentes con dos modos:
   /dev → @backend + @frontend separados
   /prod → @fulldev para hotfixes rápidos

4. Prompts /dev y /prod

El sistema está EN PRODUCCIÓN. Regla #1: no romper lo que funciona.
```

### Paso 3 — Instalar skills + symlinks (por repo)
```bash
for repo in reparto.mobile.redarroba.cl api.redarroba.cl back.callcenter front.callcenter; do
  cd "$BASE/$repo"
  mkdir -p .pi/skills
  for skill in ~/.agents/skills/*/; do  # o .agents/skills/ si son locales
    name=$(basename "$skill")
    ln -sf "$skill" ".pi/skills/$name"
  done
done
# Repetir para los repos dentro de redarroba.cl/
```

### Paso 4 — Git (verificar cada repo)
```bash
for repo in reparto.mobile.redarroba.cl api.redarroba.cl back.callcenter front.callcenter; do
  echo "=== $repo ==="
  cd "$BASE/$repo"
  git status 2>/dev/null || echo "SIN GIT — inicializar"
  cd "$BASE"
done
```

### Paso 5 — Primer uso: empezar con el repo más urgente
Abrir Pi en el repo que tenga más necesidad (ej: el que tiene bugs reportados o el cambio más próximo del cliente) y probar el flujo /prod con un hotfix real o /dev con el feature más próximo.

---

## Flujo de trabajo (mismo que todos los proyectos Soft-Tech)
Felipe define necesidad → backlog → @arquitecto genera issues con DoD →
**Puerta 1 (Felipe aprueba)** → ejecutor implementa → @reviewer revisa →
@qa valida → **Puerta 2 (Felipe valida)** → PR a main → producción.

Excepción: [HOTFIX-PROD] de Felipe → @fulldev → review rápido → smoke → merge.

## Reglas no negociables
1. Regla de menor resistencia — construir lo especificado, proponer alternativa y DETENERSE
2. Doble puerta humana — plan + funcionalidad aprobados por Felipe
3. DoD binario — 100% o no conformidad
4. [HOTFIX-PROD] solo lo activa Felipe
5. Toda tarea en HANDOFF.md + TASKLOG.md
6. **PRODUCCIÓN ACTIVA** — todo cambio debe ser backward-compatible, testeado, y reversible. Cero downtime.

## 12 Skills disponibles
caveman, clean-code, design-patterns-implementation, fastapi-python,
next-best-practices, owasp-security, shadcn, solid, systematic-debugging,
tdd, ui-ux-pro-max, vercel-react-best-practices

## Proyectos relacionados de Soft-Tech
- Cherry Picke: verificador de hechos (en Pi, Fase 1 MVP)
- Auditoría Web: funnel de ventas de Soft-Innova (migración a Pi pendiente)
- Annie AI: SaaS CRM con IA, en producción
- Tito: Sistema de Inteligencia de Mantenimiento (prioridad futura)
