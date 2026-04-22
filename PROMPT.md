# Prompt maestro — reconstrucción de librosresumidos.net

Quiero reconstruir `librosresumidos.net` como una web editorial de resúmenes de libros en español realmente útil, con criterio y con una propuesta de valor clara.

No quiero otra web genérica de “book summaries” hecha con IA a paladas.
No quiero fichas clónicas de 600 palabras con cuatro apartados prefabricados.
No quiero un cementerio de títulos de libros sin alma, sin contexto y sin ninguna razón para existir.

Quiero una biblioteca editorial en español que sirva para:
- entender rápido de qué trata un libro
- captar ideas, temas, personajes y estructura
- decidir si merece la pena leerlo completo
- estudiar obras para instituto/universidad
- refrescar una lectura antigua
- encontrar libros parecidos o próximos

La web debe sentirse como una mezcla de:
- biblioteca comentada
- guía de lectura práctica
- companion para estudiantes y lectores curiosos
- archivo de resúmenes con contexto y criterio

Si el resultado parece una factoría SEO de IA, has fracasado.
Si parece una referencia útil y limpia para entender libros, vas bien.


## 1. Contexto real del proyecto

Proyecto local:
- `/Users/clank/.hermes/workspace/webs/131-librosresumidos.net`

Datos reales disponibles en `Migration/`:
- `gsc_pages_2025-01-01_2026-04-15.csv`
- `gsc_queries_2025-01-01_2026-04-15.csv`
- `gsc_query_page_2025-01-01_2026-04-15.csv`
- `bing_pages_2025-01-01_2026-04-15.csv`
- `bing_queries_2025-01-01_2026-04-15.csv`

Cuenta propietaria detectada:
- GSC/Bing alias: `aniol`
- propiedad GSC: `sc-domain:librosresumidos.net`

### Lo que dicen los datos de verdad
GSC está flojo y muy disperso.
Bing, en cambio, revela que sí hay una biblioteca con bastante cola larga y algunas páginas con buena tracción.

### Páginas con señal fuerte en Bing
- `por-que-los-hombres-aman-a-las-cabronas`
- `el-terror-de-sexto-b`
- `ay-cuanto-me-quiero`
- `no-paso-nada`
- `el-secreto-del-orfebre`
- `piloto-de-guerra`
- `la-asistenta`
- `erik-vogler-y-los-crimenes-del-rey-blanco`
- `papelucho`
- `los-siete-habitos-de-los-adolescentes-altamente-efectivos`

### Lo que eso sugiere
La web no parece ganar por “un solo nicho super premium”, sino por una combinación de:

1. **Lecturas escolares / juveniles / de instituto**
2. **Libros de narrativa muy consultados por estudiantes**
3. **Resúmenes de obras concretas con intención exacta**
4. **Algo de desarrollo personal / no ficción útil**
5. **Long tail literaria muy dispersa, donde el valor está en la cobertura y la claridad**

O sea:
esto NO debe construirse como “la versión española de Blinkist”.
Eso sería una mala lectura del proyecto.

Debe construirse como una web de referencia en español para:
- resúmenes de obras concretas
- apoyo a estudio y lectura
- orientación rápida y fiable sobre libros


## 2. Qué NO quiero

- no resúmenes clonados con estructura robótica repetida 6.000 veces
- no “IA summary slop”
- no frases vacías tipo “este libro nos enseña valores muy importantes” por defecto
- no fichas sin contexto, sin tema, sin audiencia y sin utilidad real
- no una home de “últimos resúmenes” cutrísima
- no una biblioteca plana de títulos sin clasificación inteligente
- no una estética de app SaaS genérica si aquí lo que toca es editorial/lectura
- no inventar análisis profundos si la página solo debe ser un resumen claro
- no reseñas falsas disfrazadas de resumen


## 3. Qué SÍ quiero

- claridad brutal
- navegación excelente
- una taxonomía útil para encontrar libros
- plantillas pensadas para lectura rápida
- enfoque práctico: de qué va, temas, personajes, lecciones, para quién sirve
- muy buena experiencia móvil
- interlinking potente entre obras relacionadas
- un sistema claro para diferenciar ficción, no ficción, juvenil, clásica, etc.
- sensación de “esto me sirve de verdad”, no “esto lo escribió un generador automático”


