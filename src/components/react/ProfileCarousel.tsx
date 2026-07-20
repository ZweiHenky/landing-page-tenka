"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { EQUIPOS, LIGAS } from "@/data/demo"

const PROFILES = [
  {
    id: "public-league",
    title: "Vista Pública de Liga",
    desc: "Cualquier persona puede ver standings, horarios y playoffs sin registro.",
    icon: "🏆",
  },
  {
    id: "team",
    title: "Perfil de Equipo",
    desc: "Cada equipo tiene su perfil con QR, jugadores y estadísticas.",
    icon: "👥",
  },
  {
    id: "player",
    title: "Perfil de Jugador",
    desc: "Jugadores con fotos, posición, edad y número de camiseta.",
    icon: "👤",
  },
  {
    id: "standings",
    title: "Tabla de Posiciones",
    desc: "Estadísticas en tiempo real con puntos, goles y rendimiento.",
    icon: "📊",
  },
]

const TEAM_COLORS = ["#4DD0E1", "#69F0AE", "#FF5252", "#A78BFA", "#FFD54F", "#7CE7F2"]

export default function ProfileCarousel() {
  const [active, setActive] = useState(0)
  const total = PROFILES.length

  useEffect(() => {
    const timer = setInterval(() => setActive((a) => (a + 1) % total), 4000)
    return () => clearInterval(timer)
  }, [total])

  const goTo = (i: number) => setActive(i)

  const p = PROFILES[active]

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">Interfaces para cada momento</h2>
          <p className="mt-4 text-text-secondary text-base max-w-xl mx-auto">
            Perfiles y vistas diseñadas para cada persona en el ecosistema
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="relative min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -20 }}
                transition={{ duration: 0.35, ease: [0, 0, 0.2, 1] }}
                className="bg-surface rounded-2xl border border-border/50 p-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-cyan" />
                  <h3 className="font-display text-xl text-white">{p.title}</h3>
                </div>

                <div className="bg-dark rounded-xl p-5 border border-border/30">
                  {p.id === "public-league" && (
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-cyan/20 flex items-center justify-center text-lg">🏆</div>
                        <div>
                          <p className="text-sm font-semibold text-white">Liga Nocturna CDMX</p>
                          <p className="text-[10px] text-text-muted">Futbol 7 · Libre</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-text-muted mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-success" />
                        En Curso
                      </div>
                      <div className="space-y-1">
                        {EQUIPOS.slice(0, 4).map((e, i) => (
                          <div key={e.id} className="flex items-center gap-2 text-xs">
                            <span className="w-4 text-cyan font-bold">{i + 1}</span>
                            <span className="flex-1 text-white">{e.nombre}</span>
                            <span className="text-text-muted">{15 - i * 3} pts</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {p.id === "team" && (
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-black"
                          style={{ backgroundColor: TEAM_COLORS[0] }}
                        >
                          A
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">Águilas FC</p>
                          <p className="text-[10px] text-text-muted">15 pts · 1° lugar</p>
                        </div>
                      </div>
                      <div className="bg-surface-light rounded-lg p-3">
                        <p className="text-[10px] text-cyan font-semibold uppercase tracking-wide mb-2">Jugadores</p>
                        {["Carlos M.", "Luis R.", "Andrés G."].map((name) => (
                          <div key={name} className="flex items-center gap-2 py-1 text-xs">
                            <div className="w-5 h-5 rounded bg-surface text-text-muted flex items-center justify-center text-[10px]">7</div>
                            <span className="text-white">{name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {p.id === "player" && (
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-cyan/20 mx-auto mb-3 flex items-center justify-center text-2xl">
                        👤
                      </div>
                      <p className="text-sm font-semibold text-white">Carlos Martínez</p>
                      <p className="text-xs text-text-muted">Delantero · #9</p>
                      <div className="mt-3 flex justify-center gap-4 text-xs">
                        <div className="text-center">
                          <p className="text-cyan font-bold">12</p>
                          <p className="text-text-muted text-[10px]">Goles</p>
                        </div>
                        <div className="text-center">
                          <p className="text-white font-bold">8</p>
                          <p className="text-text-muted text-[10px]">Asistencias</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {p.id === "standings" && (
                    <div>
                      <div className="flex text-[10px] text-text-muted pb-1 mb-1 border-b border-border/50">
                        <span className="w-5 text-center">#</span>
                        <span className="flex-1">Equipo</span>
                        <span className="w-5 text-center">PJ</span>
                        <span className="w-6 text-center font-bold text-cyan">PTS</span>
                      </div>
                      {EQUIPOS.slice(0, 4).map((e, i) => (
                        <div key={e.id} className="flex items-center text-xs py-1">
                          <span className="w-5 text-center text-cyan font-bold">{i + 1}</span>
                          <span className="flex-1 text-white">{e.nombre}</span>
                          <span className="w-5 text-center text-text-muted">6</span>
                          <span className="w-6 text-center font-bold text-cyan">{15 - i * 3}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <p className="mt-4 text-text-secondary text-sm text-center">{p.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Navegación de perfiles">
            {PROFILES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-cyan" : "w-2 bg-border hover:bg-text-muted"
                }`}
                aria-label={`Perfil ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
