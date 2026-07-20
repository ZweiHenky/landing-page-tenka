"use client"

import { useState, useRef, useCallback } from "react"
import { motion } from "motion/react"
import { cn } from "@/utils/cn"
import { USUARIOS } from "@/data/demo"

function ClipIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-cyan">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-cyan">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-cyan">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

const ICONS = [ClipIcon, StarIcon, EyeIcon]

export default function UserTypeTabs() {
  const [active, setActive] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const onScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const idx = Math.round(el.scrollLeft / el.clientWidth)
    setActive(Math.min(idx, USUARIOS.length - 1))
  }, [])

  const scrollTo = (i: number) => {
    const target = scrollRef.current?.children[i] as HTMLElement | undefined
    target?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
  }

  const user = USUARIOS[active]!

  return (
    <section id="funcionalidades" className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">
            Para cada rol en tu liga
          </h2>
          <p className="mt-4 text-text-secondary text-base max-w-xl mx-auto">
            Tenka se adapta a las necesidades de cada persona involucrada
          </p>
        </div>

        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-4 -mx-6 md:-mx-8 lg:-mx-12 px-6 md:px-8 lg:px-12 scrollbar-hide"
        >
          {USUARIOS.map((u, i) => {
            const Icon = ICONS[i]
            const isActive = i === active

            return (
              <div
                key={u.tipo}
                className="snap-center shrink-0 w-[85vw] md:w-[600px]"
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-surface rounded-2xl border border-border/50 p-8">
                  <div className="text-center">
                    <div className={cn(
                      "w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300",
                      isActive ? "bg-cyan/20 shadow-lg shadow-cyan/10" : "bg-cyan/10"
                    )}>
                      <Icon />
                    </div>
                    <h3 className="font-display text-2xl text-white">{u.titulo}</h3>
                    <p className="text-text-secondary text-sm mt-3">{u.descripcion}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white text-sm mb-4">
                      ¿Qué puedes hacer como {u.titulo.toLowerCase()}?
                    </h4>
                    <motion.ul
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-30px" }}
                      variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } },
                      }}
                      className="space-y-3"
                    >
                      {u.features.map((f) => (
                        <motion.li
                          key={f}
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-3 text-text-secondary text-sm"
                        >
                          <span className="w-5 h-5 rounded-full bg-cyan/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          </span>
                          {f}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {USUARIOS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-cyan" : "w-2 bg-border hover:bg-text-muted"
              }`}
              aria-label={`Ir a ${USUARIOS[i]!.titulo}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