## 4. Qué debe ser esta web ahora

`librosresumidos.net` debe renacer como:
- biblioteca editorial de resúmenes de libros en español
- herramienta útil para estudiantes, lectores casuales y curiosos
- archivo navegable por autor, género, nivel, tipo de lectura e intención

### Propuesta de valor
“Entiende rápido de qué va un libro y qué te vas a encontrar, sin tragarte morralla.”

### Tono de marca
- claro
- ordenado
- culto sin ir de listo
- útil
- directo
- cero postureo académico innecesario


## 5. Posicionamiento correcto

No quiero que esto se plantee como:
- “resúmenes premium para ejecutivos ocupados”
- “IA resume libros en 3 minutos”
- “notas escolares cutres”

Quiero una posición mucho más buena:
- resúmenes bien estructurados de libros concretos
- utilidad para estudio y lectura
- cobertura amplia, pero con orden editorial
- una mezcla de biblioteca + companion de lectura


## 6. Pilares editoriales recomendados

### Pilar 1 — Resúmenes de libros concretos
El núcleo duro.
Cada obra debe resolverse bien.

### Pilar 2 — Lecturas escolares / juveniles
Muy importante por la señal y por el potencial de uso real.
Ejemplos de tono/nicho detectado:
- `El terror de sexto B`
- `Ay, cuánto me quiero`
- `No pasó nada`
- `Papelucho`
- `Erik Vogler...`

### Pilar 3 — Literatura clásica y narrativa de catálogo
- obras menos mainstream
- narrativa hispana
- clásicos
- libros concretos de autores con búsqueda de ficha/resumen

### Pilar 4 — No ficción útil / desarrollo personal
- hábitos
- crecimiento personal
- libros prácticos concretos

Pero sin convertir la web en “solo negocio/productividad”.

### Pilar 5 — Guías de lectura y conexiones
- libros parecidos
- orden de lectura si aplica
- temas recurrentes
- por qué puede gustarte una obra
- a qué tipo de lector va dirigida


## 7. Arquitectura recomendada

### Home
La home no puede ser una mierda triste de blog.
Tiene que ayudar a descubrir libros.

Debe incluir:
- hero claro con propuesta de valor
- buscador protagonista
- acceso por grandes familias:
  - escolar/juvenil
  - clásicos
  - narrativa
  - no ficción
  - desarrollo personal
- destacados populares
- bloque de resúmenes más consultados
- bloque “para estudiar”
- bloque “si te gustó X, lee Y” si encaja
- sensación de biblioteca ordenada, no de timeline

### Navegación principal
- Resúmenes
- Géneros
- Autores
- Escolar / juvenil
- No ficción
- Populares
- Buscar

### Tipos de página clave

#### A. Página de libro individual
Debe incluir, cuando encaje:
- título
- autor
- portada si existe y es viable
- resumen claro
- de qué trata realmente
- personajes principales (si ficción)
- temas clave
- ideas o lecciones (si no ficción)
- por qué importa / por qué se busca
- para quién encaja
- dificultad o nivel aproximado
- duración / extensión orientativa si sirve
- libros parecidos
- breadcrumbs buenos

#### B. Página de autor
- bio breve y útil
- obras disponibles en la web
- libros más buscados
- estilo o temas recurrentes
- para qué lector encaja ese autor

#### C. Página de género o familia temática
- juvenil
- clásicos
- novela histórica
- fantasía
- autoayuda
- etc.

Solo si tiene masa suficiente.
Nada de taxonomías vacías de relleno.

#### D. Página de colección útil
Ejemplos:
- libros juveniles que más se resumen en clase
- libros parecidos a X
- libros para empezar con X autor
- resúmenes de clásicos imprescindibles

Estas páginas pueden diferenciar mucho el proyecto.


## 8. Cómo deben ser las fichas individuales

La ficha no debe ser solo “resumen”.
Debe ser un objeto útil.

### Para ficción
- resumen sin enrollarse
- contexto del libro
- personajes clave
- conflicto central
- temas
- tono
- tipo de lector
- libros parecidos

### Para no ficción
- idea central
- principales enseñanzas
- estructura del libro
- conceptos clave
- para quién sirve
- qué te llevas si lo lees

