import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      {/* Top strip */}
      <div className="bg-[#0047AB] py-3">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-condensed font-bold tracking-widest uppercase text-sm text-white">
            NCA Registered · Tax Compliant · Fully Permitted
          </p>
          <p className="font-condensed text-white/80 text-sm tracking-wide">
            Mon–Fri 7:30AM–5:30PM · Sat 8:00AM–1:00PM
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-[#0047AB] flex items-center justify-center skew-x-[-6deg]">
              <span className="font-condensed font-extrabold text-white text-lg skew-x-[6deg]">J</span>
            </div>
            <div>
              <div className="font-condensed font-extrabold text-white text-xl tracking-widest uppercase leading-none">Jepkonjon</div>
              <div className="text-[10px] text-[#0047AB] tracking-[0.2em] uppercase">Construction Ltd</div>
            </div>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            Building Nakuru's future, one structure at a time. Est. 2025.
          </p>
          <div className="flex gap-3">
            {['f', 'in', 'wa'].map((s) => (
              <a key={s} href="#" className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 hover:border-[#0047AB] hover:text-[#0047AB] transition-colors text-xs font-bold">
                {s.toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-condensed font-bold tracking-widest uppercase text-white text-sm mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {[['/', 'Home'], ['/services', 'Services'], ['/about', 'About Us'], ['/projects', 'Projects'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-3 h-px bg-[#0047AB] group-hover:w-5 transition-all duration-200" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-condensed font-bold tracking-widest uppercase text-white text-sm mb-5">Services</h4>
          <ul className="space-y-2.5">
            {['Residential Construction', 'Commercial Construction', 'Renovations', 'Civil & Site Works', 'Project Management', 'Roofing Works'].map((s) => (
              <li key={s}>
                <Link href="/services" className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-3 h-px bg-[#CC0000] group-hover:w-5 transition-all duration-200" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-condensed font-bold tracking-widest uppercase text-white text-sm mb-5">Get In Touch</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <span className="text-[#0047AB] mt-0.5">📍</span>
              <span className="text-white/50 text-sm">Nakuru, Nakuru District, 20100, Kenya</span>
            </li>
            <li>
              <a href="tel:+254700000000" className="flex gap-3 items-center text-white/50 hover:text-white text-sm transition-colors">
                <span className="text-[#0047AB]">📞</span>
                +254 700 000 000
              </a>
            </li>
            <li>
              <a href="mailto:info@jepkonjon.co.ke" className="flex gap-3 items-center text-white/50 hover:text-white text-sm transition-colors">
                <span className="text-[#0047AB]">📧</span>
                info@jepkonjon.co.ke
              </a>
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-block px-5 py-2.5 bg-[#0047AB] hover:bg-[#002F6C] text-white text-xs font-condensed font-bold tracking-widest uppercase transition-colors"
          >
            Request Quote →
          </Link>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">© 2025 Jepkonjon Company Limited. All Rights Reserved.</p>
          <p className="text-white/20 text-xs font-condensed tracking-widest">NAKURU, KENYA · BUILT WITH PRIDE</p>
        </div>
      </div>
    </footer>
  )
}
