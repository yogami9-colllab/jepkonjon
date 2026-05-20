import Link from 'next/link'

const team = [
  { name: 'James Kipkorir', role: 'Founder & CEO', quote: 'We build more than structures — we build trust, one project at a time.' },
  { name: 'Mary Chebet', role: 'Site Engineer', quote: 'Precision is not optional. Every measurement matters.' },
  { name: 'David Mutai', role: 'Projects Manager', quote: 'A build on time is a client for life.' },
  { name: 'Grace Wanjiku', role: 'Client Relations', quote: 'Your vision is what drives every decision we make.' },
]

const values = [
  { icon: '🎯', title: 'Precision', desc: 'We measure twice, build once. Every detail is intentional.' },
  { icon: '🤝', title: 'Integrity', desc: 'Honest pricing, honest timelines, and honest conversations.' },
  { icon: '⚡', title: 'Responsiveness', desc: '24-hour response time — because your time matters.' },
  { icon: '🏆', title: 'Quality', desc: 'NCA standards as the floor, not the ceiling.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#CC0000]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="red-line mb-2">
            <span className="font-condensed font-bold text-[#CC0000] tracking-widest uppercase text-xs">Our Story</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Who We Are
          </h1>
          <p className="text-white/50 max-w-2xl text-lg leading-relaxed">
            New name. Experienced hands. Uncompromising standards.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <blockquote className="border-l-4 border-[#0047AB] pl-6 mb-8">
              <p className="font-heading text-xl md:text-2xl text-white italic leading-relaxed">
                &ldquo;We started in 2025 because we saw a gap — Nakuru needed builders who actually showed up on time, communicated clearly, and did not cut corners.&rdquo;
              </p>
            </blockquote>
            <p className="text-white/60 leading-relaxed mb-4">
              We are new, and we know it. That is exactly why we work harder than anyone else. Every client we serve right now is helping us build our name, and we do not take that lightly.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Our founders are not new. The people running Jepkonjon have years of hands-on construction experience in the Rift Valley region. We have set up this company the right way — registered, insured, and compliant — because we intend to be here for the long term.
            </p>
            <div className="flex flex-wrap gap-3">
              {['NCA Registered', 'Tax Compliant', 'Fully Insured', 'KRA Compliant'].map((badge) => (
                <span key={badge} className="px-4 py-1.5 border border-[#0047AB]/40 text-[#0047AB] text-xs font-condensed font-bold tracking-widest uppercase">
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '2025', label: 'Founded', color: '#0047AB' },
              { num: '6+', label: 'Services Offered', color: '#CC0000' },
              { num: '24hr', label: 'Response Time', color: '#0047AB' },
              { num: '100%', label: 'NCA Compliant', color: '#CC0000' },
            ].map((stat) => (
              <div key={stat.label} className="border border-white/8 p-6 text-center bg-white/[0.02]">
                <div className="font-condensed font-extrabold text-4xl mb-1" style={{ color: stat.color }}>
                  {stat.num}
                </div>
                <div className="text-white/50 text-sm font-condensed tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="blue-line mb-2 text-center">
            <span className="font-condensed font-bold text-[#0047AB] tracking-widest uppercase text-xs">What Drives Us</span>
          </div>
          <h2 className="font-heading text-4xl font-black text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={v.title} className="p-6 border border-white/8 bg-white/[0.02] service-card">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-condensed font-bold text-white text-lg tracking-wide mb-2">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="red-line mb-2">
            <span className="font-condensed font-bold text-[#CC0000] tracking-widest uppercase text-xs">The People</span>
          </div>
          <h2 className="font-heading text-4xl font-black text-white mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={member.name} className="group">
                {/* Avatar placeholder */}
                <div className="w-full aspect-square bg-gradient-to-br from-[#0047AB]/20 to-[#002F6C]/40 border border-white/8 flex items-center justify-center mb-4 group-hover:border-[#0047AB]/40 transition-colors overflow-hidden relative">
                  <span className="font-condensed font-extrabold text-7xl text-[#0047AB]/30">
                    {member.name.charAt(0)}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0047AB] to-[#CC0000] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-condensed font-bold text-white text-lg tracking-wide">{member.name}</h3>
                <p className="text-[#0047AB] text-xs font-condensed font-semibold tracking-widest uppercase mb-2">{member.role}</p>
                <p className="text-white/40 text-sm italic leading-relaxed">&ldquo;{member.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0047AB] relative overflow-hidden">
        <div className="absolute inset-0 bg-diagonal opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Founding clients receive our best rates and a permanent feature in our portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-white text-[#0047AB] font-condensed font-bold tracking-widest uppercase text-sm hover:bg-[#CC0000] hover:text-white transition-all duration-200 text-center">
              Get in Touch →
            </Link>
            <Link href="/projects" className="px-8 py-4 border-2 border-white/40 text-white font-condensed font-bold tracking-widest uppercase text-sm hover:border-white transition-colors text-center">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
