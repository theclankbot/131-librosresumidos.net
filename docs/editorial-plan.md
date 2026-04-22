# Plan editorial para librosresumidos.net

## Diagnóstico rápido
La estructura base está bien encaminada: home clara, hubs de autor/género, páginas legales, metodología y plantilla limpia. El problema principal ya no es de UX ni de arquitectura, sino de profundidad editorial.

## Estado actual
- Build: PASS
- Lint: PASS
- Rutas generadas: 104
- Libros actuales en el corpus: 39
- Autores: ~39
- Géneros: 14

## Lo que ya funciona
- Posicionamiento de marca claro: biblioteca editorial en español
- Navegación comprensible por libro, autor y género
- Buen tono base: no parece SaaS ni plantilla fea
- La ficha actual ya separa ficción / no ficción de forma razonable
- Hay una metodología visible, lo cual ayuda a confianza editorial

## Lo que falta para que las páginas sean realmente buenas
Hoy muchas fichas son útiles, pero aún se sienten demasiado cortas.

Promedios actuales aproximados:
- summary: 44 palabras
- aboutThisBook: 24 palabras
- forWhom: 12 palabras
- whyItMatters: 16 palabras

Eso sirve para un MVP, pero no para una página editorial fuerte. El riesgo es que Google y el usuario la perciban como una ficha breve, no como una referencia.

## Recomendación editorial por tipo de página

### 1. Página de libro de ficción
Secciones recomendadas:
1. Qué cuenta el libro en 80-140 palabras
2. Contexto de la obra
   - cuándo se publicó
   - por qué se lee tanto
   - si es lectura escolar / saga / clásico / fenómeno reciente
3. Personajes principales
4. Conflicto central
5. Temas principales explicados, no solo listados
6. Qué tipo de lectura ofrece
   - ritmo
   - dificultad
   - edad ideal
   - si conviene para clase o lectura personal
7. Por qué sigue importando
8. Si te gustó este libro, prueba también...
9. FAQ breve
   - de qué trata
   - quiénes son los personajes
   - qué temas toca
   - para qué edad va bien

Objetivo mínimo por ficha buena de ficción:
- 500 a 900 palabras útiles

### 2. Página de libro de no ficción
Secciones recomendadas:
1. Resumen corto del libro
2. Qué propone realmente el autor
3. 4-7 ideas clave desarrolladas en mini párrafos
4. Qué tipo de lector le saca partido
5. Qué promete el libro y qué no
6. Por qué fue relevante / polémico / popular
7. Libros parecidos o complementarios
8. FAQ breve

Objetivo mínimo por ficha buena de no ficción:
- 600 a 1000 palabras útiles

### 3. Página de autor
Ahora mismo está correcta, pero básica. Mejorarla con:
- bio un poco más trabajada
- por qué importa ese autor
- qué tipo de libros escribe
- por dónde empezar a leerlo
- qué temas repite
- bloque de "libros más buscados de este autor"

### 4. Página de género
No basta con listado + descripción corta. Añadir:
- qué define ese género
- para qué tipo de lector es
- subtipos o matices dentro del género
- libros más representativos del género en la web
- bloque de “si empiezas por aquí”

## Priorización recomendada por tráfico heredado
Antes de ampliar el catálogo, conviene convertir en páginas realmente buenas estas URLs con señal:
- por-que-los-hombres-aman-a-las-cabronas-de-sherry-argov
- el-terror-de-sexto-b-de-yolanda-reyes
- ay-cuanto-me-quiero-de-mauricio-paredes
- no-paso-nada-de-antonio-skarmeta
- el-secreto-del-orfebre-de-elia-barcelo
- piloto-de-guerra-de-antoine-de-saint-exupery
- la-asistenta-de-freida-mcfadden
- erik-vogler-y-los-crimenes-del-rey-blanco-de-beatriz-oses
- papelucho-de-marcela-paz
- los-siete-7-habitos-de-los-adolescentes-altamente-efectivos-de-sean-covey

## Títulos con demanda heredada que faltan en el corpus actual
Buenas candidatas para la siguiente tanda editorial:
- falco-de-arturo-perez-reverte
- a-dos-metros-de-ti-de-rachael-lippincott
- crepusculo-saga-crepusculo-i-de-stephenie-meyer
- viajes-extraordinarios-de-julio-verne
- el-ladron-de-mentiras-de-roberto-santiago
- diferente-de-eloy-moreno
- la-charca-de-manuel-zena-gandia
- corredores-de-sombra-de-agustin-fernandez-paz
- lo-que-encontre-bajo-el-sofa-de-eloy-moreno
- cartas-a-quien-pretende-ensenar-de-paulo-freire

## Cambios de producto/editorial que convendría hacer en código
1. Añadir campos editoriales al tipo `Book`
   - whoShouldReadIt
   - readingLevel
   - whyReadThisToday
   - faq[]
   - contentBlocks[] o sections[]
2. Permitir párrafos múltiples en lugar de una sola cadena por sección
3. Añadir tabla rápida de ficha
   - género
   - tipo
   - público
   - extensión
   - año
   - país / contexto si aplica
4. Añadir JSON-LD de Book / Article
5. Dar a la 404 un title propio y no el genérico del sitio
6. Marcar legal pages con noindex

## Regla editorial para no caer en contenido flojo
Cada página debe responder de forma clara estas preguntas:
- de qué va el libro
- qué lo hace distinto
- para quién sirve este resumen
- por qué ese libro importa o se sigue buscando
- qué otro libro debería ver el lector después

Si una ficha no responde eso, todavía no está lista.

## Recomendación operativa
Mejor estrategia:
1. No intentes redactar 200 fichas de golpe
2. Cierra primero 15-20 páginas realmente buenas
3. Empieza por las de señal histórica
4. Luego amplía catálogo manteniendo la misma plantilla editorial

## Umbral de calidad recomendado
No publicar una ficha si solo tiene:
- resumen corto
- 3 temas
- 1 frase de para quién es

Eso es una ficha mínima, no una buena página editorial.
