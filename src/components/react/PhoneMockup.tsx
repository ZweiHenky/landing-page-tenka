interface PhoneMockupProps {
  screenshotSrc?: string
  screenshotAlt?: string
}

export default function PhoneMockup({ screenshotSrc, screenshotAlt = "Vista de la aplicación Tenka" }: PhoneMockupProps) {
  return (
    <div className="relative aspect-[390/844] w-[230px] sm:w-[260px] lg:w-[290px] xl:w-[310px]">
      <div className="absolute -inset-8 rounded-[35%] bg-cyan/[0.08] blur-3xl" aria-hidden="true" />
      <div className="relative h-full overflow-hidden rounded-[2.8rem] border border-white/20 bg-[#080A0E] p-[7px] shadow-[0_32px_90px_rgba(0,0,0,0.65),0_0_50px_rgba(77,208,225,0.08)]">
        <div className="relative h-full overflow-hidden rounded-[2.35rem] border border-white/[0.06] bg-dark">
          {screenshotSrc ? (
            <img src={screenshotSrc} alt={screenshotAlt} className="h-full w-full object-cover" />
          ) : (
            <div className="relative h-full overflow-hidden bg-[linear-gradient(155deg,#171C26_0%,#0B0E14_55%,#11151D_100%)] px-4 pb-5 pt-12">
              <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div><p className="font-brand text-[10px] tracking-[0.2em] text-cyan">TENKA</p><p className="mt-1 text-[8px] text-text-muted">Centro de competencia</p></div>
                  <span className="h-7 w-7 rounded-full border border-cyan/30 bg-cyan/10" />
                </div>
                <div className="mt-7 border border-white/10 bg-surface/90 p-3">
                  <div className="flex items-start justify-between"><div><p className="text-[8px] uppercase tracking-wider text-cyan">Primera A</p><p className="mt-1 text-xs font-semibold text-white">Liga Khaztores</p></div><span className="rounded-full bg-success/10 px-2 py-1 text-[7px] font-semibold text-success">EN CURSO</span></div>
                  <div className="mt-4 grid grid-cols-3 gap-1 text-center"><div className="bg-white/5 py-2"><strong className="block text-xs text-white">8</strong><span className="text-[7px] text-text-muted">Equipos</span></div><div className="bg-white/5 py-2"><strong className="block text-xs text-white">6</strong><span className="text-[7px] text-text-muted">Jornadas</span></div><div className="bg-cyan/10 py-2"><strong className="block text-xs text-cyan">24</strong><span className="text-[7px] text-text-muted">Partidos</span></div></div>
                </div>
                <p className="mt-5 text-[8px] font-semibold uppercase tracking-[0.16em] text-text-muted">Próximos partidos</p>
                {["Fckhaztor  ·  Eclipse", "Lobos  ·  Titanes"].map((match, index) => (
                  <div key={match} className="mt-2 flex items-center justify-between border border-white/[.07] bg-dark/90 p-3"><div><p className="text-[9px] text-white">{match}</p><p className="mt-1 text-[7px] text-text-muted">Cancha {index + 1} · 19:{index === 0 ? "30" : "50"}</p></div><span className="font-brand text-[9px] text-cyan">J07</span></div>
                ))}
                <div className="mt-5 border border-cyan/20 bg-[#0d2023] p-3">
                  <div className="flex justify-between text-[7px] uppercase tracking-wider text-text-muted"><span>Posiciones</span><span>PTS</span></div>
                  {[['1', 'Fckhaztor', '15'], ['2', 'Lobos del Norte', '13'], ['3', 'Titanes FC', '10']].map((row) => (
                    <div key={row[0]} className="mt-2 grid grid-cols-[1rem_1fr_auto] border-t border-white/[.06] pt-2 text-[8px]"><span className="text-cyan">{row[0]}</span><span className="text-white">{row[1]}</span><strong className="text-white">{row[2]}</strong></div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="absolute left-1/2 top-2.5 z-20 h-6 w-[38%] -translate-x-1/2 rounded-full border border-white/[0.04] bg-black shadow-sm" aria-hidden="true" />
          <div className="absolute bottom-2.5 left-1/2 z-20 h-1 w-[34%] -translate-x-1/2 rounded-full bg-white/55" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.08),transparent_20%,transparent_72%,rgba(255,255,255,0.025))]" aria-hidden="true" />
        </div>
      </div>
      <span className="absolute -right-[3px] top-[25%] h-16 w-[3px] rounded-r bg-white/15" aria-hidden="true" />
      <span className="absolute -left-[3px] top-[20%] h-9 w-[3px] rounded-l bg-white/15" aria-hidden="true" />
      <span className="absolute -left-[3px] top-[27%] h-14 w-[3px] rounded-l bg-white/15" aria-hidden="true" />
    </div>
  )
}
