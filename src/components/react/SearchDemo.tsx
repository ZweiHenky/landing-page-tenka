"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { LIGAS } from "@/data/demo"

const SEARCH_QUERY = "Liga Nocturna"

export default function SearchDemo() {
  const [phase, setPhase] = useState<"typing" | "results" | "selected" | "idle">("typing")
  const [typed, setTyped] = useState("")
  const [userInteracted, setUserInteracted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (userInteracted) return

    if (phase === "typing") {
      let i = 0
      const timer = setInterval(() => {
        i++
        setTyped(SEARCH_QUERY.slice(0, i))
        if (i >= SEARCH_QUERY.length) {
          clearInterval(timer)
          setTimeout(() => setPhase("results"), 300)
        }
      }, 80)
      return () => clearInterval(timer)
    }

    if (phase === "results") {
      const timer = setTimeout(() => setPhase("selected"), 2000)
      return () => clearTimeout(timer)
    }

    if (phase === "selected") {
      const timer = setTimeout(() => {
        setPhase("typing")
        setTyped("")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [phase, userInteracted])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInteracted(true)
    setTyped(e.target.value)
  }

  const handleSelect = () => {
    setUserInteracted(false)
    setPhase("selected")
  }

  return (
    <section id="search" className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">Descubre tu liga</h2>
          <p className="mt-4 text-text-secondary text-base max-w-xl mx-auto">
            Encuentra ligas, equipos y jugadores al instante
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative">
            <div className="flex items-center gap-3 bg-surface rounded-2xl border border-border/50 px-4 py-3 focus-within:border-cyan/50 transition-colors duration-200">
              <svg className="w-5 h-5 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={typed}
                onChange={handleInput}
                onFocus={() => !userInteracted && setUserInteracted(true)}
                placeholder="Buscar liga, equipo, jugador..."
                className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-text-muted"
                aria-label="Buscar ligas, equipos o jugadores"
              />
              {typed && (
                <button
                  onClick={() => { setTyped(""); setPhase("typing"); setUserInteracted(true) }}
                  className="text-text-muted hover:text-white transition-colors"
                  aria-label="Limpiar búsqueda"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            <AnimatePresence>
              {phase === "results" && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full mt-2 left-0 right-0 bg-surface rounded-2xl border border-border/50 overflow-hidden z-10"
                >
                  {LIGAS.slice(0, 3).map((liga) => (
                    <button
                      key={liga.id}
                      onClick={handleSelect}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-light transition-colors text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan/20 flex items-center justify-center text-sm">🏆</div>
                      <div>
                        <p className="text-sm font-medium text-white">{liga.nombre}</p>
                        <p className="text-xs text-text-muted">{liga.categoria} · {liga.tipo}</p>
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}

              {phase === "selected" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 bg-surface rounded-2xl border border-cyan/30 p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan/20 flex items-center justify-center text-xl">🏆</div>
                    <div>
                      <h3 className="font-display text-lg text-white">Liga Nocturna CDMX</h3>
                      <p className="text-xs text-text-muted">Futbol 7 · Libre · En Curso</p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-xs text-text-secondary">
                    <div className="flex items-center gap-1">
                      <span className="text-cyan font-bold">8</span> equipos
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-cyan font-bold">6</span> jornadas
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-cyan font-bold">48</span> partidos
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <span className="px-3 py-1 bg-cyan/10 text-cyan text-xs rounded-full">Ver standings</span>
                    <span className="px-3 py-1 bg-surface-light text-text-secondary text-xs rounded-full">Ver horarios</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
