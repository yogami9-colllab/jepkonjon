'use client'
import { useState } from 'react'

const projectTypes = [
  'Residential Construction',
  'Commercial Construction',
  'Renovation / Remodelling',
  'Civil & Site Works',
  'Project Management',
  'Roofing Works',
  'Other / Not Sure Yet',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', type: '', description: '', siteVisit: false })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#0047AB]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="blue-line mb-2">
            <span className="font-condensed font-bold text-[#0047AB] tracking-widest uppercase text-xs">Let&apos;s Talk</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Contact Us
          </h1>
          <p className="text-white/50 max-w-2xl text-lg leading-relaxed">
            Fill the form below and we will respond within 24 hours with a detailed breakdown. No pressure. No obligation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="border border-[#0047AB]/40 bg-[#0047AB]/10 p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-heading text-2xl font-black text-white mb-2">Request Received!</h3>
                <p className="text-white/60 leading-relaxed">
                  Thank you. We will contact you within 24 hours with a detailed quote. Watch your phone — we move fast.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <h2 className="font-condensed font-bold text-white text-xl tracking-wide mb-6">Send Your Request</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/50 text-xs font-condensed font-semibold tracking-widest uppercase mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="John Kamau"
                      className="w-full bg-white/[0.04] border border-white/10 focus:border-[#0047AB] outline-none px-4 py-3 text-white text-sm placeholder:text-white/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs font-condensed font-semibold tracking-widest uppercase mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="+254 700 000 000"
                      className="w-full bg-white/[0.04] border border-white/10 focus:border-[#0047AB] outline-none px-4 py-3 text-white text-sm placeholder:text-white/20 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-condensed font-semibold tracking-widest uppercase mb-2">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-white/[0.04] border border-white/10 focus:border-[#0047AB] outline-none px-4 py-3 text-white text-sm placeholder:text-white/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-condensed font-semibold tracking-widest uppercase mb-2">Type of Project *</label>
                  <select
                    value={form.type}
                    onChange={e => setForm({ ...form, type: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#0047AB] outline-none px-4 py-3 text-white text-sm transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-condensed font-semibold tracking-widest uppercase mb-2">Project Description</label>
                  <textarea
                    rows={4}
                    value={form.description}
                    onChange={e => setForm({ ...form, description: e.target.value })}
                    placeholder="Tell us about your project — location, size, timeline, budget range..."
                    className="w-full bg-white/[0.04] border border-white/10 focus:border-[#0047AB] outline-none px-4 py-3 text-white text-sm placeholder:text-white/20 transition-colors resize-none"
                  />
                </div>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <div
                    className={`w-5 h-5 border flex items-center justify-center transition-colors ${form.siteVisit ? 'bg-[#0047AB] border-[#0047AB]' : 'border-white/20 group-hover:border-[#0047AB]/50'}`}
                    onClick={() => setForm({ ...form, siteVisit: !form.siteVisit })}
                  >
                    {form.siteVisit && <span className="text-white text-xs">✓</span>}
                  </div>
                  <span className="text-white/60 text-sm">I would like to request a site visit</span>
                </label>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={handleSubmit}
                    className="flex-1 py-4 bg-[#0047AB] hover:bg-[#002F6C] text-white font-condensed font-bold tracking-widest uppercase text-sm transition-colors"
                  >
                    Send My Request →
                  </button>
                  {form.siteVisit && (
                    <button
                      onClick={handleSubmit}
                      className="flex-1 py-4 bg-[#CC0000] hover:bg-[#990000] text-white font-condensed font-bold tracking-widest uppercase text-sm transition-colors"
                    >
                      Request Site Visit
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Contact details */}
          <div>
            <h2 className="font-condensed font-bold text-white text-xl tracking-wide mb-8">Contact Details</h2>

            <div className="space-y-5 mb-10">
              {[
                { icon: '📍', label: 'Address', value: 'Nakuru, Nakuru District, 20100, Kenya', href: null },
                { icon: '📞', label: 'Phone', value: '+254 700 000 000', href: 'tel:+254700000000' },
                { icon: '📧', label: 'Email', value: 'info@jepkonjon.co.ke', href: 'mailto:info@jepkonjon.co.ke' },
                { icon: '🕐', label: 'Hours', value: 'Mon–Fri: 7:30 AM – 5:30 PM  |  Saturday: 8:00 AM – 1:00 PM', href: null },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start p-4 border border-white/5 bg-white/[0.02] hover:border-white/10 transition-colors">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <div className="font-condensed font-semibold text-white/40 text-xs tracking-widest uppercase mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-white text-sm hover:text-[#0047AB] transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-white text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors group mb-8"
            >
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="font-condensed font-bold text-[#25D366] tracking-wide text-sm">Chat on WhatsApp</div>
                <div className="text-white/50 text-xs">Click to chat directly — no waiting on hold</div>
              </div>
              <span className="ml-auto text-[#25D366] group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* Map placeholder */}
            <div className="border border-white/8 overflow-hidden">
              <div className="bg-[#0047AB]/10 border-b border-white/5 px-4 py-2 flex items-center gap-2">
                <span className="text-sm">📍</span>
                <span className="font-condensed font-semibold text-white/60 text-xs tracking-widest uppercase">Our Location — Nakuru, Kenya</span>
              </div>
              <div className="aspect-video bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative text-center">
                  <div className="text-4xl mb-3">🗺️</div>
                  <p className="font-condensed font-bold text-white/30 tracking-widest uppercase text-xs">Google Maps</p>
                  <p className="text-white/20 text-xs mt-1">Nakuru District, 20100</p>
                  <a
                    href="https://maps.google.com/?q=Nakuru,Kenya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block px-4 py-1.5 border border-[#0047AB]/40 text-[#0047AB] text-xs font-condensed font-bold tracking-widest uppercase hover:bg-[#0047AB] hover:text-white transition-colors"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
