# Manual: Configurar LinkedIn Insight Tag para HTO Chile

> Guía para que el equipo comercial de HTO Chile pueda obtener el LinkedIn Partner ID para integrar el tracking en la web.

## ¿Qué es el LinkedIn Insight Tag?

Es un código que permite rastrear conversiones y crear audiencias de remarketing en LinkedIn Ads. Sirve para:
- Medir quién visita htochile.cl desde LinkedIn
- Crear audiencias para campañas de LinkedIn
- Rastrear conversiones (formularios, cotizaciones)
- Obtener datos demográficos de visitantes (empresa, cargo, industria)

---

## Paso a paso

### 1. Acceder a LinkedIn Campaign Manager

1. Ir a [linkedin.com/campaignmanager](https://www.linkedin.com/campaignmanager)
2. Iniciar sesión con la cuenta de LinkedIn asociada a la empresa HTO Chile
3. Si no tienen cuenta publicitaria, crear una:
   - Click en **"Crear cuenta"**
   - Nombre: **HTO Chile**
   - Moneda: **USD** o **CLP**
   - Asociar la LinkedIn Page de HTO Chile

### 2. Obtener el Insight Tag (Partner ID)

1. En Campaign Manager → menú lateral → **Analizar** → **Insight Tag**
2. O ir a: **Configuración de la cuenta** → **Insight Tag**
3. Verás la sección "Instalar mi Insight Tag"
4. El **Partner ID** aparece como un número, ejemplo:

```
Partner ID: 5678901
```

**Ese número es lo que necesitamos.**

### 3. Alternativa: desde Conversions

1. Campaign Manager → **Analizar** → **Seguimiento de conversiones**
2. Click en **"Crear conversión"**
3. LinkedIn mostrará el Insight Tag con el Partner ID si no está instalado
4. Copiar el Partner ID

### 4. Crear la LinkedIn Company Page (si no existe)

Si HTO Chile no tiene página de empresa en LinkedIn:
1. Ir a [linkedin.com/company/setup](https://www.linkedin.com/company/setup/new/)
2. Tipo: **Empresa**
3. Nombre: **HTO Chile**
4. URL pública: `hto-chile` (ya existe: linkedin.com/company/hto-chile)
5. Sector: **Maquinaria industrial**
6. Completar datos

---

## ¿Qué entregar al equipo técnico?

| Dato | Ejemplo | ¿Dónde encontrarlo? |
|------|---------|---------------------|
| **Partner ID** | 5678901 | Campaign Manager → Insight Tag |
| **Account ID** (opcional) | 510234567 | Campaign Manager → URL de la cuenta |

---

## Configuración de conversiones (lo hacemos nosotros)

Una vez recibido el Partner ID, configuramos en GTM:
- **Page view** — todas las páginas
- **Lead** — formulario biblioteca técnica completado
- **Contact** — click en WhatsApp
- **Key Page View** — página de producto visitada

---

## Información de la cuenta HTO Chile

- **LinkedIn Page:** https://www.linkedin.com/company/hto-chile/
- **Sitio web:** https://www.htochile.cl
- **Blog:** https://blog.htochile.cl
- **GTM Container:** GTM-NM2T3545

---

## Contacto técnico

Enviar el Partner ID a: **felipe.ahumada@soft-innova.com**

Una vez recibido, se configurará en Google Tag Manager para rastrear visitas y conversiones automáticamente en la web y el blog.

---

## Notas importantes

1. **No necesitan agregar código manualmente** — todo se maneja via GTM
2. **El Insight Tag es gratuito** — no requiere campaña activa para instalarse
3. **Datos demográficos** tardan 24-48h en aparecer después de la instalación
4. **Mínimo 300 visitas** para que LinkedIn muestre datos de audiencia
