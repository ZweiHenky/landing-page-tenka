"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "@/utils/cn"

const NAV_ITEMS = [
  { id: "ecosistema", label: "Ecosistema" },
  { id: "funcionalidades", label: "Funcionalidades" },
  { id: "precios", label: "Precios" },
] as const

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
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setMobileOpen(false)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-border/50 py-2"
          : "bg-transparent py-4",
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan" />
          <span className="font-brand text-lg tracking-wide text-white">TENKA</span>
        </button>

        <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Navegación principal">
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
          <a
            href="#cta"
            className="ml-4 px-6 py-2.5 bg-cyan text-black text-sm font-semibold rounded-xl hover:brightness-110 transition-all duration-200 active:scale-[0.97]"
          >
            Comenzar
          </a>
        </nav>

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
            <a
              href="#cta"
              className="mt-2 w-full text-center px-6 py-3 bg-cyan text-black text-sm font-semibold rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              Comenzar
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
