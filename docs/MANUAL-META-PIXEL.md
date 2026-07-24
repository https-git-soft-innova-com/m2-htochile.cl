# Manual: Configurar Meta Pixel para HTO Chile

> Guía para que el equipo comercial de HTO Chile pueda crear y entregar el ID del Meta Pixel para integración en la web.

## ¿Qué es el Meta Pixel?

El Meta Pixel es un código que permite rastrear las acciones de los visitantes de htochile.cl que llegan desde anuncios de Facebook e Instagram. Sirve para:
- Medir conversiones (cotizaciones, descargas)
- Crear audiencias de remarketing
- Optimizar campañas publicitarias

---

## Paso a paso

### 1. Acceder a Meta Business Suite

1. Ir a [business.facebook.com](https://business.facebook.com)
2. Iniciar sesión con la cuenta de Facebook/Instagram de HTO Chile
3. Si no tienen Business Manager, crear uno:
   - Click en "Crear cuenta"
   - Nombre del negocio: **HTO Chile**
   - Email: **patricio.ahumada@htochile.cl**

### 2. Crear el Pixel

1. En el menú lateral → **Configuración del negocio** (o All Tools → Events Manager)
2. Click en **"Orígenes de datos"** → **"Píxeles"**
3. Click en **"Agregar"** (o "Crear un píxel")
4. Nombre del píxel: **HTO Chile - Web**
5. URL del sitio web: **https://www.htochile.cl**
6. Click en **"Crear"**

### 3. Obtener el ID del Pixel

Una vez creado, verás algo como:

```
ID del Pixel: 123456789012345
```

**Ese número es lo que necesitamos.** Copiar y enviar a felipe.ahumada@soft-innova.com

### 4. Verificar el dominio (importante para iOS 14+)

1. En Business Manager → **Configuración del negocio** → **Seguridad de la marca** → **Dominios**
2. Click en **"Agregar"** → ingresar `htochile.cl`
3. Seleccionar método de verificación: **Meta-tag HTML** o **Registro DNS TXT**
   - Si eligen DNS TXT: agregar el registro TXT que Meta indica en Cloudflare (panel DNS de htochile.cl)
   - Si eligen Meta-tag: enviar el tag a felipe.ahumada@soft-innova.com para agregarlo al código
4. Click en **"Verificar"**

### 5. Verificar la empresa en Meta Business Manager

> **Importante:** Meta requiere verificación de la empresa para acceder a funciones avanzadas (conversiones API, audiencias personalizadas, acceso completo al Pixel). Sin verificación, el Pixel funciona pero con limitaciones.

#### ¿Por qué verificar?

- Acceso completo a eventos de conversión
- Poder usar la API de Conversiones (CAPI)
- Crear audiencias de remarketing sin restricciones
- Mayor confianza en los datos (iOS 14+ tracking)
- Acceso a funciones avanzadas de anuncios

#### Paso a paso para verificar la empresa

1. Ir a [business.facebook.com/settings/security](https://business.facebook.com/settings/security)
2. En la sección **"Verificación del negocio"** → click en **"Iniciar verificación"**
3. Completar los datos:
   - **Nombre legal del negocio:** HTO Chile SpA (o como aparece en SII)
   - **País:** Chile
   - **Dirección:** Nueva Providencia 2134, Of. 1001, Providencia, RM
   - **Teléfono:** +56 9 7724 1488
   - **Sitio web:** https://www.htochile.cl
   - **RUT empresa:** (el RUT de HTO Chile)

4. **Subir documentos** — Meta pedirá UNO de estos:
   - Certificado de vigencia (SII o Registro de Comercio)
   - Patente comercial
   - Factura de servicios a nombre de la empresa (luz, agua, internet)
   - Extracto bancario con el nombre de la empresa
   - Certificado de inscripción en el SII (Formulario F-2233)

   > **Recomendación:** Usar el **Certificado de vigencia del SII** — se obtiene gratis en [www.sii.cl](https://www.sii.cl) → Servicios Online → Situación tributaria → Certificado de vigencia.

5. **Método de verificación de contacto** — Meta enviará un código por:
   - Email del dominio (ej: contacto@htochile.cl) ← **recomendado**
   - Teléfono registrado
   - Documento adicional

6. Ingresar el código recibido → click **"Verificar"**

#### Tiempo de respuesta

- **Automático:** 1-5 minutos si los datos coinciden con registros públicos
- **Revisión manual:** 1-5 días hábiles si requiere validación de documentos
- **Rechazado:** Meta indica qué falta. Se puede reintentar.

#### Errores comunes

| Problema | Solución |
|----------|----------|
| "No pudimos verificar tu negocio" | El nombre legal no coincide con el documento subido |
| "Dominio no verificado" | Primero verificar el dominio (paso 4) antes de la empresa |
| "Necesitamos documentos adicionales" | Subir un segundo documento (factura + certificado SII) |
| "Teléfono no coincide" | Usar el teléfono que aparece en el documento subido |

#### Estado de verificación

- 🟡 **Pendiente** — En revisión por Meta
- 🟢 **Verificado** — Acceso completo habilitado
- 🔴 **Rechazado** — Corregir y reintentar

### 5. Configurar eventos estándar (opcional - lo hacemos nosotros)

Los siguientes eventos ya están preparados en la web via GTM:
- `Lead` — cuando alguien completa el formulario de biblioteca técnica
- `Contact` — cuando clickean WhatsApp
- `ViewContent` — cuando visitan una página de producto

---

## ¿Qué entregar al equipo técnico?

| Dato | Ejemplo | ¿Dónde encontrarlo? |
|------|---------|---------------------|
| **ID del Pixel** | 123456789012345 | Events Manager → Píxeles → ID |
| **Verificación de dominio** | Código TXT o meta-tag | Configuración → Dominios |

---

## Información de la cuenta

- **Sitio web:** https://www.htochile.cl
- **Blog:** https://blog.htochile.cl
- **GTM Container:** GTM-NM2T3545
- **GA4:** G-3H2VB5DJL3

---

## Contacto técnico

Enviar el ID del Pixel a: **felipe.ahumada@soft-innova.com**

Una vez recibido, se configurará automáticamente en Google Tag Manager para rastrear eventos en la web y el blog.
