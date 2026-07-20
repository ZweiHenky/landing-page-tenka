"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "motion/react"

interface StatItemProps {
  value: number
  label: string
  suffix?: string
  delay: number
}

function StatItem({ value, label, suffix = "", delay }: StatItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1500
    const steps = 30
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay, ease: [0, 0, 0.2, 1] }}
      className="flex flex-col items-center p-6 bg-surface rounded-2xl border border-border/50"
    >
      <span className="font-display text-4xl md:text-5xl text-cyan">
        {count}{suffix}
      </span>
      <span className="mt-2 text-text-secondary text-sm">{label}</span>
    </motion.div>
  )
}

const STATS = [
  { value: 150, label: "Ligas creadas", suffix: "+" },
  { value: 230, label: "Equipos registrados", suffix: "+" },
  { value: 8, label: "Categorías deportivas" },
  { value: 4.8, label: "Valoración promedio", suffix: "" },
]

export default function StatsCounter() {
  return (
    <section id="stats" className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-white">
            Cifras que hablan
          </h2>
          <p className="mt-3 text-text-secondary text-sm max-w-md mx-auto">
            Datos basados en ligas activas dentro de la plataforma
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
