"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"

const TEAMS = [
  { id: "t1", nombre: "Águilas", pts: 15, pj: 6, g: 5, e: 0, p: 1, dg: 12 },
  { id: "t2", nombre: "Leones", pts: 14, pj: 6, g: 4, e: 2, p: 0, dg: 9 },
  { id: "t3", nombre: "Genix", pts: 11, pj: 6, g: 3, e: 2, p: 1, dg: 4 },
  { id: "t4", nombre: "Tiburones", pts: 7, pj: 6, g: 2, e: 1, p: 3, dg: -4 },
  { id: "t5", nombre: "Dragones", pts: 4, pj: 6, g: 1, e: 1, p: 4, dg: -9 },
  { id: "t6", nombre: "Mi Equipo", pts: 0, pj: 6, g: 0, e: 0, p: 6, dg: -17 },
]

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j]!, copy[i]!]
  }
  return copy
}

export default function StandingsDemo() {
  const [teams, setTeams] = useState(TEAMS)
  const [paused, setPaused] = useState(false)
  const [round, setRound] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const reducedRef = useRef(false)

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }, [])

  const runCycle = () => {
    if (reducedRef.current) {
      const shuffled = shuffleArray(TEAMS)
      const updated = shuffled.map((t, i) => ({ ...t, pts: t.pts - i, pj: t.pj + 1 }))
      updated.sort((a, b) => b.pts - a.pts)
      setTeams(updated)
      setRound((r) => r + 1)
      return
    }

    const shuffled = shuffleArray(TEAMS)
    const updated = shuffled.map((t, i) => ({
      ...t,
      pts: Math.max(0, t.pts + (i < 2 ? 3 : i < 4 ? 1 : 0)),
      pj: t.pj + 1,
      g: t.g + (i < 2 ? 1 : 0),
      e: t.e + (i >= 2 && i < 4 ? 1 : 0),
      p: t.p + (i >= 4 ? 1 : 0),
      dg: t.dg + (i < 2 ? 2 : i < 4 ? 0 : -2),
    }))
    updated.sort((a, b) => b.pts - a.pts)
    setTeams(updated)
    setRound((r) => r + 1)
  }

  useEffect(() => {
    if (paused) return
    timerRef.current = setTimeout(runCycle, 5000)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [paused, round])

  return (
    <section id="demo" className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">Estadísticas en movimiento</h2>
          <p className="mt-4 text-text-secondary text-base max-w-xl mx-auto">
            Los resultados se reflejan al instante. Observa cómo cambia la tabla jornada tras jornada.
          </p>
        </div>

        <div
          className="max-w-2xl mx-auto bg-surface rounded-2xl border border-border/50 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused((p) => !p)}
        >
          <div className="flex items-center justify-between px-5 py-3 bg-cyan/10 border-b border-border">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-cyan" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2z" />
              </svg>
              <span className="text-xs font-semibold text-cyan tracking-wide">POSICIONES · J{round + 1}</span>
            </div>
            {paused && (
              <span className="text-[10px] text-text-muted animate-pulse">En pausa</span>
            )}
          </div>

          <div className="px-4 py-2">
            <div className="flex text-[10px] font-semibold text-text-muted pb-1 border-b border-border/50">
              <span className="w-6 text-center">#</span>
              <span className="flex-1">EQUIPO</span>
              <span className="w-5 text-center">PJ</span>
              <span className="w-5 text-center">G</span>
              <span className="w-5 text-center">E</span>
              <span className="w-5 text-center text-danger">P</span>
              <span className="w-6 text-center">DG</span>
              <span className="w-6 text-center font-bold text-cyan">PTS</span>
            </div>
            <AnimatePresence mode="popLayout">
              {teams.map((t, i) => (
                <motion.div
                  key={t.id}
                  layout
                  initial={reducedRef.current ? {} : { opacity: 0.6, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedRef.current ? {} : { opacity: 0, y: 10 }}
                  transition={{ duration: reducedRef.current ? 0 : 0.4, ease: [0, 0, 0.2, 1] }}
                  className={`flex items-center text-xs py-2 ${
                    i === 0 ? "text-cyan font-semibold" : "text-text-secondary"
                  } ${i === 0 ? "bg-cyan/5 rounded-lg -mx-2 px-2" : ""}`}
                  style={{ borderBottom: i < teams.length - 1 ? "1px solid rgba(41,50,65,0.3)" : "none" }}
                >
                  <span className="w-6 text-center">{i + 1}</span>
                  <span className="flex-1 truncate">{t.nombre}</span>
                  <span className="w-5 text-center">{t.pj}</span>
                  <span className="w-5 text-center">{t.g}</span>
                  <span className="w-5 text-center">{t.e}</span>
                  <span className="w-5 text-center text-danger">{t.p}</span>
                  <span className={`w-6 text-center ${t.dg >= 0 ? "text-white" : "text-danger"}`}>
                    {t.dg > 0 ? `+${t.dg}` : t.dg}
                  </span>
                  <span className={`w-6 text-center font-bold ${i === 0 ? "text-cyan" : ""}`}>{t.pts}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="px-4 py-3 border-t border-border/50 flex items-center justify-between">
            <span className="text-[10px] text-text-muted">Actualización automática · Pasa el cursor para pausar</span>
            <span className="text-[10px] text-cyan">{round + 1} ciclos</span>
          </div>
        </div>
      </div>
    </section>
  )
}
