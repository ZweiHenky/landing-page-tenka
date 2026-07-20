"use client"

import { motion } from "motion/react"
import { cn } from "@/utils/cn"

const PLANS = [
  {
    name: "Gratis",
    price: "0",
    currency: "",
    period: "Siempre gratis",
    desc: "Perfecto para probar la plataforma",
    popular: false,
    features: [
      "1 liga",
      "1 división",
      "Gestión básica de equipos",
      "Tabla de posiciones",
      "Hasta 5 equipos",
    ],
    cta: "Comenzar gratis",
    href: "#cta",
  },
  {
    name: "Pro",
    price: "149",
    currency: "MXN",
    period: "por división / mes",
    desc: "Para ligas en crecimiento",
    popular: true,
    features: [
      "Ligas ilimitadas",
      "Divisiones ilimitadas",
      "Estadísticas completas",
      "Playoffs automáticos",
      "Exportación de datos",
      "Soporte prioritario",
    ],
    cta: "Comenzar ahora",
    href: "#cta",
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    currency: "",
    period: "",
    desc: "Para organizaciones grandes",
    popular: false,
    features: [
      "Todo lo de Pro",
      "API personalizada",
      "White label",
      "Soporte dedicado",
      "SLA garantizado",
    ],
    cta: "Contactar",
    href: "#cta",
  },
]

export default function PricingCards() {
  return (
    <section id="precios" className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">
            Planes claros, sin sorpresas
          </h2>
          <p className="mt-4 text-text-secondary text-base max-w-xl mx-auto">
            Elige el plan que mejor se adapte al tamaño de tu liga
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.15, ease: [0, 0, 0.2, 1] }}
              className={cn(
                "relative rounded-2xl border p-6 lg:p-8 flex flex-col",
                plan.popular
                  ? "bg-surface border-cyan shadow-lg shadow-cyan/10"
                  : "bg-surface border-border/50",
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan text-black text-xs font-bold px-4 py-1 rounded-full">
                  Más popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl text-white">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  {plan.price === "Personalizado" ? (
                    <span className="font-display text-3xl text-white">{plan.price}</span>
                  ) : (
                    <>
                      <span className="font-display text-4xl text-white">${plan.price}</span>
                      {plan.currency && (
                        <span className="text-text-muted text-sm">{plan.currency}</span>
                      )}
                    </>
                  )}
                </div>
                {plan.period && (
                  <p className="text-text-muted text-xs mt-1">{plan.period}</p>
                )}
                <p className="text-text-secondary text-sm mt-2">{plan.desc}</p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <svg className="w-4 h-4 text-cyan shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={cn(
                  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-200 active:scale-[0.97]",
                  plan.popular
                    ? "bg-cyan text-black hover:brightness-110"
                    : "bg-surface-light border border-border text-white hover:border-cyan hover:text-cyan",
                )}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
