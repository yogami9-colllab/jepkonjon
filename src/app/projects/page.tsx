import Link from 'next/link'

const badges = [
  { label: '⭐ Founding Project', desc: 'One of our very first clients — completed at a special launch rate', color: '#0047AB' },
  { label: '💡 Featured', desc: 'A project we are especially proud of', color: '#CC0000' },
  { label: '📸 Coming Soon', desc: 'Project underway — photos and details to follow on completion', color: '#555' },
]

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#CC0000]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="red-line mb-2">
            <span className="font-condensed font-bold text-[#CC0000] tracking-widest uppercase text-xs">Our Work</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Projects &<br /><span className="text-gradient-red">Portfolio</span>
          </h1>
          <p className="text-white/50 max-w-2xl text-lg leading-relaxed">
            Every structure we build tells a story. Here is where those stories live.
          </p>
        </div>
      </section>

      {/* Launch holding state */}
      <section className="py-24 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute inset-0 bg-diagonal" />
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Holding message */}
          <div className="border border-[#0047AB]/30 bg-[#0047AB]/5 p-8 md:p-12 text-center max-w-3xl mx-auto mb-16">
            <div className="text-6xl mb-6">🏗️</div>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-4">
              Our First Projects Are Underway
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Come back soon — or better yet, be one of them. Founding clients receive our best rates and a permanent feature in our portfolio.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#CC0000] hover:bg-[#990000] text-white font-condensed font-bold tracking-widest uppercase text-sm transition-colors"
            >
              Become a Founding Client →
            </Link>
          </div>

          {/* Preview cards - coming soon state */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {[
              { type: '3-Bedroom Bungalow', location: 'Lanet, Nakuru', status: '📸 Coming Soon', col: '#0047AB' },
              { type: 'Shop Renovation', location: 'Nakuru Town CBD', status: '📸 Coming Soon', col: '#CC0000' },
              { type: 'Site Clearing & Fencing', location: 'Ngata, Nakuru', status: '📸 Coming Soon', col: '#0047AB' },
            ].map((card, i) => (
              <div key={i} className="border border-white/8 overflow-hidden group">
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-50" />
                  <div className="text-center relative z-10">
                    <div className="text-4xl mb-2 opacity-20">📸</div>
                    <p className="font-condensed font-bold text-white/20 tracking-widest uppercase text-xs">Photos Coming Soon</p>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span
                      className="px-2 py-1 text-xs font-condensed font-bold tracking-wider uppercase text-white"
                      style={{ background: card.col }}
                    >
                      {card.status}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-condensed font-bold text-white text-lg tracking-wide mb-1">{card.type}</h3>
                  <p className="text-white/40 text-sm flex items-center gap-1">
                    <span>📍</span> {card.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Badge guide */}
          <div>
            <h3 className="font-condensed font-bold text-white/40 tracking-widest uppercase text-xs mb-5 text-center">Portfolio Badge Guide</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {badges.map((b) => (
                <div key={b.label} className="flex items-start gap-3 p-4 border border-white/5 bg-white/[0.02]">
                  <span
                    className="px-2 py-0.5 text-xs font-condensed font-bold text-white whitespace-nowrap"
                    style={{ background: b.color }}
                  >
                    {b.label}
                  </span>
                  <p className="text-white/40 text-xs leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Invite CTA */}
      <section className="py-16 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-black text-white mb-2">
              Want Your Project Featured Here?
            </h2>
            <p className="text-white/50">Be among our first clients and get founding rates + permanent portfolio placement.</p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#0047AB] hover:bg-[#002F6C] text-white font-condensed font-bold tracking-widest uppercase text-sm transition-colors whitespace-nowrap"
          >
            Start Your Project →
          </Link>
        </div>
      </section>
    </>
  )
}
