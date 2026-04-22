import { Book } from "./types";

export const books: Book[] = [
  {
    slug: "por-que-los-hombres-aman-a-las-cabronas-de-sherry-argov",
    title: "Por qué los hombres aman a las cabronas",
    authorSlug: "sherry-argov",
    authorName: "Sherry Argov",
    type: "no-ficcion",
    genres: ["desarrollo-personal"],
    audience: "adulto",
    year: 2002,
    pages: 240,
    summary:
      "Un manual directo sobre relaciones de pareja que defiende la importancia de la autoestima y la independencia emocional. Argov argumenta que las mujeres que se valoran a sí mismas y no buscan la aprobación constante de su pareja resultan más atractivas y construyen relaciones más equilibradas.",
    aboutThisBook:
      "Publicado originalmente como 'Why Men Love Bitches', este libro se convirtió en un fenómeno editorial traducido a más de 30 idiomas. No es un manual de manipulación, sino una defensa de la dignidad propia en las relaciones.",
    themes: [
      "Autoestima",
      "Independencia emocional",
      "Relaciones de pareja",
      "Dignidad personal",
    ],
    keyIdeas: [
      "La necesidad de aprobación constante debilita cualquier relación",
      "Poner límites es una forma de respeto propio, no de frialdad",
      "La independencia emocional no significa no querer, sino no depender",
      "Un desequilibrio de poder destruye la atracción",
    ],
    forWhom:
      "Personas que quieren reflexionar sobre dinámicas de pareja y reforzar su autoestima en las relaciones.",
    whyItMatters:
      "Es uno de los libros de relaciones más buscados en español. Aborda un tema que preocupa a mucha gente con un tono directo y sin rodeos.",
    relatedSlugs: [
      "los-siete-7-habitos-de-los-adolescentes-altamente-efectivos-de-sean-covey",
    ],
  },
  {
    slug: "el-terror-de-sexto-b-de-yolanda-reyes",
    title: "El terror de sexto B",
    authorSlug: "yolanda-reyes",
    authorName: "Yolanda Reyes",
    type: "ficcion",
    genres: ["juvenil"],
    audience: "juvenil",
    year: 1994,
    pages: 80,
    summary:
      "Una colección de relatos que captura la vida cotidiana de los adolescentes en el colegio: los miedos, las primeras experiencias, los conflictos con compañeros y profesores. El relato que da título al libro narra la historia de un chico que descubre el poder de la lectura cuando tiene que enfrentarse a una exposición oral.",
    aboutThisBook:
      "Referencia obligada de la literatura juvenil colombiana. Se lee mucho en colegios de toda América Latina por su capacidad de conectar con la experiencia real de los estudiantes.",
    characters: [
      {
        name: "El narrador",
        description:
          "Un estudiante que descubre que leer puede salvarte de hacer el ridículo.",
      },
    ],
    centralConflict:
      "El miedo a hablar en público y el descubrimiento de que la lectura puede ser una herramienta, no un castigo.",
    themes: [
      "Adolescencia",
      "Vida escolar",
      "Miedo",
      "Descubrimiento de la lectura",
      "Crecimiento personal",
    ],
    tone: "Cercano, humorístico, tierno",
    forWhom:
      "Estudiantes de primaria y secundaria. Ideal para despertar el hábito lector en adolescentes.",
    whyItMatters:
      "Es una de las lecturas escolares más asignadas en colegios hispanohablantes. Trata temas universales con los que cualquier estudiante se identifica.",
    relatedSlugs: [
      "papelucho-de-marcela-paz",
      "ay-cuanto-me-quiero-de-mauricio-paredes",
      "amigo-se-escribe-con-h-de-maria-fernanda-heredia",
    ],
    escpilar: true,
  },
  {
    slug: "ay-cuanto-me-quiero-de-mauricio-paredes",
    title: "¡Ay, cuánto me quiero!",
    authorSlug: "mauricio-paredes",
    authorName: "Mauricio Paredes",
    type: "ficcion",
    genres: ["infantil", "juvenil"],
    audience: "juvenil",
    year: 2003,
    pages: 64,
    summary:
      "Un niño tremendamente enamorado de sí mismo descubre que el mundo no gira a su alrededor. A través de situaciones cómicas y absurdas, aprende que la convivencia, la empatía y la amistad importan más que el ego.",
    aboutThisBook:
      "Uno de los libros infantiles más populares de Chile. Su humor directo y su brevedad lo hacen ideal para primeros lectores y para trabajar la empatía en clase.",
    characters: [
      {
        name: "El protagonista",
        description:
          "Un niño narcisista y exagerado que evoluciona gracias a su contacto con los demás.",
      },
    ],
    centralConflict:
      "El choque entre el narcisismo infantil y la necesidad de relacionarse con otros.",
    themes: [
      "Narcisismo",
      "Empatía",
      "Amistad",
      "Humor",
      "Autoconocimiento",
    ],
    tone: "Divertido, irónico, didáctico sin ser pesado",
    forWhom:
      "Lectores de 8 a 12 años. Muy usado en colegios para hablar de valores sin moralizar.",
    whyItMatters:
      "Es lectura obligatoria en muchos colegios chilenos y se ha extendido a otros países. Demuestra que la literatura infantil puede ser inteligente y divertida.",
    relatedSlugs: [
      "papelucho-de-marcela-paz",
      "el-terror-de-sexto-b-de-yolanda-reyes",
    ],
    escpilar: true,
  },
  {
    slug: "no-paso-nada-de-antonio-skarmeta",
    title: "No pasó nada",
    authorSlug: "antonio-skarmeta",
    authorName: "Antonio Skármeta",
    type: "ficcion",
    genres: ["juvenil", "narrativa"],
    audience: "juvenil",
    year: 1980,
    pages: 120,
    summary:
      "Un adolescente chileno exiliado en Berlín tras el golpe de Pinochet intenta adaptarse a una vida que no eligió. Entre el frío, un idioma extraño, la nostalgia y las primeras experiencias amorosas, el protagonista construye su identidad lejos de casa.",
    aboutThisBook:
      "Novela breve y potente que aborda el exilio desde la mirada de un adolescente. Skármeta evita el dramatismo fácil y deja que la voz del chico cuente la historia con naturalidad.",
    characters: [
      {
        name: "Lucho",
        description:
          "Un adolescente chileno que intenta sobrevivir emocionalmente en un país que no entiende.",
      },
    ],
    centralConflict:
      "La tensión entre pertenecer a un lugar que ya no existe y construir una vida en un sitio que se siente ajeno.",
    themes: [
      "Exilio",
      "Identidad",
      "Adolescencia",
      "Nostalgia",
      "Adaptación",
    ],
    tone: "Íntimo, contenido, con humor sutil",
    forWhom:
      "Estudiantes de secundaria y cualquier lector interesado en historias de exilio y crecimiento.",
    whyItMatters:
      "Lectura escolar frecuente en Chile y otros países. Una de las mejores novelas juveniles sobre exilio escritas en español.",
    relatedSlugs: [
      "papelucho-de-marcela-paz",
      "el-terror-de-sexto-b-de-yolanda-reyes",
      "lautaro-joven-libertador-de-arauco-de-fernando-alegria",
    ],
    escpilar: true,
  },
  {
    slug: "el-secreto-del-orfebre-de-elia-barcelo",
    title: "El secreto del orfebre",
    authorSlug: "elia-barcelo",
    authorName: "Elia Barceló",
    type: "ficcion",
    genres: ["juvenil", "fantasia"],
    audience: "juvenil",
    year: 2003,
    pages: 128,
    summary:
      "En una ciudad donde el tiempo se ha detenido, un joven orfebre guarda un secreto que podría cambiarlo todo. La historia mezcla fantasía, misterio y reflexión sobre el paso del tiempo, el arte y el precio de la inmortalidad.",
    aboutThisBook:
      "Novela juvenil que combina elementos fantásticos con una prosa cuidada. Elia Barceló construye un mundo cerrado y fascinante donde cada detalle tiene significado.",
    characters: [
      {
        name: "El orfebre",
        description:
          "Un artesano cuyo secreto sostiene el equilibrio de toda la ciudad.",
      },
    ],
    centralConflict:
      "El dilema entre preservar un orden artificial o permitir que el tiempo siga su curso natural.",
    themes: [
      "Tiempo",
      "Arte y creación",
      "Inmortalidad",
      "Secretos",
      "Transformación",
    ],
    tone: "Misterioso, poético, reflexivo",
    forWhom:
      "Lectores juveniles que disfrutan de la fantasía con profundidad. También para adultos que buscan narrativa breve de calidad.",
    whyItMatters:
      "Un ejemplo de literatura juvenil española con ambición literaria real. Se lee mucho en institutos por su equilibrio entre accesibilidad y calidad.",
    relatedSlugs: [
      "erik-vogler-y-los-crimenes-del-rey-blanco-de-beatriz-oses",
      "el-jardin-secreto-de-frances-hodgson-burnett",
    ],
    escpilar: true,
  },
  {
    slug: "piloto-de-guerra-de-antoine-de-saint-exupery",
    title: "Piloto de guerra",
    authorSlug: "antoine-de-saint-exupery",
    authorName: "Antoine de Saint-Exupéry",
    type: "ficcion",
    genres: ["clasicos", "narrativa"],
    audience: "adulto",
    year: 1942,
    pages: 224,
    summary:
      "Saint-Exupéry narra una misión de reconocimiento aéreo durante la caída de Francia en 1940. Mientras sobrevuela un país en derrumbe, reflexiona sobre la guerra, la civilización, el sacrificio y el sentido de la acción humana cuando todo parece perdido.",
    aboutThisBook:
      "Escrito desde la experiencia directa del autor como piloto militar. No es una novela bélica al uso, sino una meditación filosófica envuelta en acción real.",
    themes: [
      "Guerra",
      "Sacrificio",
      "Civilización",
      "Humanismo",
      "Deber",
    ],
    tone: "Filosófico, lírico, contenido",
    forWhom:
      "Lectores de Saint-Exupéry que quieren ir más allá de El Principito. Cualquiera interesado en narrativa bélica con profundidad.",
    whyItMatters:
      "Un clásico del siglo XX que muestra la cara reflexiva de la guerra. Complementa perfectamente la lectura de El Principito.",
    relatedSlugs: [
      "la-lengua-de-las-mariposas-de-manuel-rivas",
      "don-juan-o-el-convidado-de-piedra-de-moliere",
    ],
  },
  {
    slug: "la-asistenta-de-freida-mcfadden",
    title: "La asistenta",
    authorSlug: "freida-mcfadden",
    authorName: "Freida McFadden",
    type: "ficcion",
    genres: ["thriller"],
    audience: "adulto",
    year: 2022,
    pages: 304,
    summary:
      "Millie, una mujer con un pasado complicado, consigue trabajo como asistenta interna en la mansión de los Winchester. Lo que parece una oportunidad perfecta se convierte en una pesadilla: la señora de la casa es controladora, el marido es encantador pero inquietante, y Millie descubre que no es la primera empleada que desaparece.",
    aboutThisBook:
      "Un thriller doméstico con giros bien ejecutados que se convirtió en fenómeno viral en redes sociales. La estructura de la revelación final cambia por completo la lectura del libro.",
    characters: [
      {
        name: "Millie",
        description:
          "Una mujer con secretos propios que intenta reconstruir su vida.",
      },
      {
        name: "Nina Winchester",
        description:
          "La señora de la casa, aparentemente perfecta pero profundamente perturbada.",
      },
      {
        name: "Andrew Winchester",
        description:
          "El marido carismático que no es lo que parece.",
      },
    ],
    centralConflict:
      "Millie queda atrapada entre una empleadora abusiva y un entorno donde nadie es de fiar.",
    themes: [
      "Manipulación",
      "Supervivencia",
      "Apariencias",
      "Poder doméstico",
      "Giro final",
    ],
    tone: "Tenso, adictivo, con humor negro puntual",
    forWhom:
      "Lectores de thriller que disfrutan de finales que lo cambian todo. Fans de libros tipo 'La chica del tren' o 'Perdida'.",
    whyItMatters:
      "Uno de los thrillers más virales de los últimos años. Su popularidad en español lo ha convertido en una búsqueda constante de resúmenes.",
    relatedSlugs: [
      "la-reina-del-sur-de-arturo-perez-reverte",
    ],
  },
  {
    slug: "erik-vogler-y-los-crimenes-del-rey-blanco-de-beatriz-oses",
    title: "Erik Vogler y los crímenes del Rey Blanco",
    authorSlug: "beatriz-oses",
    authorName: "Beatriz Osés",
    type: "ficcion",
    genres: ["juvenil", "aventura"],
    audience: "juvenil",
    year: 2014,
    pages: 192,
    summary:
      "Erik Vogler, un adolescente hipocondríaco y maniático, se ve envuelto en una serie de crímenes misteriosos relacionados con una leyenda medieval. Junto a su amigo Albert, deberá superar sus miedos (reales e inventados) para resolver el caso.",
    aboutThisBook:
      "Primera entrega de una saga juvenil española con un protagonista peculiar: un detective a su pesar, más preocupado por las bacterias que por los criminales.",
    characters: [
      {
        name: "Erik Vogler",
        description:
          "Adolescente hipocondríaco, inteligente y cobarde que resuelve misterios sin querer.",
      },
      {
        name: "Albert",
        description:
          "Amigo de Erik, más valiente y práctico.",
      },
    ],
    centralConflict:
      "Resolver unos crímenes que nadie más investiga mientras Erik lucha contra sus propios miedos absurdos.",
    themes: [
      "Misterio",
      "Amistad",
      "Miedos",
      "Humor",
      "Valentía",
    ],
    tone: "Humorístico, misterioso, ágil",
    forWhom:
      "Lectores juveniles de 10 a 14 años. Fans de misterio con humor.",
    whyItMatters:
      "Serie juvenil española muy recomendada en colegios. Combina misterio y humor de forma efectiva.",
    relatedSlugs: [
      "el-secreto-del-orfebre-de-elia-barcelo",
      "una-herencia-peligrosa-amanda-black-1-de-juan-gomez-jurado",
    ],
    escpilar: true,
  },
  {
    slug: "papelucho-de-marcela-paz",
    title: "Papelucho",
    authorSlug: "marcela-paz",
    authorName: "Marcela Paz",
    type: "ficcion",
    genres: ["infantil", "juvenil"],
    audience: "juvenil",
    year: 1947,
    pages: 120,
    summary:
      "El diario de un niño chileno imaginativo, ingenioso y desastroso que narra sus aventuras cotidianas con una lógica propia e irresistible. Papelucho se mete en líos, reflexiona sobre el mundo adulto y lo cuestiona todo con una mezcla de inocencia y astucia.",
    aboutThisBook:
      "Clásico absoluto de la literatura infantil chilena. Se ha reeditado ininterrumpidamente desde 1947 y forma parte del canon escolar de Chile.",
    characters: [
      {
        name: "Papelucho",
        description:
          "Un niño con una imaginación desbordante que ve el mundo desde una lógica propia.",
      },
    ],
    centralConflict:
      "La distancia entre cómo un niño entiende el mundo y cómo funciona realmente.",
    themes: [
      "Infancia",
      "Imaginación",
      "Familia",
      "Humor",
      "Mirada infantil del mundo adulto",
    ],
    tone: "Espontáneo, divertido, tierno",
    forWhom:
      "Lectores de 7 a 12 años. Imprescindible para cualquier niño hispanohablante.",
    whyItMatters:
      "Es el equivalente chileno de El pequeño Nicolás. Un clásico vivo que sigue funcionando con nuevas generaciones de lectores.",
    relatedSlugs: [
      "ay-cuanto-me-quiero-de-mauricio-paredes",
      "el-terror-de-sexto-b-de-yolanda-reyes",
    ],
    escpilar: true,
  },
  {
    slug: "los-siete-7-habitos-de-los-adolescentes-altamente-efectivos-de-sean-covey",
    title: "Los 7 hábitos de los adolescentes altamente efectivos",
    authorSlug: "sean-covey",
    authorName: "Sean Covey",
    type: "no-ficcion",
    genres: ["desarrollo-personal", "juvenil"],
    audience: "juvenil",
    year: 1998,
    pages: 288,
    summary:
      "Adaptación para jóvenes del clásico de Stephen Covey. Presenta siete hábitos para que los adolescentes tomen el control de su vida: ser proactivo, tener un plan, priorizar, pensar en ganar-ganar, escuchar antes de hablar, crear sinergias y renovarse.",
    aboutThisBook:
      "No es un libro de autoayuda genérico. Covey usa ejemplos reales, historias de otros adolescentes y un tono directo para hacer accesibles conceptos que normalmente se presentan para adultos.",
    themes: [
      "Productividad",
      "Autogestión",
      "Relaciones interpersonales",
      "Toma de decisiones",
      "Liderazgo personal",
    ],
    keyIdeas: [
      "Ser proactivo: tú eliges cómo reaccionar",
      "Empezar con un fin en mente: saber adónde vas",
      "Poner primero lo primero: gestionar prioridades",
      "Pensar ganar-ganar: las relaciones no son competiciones",
      "Buscar primero entender, luego ser entendido",
      "Sinergizar: el equipo es más que la suma de las partes",
      "Afilar la sierra: cuidarse física, mental y emocionalmente",
    ],
    forWhom:
      "Adolescentes que buscan herramientas prácticas para mejorar su vida. También útil para educadores y padres.",
    whyItMatters:
      "Es una referencia en orientación y tutoría en muchos centros educativos. Ofrece herramientas reales para una etapa difícil.",
    relatedSlugs: [
      "por-que-los-hombres-aman-a-las-cabronas-de-sherry-argov",
    ],
    escpilar: true,
  },
  {
    slug: "la-lengua-de-las-mariposas-de-manuel-rivas",
    title: "La lengua de las mariposas",
    authorSlug: "manuel-rivas",
    authorName: "Manuel Rivas",
    type: "ficcion",
    genres: ["clasicos", "narrativa"],
    audience: "adulto",
    year: 1995,
    pages: 32,
    summary:
      "Un niño gallego y su maestro republicano construyen una relación de aprendizaje y confianza en los últimos meses antes de la Guerra Civil. El relato termina con una escena devastadora que muestra cómo el miedo puede destruir los vínculos más auténticos.",
    aboutThisBook:
      "Relato breve incluido en el libro '¿Qué me quieres, amor?'. Fue adaptado al cine en 1999 con Fernando Fernán Gómez. Es uno de los textos más leídos sobre la Guerra Civil española.",
    characters: [
      {
        name: "Moncho",
        description:
          "Un niño tímido que descubre el mundo a través de su maestro.",
      },
      {
        name: "Don Gregorio",
        description:
          "Un maestro republicano que enseña con pasión y respeto.",
      },
    ],
    centralConflict:
      "La llegada de la guerra destruye la relación entre un niño y su maestro, obligando a Moncho a elegir entre la lealtad y la supervivencia.",
    themes: [
      "Guerra Civil",
      "Educación",
      "Infancia",
      "Miedo",
      "Traición",
      "Lealtad",
    ],
    tone: "Lírico, contenido, devastador en su final",
    forWhom:
      "Cualquier lector. Lectura imprescindible para entender la Guerra Civil desde la literatura. Muy usado en secundaria y bachillerato.",
    whyItMatters:
      "Es probablemente el relato más antologado sobre la Guerra Civil española. Tiene una de las búsquedas con más impresiones de toda la web.",
    relatedSlugs: [
      "piloto-de-guerra-de-antoine-de-saint-exupery",
      "maribel-y-la-extrana-familia-de-miguel-mihura",
    ],
    escpilar: true,
  },
  {
    slug: "pantalones-cortos-de-lara-rios",
    title: "Pantalones cortos",
    authorSlug: "lara-rios",
    authorName: "Lara Ríos",
    type: "ficcion",
    genres: ["juvenil"],
    audience: "juvenil",
    year: 1981,
    pages: 100,
    summary:
      "Un niño costarricense vive una infancia marcada por las aventuras cotidianas, los descubrimientos y los pequeños dramas que forjan la personalidad. Una novela de crecimiento contada desde la mirada de un chico que empieza a entender que el mundo es más complejo de lo que parece.",
    aboutThisBook:
      "Clásico de la literatura infantil y juvenil costarricense. Lectura obligatoria en muchos centros de Costa Rica y Centroamérica.",
    characters: [
      {
        name: "El protagonista",
        description:
          "Un niño que transita de la infancia a la preadolescencia.",
      },
    ],
    centralConflict:
      "Crecer y dejar atrás la inocencia mientras se descubren las contradicciones del mundo adulto.",
    themes: ["Infancia", "Crecimiento", "Identidad", "Familia", "Sociedad"],
    tone: "Cálido, nostálgico, cercano",
    forWhom:
      "Estudiantes de primaria y secundaria en Centroamérica. Lectores interesados en literatura latinoamericana.",
    whyItMatters:
      "Texto escolar fundamental en Costa Rica, con relevancia en todo Centroamérica.",
    relatedSlugs: [
      "papelucho-de-marcela-paz",
      "el-terror-de-sexto-b-de-yolanda-reyes",
    ],
    escpilar: true,
  },
  {
    slug: "calvina-de-carlo-frabetti",
    title: "Calvina",
    authorSlug: "carlo-frabetti",
    authorName: "Carlo Frabetti",
    type: "ficcion",
    genres: ["juvenil", "fantasia"],
    audience: "juvenil",
    year: 2007,
    pages: 112,
    summary:
      "Un niño encuentra a una chica misteriosa sin memoria que aparece en su vida sin explicación. Juntos intentan descubrir quién es Calvina y de dónde viene, en una historia que mezcla realismo y fantasía con ecos de Alicia en el País de las Maravillas.",
    aboutThisBook:
      "Frabetti, conocido por sus libros de matemáticas recreativas, construye aquí una historia donde lo fantástico se integra con naturalidad en lo cotidiano.",
    characters: [
      {
        name: "Calvina",
        description:
          "Una chica sin pasado que podría venir de la literatura misma.",
      },
    ],
    centralConflict:
      "Descubrir la identidad de Calvina, que parece existir entre la ficción y la realidad.",
    themes: [
      "Identidad",
      "Fantasía",
      "Literatura dentro de la literatura",
      "Amistad",
    ],
    tone: "Misterioso, poético, ágil",
    forWhom:
      "Lectores juveniles que disfrutan de historias entre lo real y lo fantástico.",
    whyItMatters:
      "Una propuesta original dentro de la literatura juvenil española, premiada y muy leída en colegios.",
    relatedSlugs: [
      "el-secreto-del-orfebre-de-elia-barcelo",
      "el-jardin-secreto-de-frances-hodgson-burnett",
    ],
    escpilar: true,
  },
  {
    slug: "maribel-y-la-extrana-familia-de-miguel-mihura",
    title: "Maribel y la extraña familia",
    authorSlug: "miguel-mihura",
    authorName: "Miguel Mihura",
    type: "ficcion",
    genres: ["teatro", "clasicos"],
    audience: "adulto",
    year: 1959,
    pages: 128,
    summary:
      "Maribel, una prostituta madrileña, conoce a Marcelino, un hombre ingenuo de provincias que quiere casarse con ella. La familia de Marcelino la acoge con un cariño desconcertante, y Maribel descubre que la bondad genuina puede existir. Una comedia que mezcla ternura, humor y una visión compasiva de la naturaleza humana.",
    aboutThisBook:
      "Una de las comedias más importantes del teatro español del siglo XX. Mihura combina humor inteligente con una mirada tierna sobre las personas.",
    characters: [
      {
        name: "Maribel",
        description:
          "Una mujer con pasado que se transforma al encontrar aceptación real.",
      },
      {
        name: "Marcelino",
        description:
          "Un hombre sencillo y bondadoso, sin malicia.",
      },
    ],
    centralConflict:
      "¿Puede alguien con un pasado difícil ser aceptada sin juicio por una familia inocente?",
    themes: [
      "Redención",
      "Bondad",
      "Prejuicios sociales",
      "Amor",
      "Humor",
    ],
    tone: "Cómico, tierno, sorprendente",
    forWhom:
      "Estudiantes de bachillerato y cualquier amante del teatro. Lectura obligatoria frecuente en España.",
    whyItMatters:
      "Premio Nacional de Teatro. Un texto que sigue haciendo reír y conmoviendo más de 60 años después.",
    relatedSlugs: [
      "don-juan-o-el-convidado-de-piedra-de-moliere",
      "la-lengua-de-las-mariposas-de-manuel-rivas",
    ],
    escpilar: true,
  },
  {
    slug: "donde-habitan-los-angeles-de-claudia-celis",
    title: "Donde habitan los ángeles",
    authorSlug: "claudia-celis",
    authorName: "Claudia Celis",
    type: "ficcion",
    genres: ["juvenil"],
    audience: "juvenil",
    year: 1995,
    pages: 160,
    summary:
      "Un niño mexicano es enviado a vivir con sus tíos al campo tras la muerte de su madre. En ese entorno rural descubre un mundo muy distinto al suyo, marcado por la naturaleza, la comunidad y los secretos familiares.",
    aboutThisBook:
      "Novela juvenil mexicana que explora el duelo y la adaptación a través de la mirada de un niño. Uno de los textos más asignados en las escuelas de México.",
    themes: [
      "Duelo",
      "Familia",
      "Campo vs. ciudad",
      "Crecimiento",
      "Naturaleza",
    ],
    tone: "Cálido, nostálgico, esperanzador",
    forWhom:
      "Estudiantes de secundaria en México y lectores interesados en narrativa juvenil latinoamericana.",
    whyItMatters:
      "Una de las novelas juveniles mexicanas más leídas en el ámbito escolar.",
    relatedSlugs: [
      "no-paso-nada-de-antonio-skarmeta",
      "papelucho-de-marcela-paz",
    ],
    escpilar: true,
  },
  {
    slug: "amigo-se-escribe-con-h-de-maria-fernanda-heredia",
    title: "Amigo se escribe con H",
    authorSlug: "maria-fernanda-heredia",
    authorName: "María Fernanda Heredia",
    type: "ficcion",
    genres: ["juvenil"],
    audience: "juvenil",
    year: 2003,
    pages: 104,
    summary:
      "Antonia no tiene amigos y está convencida de que nunca los tendrá. Hasta que llega H, un chico que lo cambia todo. Una historia sobre la amistad verdadera, los miedos a conectar con otros y el descubrimiento de que abrirse al otro siempre implica un riesgo.",
    aboutThisBook:
      "Premio latinoamericano de literatura infantil y juvenil. María Fernanda Heredia construye una voz adolescente auténtica y sin concesiones.",
    characters: [
      {
        name: "Antonia",
        description:
          "Una chica solitaria, inteligente y con muros emocionales.",
      },
      {
        name: "H",
        description:
          "Un chico que rompe las defensas de Antonia con naturalidad.",
      },
    ],
    centralConflict:
      "Superar el miedo a la vulnerabilidad para construir una amistad real.",
    themes: [
      "Amistad",
      "Soledad",
      "Vulnerabilidad",
      "Crecimiento",
      "Confianza",
    ],
    tone: "Honesto, tierno, con humor sutil",
    forWhom:
      "Lectores juveniles, especialmente quienes se sienten diferentes o solitarios.",
    whyItMatters:
      "Un referente de la literatura juvenil ecuatoriana y latinoamericana. Muy asignada en colegios.",
    relatedSlugs: [
      "el-terror-de-sexto-b-de-yolanda-reyes",
      "ay-cuanto-me-quiero-de-mauricio-paredes",
    ],
    escpilar: true,
  },
  {
    slug: "don-juan-o-el-convidado-de-piedra-de-moliere",
    title: "Don Juan o el convidado de piedra",
    authorSlug: "moliere",
    authorName: "Molière",
    type: "ficcion",
    genres: ["teatro", "clasicos"],
    audience: "adulto",
    year: 1665,
    pages: 96,
    summary:
      "Don Juan, un seductor sin escrúpulos ni fe, desafía todas las convenciones sociales y morales hasta que su destino lo alcanza en forma de una estatua de piedra que cobra vida. Molière transforma el mito del seductor en una crítica social afilada sobre la hipocresía.",
    aboutThisBook:
      "Versión francesa del mito de Don Juan, originalmente creado por Tirso de Molina. Molière le añade una capa de crítica social que la diferencia de otras versiones.",
    characters: [
      {
        name: "Don Juan",
        description:
          "Seductor, ateo, desafiante, carismático y autodestructivo.",
      },
      {
        name: "Sganarelle",
        description:
          "Criado de Don Juan, cobarde pero con sentido moral.",
      },
    ],
    centralConflict:
      "La tensión entre la libertad absoluta de Don Juan y las consecuencias morales de sus actos.",
    themes: [
      "Libertinaje",
      "Hipocresía",
      "Castigo divino",
      "Seducción",
      "Moral",
    ],
    tone: "Irónico, provocador, teatral",
    forWhom:
      "Estudiantes de literatura y teatro. Cualquier lector interesado en los clásicos universales.",
    whyItMatters:
      "Una de las versiones más influyentes del mito de Don Juan. Texto fundamental del teatro europeo.",
    relatedSlugs: [
      "maribel-y-la-extrana-familia-de-miguel-mihura",
      "la-dama-duende-de-pedro-calderon-de-la-barca",
    ],
    escpilar: true,
  },
  {
    slug: "lautaro-joven-libertador-de-arauco-de-fernando-alegria",
    title: "Lautaro, joven libertador de Arauco",
    authorSlug: "fernando-alegria",
    authorName: "Fernando Alegría",
    type: "ficcion",
    genres: ["juvenil", "novela-historica"],
    audience: "juvenil",
    year: 1943,
    pages: 128,
    summary:
      "La historia novelada del joven Lautaro, líder mapuche que lideró la resistencia contra los conquistadores españoles en el siglo XVI. Desde su captura siendo niño hasta su transformación en estratega militar, el libro recorre una de las historias más épicas de la resistencia indígena en América.",
    aboutThisBook:
      "Fernando Alegría convierte la historia en narrativa accesible sin perder rigor. Es un texto puente entre la historia y la literatura para jóvenes lectores.",
    themes: [
      "Resistencia",
      "Libertad",
      "Identidad",
      "Colonización",
      "Liderazgo",
    ],
    tone: "Épico, didáctico, emotivo",
    forWhom:
      "Estudiantes de secundaria, especialmente en Chile. Lectores interesados en historia precolombina y colonial.",
    whyItMatters:
      "Lectura escolar fundamental en Chile. Una forma accesible de acercarse a la historia mapuche.",
    relatedSlugs: [
      "no-paso-nada-de-antonio-skarmeta",
      "papelucho-de-marcela-paz",
    ],
    escpilar: true,
  },
  {
    slug: "una-herencia-peligrosa-amanda-black-1-de-juan-gomez-jurado",
    title: "Una herencia peligrosa (Amanda Black 1)",
    authorSlug: "juan-gomez-jurado",
    authorName: "Juan Gómez-Jurado",
    type: "ficcion",
    genres: ["juvenil", "aventura"],
    audience: "juvenil",
    year: 2021,
    pages: 208,
    summary:
      "Amanda Black, una niña huérfana criada por su tía, descubre en su décimo cumpleaños que su familia guarda un secreto extraordinario: un legado de siglos que la convierte en heredera de una misión peligrosa. Con la ayuda de sus nuevos aliados, Amanda empieza a entender quién es realmente.",
    aboutThisBook:
      "Primera entrega de la saga juvenil de Juan Gómez-Jurado, autor de thrillers para adultos. Un proyecto pensado para lectores de 9 a 12 años con ritmo de aventura y misterio.",
    characters: [
      {
        name: "Amanda Black",
        description:
          "Una niña inteligente y valiente que descubre un legado familiar secreto.",
      },
    ],
    centralConflict:
      "Amanda debe aceptar una herencia que la pone en peligro y descubrir la verdad sobre su familia.",
    themes: [
      "Aventura",
      "Familia",
      "Identidad",
      "Misterio",
      "Valentía",
    ],
    tone: "Trepidante, divertido, misterioso",
    forWhom: "Lectores de 9 a 12 años que buscan aventura con misterio.",
    whyItMatters:
      "Saga juvenil española con enorme éxito comercial. Una puerta de entrada a la lectura para muchos niños.",
    relatedSlugs: [
      "erik-vogler-y-los-crimenes-del-rey-blanco-de-beatriz-oses",
    ],
    escpilar: true,
  },
  {
    slug: "el-jardin-secreto-de-frances-hodgson-burnett",
    title: "El jardín secreto",
    authorSlug: "frances-hodgson-burnett",
    authorName: "Frances Hodgson Burnett",
    type: "ficcion",
    genres: ["clasicos", "juvenil"],
    audience: "juvenil",
    year: 1911,
    pages: 256,
    summary:
      "Mary Lennox, una niña malcriada y solitaria, es enviada a vivir a la mansión de un tío tras quedar huérfana en la India. Allí descubre un jardín cerrado y abandonado que se convertirá en el motor de su transformación y la de quienes la rodean.",
    aboutThisBook:
      "Clásico universal de la literatura infantil que ha inspirado películas, musicales y adaptaciones. Su mensaje sobre la naturaleza como fuerza sanadora sigue vigente.",
    characters: [
      {
        name: "Mary Lennox",
        description:
          "Una niña antipática que se transforma al descubrir la empatía y la naturaleza.",
      },
      {
        name: "Colin Craven",
        description:
          "Primo de Mary, encerrado en su habitación, convencido de que morirá.",
      },
      {
        name: "Dickon",
        description:
          "Un chico del campo que conecta con la naturaleza y los animales.",
      },
    ],
    centralConflict:
      "Devolver la vida al jardín es devolver la vida a Mary, a Colin y a toda la casa.",
    themes: [
      "Transformación",
      "Naturaleza",
      "Soledad",
      "Amistad",
      "Sanación",
    ],
    tone: "Lírico, esperanzador, envolvente",
    forWhom:
      "Lectores de todas las edades. Imprescindible para cualquier lista de clásicos juveniles.",
    whyItMatters:
      "Un clásico que no envejece. Sigue siendo una de las historias más buscadas y recomendadas en español.",
    relatedSlugs: [
      "papelucho-de-marcela-paz",
      "calvina-de-carlo-frabetti",
    ],
    escpilar: true,
  },
  {
    slug: "los-ojos-de-mi-princesa-de-carlos-cuauhtemoc-sanchez",
    title: "Los ojos de mi princesa",
    authorSlug: "carlos-cuauhtemoc-sanchez",
    authorName: "Carlos Cuauhtémoc Sánchez",
    type: "ficcion",
    genres: ["juvenil", "romance"],
    audience: "juvenil",
    year: 2004,
    pages: 256,
    summary:
      "Un adolescente tímido se enamora de una chica nueva en su instituto. Lo que empieza como un primer amor inocente se complica cuando descubre que ella vive una situación familiar difícil. Una novela que mezcla romance adolescente con temas más duros como el abuso y la superación.",
    aboutThisBook:
      "Uno de los libros juveniles más vendidos en México y América Latina. Cuauhtémoc Sánchez construye una historia que conecta directamente con las emociones adolescentes.",
    themes: [
      "Primer amor",
      "Adolescencia",
      "Problemas familiares",
      "Superación",
      "Valentía",
    ],
    tone: "Emotivo, directo, a veces melodramático",
    forWhom:
      "Adolescentes. Muy popular entre lectores de 13 a 18 años en México y América Latina.",
    whyItMatters:
      "Un fenómeno editorial juvenil en español. Para bien o para mal, ha formado parte de la experiencia lectora de millones de jóvenes latinos.",
    relatedSlugs: [
      "amigo-se-escribe-con-h-de-maria-fernanda-heredia",
      "dimelo-bajito-de-mercedes-ron",
    ],
  },
  {
    slug: "la-reina-del-sur-de-arturo-perez-reverte",
    title: "La Reina del Sur",
    authorSlug: "arturo-perez-reverte",
    authorName: "Arturo Pérez-Reverte",
    type: "ficcion",
    genres: ["narrativa", "thriller"],
    audience: "adulto",
    year: 2002,
    pages: 544,
    summary:
      "Teresa Mendoza huye de México tras la muerte de su novio narco y reconstruye su vida en España, donde se convierte en la narcotraficante más poderosa del Estrecho de Gibraltar. Una novela sobre el poder, la supervivencia y el precio de reinventarse.",
    aboutThisBook:
      "Pérez-Reverte investigó durante años el narcotráfico entre México y España para esta novela. Fue adaptada como serie de televisión con enorme éxito internacional.",
    characters: [
      {
        name: "Teresa Mendoza",
        description:
          "De novia de un narco mexicano a reina del tráfico en el Estrecho.",
      },
    ],
    centralConflict:
      "Sobrevivir y ascender en un mundo masculino y violento sin perder la humanidad por completo.",
    themes: [
      "Poder",
      "Narcotráfico",
      "Supervivencia",
      "Transformación",
      "Soledad del poder",
    ],
    tone: "Duro, cinematográfico, absorbente",
    forWhom:
      "Lectores adultos que disfrutan de narrativa de acción con profundidad.",
    whyItMatters:
      "Una de las novelas españolas contemporáneas más leídas internacionalmente.",
    relatedSlugs: [
      "la-asistenta-de-freida-mcfadden",
    ],
  },
  {
    slug: "abuelita-opalina-de-maria-puncel",
    title: "Abuelita Opalina",
    authorSlug: "maria-puncel",
    authorName: "María Puncel",
    type: "ficcion",
    genres: ["infantil", "juvenil"],
    audience: "juvenil",
    year: 1981,
    pages: 96,
    summary:
      "Isa no tiene abuela y cuando en el cole le piden que hable de la suya, se inventa una: Opalina. Lo que empieza como una mentira se convierte en una aventura cuando Opalina cobra vida propia y resulta ser mucho más interesante que cualquier abuela real.",
    aboutThisBook:
      "Clásico de la literatura infantil española. Un libro que celebra la imaginación sin moralizar.",
    characters: [
      {
        name: "Isa",
        description:
          "Una niña imaginativa que crea a su abuela ideal.",
      },
      {
        name: "Opalina",
        description:
          "Una abuela inventada que resulta más real que la ficción.",
      },
    ],
    centralConflict:
      "La distancia entre la fantasía y la realidad, y cómo a veces la imaginación llena los huecos que la vida deja.",
    themes: [
      "Imaginación",
      "Familia",
      "Mentira creativa",
      "Soledad",
      "Ternura",
    ],
    tone: "Tierno, divertido, imaginativo",
    forWhom: "Lectores de 6 a 10 años. Ideal para primeros lectores.",
    whyItMatters:
      "Lectura escolar muy frecuente en España. Un libro que demuestra que la imaginación es un superpoder.",
    relatedSlugs: [
      "papelucho-de-marcela-paz",
      "ay-cuanto-me-quiero-de-mauricio-paredes",
    ],
    escpilar: true,
  },
  {
    slug: "el-murmullo-de-las-abejas-de-sofia-segovia",
    title: "El murmullo de las abejas",
    authorSlug: "sofia-segovia",
    authorName: "Sofía Segovia",
    type: "ficcion",
    genres: ["narrativa", "novela-historica"],
    audience: "adulto",
    year: 2015,
    pages: 448,
    summary:
      "En el México de principios del siglo XX, un bebé abandonado es encontrado cubierto de abejas. Simonopio, como lo llaman, crece con dones especiales y una conexión con la naturaleza que lo convierte en protector de la familia que lo acogió. Una saga familiar entre la revolución, la gripe española y la transformación del mundo rural.",
    aboutThisBook:
      "Novela mexicana que mezcla realismo mágico con saga familiar histórica. Se convirtió en bestseller en México y Estados Unidos.",
    themes: [
      "Familia",
      "Naturaleza",
      "Revolución mexicana",
      "Realismo mágico",
      "Comunidad",
    ],
    tone: "Envolvente, poético, épico",
    forWhom:
      "Lectores adultos que disfrutan de sagas familiares con elementos mágicos.",
    whyItMatters:
      "Un fenómeno editorial mexicano que ha conectado con lectores internacionales.",
    relatedSlugs: [
      "donde-habitan-los-angeles-de-claudia-celis",
      "la-lengua-de-las-mariposas-de-manuel-rivas",
    ],
  },
  {
    slug: "la-dama-duende-de-pedro-calderon-de-la-barca",
    title: "La dama duende",
    authorSlug: "pedro-calderon-de-la-barca",
    authorName: "Pedro Calderón de la Barca",
    type: "ficcion",
    genres: ["teatro", "clasicos"],
    audience: "adulto",
    year: 1629,
    pages: 128,
    summary:
      "Doña Ángela, una viuda joven encerrada en casa por sus hermanos, descubre un pasadizo secreto que comunica con la habitación de un huésped. Usando ese acceso, se convierte en un 'duende' misterioso que fascina al invitado. Una comedia de enredo sobre la libertad femenina en el Siglo de Oro.",
    aboutThisBook:
      "Una de las comedias de capa y espada más representadas del teatro clásico español. Calderón muestra a una mujer inteligente que usa el ingenio para burlar las restricciones que le imponen.",
    characters: [
      {
        name: "Doña Ángela",
        description:
          "Una viuda inteligente y atrevida que desafía las normas usando la astucia.",
      },
      {
        name: "Don Manuel",
        description:
          "El huésped fascinado por el misterioso 'duende'.",
      },
    ],
    centralConflict:
      "La tensión entre el encierro impuesto por los hermanos y el deseo de libertad de Doña Ángela.",
    themes: [
      "Libertad femenina",
      "Ingenio",
      "Honor",
      "Enredo",
      "Amor",
    ],
    tone: "Cómico, ingenioso, teatral",
    forWhom:
      "Estudiantes de literatura española. Lectores interesados en el Siglo de Oro.",
    whyItMatters:
      "Obra fundamental del teatro español. Se estudia en bachillerato y universidad por su tratamiento del papel de la mujer.",
    relatedSlugs: [
      "don-juan-o-el-convidado-de-piedra-de-moliere",
      "maribel-y-la-extrana-familia-de-miguel-mihura",
    ],
    escpilar: true,
  },
  {
    slug: "dimelo-bajito-de-mercedes-ron",
    title: "Dímelo bajito",
    authorSlug: "mercedes-ron",
    authorName: "Mercedes Ron",
    type: "ficcion",
    genres: ["romance", "juvenil"],
    audience: "juvenil",
    year: 2020,
    pages: 480,
    summary:
      "Kamila llega a un nuevo pueblo donde todo le resulta ajeno, hasta que conoce a Thiago, un chico que parece querer mantener las distancias tanto como ella. Una historia de amor que explora los miedos, los secretos y lo difícil que es abrirse a alguien cuando has aprendido a protegerte.",
    aboutThisBook:
      "Primera parte de la trilogía 'Dímelo' de Mercedes Ron, autora superventas del new adult en español.",
    characters: [
      {
        name: "Kamila",
        description:
          "Una chica protectora de sí misma que empieza de cero en un lugar nuevo.",
      },
      {
        name: "Thiago",
        description:
          "Un chico con muros emocionales que esconde más de lo que muestra.",
      },
    ],
    centralConflict:
      "Dos personas que se atraen pero tienen miedo de confiar en el otro.",
    themes: [
      "Amor",
      "Confianza",
      "Secretos",
      "Adolescencia",
      "Vulnerabilidad",
    ],
    tone: "Romántico, intenso, adictivo",
    forWhom:
      "Lectores de 14 a 25 años que disfrutan del romance contemporáneo.",
    whyItMatters:
      "Mercedes Ron es una de las autoras más leídas en español por adolescentes y jóvenes adultos.",
    relatedSlugs: [
      "los-ojos-de-mi-princesa-de-carlos-cuauhtemoc-sanchez",
    ],
  },
  {
    slug: "miedo-de-care-santos",
    title: "Miedo",
    authorSlug: "care-santos",
    authorName: "Care Santos",
    type: "ficcion",
    genres: ["juvenil", "thriller"],
    audience: "juvenil",
    year: 2007,
    pages: 160,
    summary:
      "Un grupo de amigos se reúne para contar historias de miedo. Pero a medida que avanzan las historias, la línea entre ficción y realidad se difumina y el miedo deja de ser un juego.",
    aboutThisBook:
      "Una novela juvenil que funciona como colección de relatos de terror engarzados por una trama general. Care Santos domina el género con eficacia.",
    themes: [
      "Miedo",
      "Ficción vs. realidad",
      "Amistad",
      "Suspense",
    ],
    tone: "Inquietante, ágil, adictivo",
    forWhom:
      "Lectores juveniles que disfrutan del terror y el suspense.",
    whyItMatters:
      "Referencia del terror juvenil en español. Lectura frecuente en institutos.",
    relatedSlugs: [
      "erik-vogler-y-los-crimenes-del-rey-blanco-de-beatriz-oses",
      "calvina-de-carlo-frabetti",
    ],
    escpilar: true,
  },
  {
    slug: "ninfa-rota-de-alfredo-gomez-cerda",
    title: "Ninfa rota",
    authorSlug: "alfredo-gomez-cerda",
    authorName: "Alfredo Gómez Cerdá",
    type: "ficcion",
    genres: ["juvenil"],
    audience: "juvenil",
    year: 2019,
    pages: 176,
    summary:
      "La historia de una adolescente que vive una relación de pareja que poco a poco se vuelve tóxica. Lo que parecía amor se transforma en control, manipulación y violencia. Una novela necesaria sobre la violencia de género en la adolescencia.",
    aboutThisBook:
      "Gómez Cerdá aborda un tema urgente con sensibilidad y sin sensacionalismo. El libro se ha convertido en herramienta educativa en muchos centros.",
    themes: [
      "Violencia de género",
      "Relaciones tóxicas",
      "Adolescencia",
      "Autoestima",
      "Liberación",
    ],
    tone: "Directo, emotivo, necesario",
    forWhom:
      "Adolescentes y educadores. Lectura recomendada para prevención de violencia de género.",
    whyItMatters:
      "Aborda la violencia de género adolescente de forma accesible. Muy usado como recurso educativo.",
    relatedSlugs: [
      "amigo-se-escribe-con-h-de-maria-fernanda-heredia",
      "el-terror-de-sexto-b-de-yolanda-reyes",
    ],
    escpilar: true,
  },
  {
    slug: "el-velero-de-cristal-de-jose-mauro-de-vasconcelos",
    title: "El velero de cristal",
    authorSlug: "jose-mauro-de-vasconcelos",
    authorName: "José Mauro de Vasconcelos",
    type: "ficcion",
    genres: ["infantil", "juvenil"],
    audience: "juvenil",
    year: 1973,
    pages: 128,
    summary:
      "Un niño pobre brasileño sueña con tener un velero de cristal que ve en un escaparate. Su camino para conseguirlo lo lleva a encontrarse con personajes que le enseñan sobre la generosidad, el valor de los sueños y la dureza de la vida.",
    aboutThisBook:
      "Del autor de 'Mi planta de naranja lima'. Una fábula sobre la pobreza infantil y la capacidad de soñar en las circunstancias más difíciles.",
    themes: [
      "Pobreza",
      "Sueños",
      "Infancia",
      "Generosidad",
      "Esperanza",
    ],
    tone: "Poético, emotivo, sencillo",
    forWhom:
      "Lectores de todas las edades. Especialmente relevante en contextos educativos latinoamericanos.",
    whyItMatters:
      "Parte del canon de la literatura infantil latinoamericana.",
    relatedSlugs: [
      "papelucho-de-marcela-paz",
      "donde-habitan-los-angeles-de-claudia-celis",
    ],
    escpilar: true,
  },
  {
    slug: "el-varon-domado-de-esther-villar",
    title: "El varón domado",
    authorSlug: "esther-villar",
    authorName: "Esther Vilar",
    type: "no-ficcion",
    genres: ["ensayo"],
    audience: "adulto",
    year: 1971,
    pages: 176,
    summary:
      "Un ensayo provocador que invierte la narrativa tradicional sobre la opresión de género: Vilar argumenta que son los hombres quienes están condicionados para servir a las mujeres, trabajar para ellas y buscar su aprobación, mientras que las mujeres disfrutan de privilegios que la sociedad no reconoce.",
    aboutThisBook:
      "Libro enormemente polémico cuando se publicó. Generó un debate público feroz, incluyendo un debate televisado entre Vilar y Simone de Beauvoir. Se lea como se lea, obliga a cuestionar suposiciones.",
    themes: [
      "Género",
      "Roles sociales",
      "Provocación intelectual",
      "Relaciones de poder",
    ],
    keyIdeas: [
      "Los hombres están condicionados desde niños para trabajar y proveer",
      "La sociedad premia a las mujeres por su apariencia más que por su productividad",
      "El sistema de roles beneficia a ambos sexos de formas no evidentes",
      "Cuestionar el relato dominante no significa negar la desigualdad, sino complicarlo",
    ],
    forWhom:
      "Lectores interesados en debates sobre género, sociología y provocación intelectual.",
    whyItMatters:
      "Un texto que sigue generando debate 50 años después. Importante para quien quiera entender la historia del pensamiento sobre género.",
    relatedSlugs: [
      "por-que-los-hombres-aman-a-las-cabronas-de-sherry-argov",
    ],
  },
  {
    slug: "el-color-de-las-cosas-invisibles-de-andrea-longarela",
    title: "El color de las cosas invisibles",
    authorSlug: "andrea-longarela",
    authorName: "Andrea Longarela",
    type: "ficcion",
    genres: ["romance", "juvenil"],
    audience: "juvenil",
    year: 2022,
    pages: 384,
    summary:
      "Aurora, una chica ciega, y Liam, un chico que acaba de mudarse a su pueblo, se encuentran y construyen una relación donde la conexión emocional importa más que la mirada. Una historia de amor que explora la discapacidad visual desde la normalidad, no desde la pena.",
    aboutThisBook:
      "Una de las novelas juveniles españolas más leídas en los últimos años. Longarela trata la discapacidad con naturalidad y centra la historia en los personajes, no en su condición.",
    themes: [
      "Amor",
      "Discapacidad",
      "Normalización",
      "Conexión emocional",
      "Superación",
    ],
    tone: "Tierno, luminoso, emotivo",
    forWhom:
      "Lectores juveniles y young adult. Especialmente quienes buscan romances con profundidad.",
    whyItMatters:
      "Aborda la discapacidad de forma respetuosa y natural en un género que rara vez lo hace.",
    relatedSlugs: [
      "dimelo-bajito-de-mercedes-ron",
      "amigo-se-escribe-con-h-de-maria-fernanda-heredia",
    ],
  },
  {
    slug: "pulgarcito-de-charles-perrault",
    title: "Pulgarcito",
    authorSlug: "charles-perrault",
    authorName: "Charles Perrault",
    type: "ficcion",
    genres: ["infantil", "clasicos"],
    audience: "infantil",
    year: 1697,
    pages: 32,
    summary:
      "El más pequeño de siete hermanos, abandonado por sus padres en el bosque por falta de recursos, utiliza su inteligencia para salvar a todos. Se enfrenta a un ogro, roba sus botas de siete leguas y consigue prosperidad para su familia.",
    aboutThisBook:
      "Cuento clásico de Charles Perrault incluido en 'Los cuentos de mamá ganso'. Una historia sobre el ingenio que supera a la fuerza bruta.",
    characters: [
      {
        name: "Pulgarcito",
        description:
          "El más pequeño y más listo de siete hermanos.",
      },
      {
        name: "El ogro",
        description:
          "El antagonista, poderoso pero torpe.",
      },
    ],
    centralConflict:
      "Un niño diminuto y despreciado debe salvar a sus hermanos usando solo su inteligencia.",
    themes: [
      "Ingenio",
      "Supervivencia",
      "Familia",
      "Valentía",
      "Justicia",
    ],
    tone: "Fantástico, moralizante, clásico",
    forWhom: "Lectores infantiles y estudiantes que trabajan con cuentos clásicos.",
    whyItMatters:
      "Uno de los cuentos más universales de la tradición europea.",
    relatedSlugs: [
      "abuelita-opalina-de-maria-puncel",
      "el-jardin-secreto-de-frances-hodgson-burnett",
    ],
    escpilar: true,
  },
  {
    slug: "historia-de-un-pepe-de-millajose-vidaurre",
    title: "Historia de un pepe",
    authorSlug: "millajose-vidaurre",
    authorName: "Millajosé Vidaurre",
    type: "ficcion",
    genres: ["juvenil"],
    audience: "juvenil",
    year: 1980,
    pages: 80,
    summary:
      "La historia de un niño chileno que crece entre las dificultades cotidianas de una familia humilde. Un relato de iniciación que captura con honestidad la vida en los sectores populares y las experiencias que marcan la infancia.",
    aboutThisBook:
      "Texto representativo de la literatura infantil chilena comprometida con la realidad social.",
    themes: [
      "Infancia",
      "Pobreza",
      "Crecimiento",
      "Familia",
      "Realidad social",
    ],
    tone: "Directo, tierno, realista",
    forWhom: "Estudiantes chilenos de primaria y secundaria.",
    whyItMatters:
      "Lectura escolar frecuente en Chile. Retrata una realidad que otros textos infantiles ignoran.",
    relatedSlugs: [
      "papelucho-de-marcela-paz",
      "pantalones-cortos-de-lara-rios",
    ],
    escpilar: true,
  },
  {
    slug: "la-historia-de-iqbal-de-francesco-dadamo",
    title: "La historia de Iqbal",
    authorSlug: "francesco-dadamo",
    authorName: "Francesco D'Adamo",
    type: "ficcion",
    genres: ["juvenil"],
    audience: "juvenil",
    year: 2001,
    pages: 128,
    summary:
      "Basada en la historia real de Iqbal Masih, un niño pakistaní que fue esclavo en una fábrica de alfombras y se convirtió en activista contra el trabajo infantil. Una novela que denuncia la explotación laboral infantil con una historia poderosa y emotiva.",
    aboutThisBook:
      "Novelización de una historia real que conmocionó al mundo. Iqbal Masih fue asesinado a los 12 años por su activismo.",
    themes: [
      "Trabajo infantil",
      "Libertad",
      "Activismo",
      "Derechos humanos",
      "Valentía",
    ],
    tone: "Duro, esperanzador, necesario",
    forWhom:
      "Estudiantes de secundaria. Lectura fundamental para trabajar derechos humanos en el aula.",
    whyItMatters:
      "Texto frecuente en planes de lectura sobre derechos humanos en colegios de habla hispana.",
    relatedSlugs: [
      "el-terror-de-sexto-b-de-yolanda-reyes",
      "lautaro-joven-libertador-de-arauco-de-fernando-alegria",
    ],
    escpilar: true,
  },
  {
    slug: "cuentos-de-emilia-pardo-bazan",
    title: "Cuentos",
    authorSlug: "emilia-pardo-bazan",
    authorName: "Emilia Pardo Bazán",
    type: "ficcion",
    genres: ["clasicos", "narrativa"],
    audience: "adulto",
    year: 1890,
    pages: 300,
    summary:
      "Colección de relatos breves que retratan la España rural y urbana del siglo XIX con una mirada naturalista. Pardo Bazán disecciona la sociedad de su tiempo con precisión, abordando temas como la violencia, la superstición, las diferencias de clase y la condición de la mujer.",
    aboutThisBook:
      "Pardo Bazán fue una de las escritoras más prolíficas del siglo XIX español. Sus cuentos son considerados los mejores del naturalismo en castellano.",
    themes: [
      "Naturalismo",
      "Sociedad española",
      "Violencia",
      "Mujer",
      "Clase social",
    ],
    tone: "Realista, incisivo, a veces brutal",
    forWhom:
      "Estudiantes de literatura española y lectores interesados en narrativa clásica.",
    whyItMatters:
      "Referencia obligada del naturalismo español y del papel de la mujer en la literatura del XIX.",
    relatedSlugs: [
      "la-lengua-de-las-mariposas-de-manuel-rivas",
      "la-dama-duende-de-pedro-calderon-de-la-barca",
    ],
    escpilar: true,
  },
  {
    slug: "entre-lineas-el-cuento-o-la-vida-de-luis-landero",
    title: "Entre líneas: el cuento o la vida",
    authorSlug: "luis-landero",
    authorName: "Luis Landero",
    type: "no-ficcion",
    genres: ["ensayo"],
    audience: "adulto",
    year: 2001,
    pages: 208,
    summary:
      "Landero reflexiona sobre la relación entre la vida y la escritura, sobre cómo las historias que contamos nos construyen y cómo la ficción y la realidad se alimentan mutuamente. Un ensayo narrativo que es también un autorretrato literario.",
    aboutThisBook:
      "Mezcla de ensayo, autobiografía y reflexión literaria. Landero escribe sobre escribir con la misma maestría que en sus novelas.",
    themes: [
      "Escritura",
      "Ficción y realidad",
      "Autobiografía",
      "Oficio literario",
    ],
    keyIdeas: [
      "La vida y la ficción se retroalimentan constantemente",
      "Contar historias es una forma de entender quiénes somos",
      "El oficio de escribir es también un oficio de vivir",
    ],
    forWhom:
      "Lectores que disfrutan reflexiones sobre literatura y escritura.",
    whyItMatters:
      "Un texto que interesa tanto a escritores como a lectores curiosos sobre el oficio literario.",
    relatedSlugs: [
      "cuentos-de-emilia-pardo-bazan",
    ],
  },
  {
    slug: "muerte-en-el-priorato-de-toti-martinez-de-lezea",
    title: "Muerte en el priorato",
    authorSlug: "toti-martinez-de-lezea",
    authorName: "Toti Martínez de Lezea",
    type: "ficcion",
    genres: ["novela-historica", "thriller"],
    audience: "adulto",
    year: 2005,
    pages: 320,
    summary:
      "En un priorato medieval del País Vasco, la muerte de un monje desencadena una investigación que destapa secretos, intrigas y tensiones entre el poder eclesiástico y la comunidad local. Novela histórica con estructura de misterio.",
    aboutThisBook:
      "Martínez de Lezea es una de las autoras más prolíficas de novela histórica ambientada en el País Vasco. Combina rigor histórico con narrativa accesible.",
    themes: [
      "Misterio medieval",
      "Poder eclesiástico",
      "Secretos",
      "Historia vasca",
    ],
    tone: "Atmosférico, intrigante, detallado",
    forWhom:
      "Lectores de novela histórica y misterio. Amantes de tramas ambientadas en la Edad Media.",
    whyItMatters:
      "Representa bien el género de novela histórica española ambientada en el medievo.",
    relatedSlugs: [
      "la-asistenta-de-freida-mcfadden",
      "la-reina-del-sur-de-arturo-perez-reverte",
    ],
  },
  {
    slug: "tristes-armas-de-marina-mayoral",
    title: "Tristes armas",
    authorSlug: "marina-mayoral",
    authorName: "Marina Mayoral",
    type: "ficcion",
    genres: ["juvenil", "novela-historica"],
    audience: "juvenil",
    year: 1994,
    pages: 128,
    summary:
      "Basada en la evacuación real de niños españoles durante la Guerra Civil, la novela cuenta la historia de Harmonía, una niña gallega enviada a Inglaterra para protegerla de la guerra. Lejos de casa, debe adaptarse a un mundo extraño mientras añora lo que dejó atrás.",
    aboutThisBook:
      "Marina Mayoral se basa en hechos reales: los 'niños de la guerra' que fueron evacuados a otros países. Una historia necesaria contada desde la perspectiva infantil.",
    themes: [
      "Guerra Civil",
      "Exilio infantil",
      "Nostalgia",
      "Adaptación",
      "Infancia rota",
    ],
    tone: "Emotivo, contenido, histórico",
    forWhom:
      "Estudiantes de secundaria y lectores interesados en la Guerra Civil española.",
    whyItMatters:
      "Lectura escolar que aborda un episodio poco conocido de la Guerra Civil desde la mirada infantil.",
    relatedSlugs: [
      "la-lengua-de-las-mariposas-de-manuel-rivas",
      "no-paso-nada-de-antonio-skarmeta",
    ],
    escpilar: true,
  },
  {
    slug: "julia-de-isabel-clara-simo",
    title: "Julia",
    authorSlug: "isabel-clara-simo",
    authorName: "Isabel-Clara Simó",
    type: "ficcion",
    genres: ["juvenil", "narrativa"],
    audience: "juvenil",
    year: 1993,
    pages: 120,
    summary:
      "Julia, una adolescente de Alcoi, vive el despertar de la conciencia social y política durante la transición española. A través de sus ojos, la novela retrata las tensiones familiares, el primer amor y la búsqueda de identidad en un momento histórico de cambio.",
    aboutThisBook:
      "Novela juvenil que mezcla el coming-of-age con el contexto político de la España de la Transición. Simó construye una protagonista memorable.",
    themes: [
      "Adolescencia",
      "Conciencia política",
      "Transición española",
      "Primer amor",
      "Identidad",
    ],
    tone: "Íntimo, político, sensible",
    forWhom:
      "Estudiantes de secundaria y bachillerato, especialmente en la Comunidad Valenciana y Cataluña.",
    whyItMatters:
      "Lectura escolar frecuente en el ámbito lingüístico catalán/valenciano.",
    relatedSlugs: [
      "la-lengua-de-las-mariposas-de-manuel-rivas",
      "no-paso-nada-de-antonio-skarmeta",
    ],
    escpilar: true,
  },
];
