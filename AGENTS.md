# Tenka Landing Page

Landing page para **Tenka** — plataforma de gestión de ligas deportivas.

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Astro 5 |
| Lenguaje | TypeScript 5 |
| Estilos | Tailwind CSS v4 |
| Componentes interactivos | React 19 |
| Animaciones React | Motion |
| Animaciones scroll complejas | GSAP + ScrollTrigger (1 sección) |
| Iconos | Lucide Icons |
| Fuentes | Inter, Sora, Space Grotesk — Google Fonts |

## Palette

| Token | Hex |
|-------|-----|
| `black` | `#090B10` |
| `dark` | `#11151D` |
| `surface` | `#171C26` |
| `surface-light` | `#202736` |
| `white` | `#FFFFFF` |
| `text-secondary` | `#B0BAC9` |
| `text-muted` | `#7A8598` |
| `cyan` | `#4DD0E1` |
| `cyan-bright` | `#7CE7F2` |
| `cyan-dark` | `#2196A8` |
| `success` | `#69F0AE` |
| `danger` | `#FF5252` |
| `warning` | `#FFD54F` |
| `playoff` | `#A78BFA` |
| `border` | `#293241` |
| `border-active` | `#4DD0E1` |

## Secciones (orden)

1. Navbar (React, `client:load`)
2. Hero (React, `client:load`)
3. Stats (React, `client:visible`)
4. Ecosistema Conectado (React, `client:visible`)
5. Por tipo de usuario (React, `client:visible`)
6. Comunidad (React, `client:visible`)
7. Perfiles / Carrusel (React, `client:visible`)
8. Búsqueda (React, `client:visible`)
9. Demo Standings (React, `client:visible`)
10. Scroll Narrativo — GSAP (React, `client:visible`)
11. CTA Final (React, `client:idle`)
12. Footer (Astro estático)

## Estrategia de hidratación

| Componente | Directiva |
|-----------|-----------|
| Navbar | `client:load` |
| HeroVisual | `client:load` |
| EcosystemGraph | `client:visible` |
| NarrativeScroller | `client:visible` |
| StandingsDemo | `client:visible` |
| ProfileCarousel | `client:visible` |
| CommunityGrid | `client:visible` |
| SearchDemo | `client:visible` |
| UserTypeTabs | `client:visible` |
| StatsCounter | `client:visible` |
| FinalCTA | `client:idle` |

## Comandos

```bash
npm run dev          # Dev server
npm run build        # Build
npm run preview      # Preview build
```
