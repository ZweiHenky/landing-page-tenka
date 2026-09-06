"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "@/utils/cn"

const NAV_ITEMS = [
  { id: "como-funciona", label: "Cómo funciona" },
  { id: "funcionalidades", label: "Funciones" },
  { id: "organizadores", label: "Organizadores" },
  { id: "precios", label: "Planes" },
  { id: "preguntas", label: "Preguntas" },
] as const

const getScrollBehavior = (): ScrollBehavior =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)

      const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i]
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 200) {
          setActiveSection(el.id)
          break
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: getScrollBehavior(), block: "start" })
      setMobileOpen(false)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-border/50 pt-5 pb-4"
          : "bg-transparent pt-7 pb-6",
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: getScrollBehavior() })}
          className="relative h-9 w-36 shrink-0 overflow-hidden sm:w-40"
          aria-label="Ir al inicio"
        >
          <img
            src="/assets/logo-horizontal.webp"
            alt="Tenka"
            width="400"
            height="267"
            className="absolute left-1/2 top-1/2 w-[180px] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_0_10px_rgba(77,208,225,0.16)] sm:w-[200px]"
          />
        </button>

        <div className="hidden md:flex items-center gap-3">
        <nav className="flex items-center gap-1" role="navigation" aria-label="Navegación principal">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                activeSection === id
                  ? "text-cyan"
                  : "text-text-secondary hover:text-white",
              )}
              aria-current={activeSection === id ? "true" : undefined}
            >
              {label}
              {activeSection === id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-cyan rounded-full" />
              )}
            </button>
          ))}
        </nav>
        <a href="#lista-espera" className="ml-2 inline-flex items-center bg-cyan px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-cyan-bright">Lista de espera</a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-dark border-t border-border/50" role="navigation" aria-label="Navegación móvil">
          <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={cn(
                  "w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200",
                  activeSection === id ? "text-cyan bg-cyan/10" : "text-text-secondary",
                )}
              >
                {label}
              </button>
            ))}
            <a href="#lista-espera" onClick={() => setMobileOpen(false)} className="mt-2 bg-cyan px-4 py-3 text-center text-sm font-semibold text-black">Únete a la lista de espera</a>
          </div>
        </nav>
      )}
    </header>
  )
}