### Regla general
Cada ficha debe responder:
- ¿de qué va esto?
- ¿por qué importa?
- ¿merece la pena leerlo?
- ¿a quién le sirve?
- ¿qué otros libros se le parecen?


## 9. Estructura de URLs

Si hay slugs legacy que ya existen, se pueden aprovechar.
Pero la estructura nueva debe ser limpia y coherente.

Idealmente:
- `/titulo-del-libro-de-autor/` si ya hay inventario legacy y funciona
- `/autor/[slug]`
- `/genero/[slug]`
- `/colecciones/[slug]`

No montes rutas raras ni categorías huecas por sistema.


## 10. Diseño visual

### Dirección visual
Quiero algo entre:
- biblioteca digital contemporánea
- revista literaria limpia
- plataforma editorial de consulta

No quiero:
- look de SaaS aburrido
- look de plantilla educativa fea
- look excesivamente académico y seco

### Principios visuales
- fondo claro o neutro, muy legible
- mucho aire
- tipografía excelente
- jerarquía clara
- cards editoriales de libros
- fichas escaneables
- diseño que invite a seguir descubriendo títulos

### Sensación
La web tiene que transmitir:
- orden
- claridad
- inteligencia práctica
- gusto editorial


## 11. UX obligatoria

### 1. Buscar muy bien
Aquí el buscador importa muchísimo.
La gente suele venir con intención exacta:
- libro concreto
- autor
- saga
- resumen escolar
- libro parecido a otro

### 2. Entender rápido
Cada página debe poder leerse de un vistazo y también con calma.

### 3. Descubrir más
Si el usuario entra por un libro, debe salir con:
- más libros del autor
- más libros del mismo tono/género
- más libros útiles para la misma necesidad

### 4. Servir a dos tipos de usuario
- el que quiere resolver una necesidad exacta ya
- el que quiere explorar y descubrir lecturas


## 12. Diferenciales reales

La nueva web tiene que ganar por:

### A. Claridad mejor que la competencia
Muchas webs de resúmenes son horribles: densas, robóticas o vagas.
Aquí hay que ser claro de verdad.

### B. Utilidad práctica
No solo “resumen bonito”.
También:
- personajes
- temas
- lecciones
- para quién es
- parecido con otras obras

### C. Biblioteca navegable
No una suma de páginas aisladas.
Sí una red editorial de descubrimiento.

### D. Buen equilibrio entre estudio y lectura real
Debe servir tanto para estudiante como para lector curioso.


## 13. Qué hacer con el histórico

### Mantener y mejorar
- títulos con señal real en Bing/GSC
- libros juveniles/escolares con demanda clara
- obras de narrativa consultadas por resumen exacto
- algunos títulos de no ficción con intención clara

### Consolidar
- familias de libros o autores donde haya sentido agrupar
- sagas o series si aparecen suficientes señales

### Matar o no priorizar
- páginas sin señal y sin valor claro
- taxonomías vacías
- contenido que no ayude ni a estudiar ni a decidir una lectura


## 14. E-E-A-T obligatorio

- About
- Data Sources
- Contact
- Privacy
- Terms

### Data Sources
Debe explicar:
- enfoque editorial
- cómo se elaboran los resúmenes
- qué límites tiene un resumen frente a la obra completa
- que la web no sustituye leer el libro cuando se busca experiencia literaria completa


## 15. Stack obligatorio

- Next.js App Router
- TypeScript
- Tailwind CSS
- datos locales JSON/TS en esta fase
- deployable en Vercel
- un solo idioma: español
- arquitectura limpia y mantenible


## 16. Entregable esperado

Quiero que el proyecto termine con:
- posicionamiento clarísimo
- home fuerte
- buscador visible
- fichas de libro realmente útiles
- hubs de autor/género donde tengan sentido
- diseño editorial limpio
- navegación de biblioteca real
- build funcionando


## 17. Regla final

No construyas una web de “resúmenes automáticos”.
Construye una biblioteca editorial en español para entender libros concretos de forma rápida, ordenada y útil.

Si parece una biblioteca de lectura práctica, vas bien.
Si parece una cadena de resúmenes de IA con otro logo, la has cagado.
