import type { CSSProperties, ReactNode } from "react"
import { cn } from "@/utils/cn"

type ContextCard = "standings" | "match" | "player" | "round" | "result"

export interface FloatingKeywordProps {
  label: string
  position: string
  visibility?: string
  variant?: "text" | "glass"
  size?: "sm" | "md" | "lg"
  opacity?: "soft" | "medium" | "strong"
  depth: number
  duration: number
  delay: number
  distance: number
  rotation?: number
  horizontalDelay?: number
  horizontalReverse?: boolean
  context?: ContextCard
  tooltipPosition?: string
}

const sizeClasses = {
  sm: "text-xs md:text-sm",
  md: "text-sm md:text-base",
  lg: "text-base md:text-lg",
}

const opacityClasses = {
  soft: "opacity-35",
  medium: "opacity-55",
  strong: "opacity-80",
}

function ContextContent({ type }: { type: ContextCard }) {
  if (type === "standings") {
    return (
      <div className="w-52">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan">Posiciones</p>
        <ol className="space-y-1.5 text-xs text-text-secondary">
          <li className="flex justify-between gap-4"><span>1. Lobos FC</span><strong className="text-white">21 pts</strong></li>
          <li className="flex justify-between gap-4"><span>2. Atlético Sur</span><strong className="text-white">18 pts</strong></li>
          <li className="flex justify-between gap-4"><span>3. Titanes</span><strong className="text-white">16 pts</strong></li>
        </ol>
      </div>
    )
  }

  if (type === "match") {
    return (
      <div className="w-52">
        <p className="text-sm font-semibold text-white">Lobos FC <span className="px-1 text-text-muted">vs</span> Titanes</p>
        <p className="mt-2 text-xs text-cyan">Sábado · 18:00</p>
        <p className="mt-1 text-xs text-text-muted">Cancha Jaguar</p>
      </div>
    )
  }

  if (type === "round") {
    return (
      <div className="w-52">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan">Jornada 8</p>
        <p className="mt-2 text-sm font-semibold text-white">Sábado 24 de agosto</p>
        <p className="mt-1 text-xs text-text-muted">3 partidos programados</p>
      </div>
    )
  }

  if (type === "result") {
    return (
      <div className="w-52">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-success">Finalizado</p>
        </div>
        <p className="mt-2 text-sm font-semibold text-white">Lobos FC <span className="px-1 text-cyan">3 — 1</span> Titanes</p>
        <p className="mt-1 text-xs text-text-muted">Tabla actualizada</p>
      </div>
    )
  }

  return (
    <div className="flex w-56 items-center gap-3">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 font-display text-sm text-cyan">AM</div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-white">Alex Mendoza</p>
        <p className="text-xs text-text-muted">Lobos FC · Delantero</p>
        <p className="mt-1 text-[11px] text-cyan">8 goles · 5 asistencias</p>
      </div>
    </div>
  )
}

export default function FloatingKeyword({
  label,
  position,
  visibility,
  variant = "text",
  size = "md",
  opacity = "medium",
  depth,
  duration,
  delay,
  distance,
  rotation = 0,
  horizontalDelay = 0,
  horizontalReverse = false,
  context,
  tooltipPosition = "left-1/2 top-full mt-3 -translate-x-1/2",
}: FloatingKeywordProps) {
  const tooltipId = `hero-${label.toLowerCase().replace(/\s+/g, "-")}-tooltip`
  const animationStyle = {
    "--float-duration": `${duration}s`,
    "--float-delay": `${delay}s`,
    "--float-distance": `${distance}px`,
    "--float-rotation": `${rotation}deg`,
    "--drift-delay": `${horizontalDelay}s`,
  } as CSSProperties

  const content: ReactNode = (
    <span
      className={cn(
        "hero-keyword-label relative block whitespace-nowrap font-medium tracking-wide transition-[color,background-color,border-color,box-shadow,transform,opacity] duration-300 group-hover:scale-105 group-hover:text-cyan-bright group-hover:opacity-100 group-focus-within:scale-105 group-focus-within:text-cyan-bright group-focus-within:opacity-100",
        sizeClasses[size],
        opacityClasses[opacity],
        variant === "glass"
          ? "rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-white shadow-[0_12px_40px_rgba(0,0,0,0.24)] backdrop-blur-md group-hover:border-cyan/40 group-hover:bg-cyan/[0.08] group-hover:shadow-[0_0_28px_rgba(77,208,225,0.16)] group-focus-within:border-cyan/40 group-focus-within:bg-cyan/[0.08]"
          : "px-2 py-1 text-text-secondary drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]",
      )}
    >
      {label}
    </span>
  )

  return (
    <div
      className={cn("hero-keyword-parallax pointer-events-none absolute z-20", position, visibility)}
      data-depth={depth}
      aria-hidden={context ? undefined : true}
    >
      <div className={cn("hero-keyword-drift", horizontalReverse && "hero-keyword-drift-reverse")} style={animationStyle}>
        <div className="hero-keyword-float" style={animationStyle}>
          <div className="group relative pointer-events-auto">
            {context ? (
              <button type="button" className="block cursor-default" aria-label={`${label}: mostrar información`} aria-describedby={tooltipId}>
                {content}
              </button>
            ) : content}

            {context && (
              <div
                id={tooltipId}
                className={cn(
                  "pointer-events-none absolute block rounded-xl border border-white/10 bg-surface/95 p-4 text-left opacity-0 shadow-[0_18px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-200 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100",
                  "z-40 translate-y-1 scale-95",
                  tooltipPosition,
                )}
                role="tooltip"
              >
                <ContextContent type={context} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
