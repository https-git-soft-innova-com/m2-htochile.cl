# Regla de Cierre de Tarea — OBLIGATORIA

Al completar cada tarea o fix:

## 1. Guardar en Steering
- Actualizar `.kiro/steering.md` con lo que se hizo
- Incluir: qué se cambió, archivos modificados, fecha

## 2. Commit + Push a main
```bash
git add -A
git commit -m "fix: <descripción breve del cambio>"
git push origin main
```

## 3. Crear PR (si aplica branch)
- Si se trabaja en branch feature: crear PR hacia main
- Si se trabaja directamente en main: solo push

## Formato steering
Agregar al final de `.kiro/steering.md`:
```
### [fecha] — <título del fix>
- Cambios: <lista de archivos>
- Descripción: <qué se hizo>
- Estado: ✅ Completado
```

## Sin excepciones
- NO se puede pasar a la siguiente tarea sin documentar
- NO se puede omitir el push
- Felipe debe poder ver el cambio en el repo inmediatamente
