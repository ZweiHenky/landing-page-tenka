"use client"

import { motion } from "motion/react"
import { cn } from "@/utils/cn"

const PLANS = [
  {
    name: "Gratis",
    label: "Al lanzamiento",
    capacity: "Sin costo",
    desc: "Lo esencial para comenzar a organizar.",
    featured: false,
    features: [
      "1 liga",
      "1 división total",
      "Hasta 40 equipos propios",
      "Jornadas, resultados y tabla de posiciones",
    ],
    cta: "Ver cómo funciona",
    href: "#como-funciona",
  },
  {
    name: "Capacidad 2–15",
    label: "Próximamente",
    capacity: "2 a 15 divisiones",
    desc: "Capacidad fija adquirida por mes.",
    featured: true,
    features: [
      "Niveles exactos de 2 a 15 divisiones administrables",
      "Capacidad compartida entre todas tus ligas",
      "Eliges y pagas la capacidad completa del nivel",
      "Cada división ocupa un espacio durante el periodo",
      "Los espacios sin usar no reducen el importe",
    ],
    cta: "Próximamente",
    href: null,
  },
  {
    name: "Empresa",
    label: "Próximamente · atención manual",
    capacity: "Más de 15 divisiones",
    desc: "Para organizaciones que superan la capacidad estándar.",
    featured: false,
    features: [
      "Capacidad para operaciones de mayor escala",
      "Definición manual de necesidades",
      "Acompañamiento directo",
      "Disponibilidad próximamente",
    ],
    cta: "Hablar con Tenka",
    href: "mailto:support@tenka.studio?subject=Tenka%20Empresa",
  },
]

const CAPACITY_STEPS = [
  {
    number: "01",
    title: "Elige tu capacidad",
    text: "Selecciona un nivel mensual exacto entre 2 y 15 divisiones.",
  },
  {
    number: "02",
    title: "Asigna tus divisiones",
    text: "Cada división se vincula a un espacio de esa capacidad durante el periodo.",
  },
  {
    number: "03",
    title: "Amplía cuando lo necesites",
    text: "Un espacio reservado no se libera antes del cierre del periodo. Para agregar otra división, sube de nivel.",
  },
]

export default function PricingCards() {
  return (
    <section id="precios" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-x-0 top-1/3 h-80 bg-cyan/3 blur-3xl pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center rounded-full border border-cyan/30 bg-cyan/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            Planes para organizadores
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl text-white text-balance">
            Empieza gratis. Crece con capacidad clara.
          </h2>
          <p className="mt-4 text-text-secondary text-base max-w-2xl mx-auto text-balance">
            Al lanzamiento podrás organizar sin costo. Las suscripciones de capacidad mensual llegarán después.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {PLANS.map((plan, i) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.12, ease: [0, 0, 0.2, 1] }}
              className={cn(
                "relative rounded-2xl border p-6 lg:p-8 flex flex-col overflow-hidden",
                plan.featured
                  ? "bg-surface border-cyan shadow-lg shadow-cyan/10"
                  : "bg-surface border-border/60",
              )}
            >
              {plan.featured && <div className="absolute inset-x-0 top-0 h-1 bg-cyan" />}

              <div className="mb-6">
                <span
                  className={cn(
                    "inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider",
                    plan.featured ? "bg-cyan/12 text-cyan" : "bg-surface-light text-text-secondary",
                  )}
                >
                  {plan.label}
                </span>
                <h3 className="mt-4 font-display text-xl text-white">{plan.name}</h3>
                <p className="mt-3 font-display text-2xl text-white">{plan.capacity}</p>
                <p className="text-text-secondary text-sm mt-2 leading-relaxed">{plan.desc}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary">
                    <svg className="w-4 h-4 mt-0.5 text-cyan shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.href ? (
                <a
                  href={plan.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-surface-light border border-border text-white hover:border-cyan hover:text-cyan transition-all duration-200 active:scale-[0.97]"
                >
                  {plan.cta}
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl border border-border/70 bg-black/20 text-text-muted cursor-not-allowed"
                >
                  {plan.cta}
                </span>
              )}
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0, 0, 0.2, 1] }}
          className="max-w-6xl mx-auto mt-8 rounded-2xl border border-border/60 bg-dark p-6 md:p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-7">
            <div>
              <p className="text-cyan text-xs font-semibold uppercase tracking-[0.18em]">Cómo funcionará la capacidad</p>
              <h3 className="mt-2 font-display text-2xl md:text-3xl text-white">Un espacio, una división, un periodo</h3>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-text-muted">
              BORRADOR, ABIERTA, EN_CURSO, FINALIZADA o CANCELADA: el estado deportivo no cambia el importe ni libera automáticamente el espacio.
            </p>
          </div>

          <ol className="grid md:grid-cols-3 gap-4">
            {CAPACITY_STEPS.map((step) => (
              <li key={step.number} className="relative rounded-xl border border-border/60 bg-surface p-5">
                <span className="font-brand text-sm text-cyan">{step.number}</span>
                <h4 className="mt-3 font-semibold text-white">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-xs text-text-muted text-center md:text-left">
            Los precios finales localizados se mostrarán en Apple o Google cuando las suscripciones estén disponibles.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
