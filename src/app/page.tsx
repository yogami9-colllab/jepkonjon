import Link from 'next/link'

const stats = [
  { icon: '🏗️', label: 'Est. 2025', sub: 'Fresh & Hungry' },
  { icon: '📍', label: 'Nakuru Based', sub: 'We Know the Area' },
  { icon: '✅', label: 'NCA Registered', sub: 'Fully Compliant' },
  { icon: '💬', label: '24hr Response', sub: 'We Pick Up Fast' },
]

const services = [
  { icon: '🏠', title: 'Residential Construction', desc: 'Bungalows, maisonettes & apartments built to last a lifetime.', price: 'From KES 1.8M' },
  { icon: '🏢', title: 'Commercial Construction', desc: 'Shops, offices and warehouses — structures that mean business.', price: 'From KES 2.2M' },
  { icon: '🔧', title: 'Renovations', desc: 'Transform your existing space with expert remodelling.', price: 'From KES 95K' },
  { icon: '🚧', title: 'Civil & Site Works', desc: 'Site clearing, drainage, fencing and road works done right.', price: 'From KES 50K' },
  { icon: '📋', title: 'Project Management', desc: 'End-to-end oversight so your build stays on time and budget.', price: '5–7% of project' },
  { icon: '🏚️', title: 'Roofing Works', desc: 'Supply and installation of iron sheets, tiles and box profile.', price: 'From KES 700/m²' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-[#0A0A0A] overflow-hidden clip-diagonal">
        {/* Background layers */}
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#002F6C]/40 via-transparent to-[#0A0A0A]" />
        <div className="scanline" />

        {/* Decorative big letter */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-condensed font-extrabold text-[30vw] leading-none text-white/[0.02] select-none pointer-events-none">
          J
        </div>

        {/* Red accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#CC0000] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 border border-[#0047AB]/40 px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#CC0000] animate-pulse" />
              <span className="font-condensed font-semibold tracking-[0.2em] text-[#0047AB] text-xs uppercase">
                NCA Registered · Nakuru, Kenya · Est. 2025
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] text-white mb-4">
              Building
              <br />
              <span className="text-gradient-blue">Nakuru&apos;s</span>
              <br />
              Future.
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 max-w-16 bg-[#CC0000]" />
              <p className="font-condensed text-lg md:text-xl text-white/60 tracking-wide">
                One Structure at a Time
              </p>
            </div>

            <p className="text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              We are new — and that is your advantage. Lower rates, higher attention, same professional standards as any established firm. Every client we serve right now is helping us build our name.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#0047AB] hover:bg-[#002F6C] text-white font-condensed font-bold tracking-widest uppercase text-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-900/40 text-center"
              >
                Get a Free Quote →
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-white/20 hover:border-white/50 text-white font-condensed font-bold tracking-widest uppercase text-sm transition-all duration-200 text-center"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/20 text-xs font-condensed tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#0047AB] py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <div>
                <div className="font-condensed font-bold text-white tracking-wide text-sm">{s.label}</div>
                <div className="text-white/60 text-xs">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY NEW IS AN ADVANTAGE */}
      <section className="py-24 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute inset-0 bg-diagonal" />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="red-line">
              <span className="font-condensed font-bold text-[#CC0000] tracking-widest uppercase text-xs">Our Promise</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white mt-3 mb-6 leading-tight">
              Why Choose a<br />
              <span className="text-gradient-red">New Company?</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              We started in 2025 because we saw a gap — Nakuru needed builders who actually showed up on time, communicated clearly, and did not cut corners.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Our founders are not new. The people running Jepkonjon have years of hands-on construction experience in this region. We have set up this company the right way — registered, insured, and compliant — because we intend to be here for the long term.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-[#0047AB] font-condensed font-bold tracking-widest uppercase text-sm hover:text-white transition-colors">
              Meet the Team <span className="text-[#CC0000]">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { title: 'Lower Rates', desc: 'We are building our reputation, so our prices reflect that ambition.', color: 'border-[#0047AB]' },
              { title: 'Higher Attention', desc: 'Every single client matters to us. You are not a number here.', color: 'border-[#CC0000]' },
              { title: 'Same Standards', desc: 'NCA registered and professionally trained — no corners cut, ever.', color: 'border-white/20' },
            ].map((item) => (
              <div key={item.title} className={`border-l-2 ${item.color} pl-5 py-4 bg-white/[0.02]`}>
                <h3 className="font-condensed font-bold text-white text-lg tracking-wide mb-1">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="blue-line">
                <span className="font-condensed font-bold text-[#0047AB] tracking-widest uppercase text-xs">What We Do</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-black text-white mt-3 leading-tight">
                Our Services
              </h2>
            </div>
            <Link href="/services" className="text-white/40 hover:text-white font-condensed font-semibold tracking-widest uppercase text-sm transition-colors self-start md:self-auto">
              View All + Pricing →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="service-card border border-white/8 bg-white/[0.02] p-6 group cursor-pointer"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-condensed font-bold text-white text-lg tracking-wide mb-2 group-hover:text-[#4A90E2] transition-colors">
                  {s.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="font-condensed font-bold text-[#0047AB] text-sm tracking-wide">{s.price}</span>
                  <span className="text-white/20 group-hover:text-[#0047AB] transition-colors text-sm">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-20 bg-[#0047AB] relative overflow-hidden">
        <div className="absolute inset-0 bg-diagonal opacity-30" />
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-[#CC0000]" />
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-2">
              Ready to Build?
            </h2>
            <p className="text-white/70 text-lg">We respond within 24 hours. No pressure. No obligation.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-[#0047AB] font-condensed font-bold tracking-widest uppercase text-sm hover:bg-[#CC0000] hover:text-white transition-all duration-200 text-center"
            >
              Request Free Quote
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 border-2 border-white/40 text-white font-condensed font-bold tracking-widest uppercase text-sm hover:border-white transition-colors text-center"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
