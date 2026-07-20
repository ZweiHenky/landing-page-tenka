"use client"

import { motion } from "motion/react"

const TYPES = [
  {
    id: "regular",
    nombre: "Jornada Regular",
    desc: "Partidos que definen la tabla de posiciones. Cada victoria suma 3 puntos y el rendimiento se refleja en la clasificación.",
    badges: ["3 pts", "Afecta tabla"],
    color: { text: "text-cyan", bg: "bg-cyan/10" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "amistoso",
    nombre: "Amistoso",
    desc: "Partidos sin presión ideales para probar alineaciones y tácticas. No afectan la tabla de posiciones ni suman puntos.",
    badges: ["0 pts", "No afecta tabla"],
    color: { text: "text-warning", bg: "bg-warning/10" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "complemento",
    nombre: "Complemento",
    desc: "Partido adicional donde solo un equipo obtiene puntos sin afectar el calendario regular del resto de equipos.",
    badges: ["1 equipo suma", "No excluye del RR"],
    color: { text: "text-danger", bg: "bg-danger/10" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    id: "eliminatoria",
    nombre: "Eliminatoria",
    desc: "Partidos de knockout donde el perdedor queda eliminado. Se organizan en rondas hasta definir al campeón de la liga.",
    badges: ["Árbol", "Avanza el ganador"],
    color: { text: "text-playoff", bg: "bg-playoff/10" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 8 7 8" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 8 17 8" />
        <path d="M12 22V9" />
        <path d="M12 4V2" />
        <path d="M8 16c2 2 4 2 6 0" />
        <path d="M8 12c2-2 4-2 6 0" />
      </svg>
    ),
  },
]

export default function MatchTypes() {
  return (
    <section id="tipos-partido" className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">
            Cada partido tiene su propósito
          </h2>
          <p className="mt-4 text-text-secondary text-base max-w-xl mx-auto">
            Cuatro formatos distintos para cubrir todas las necesidades de tu liga
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {TYPES.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0, 0, 0.2, 1] }}
              className="bg-surface rounded-2xl border border-border/50 p-6 flex gap-5"
            >
              <div className={`w-14 h-14 rounded-2xl ${t.color.bg} flex items-center justify-center shrink-0 ${t.color.text}`}>
                {t.icon}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg text-white mb-1">{t.nombre}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{t.desc}</p>
                <div className="flex gap-2 mt-3">
                  {t.badges.map((b) => (
                    <span key={b} className={`text-[10px] font-medium ${t.color.text} ${t.color.bg} px-2.5 py-1 rounded-full`}>
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
