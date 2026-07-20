import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import react from "@astrojs/react"
import vercel from "@astrojs/vercel"

export default defineConfig({
  site: "https://tenka.studio",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  adapter: vercel(),
  build: {
    inlineStylesheets: "auto",
  },
})
