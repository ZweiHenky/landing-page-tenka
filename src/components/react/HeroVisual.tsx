"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/utils/cn"
import { TABLA_POSICIONES, EQUIPOS, LIGAS, JORNADAS } from "@/data/demo"

export default function HeroVisual() {
  const [mounted, setMounted] = useState(false)
  const [showNotif, setShowNotif] = useState(false)

  useEffect(() => {
    setMounted(true)
    const t1 = setTimeout(() => setShowNotif(true), 1200)
    const interval = setInterval(() => {
      setShowNotif(false)
      setTimeout(() => setShowNotif(true), 200)
    }, 5000)
    return () => { clearTimeout(t1); clearInterval(interval) }
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 pt-32 pb-20 md:pb-32">
      {/* Desktop glow */}
      <div
        className="hidden lg:block absolute right-[8%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at center, rgba(77,208,225,0.08), transparent 60%)" }}
      />

      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-16">
        {/* Text */}
        <div className="lg:w-[45%] xl:w-[48%] shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs tracking-[2px] uppercase text-text-secondary font-medium">
                Plataforma en vivo
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight text-balance">
              Gestiona tu liga deportiva{" "}
              <span className="text-cyan">desde cualquier lugar</span>
            </h1>

            <p className="mt-6 text-text-secondary text-base md:text-lg leading-relaxed max-w-lg">
              La plataforma que transforma la forma de gestionar ligas deportivas.
              Programación automática, estadísticas en tiempo real y mucho más.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-black text-base font-semibold rounded-xl hover:brightness-110 transition-all duration-200 active:scale-[0.97]"
              >
                Comenzar gratis
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-surface border border-border text-white text-base font-medium rounded-xl hover:border-cyan hover:text-cyan transition-all duration-200 active:scale-[0.97]"
              >
                Ver demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {EQUIPOS.slice(0, 4).map((e, i) => (
                  <div
                    key={e.id}
                    className="w-9 h-9 rounded-full bg-surface-light border-2 border-black flex items-center justify-center text-xs font-semibold text-text-secondary"
                    style={{ zIndex: 4 - i }}
                  >
                    {e.nombre.charAt(0)}
                  </div>
                ))}
              </div>
              <p className="text-text-muted text-sm">
                Únete a <span className="text-white font-semibold">230+</span> equipos
              </p>
            </div>
          </motion.div>
        </div>

        {/* Visual cards — masonry */}
        <div className="mt-12 lg:mt-0 lg:w-[55%] xl:w-[52%]">
          <div className="lg:columns-2 lg:gap-5 [column-fill:_balance]">
            {/* League Info card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0, 0, 0.2, 1] }}
              className="break-inside-avoid-column mb-5 bg-surface rounded-2xl border border-border/50 p-5 lg:p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan" />
                <span className="text-xs font-semibold text-cyan tracking-wide">INFORMACIÓN DE LIGA</span>
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-cyan/10 flex items-center justify-center text-2xl lg:text-3xl shrink-0">🏆</div>
                <div className="min-w-0">
                  <h4 className="font-display text-lg lg:text-xl text-white truncate">{LIGAS[0]!.nombre}</h4>
                  <p className="text-sm text-text-muted truncate">{LIGAS[0]!.tipo} · {LIGAS[0]!.categoria}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-surface-light rounded-xl p-3">
                  <div className="flex items-center gap-1.5 text-[10px] text-cyan font-semibold uppercase tracking-wide mb-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Días
                  </div>
                  <p className="text-sm text-white">Sáb y Dom</p>
                </div>
                <div className="bg-surface-light rounded-xl p-3">
                  <div className="flex items-center gap-1.5 text-[10px] text-cyan font-semibold uppercase tracking-wide mb-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 22 7 12 12 2 7 12 2" />
                      <polyline points="2 12 12 17 22 12" />
                      <polyline points="2 17 12 22 22 17" />
                    </svg>
                    Divisiones
                  </div>
                  <p className="text-sm text-white">3 activas</p>
                </div>
                <div className="bg-surface-light rounded-xl p-3">
                  <div className="flex items-center gap-1.5 text-[10px] text-cyan font-semibold uppercase tracking-wide mb-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    Equipos
                  </div>
                  <p className="text-sm text-white">8 inscritos</p>
                </div>
                <div className="bg-surface-light rounded-xl p-3">
                  <div className="flex items-center gap-1.5 text-[10px] text-cyan font-semibold uppercase tracking-wide mb-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Próxima
                  </div>
                  <p className="text-sm text-white">{JORNADAS[3]?.fecha ?? "31 Ago"}</p>
                </div>
              </div>
            </motion.div>

            {/* Standings card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0, 0, 0.2, 1] }}
              className="break-inside-avoid-column mb-5 bg-surface rounded-2xl border border-border/50 p-5 lg:p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-4 h-4 text-cyan" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
                </svg>
                <span className="text-xs font-semibold text-cyan tracking-wide">POSICIONES</span>
              </div>

              <div className="flex text-[10px] text-text-muted font-semibold pb-1.5 mb-1.5 border-b border-border/50">
                <span className="w-5 text-center">#</span>
                <span className="flex-1">EQUIPO</span>
                <span className="w-7 text-center">PJ</span>
                <span className="w-7 text-center">DG</span>
                <span className="w-8 text-center font-bold">PTS</span>
              </div>
              {TABLA_POSICIONES.slice(0, 4).map((r, i) => (
                <div
                  key={r.pos}
                  className={cn(
                    "flex items-center text-xs py-1.5",
                    i === 0 ? "text-cyan font-semibold" : "text-text-secondary",
                  )}
                >
                  <span className="w-5 text-center">{r.pos}</span>
                  <span className="flex-1 truncate">{r.nombre}</span>
                  <span className="w-7 text-center">{r.pj}</span>
                  <span className={cn("w-7 text-center", r.dg < 0 && "text-danger")}>
                    {r.dg > 0 ? `+${r.dg}` : r.dg}
                  </span>
                  <span className={cn("w-8 text-center font-bold", i === 0 && "text-cyan")}>{r.pts}</span>
                </div>
              ))}
            </motion.div>

            {/* Horario card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0, 0, 0.2, 1] }}
              className="break-inside-avoid-column mb-5 bg-surface rounded-2xl border border-border/50 p-5 lg:p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-4 h-4 text-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-xs font-semibold text-cyan tracking-wide">PRÓXIMOS PARTIDOS</span>
              </div>

              <div className="space-y-2.5">
                {[
                  { hora: "Sáb 16:00", local: "Águilas", visitante: "Leones" },
                  { hora: "Dom 14:00", local: "Genix", visitante: "Tiburones" },
                  { hora: "Dom 16:00", local: "Dragones", visitante: "Mi Equipo" },
                ].map((p, i) => (
                  <div key={i} className="flex items-center text-sm">
                    <span className="text-[10px] text-cyan font-medium w-[58px] shrink-0">{p.hora}</span>
                    <div className="flex items-center flex-1 min-w-0 gap-1.5">
                      <span className="text-white truncate text-right flex-1">{p.local}</span>
                      <span className="text-text-muted text-[10px] shrink-0">vs</span>
                      <span className="text-white truncate flex-1">{p.visitante}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Notification toast */}
          <AnimatePresence>
            {showNotif && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
                className="max-w-md mx-auto bg-surface-light rounded-xl border border-cyan/30 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  <div>
                    <p className="text-xs font-medium text-white">¡Jornada 4 disponible!</p>
                    <p className="text-[10px] text-text-muted">Ya puedes consultar los partidos</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
