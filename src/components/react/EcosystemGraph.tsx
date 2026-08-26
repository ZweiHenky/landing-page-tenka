"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "motion/react"
import { cn } from "@/utils/cn"
import { ECOSISTEMA_NODOS, CONEXIONES } from "@/data/demo"

const NODE_LAYOUT = [
  { id: "ligas", x: 50, y: 10 },
  { id: "divisiones", x: 50, y: 42 },
  { id: "equipos", x: 20, y: 45 },
  { id: "jornadas", x: 80, y: 45 },
  { id: "estadisticas", x: 30, y: 78 },
  { id: "playoffs", x: 70, y: 78 },
]

function ShieldIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("w-6 h-6", active ? "text-cyan-bright" : "text-cyan")}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function LayersIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("w-6 h-6", active ? "text-cyan-bright" : "text-cyan")}>
      <polygon points="12 2 22 7 12 12 2 7 12 2" />
      <polyline points="2 12 12 17 22 12" />
      <polyline points="2 17 12 22 22 17" />
    </svg>
  )
}

function UsersIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("w-6 h-6", active ? "text-cyan-bright" : "text-cyan")}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function CalendarIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("w-6 h-6", active ? "text-cyan-bright" : "text-cyan")}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function ChartIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("w-6 h-6", active ? "text-cyan-bright" : "text-cyan")}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
}

function MedalIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("w-6 h-6", active ? "text-cyan-bright" : "text-cyan")}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}

const ICONS: Record<string, React.FC<{ active: boolean }>> = {
  ligas: ShieldIcon,
  divisiones: LayersIcon,
  equipos: UsersIcon,
  jornadas: CalendarIcon,
  estadisticas: ChartIcon,
  playoffs: MedalIcon,
}

export default function EcosystemGraph() {
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [revealed, setRevealed] = useState<string[]>([])

  useEffect(() => {
    if (!inView) return
    const order = ["ligas", "divisiones", "equipos", "jornadas", "estadisticas", "playoffs"]
    order.forEach((id, i) => {
      setTimeout(() => setRevealed((prev) => [...prev, id]), 200 + i * 200)
    })
  }, [inView])

  const getNode = (id: string) => NODE_LAYOUT.find((n) => n.id === id)
  const isConnectedToActive = (id: string) =>
    activeNode && CONEXIONES.some(([a, b]) => (a === activeNode && b === id) || (b === activeNode && a === id))

  return (
    <section id="ecosistema" ref={ref} className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">
            Un ecosistema conectado
          </h2>
          <p className="mt-4 text-text-secondary text-base max-w-xl mx-auto">
            Todos los elementos de tu liga trabajan juntos en una sola plataforma
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto aspect-square">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.2 }}>
            {CONEXIONES.map(([from, to], i) => {
              if (!from || !to) return null
              const a = getNode(from)
              const b = getNode(to)
              if (!a || !b) return null
              const isActive = activeNode && (from === activeNode || to === activeNode)
              return (
                <motion.line
                  key={`conn-${i}`}
                  x1={`${a.x}%`}
                  y1={`${a.y}%`}
                  x2={`${b.x}%`}
                  y2={`${b.y}%`}
                  stroke={isActive ? "#4DD0E1" : "#293241"}
                  strokeWidth={isActive ? 2 : 1}
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.1, ease: [0, 0, 0.2, 1] }}
                />
              )
            })}
          </svg>

          <div className="absolute inset-0">
            {NODE_LAYOUT.map((node) => {
              const isRevealed = revealed.includes(node.id)
              const dim = activeNode && !isConnectedToActive(node.id) && node.id !== activeNode
              const info = ECOSISTEMA_NODOS.find((n) => n.id === node.id)

              const IconComponent = ICONS[node.id]
              return (
                <motion.button
                  key={node.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isRevealed
                      ? {
                          opacity: dim ? 0.3 : 1,
                          scale: 1,
                          transition: { duration: 0.3, ease: [0, 0, 0.2, 1] },
                        }
                      : {}
                  }
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  onFocus={() => setActiveNode(node.id)}
                  onBlur={() => setActiveNode(null)}
                  aria-label={info?.nombre}
                >
                  <div
                    className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl transition-all duration-300 ${
                      activeNode === node.id
                        ? "bg-cyan/20 border-cyan shadow-lg shadow-cyan/20 scale-110"
                        : "bg-surface border-border/50"
                    } border`}
                  >
                    {IconComponent ? <IconComponent active={activeNode === node.id} /> : <span className="w-6 h-6 rounded-full bg-cyan/30" />}
                  </div>
                  <AnimatedLabel text={info?.nombre ?? ""} isRevealed={isRevealed} />
                </motion.button>
              )
            })}
          </div>

        </div>

          {activeNode && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 mx-auto bg-surface-light rounded-xl border border-cyan/30 p-4 max-w-sm w-full"
            >
              <p className="text-sm font-semibold text-white">
                {ECOSISTEMA_NODOS.find((n) => n.id === activeNode)?.nombre}
              </p>
              <p className="text-xs text-text-secondary mt-1">
                {ECOSISTEMA_NODOS.find((n) => n.id === activeNode)?.descripcion}
              </p>
            </motion.div>
          )}
      </div>
    </section>
  )
}

function AnimatedLabel({ text, isRevealed }: { text: string; isRevealed: boolean }) {
  return (
    <motion.span
      className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-text-muted whitespace-nowrap font-medium"
      initial={{ opacity: 0 }}
      animate={isRevealed ? { opacity: 1 } : {}}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      {text}
    </motion.span>
  )
}
