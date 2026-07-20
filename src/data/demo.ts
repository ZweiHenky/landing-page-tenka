export const LIGAS = [
  { id: "liga-1", nombre: "Liga Nocturna CDMX", categoria: "Libre", tipo: "Futbol 7", logo: null },
  { id: "liga-2", nombre: "Liga Premier Monterrey", categoria: "Femenil", tipo: "Soccer", logo: null },
  { id: "liga-3", nombre: "Copa Arena MX", categoria: "Mixto", tipo: "Futbol 5", logo: null },
  { id: "liga-4", nombre: "Torneo Relámpago GDL", categoria: "Veteranos", tipo: "Futbol 7", logo: null },
]

export const EQUIPOS = [
  { id: "t1", nombre: "Águilas", escudo: null },
  { id: "t2", nombre: "Dragones", escudo: null },
  { id: "t3", nombre: "Genix", escudo: null },
  { id: "t4", nombre: "Mi Equipo", escudo: null },
  { id: "t5", nombre: "Leones", escudo: null },
  { id: "t6", nombre: "Tiburones", escudo: null },
  { id: "t7", nombre: "Rayos", escudo: null },
  { id: "t8", nombre: "Fénix", escudo: null },
]

export const TABLA_POSICIONES = [
  { pos: 1, nombre: "Águilas", pj: 6, g: 5, e: 0, p: 1, gf: 18, gc: 6, dg: 12, pts: 15 },
  { pos: 2, nombre: "Leones", pj: 6, g: 4, e: 2, p: 0, gf: 14, gc: 5, dg: 9, pts: 14 },
  { pos: 3, nombre: "Genix", pj: 6, g: 3, e: 2, p: 1, gf: 11, gc: 7, dg: 4, pts: 11 },
  { pos: 4, nombre: "Tiburones", pj: 6, g: 2, e: 1, p: 3, gf: 8, gc: 12, dg: -4, pts: 7 },
  { pos: 5, nombre: "Dragones", pj: 6, g: 1, e: 1, p: 4, gf: 6, gc: 15, dg: -9, pts: 4 },
  { pos: 6, nombre: "Mi Equipo", pj: 6, g: 0, e: 0, p: 6, gf: 3, gc: 20, dg: -17, pts: 0 },
]

export const JORNADAS = [
  { numero: 1, fecha: "10 Ago", partidos: 3 },
  { numero: 2, fecha: "17 Ago", partidos: 3 },
  { numero: 3, fecha: "24 Ago", partidos: 3 },
  { numero: 4, fecha: "31 Ago", partidos: 3 },
  { numero: 5, fecha: "07 Sep", partidos: 3 },
]

export const PARTIDOS = [
  { local: "Águilas", visitante: "Dragones", golesL: 3, golesV: 1, estado: "FINALIZADO" },
  { local: "Leones", visitante: "Genix", golesL: 2, golesV: 0, estado: "FINALIZADO" },
  { local: "Tiburones", visitante: "Mi Equipo", golesL: 1, golesV: 1, estado: "FINALIZADO" },
]

export const ECOSISTEMA_NODOS = [
  { id: "ligas", nombre: "Ligas", descripcion: "Gestiona múltiples ligas con su propia identidad" },
  { id: "divisiones", nombre: "Divisiones", descripcion: "Categorías, tipos y competencias por división" },
  { id: "equipos", nombre: "Equipos", descripcion: "Perfiles, escudos y jugadores por equipo" },
  { id: "jornadas", nombre: "Jornadas", descripcion: "Programación automática de partidos" },
  { id: "estadisticas", nombre: "Estadísticas", descripcion: "Tabla de posiciones en tiempo real" },
  { id: "playoffs", nombre: "Eliminatorias", descripcion: "Árboles de playoff automáticos" },
]

export const CONEXIONES = [
  ["ligas", "divisiones"],
  ["divisiones", "equipos"],
  ["divisiones", "jornadas"],
  ["equipos", "estadisticas"],
  ["jornadas", "estadisticas"],
  ["jornadas", "playoffs"],
]

export const USUARIOS = [
  {
    tipo: "organizador",
    titulo: "Organizador",
    descripcion: "Crea y gestiona ligas completas. Controla divisiones, horarios y la publicación de contenidos.",
    features: ["Crear ligas con logo y ubicación", "Configurar divisiones y categorías", "Publicar y programar jornadas", "Gestionar equipos participantes"],
  },
  {
    tipo: "capitan",
    titulo: "Capitán",
    descripcion: "Administra tu equipo y jugadores. Sigue los resultados y la posición en la tabla.",
    features: ["Perfil del equipo con QR", "Gestión de jugadores y dorsales", "Historial de partidos", "Notificaciones de jornada"],
  },
  {
    tipo: "aficionado",
    titulo: "Aficionado",
    descripcion: "Sigue ligas, equipos y jugadores. Consulta resultados y estadísticas sin necesidad de registro.",
    features: ["Tabla de posiciones en vivo", "Calendario de jornadas", "Perfiles públicos de equipos", "Notificaciones sin cuenta"],
  },
]
