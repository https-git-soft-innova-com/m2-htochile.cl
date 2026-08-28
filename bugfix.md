# Bugfix Analysis — SPEC-001 Bodega: Pistoleo El Roble -1400 chips

## Resumen
Johnny Vega pistoleo 20.000 chips el 18-08-2026 pero faltan 1.400 del PDV El Roble.
La web muestra 18.600. Investigar discrepancia y corregir.

## Contexto
- **Módulo:** Gestión → Bodega
- **Repos afectados:** back-web-reparto_v2.0
- **Reportado por:** Felipe Ahumada
- **Severidad:** Alta
- **Usuarios impactados:** Bodeguero (Johnny Vega), supervisión

## Servidor producción
- **SSH:** `ssh -p 2222 adminarroba@207.180.203.161`
- **BD:** `sudo -u postgres psql -d reparto_prod`

## Comportamiento actual (Defecto)
```
CURRENT BEHAVIOR:
WHEN Johnny Vega pistolea 20.000 chips el 18-08-2026
THEN the system muestra 18.600 — faltan 1.400 asociados a PDV El Roble
```

## Comportamiento esperado (Correcto)
```
EXPECTED BEHAVIOR:
WHEN se pistolea un lote de chips
THEN the system SHALL contabilizar el 100% del lote incluyendo todos los PDV destino
```

## Comportamiento sin cambio (Prevención de regresión)
```
UNCHANGED BEHAVIOR:
WHEN otros pistoleo del mismo día existen
THEN the system SHALL CONTINUE TO mostrarlos correctamente
```

```
UNCHANGED BEHAVIOR:
WHEN consulto stock histórico de días anteriores
THEN the system SHALL CONTINUE TO mostrar los mismos valores
```
