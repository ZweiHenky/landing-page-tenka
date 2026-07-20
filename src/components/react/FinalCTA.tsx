"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { EQUIPOS } from "@/data/demo"

const FLOATING_ITEMS = [
  { icon: "🏆", x: 10, y: 20, size: 40 },
  { icon: "👥", x: 85, y: 15, size: 36 },
  { icon: "📊", x: 15, y: 70, size: 32 },
  { icon: "📅", x: 88, y: 65, size: 34 },
  { icon: "🏅", x: 50, y: 10, size: 28 },
]

export default function FinalCTA() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section id="cta" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-3xl" />

      {mounted && FLOATING_ITEMS.map((item, i) => (
        <motion.div
          key={item.icon}
          className="absolute pointer-events-none text-2xl"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
        >
          <div className="flex justify-center -space-x-3 mb-8">
            {EQUIPOS.slice(0, 6).map((e, i) => (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="w-12 h-12 rounded-full bg-surface-light border-2 border-black flex items-center justify-center text-sm font-bold text-cyan"
                style={{ zIndex: 6 - i }}
              >
                {e.nombre.charAt(0)}
              </motion.div>
            ))}
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white text-balance max-w-2xl mx-auto">
            Todas las piezas de tu liga en un solo lugar
          </h2>
          <p className="mt-4 text-text-secondary text-base max-w-lg mx-auto">
            Únete a los organizadores que ya transformaron su liga con Tenka.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-black text-base font-semibold rounded-xl hover:brightness-110 transition-all duration-200 active:scale-[0.97]"
            >
              Comenzar ahora
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface border border-border text-white text-base font-medium rounded-xl hover:border-cyan hover:text-cyan transition-all duration-200 active:scale-[0.97]"
            >
              Ver precios
            </a>
          </div>

          <p className="mt-4 text-text-muted text-xs">
            $149 MXN / división / mes · Sin costo oculto
          </p>
        </motion.div>
      </div>
    </section>
  )
}
