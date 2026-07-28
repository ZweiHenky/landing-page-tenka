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
            <div className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-[linear-gradient(155deg,#171C26_0%,#0B0E14_55%,#11151D_100%)]">
              <div className="absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/[0.055] blur-3xl" aria-hidden="true" />
              <div className="relative flex flex-col items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_18px_rgba(77,208,225,0.7)]" />
                <span className="font-brand text-xl tracking-[0.2em] text-white">TENKA</span>
                <span className="text-[9px] uppercase tracking-[0.24em] text-text-muted">Tu liga conectada</span>
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
