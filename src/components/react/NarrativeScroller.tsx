"use client"

import { useEffect, useRef, useState } from "react"

const SCENES = [
  {
    id: "jornadas",
    title: "Programación automática",
    desc: "Las jornadas se generan automáticamente según la configuración de tu liga. Sin hojas de cálculo, sin confusiones.",
    stats: [
      { label: "Jornadas", value: "6" },
      { label: "Partidos", value: "24" },
      { label: "Equipos", value: "8" },
    ],
  },
  {
    id: "partidos",
    title: "Resultados al instante",
    desc: "Cada partido se actualiza en tiempo real. Goles, tarjetas y estado del encuentro siempre visibles.",
    stats: [
      { label: "Goles totales", value: "78" },
      { label: "Partidos hoy", value: "4" },
      { label: "Tasa de finalización", value: "92%" },
    ],
  },
  {
    id: "standings",
    title: "Tabla en tiempo real",
    desc: "Las posiciones se recalcular al instante con cada resultado. Puntos, diferencia de goles y rachas actualizadas.",
    stats: [
      { label: "Equipos en tabla", value: "8" },
      { label: "Puntos líder", value: "18" },
      { label: "Promedio goles", value: "3.25" },
    ],
  },
]

const BALL_STATES = [
  "-right-[30%] bottom-[3%] -rotate-6 opacity-[0.08] md:-right-[6%] md:bottom-[8%] md:opacity-[0.14]",
  "-right-[24%] bottom-[7%] rotate-2 scale-105 opacity-[0.1] md:-right-[2%] md:bottom-[14%] md:opacity-[0.18]",
  "-right-[32%] bottom-[11%] rotate-6 scale-95 opacity-[0.08] md:-right-[8%] md:bottom-[20%] md:opacity-[0.14]",
]

export default function NarrativeScroller() {
  const [activeScene, setActiveScene] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      if (ticking.current) return
      ticking.current = true

      requestAnimationFrame(() => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)))
        const idx = Math.min(SCENES.length - 1, Math.floor(progress * SCENES.length))
        if (idx !== lastScrollY.current) {
          setActiveScene(idx)
          lastScrollY.current = idx
        }
        ticking.current = false
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scene = SCENES[activeScene] ?? SCENES[0]!

  return (
    <section id="como-funciona" ref={containerRef} className="relative" style={{ minHeight: `${SCENES.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <img
          src="/assets/images/balon.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className={`pointer-events-none absolute z-0 w-[300px] max-w-none object-contain mix-blend-screen blur-[0.9px] transition-[transform,opacity,right,bottom] duration-1000 ease-out md:w-[400px] ${BALL_STATES[activeScene] ?? BALL_STATES[0]}`}
          style={{
            maskImage: "radial-gradient(circle at center, black 38%, transparent 76%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 50%, transparent 90%)",
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 w-full">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="z-10">
              <div className="flex items-center gap-2 mb-4">
                {SCENES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const container = containerRef.current
                      if (!container) return
                      const target = container.offsetTop + (i / SCENES.length) * (container.scrollHeight - window.innerHeight)
                      window.scrollTo({ top: target, behavior: "smooth" })
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === activeScene ? "bg-cyan w-6" : "bg-border"
                    }`}
                    aria-label={`Escena ${i + 1}`}
                  />
                ))}
              </div>
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-white">{scene.title}</h3>
              <p className="mt-4 text-text-secondary text-sm md:text-base leading-relaxed">{scene.desc}</p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {scene.stats.map((s) => (
                  <div key={s.label} className="bg-surface rounded-xl border border-border/50 p-4 text-center">
                    <span className="font-display text-xl md:text-2xl text-cyan">{s.value}</span>
                    <p className="text-xs text-text-muted mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative md:min-h-[400px]">
              {activeScene === 0 && (
                <div className="bg-surface rounded-2xl border border-border/50 p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-cyan tracking-wide">JORNADAS</span>
                    <span className="text-[10px] text-text-muted">Próximas fechas</span>
                  </div>
                  {[
                    { n: "Jornada 4", fecha: "31 Ago", partidos: 4 },
                    { n: "Jornada 5", fecha: "07 Sep", partidos: 4 },
                    { n: "Jornada 6", fecha: "14 Sep", partidos: 4 },
                  ].map((j) => (
                    <div key={j.n} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                      <span className="text-sm font-medium text-white">{j.n}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-text-muted">{j.fecha}</span>
                        <span className="text-xs text-text-muted">{j.partidos} partidos</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeScene === 1 && (
                <div className="bg-surface rounded-2xl border border-border/50 p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-success tracking-wide">EN VIVO</span>
                    <span className="text-xs text-text-muted">Jornada 4</span>
                  </div>
                  {[
                    { local: "Águilas", visitante: "Dragones", goles: "3 - 1", estado: "FINALIZADO" },
                    { local: "Leones", visitante: "Genix", goles: "2 - 0", estado: "FINALIZADO" },
                    { local: "Tiburones", visitante: "Mi Equipo", goles: "1 - 1", estado: "EN JUEGO" },
                  ].map((p, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-white">{p.local}</span>
                        <span className="text-sm font-bold text-cyan">{p.goles}</span>
                        <span className="text-sm text-white">{p.visitante}</span>
                      </div>
                      <span className={`text-[10px] ${p.estado === "FINALIZADO" ? "text-success" : "text-warning"} tracking-wide uppercase`}>
                        {p.estado}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {activeScene === 2 && (
                <div className="bg-surface rounded-2xl border border-border/50 p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-cyan tracking-wide">POSICIONES</span>
                    <span className="text-xs text-text-muted">Jornada 6</span>
                  </div>
                  <div className="flex text-[10px] text-text-muted pb-1 border-b border-border/50">
                    <span className="w-5">#</span>
                    <span className="flex-1">Equipo</span>
                    <span className="w-5 text-center">PJ</span>
                    <span className="w-5 text-center">PTS</span>
                  </div>
                  {[
                    { pos: 1, nombre: "Águilas", pj: 6, pts: 15 },
                    { pos: 2, nombre: "Leones", pj: 6, pts: 14 },
                    { pos: 3, nombre: "Genix", pj: 6, pts: 11 },
                    { pos: 4, nombre: "Tiburones", pj: 6, pts: 7 },
                  ].map((t) => (
                    <div key={t.pos} className="flex items-center text-xs py-1.5">
                      <span className="w-5 text-cyan font-bold">{t.pos}</span>
                      <span className="flex-1 text-white">{t.nombre}</span>
                      <span className="w-5 text-center text-text-muted">{t.pj}</span>
                      <span className="w-5 text-center font-bold text-cyan">{t.pts}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
