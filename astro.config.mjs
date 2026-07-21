import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import react from "@astrojs/react"
import vercel from "@astrojs/vercel"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://tenka.studio",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.includes("/404") &&
        !page.includes("/liga") &&
        !page.includes("/equipo") &&
        !page.includes("/arbitro") &&
        !page.includes("/aviso-de-privacidad") &&
        !page.includes("/terminos-y-condiciones"),
      lastmod: new Date(),
      changefreq: "weekly",
      priority: 1.0,
    }),
  ],
  adapter: vercel(),
  build: {
    inlineStylesheets: "auto",
  },
})
