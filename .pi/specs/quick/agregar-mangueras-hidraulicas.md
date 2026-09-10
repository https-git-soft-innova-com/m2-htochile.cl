# Quick: agregar-mangueras-hidraulicas

## What
Agregar las mangueras hidráulicas 4SH, 4SP y R2 al catálogo de Mangueras Hidráulicas, incorporando sus imágenes y dejando configuradas las claves de fichas técnicas que consume el backend de DigitalOcean Spaces.

## Files
- `lib/site-data.ts`
- `public/images/products/manguera-hidraulica-4sh.png`
- `public/images/products/manguera-hidraulica-4sp.png`
- `public/images/products/manguera-hidraulica-r2-nueva.png`
- `public/fichas-tecnicas/ficha-tecnica-manguera-hidraulica-4sh.pdf`
- `public/fichas-tecnicas/ficha-tecnica-manguera-hidraulica-4sp.pdf`
- `public/fichas-tecnicas/ficha-tecnica-manguera-hidraulica-r2.pdf`

## DoD
- [x] Los tres productos aparecen bajo la categoría Mangueras Hidráulicas.
- [x] Cada producto tiene título, descripción, especificaciones, imagen y slug único.
- [x] Las claves de ficha técnica corresponden a `ficha-tecnica-{slug}` para el backend/Space.
- [ ] Los tres PDFs están cargados en DigitalOcean Spaces y aparecen en la búsqueda de Fichas Técnicas.

## Status: IN_PROGRESS
