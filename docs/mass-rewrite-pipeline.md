# Mass Rewrite Pipeline: librosresumidos.net

Date: 2026-04-16

## Objetivo
Escalar la mejora editorial sin que varios agentes pisen `src/data/books.ts`.

La regla del sistema es:
- el corpus base (`books.ts`) conserva el catálogo y los datos mínimos
- las ampliaciones editoriales viven en `src/data/editorial-overrides.json`
- los subagentes trabajan por lotes JSON reservados
- un integrador central valida y aplica los rewrites al archivo de overrides

## Piezas del pipeline

### 1. Estado general
Script:
- `scripts/rewrite_pipeline.py`

Comando:
- `npm run rewrite:status`

Qué enseña:
- libros totales
- libros con clicks
- libros ya enriquecidos vía overrides
- batches pendientes / completados / aplicados
- siguientes títulos prioritarios

### 2. Reserva de batches
Comando base:
- `npm run rewrite:batch -- --name wave-01 --size 6`

O por olas:
- `npm run rewrite:wave -- --prefix wave-20260416a --count 3 --size 4`

Salida:
- `.work/rewrite-batches/pending/*.json`

Cada batch incluye:
- slug
- título
- autor
- tipo
- clicks
- impressions
- contenido actual resumido
- hueco `rewritten` para la nueva versión editorial

### 3. Trabajo de subagentes
Cada subagente recibe UN batch concreto y rellena solo `rewritten`.

Campos obligatorios por item:
- `summary`
- `aboutThisBook`
- `forWhom`
- `whyItMatters`
- `editorialIntro`
- `readingLevel`
- `whyReadToday`
- `studyNotes`
- `chapterSummaries`
- `analysisSections`
- `faqs`
- `reviewedAt`
- `sources`

Reglas editoriales:
- español natural, no robótico
- pensar la página como “trabajo bien hecho de clase / universidad”, no como ficha SEO hueca
- si no hay capítulos nítidos, usar partes o momentos clave equivalentes
- no inventar datos bibliográficos dudosos
- usar 3-5 fuentes útiles y visibles

Mínimos de validación:
- `summary`: 90+ palabras
- `aboutThisBook`: 60+ palabras
- `chapterSummaries`: 3+ items
- `analysisSections`: 3+ items
- `studyNotes`: 3+ items
- `faqs`: 3+ items
- `sources`: 3+ items

### 4. Aplicación central
Comando:
- `npm run rewrite:apply -- .work/rewrite-batches/completed/wave-20260416a-01.json`

Qué hace:
- valida cada item
- integra el contenido en `src/data/editorial-overrides.json`
- mueve el lote a `applied/`
- si falla, lo deja en `rejected/` con errores detallados

### 5. Render en la web
La web ya soporta bloques editoriales extra en las fichas de libro:
- introducción editorial
- resumen por capítulos o partes
- análisis
- claves para estudiar o situar el libro
- preguntas frecuentes

Esto se renderiza desde `editorial-overrides.json` sin tocar el catálogo base.

## Flujo recomendado

### Ola 1
1. Reservar 2-4 batches pequeños
2. Asignar un subagente por batch
3. Completar los JSON
4. Aplicar uno a uno
5. Correr `npm run build && npm run lint`

### Ola 2+
- seguir por prioridad de clicks heredados
- primero las URLs ya existentes en el corpus
- luego crear nuevas fichas para los títulos con señal histórica que aún faltan

## Primeros batches creados
- `wave-20260416a-01`
- `wave-20260416a-02`
- `wave-20260416a-03`

## Títulos prioritarios ya reservados en la primera ola
Batch 01:
- Por qué los hombres aman a las cabronas
- El terror de sexto B
- ¡Ay, cuánto me quiero!
- No pasó nada

Batch 02:
- El secreto del orfebre
- Piloto de guerra
- La asistenta
- Erik Vogler y los crímenes del Rey Blanco

Batch 03:
- El varón domado
- Papelucho
- Pantalones cortos
- Ninfa rota

## Expansión más allá de los 39 libros actuales
Cuando se agoten los libros ya presentes en `books.ts`, el pipeline puede seguir con slugs históricos que tuvieron clicks pero todavía no están en el corpus reconstruido.

Comando:
- `npm run rewrite:seed-expansion -- --size 4`

Qué hace:
- añade 4 stubs nuevos a `src/data/expansion-books.json`
- esos stubs pasan a formar parte del corpus actual
- después pueden entrar en batches normales y enriquecerse vía `editorial-overrides.json`

Esto permite seguir avanzando hacia la cola histórica completa sin tocar `books.ts`.

## Archivos clave
- `scripts/rewrite_pipeline.py`
- `templates/rewrite-batch-template.json`
- `src/data/editorial-overrides.json`
- `src/data/expansion-books.json`
- `.work/rewrite-batches/pending/`
- `.work/rewrite-batches/completed/`
- `.work/rewrite-batches/applied/`
- `.work/rewrite-batches/rejected/`
