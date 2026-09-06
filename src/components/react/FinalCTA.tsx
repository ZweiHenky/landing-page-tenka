"use client"

import { useState } from "react"

type Role = "ORGANIZADOR" | "CAPITAN" | "AFICIONADO"
type FormState = "idle" | "submitting" | "success" | "error"

const ROLES: Array<{ value: Role; label: string }> = [
  { value: "ORGANIZADOR", label: "Organizo ligas" },
  { value: "CAPITAN", label: "Lidero un equipo" },
  { value: "AFICIONADO", label: "Sigo competencias" },
]

export default function FinalCTA() {
  const [state, setState] = useState<FormState>("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    setState("submitting")
    setMessage("")

    const form = event.currentTarget
    const data = new FormData(form)
    const apiUrl = import.meta.env.PUBLIC_API_URL?.replace(/\/$/, "")

    if (!apiUrl) {
      setState("error")
      setMessage("La lista de espera aún no está conectada. Intenta de nuevo más tarde.")
      return
    }

    try {
      const response = await fetch(`${apiUrl}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "omit",
        body: JSON.stringify({
          email: data.get("email"),
          role: data.get("role"),
          source: "LANDING_FINAL_CTA",
          consent: data.get("consent") === "on",
        }),
      })

      if (!response.ok) throw new Error("waitlist_request_failed")

      setState("success")
      setMessage("Estás dentro. Te avisaremos cuando Tenka esté listo.")
      form.reset()
    } catch {
      setState("error")
      setMessage("No pudimos registrar tu correo. Revisa los datos e intenta nuevamente.")
    }
  }

  return (
    <section id="lista-espera" className="relative overflow-hidden bg-cyan py-24 text-black md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" style={{ backgroundImage: "linear-gradient(rgba(5,35,39,.24) 1px,transparent 1px),linear-gradient(90deg,rgba(5,35,39,.24) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-black/15" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1280px] gap-12 px-6 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/60">07 / Próximo lanzamiento</p>
          <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.05] text-black md:text-6xl">Organiza tu próxima liga con Tenka.</h2>
          <p className="mt-5 max-w-lg leading-relaxed text-black/70">Déjanos tu correo y te avisaremos cuando el gestor de ligas esté disponible en Latinoamérica.</p>
          <div className="mt-9 flex items-center gap-5 border-t border-black/20 pt-5 text-xs font-medium uppercase tracking-wider text-black/60"><span>Sin descarga todavía</span><span className="h-1 w-1 rounded-full bg-black/40" /><span>Sin tarjeta</span></div>
        </div>

        <div className="bg-[#091315] p-6 text-white shadow-[0_32px_80px_rgba(5,35,39,.2)] md:p-9">
          <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-6"><div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan">Registro de acceso</p><h3 className="mt-2 font-display text-2xl">Lista de espera</h3></div><span className="font-brand text-5xl text-white/5">T</span></div>

          <form className="mt-7" onSubmit={handleSubmit}>
            <label htmlFor="waitlist-email" className="text-xs font-medium text-text-secondary">Correo electrónico</label>
            <input id="waitlist-email" name="email" type="email" maxLength={254} autoComplete="email" required placeholder="tu@correo.com" className="mt-2 min-h-12 w-full border border-white/15 bg-white/[.06] px-4 text-sm text-white outline-none transition placeholder:text-text-muted focus:border-cyan" />

            <fieldset className="mt-6">
              <legend className="text-xs font-medium text-text-secondary">¿Cuál es tu relación con la liga?</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {ROLES.map((role, index) => (
                  <label key={role.value} className="cursor-pointer border border-white/10 bg-white/[.04] p-3 text-xs text-text-secondary transition has-[:checked]:border-cyan has-[:checked]:bg-cyan/10 has-[:checked]:text-cyan">
                    <input className="sr-only" type="radio" name="role" value={role.value} defaultChecked={index === 0} />
                    {role.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-text-muted">
              <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 shrink-0 accent-cyan" />
              <span>Acepto que Tenka use mi correo para avisarme sobre el lanzamiento. Puedo retirar mi consentimiento en cualquier momento.</span>
            </label>

            <button type="submit" disabled={state === "submitting"} className="mt-7 flex min-h-12 w-full items-center justify-between bg-cyan px-5 text-sm font-semibold text-black transition hover:bg-cyan-bright disabled:cursor-wait disabled:opacity-60"><span>{state === "submitting" ? "Registrando..." : "Quiero enterarme del lanzamiento"}</span><span aria-hidden="true">→</span></button>
            {message && <p role="status" aria-live="polite" className={`mt-4 text-sm ${state === "success" ? "text-success" : "text-danger"}`}>{message}</p>}
            <p className="mt-4 text-[11px] text-text-muted">Consulta nuestro <a href="/aviso-de-privacidad" className="text-cyan hover:underline">Aviso de Privacidad</a>.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
