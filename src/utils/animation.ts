export const DURATIONS = {
  micro: 0.15,
  fast: 0.2,
  normal: 0.3,
  medium: 0.5,
  slow: 0.7,
  narrative: 1,
} as const

export const EASING = [0.25, 0.1, 0.25, 1] as const
export const EASE_OUT = [0, 0, 0.2, 1] as const
export const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const

export const VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: DURATIONS.medium, ease: EASE_OUT } },
  },
  fadeInUp: (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: DURATIONS.medium, ease: EASE_OUT, delay } },
  }),
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: DURATIONS.medium, ease: EASE_OUT } },
  },
  stagger: (index: number, baseDelay = 0.1) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: DURATIONS.normal, ease: EASE_OUT, delay: baseDelay + index * 0.08 } },
  }),
} as const
