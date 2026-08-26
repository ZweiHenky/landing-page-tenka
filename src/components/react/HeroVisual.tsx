import FloatingKeyword, { type FloatingKeywordProps } from "./FloatingKeyword"
import PhoneMockup from "./PhoneMockup"

const PHONE_KEYWORDS: FloatingKeywordProps[] = [
  {
    label: "Partidos",
    position: "left-0 top-[24%] sm:left-[3%] lg:-left-[2%]",
    variant: "glass",
    size: "lg",
    opacity: "strong",
    depth: 0.95,
    duration: 5.8,
    delay: -3.1,
    distance: 9,
    rotation: -1,
    horizontalDelay: -0.7,
    context: "match",
    tooltipPosition: "left-0 top-full mt-3",
  },
  {
    label: "Jugadores",
    position: "right-0 top-[16%] sm:right-[3%] lg:-right-[1%]",
    variant: "glass",
    size: "md",
    opacity: "strong",
    depth: 0.8,
    duration: 6.8,
    delay: -4.4,
    distance: 10,
    rotation: 1,
    horizontalDelay: -2.4,
    horizontalReverse: true,
    context: "player",
    tooltipPosition: "right-0 top-full mt-3",
  },
  {
    label: "Posiciones",
    position: "bottom-[20%] left-[1%] sm:left-[5%] lg:-left-[3%]",
    variant: "glass",
    size: "md",
    opacity: "strong",
    depth: 0.75,
    duration: 6.1,
    delay: -1.7,
    distance: 8,
    rotation: 1,
    horizontalDelay: -4.1,
    context: "standings",
    tooltipPosition: "bottom-full left-0 mb-3",
  },
  {
    label: "Jornadas",
    position: "right-0 top-[47%] sm:right-[1%] lg:-right-[4%]",
    variant: "glass",
    size: "md",
    opacity: "strong",
    depth: 0.55,
    duration: 7.2,
    delay: -0.8,
    distance: 7,
    rotation: -1,
    horizontalDelay: -5.8,
    horizontalReverse: true,
    context: "round",
    tooltipPosition: "right-0 top-full mt-3",
  },
  {
    label: "Resultados",
    position: "bottom-[14%] right-[1%] sm:bottom-[16%] sm:right-[2%] lg:-right-[2%]",
    variant: "glass",
    size: "md",
    opacity: "strong",
    depth: 0.45,
    duration: 8,
    delay: -5.1,
    distance: 6,
    horizontalDelay: -7.2,
    context: "result",
    tooltipPosition: "bottom-full right-0 mb-3",
  },
]

export default function HeroVisual() {
  return (
    <div
      className="relative mx-auto grid min-h-[100svh] w-full max-w-[1280px] items-center gap-8 px-6 pb-16 pt-28 md:px-8 md:pb-20 md:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-12"
    >
      <div
        className="relative z-30 mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
      >
        <div className="mb-6 flex items-center justify-center gap-2 lg:justify-start">
          <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_16px_rgba(77,208,225,0.65)]" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
            Próximo lanzamiento · México
          </span>
        </div>

        <h1 className="font-display text-4xl leading-[1.08] text-white text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
          Tu liga deja de vivir <span className="text-cyan">en mensajes sueltos.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-secondary text-balance md:text-lg lg:mx-0">
          Programa jornadas, registra resultados y publica posiciones desde un solo ecosistema diseñado para el fútbol amateur.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <a
            href="#lista-espera"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-cyan px-6 py-3.5 text-sm font-semibold text-black shadow-[0_0_28px_rgba(77,208,225,0.16)] transition hover:bg-cyan-bright active:scale-[0.98]"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16v16H4z" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            Únete a la lista de espera
          </a>
          <a
            href="#precios"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-black/25 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-200 hover:border-cyan/60 hover:bg-cyan/[0.08] hover:text-cyan active:scale-[0.98]"
          >
            Ver planes y disponibilidad
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      <div
        className="relative z-20 mx-auto flex min-h-[540px] w-full max-w-[480px] items-center justify-center sm:min-h-[610px] lg:min-h-[650px]"
        aria-label="Vista previa de la aplicación Tenka"
      >
        <div className="hero-keyword-parallax relative z-10" data-depth="0.18">
          <PhoneMockup />
        </div>

        {PHONE_KEYWORDS.map((keyword) => (
          <FloatingKeyword key={keyword.label} {...keyword} />
        ))}
      </div>
    </div>
  )
}
