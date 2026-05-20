import Link from 'next/link'

const serviceCategories = [
  {
    id: 'residential',
    icon: '🏠',
    title: 'Residential Construction',
    desc: 'Building homes for families — bungalows, maisonettes, and apartment blocks. You bring your dream; we bring the bricks and the skill to make it real.',
    color: '#0047AB',
    items: [
      { item: 'Basic 2-Bedroom Bungalow', desc: 'Standard finish, owner-supplied land', price: 'From KES 1,800,000' },
      { item: '3-Bedroom Bungalow', desc: 'Mid-range finish, full construction', price: 'From KES 2,800,000' },
      { item: '4-Bedroom Maisonette', desc: 'Quality finish, two floors', price: 'From KES 4,500,000' },
      { item: 'Per m² Rate', desc: 'All residential builds', price: 'From KES 25,000/m²' },
      { item: 'Foundation Only', desc: 'Strip or raft foundation, per m²', price: 'From KES 8,500/m²' },
    ],
  },
  {
    id: 'commercial',
    icon: '🏢',
    title: 'Commercial Construction',
    desc: 'Office blocks, shops, and warehouses. If you are running a business and need a proper structure, we handle it from the ground up.',
    color: '#CC0000',
    items: [
      { item: 'Shop / Retail Unit', desc: 'Single-storey commercial unit', price: 'From KES 2,200,000' },
      { item: 'Office Block', desc: 'Multi-room professional offices', price: 'From KES 3,800,000' },
      { item: 'Warehouse / Store', desc: 'Industrial-grade structure', price: 'From KES 4,200,000' },
      { item: 'Per m² Rate', desc: 'All commercial builds', price: 'From KES 35,000/m²' },
    ],
  },
  {
    id: 'renovations',
    icon: '🔧',
    title: 'Renovations & Remodelling',
    desc: 'Already have a house but it needs upgrading? We knock down old walls, fix cracked plaster, add extensions, and give your space a fresh new look.',
    color: '#0047AB',
    items: [
      { item: 'Full Interior Renovation', desc: 'Plastering, tiling, painting, fittings', price: 'From KES 350,000' },
      { item: 'Room Extension', desc: 'Adding one extra room', price: 'From KES 280,000' },
      { item: 'Exterior Plastering & Paint', desc: 'Full external facelift', price: 'From KES 120,000' },
      { item: 'Kitchen Remodel', desc: 'Cabinets, tiles, plumbing', price: 'From KES 180,000' },
      { item: 'Bathroom Remodel', desc: 'Tiling, fittings, waterproofing', price: 'From KES 95,000' },
      { item: 'Per m² Renovation', desc: 'General renovation works', price: 'From KES 8,000/m²' },
    ],
  },
  {
    id: 'civil',
    icon: '🚧',
    title: 'Civil & Site Works',
    desc: 'Before a building goes up, the land must be prepared. We do site clearing, drainage, fencing, foundations, and road works.',
    color: '#CC0000',
    items: [
      { item: 'Site Clearing & Levelling', desc: 'Vegetation removal, grading', price: 'From KES 50,000' },
      { item: 'Perimeter Fencing', desc: 'Concrete posts & barbed wire/chain-link', price: 'From KES 2,500/m' },
      { item: 'Stone Wall Fencing', desc: 'Dressed stone perimeter wall', price: 'From KES 8,500/m' },
      { item: 'Drainage Works', desc: 'Surface & sub-surface drainage', price: 'From KES 80,000' },
      { item: 'Road / Driveway', desc: 'Murram or gravel access road', price: 'From KES 3,500/m' },
      { item: 'Septic Tank Installation', desc: 'Standard 3-chamber tank', price: 'From KES 90,000' },
    ],
  },
  {
    id: 'management',
    icon: '📋',
    title: 'Project Management',
    desc: 'Not sure how to manage a construction project? We handle everything — planning, sourcing, supervising — so you don\'t have to.',
    color: '#0047AB',
    items: [
      { item: 'Full Project Management', desc: 'End-to-end oversight of your build', price: '5–7% of project cost' },
      { item: 'Site Supervision Only', desc: 'Regular site visits & quality checks', price: 'From KES 30,000/month' },
      { item: 'Bill of Quantities (BOQ)', desc: 'Detailed cost estimate document', price: 'From KES 15,000' },
      { item: 'Planning & Design Consultation', desc: 'Advice, layout planning, scheduling', price: 'From KES 10,000' },
    ],
  },
  {
    id: 'roofing',
    icon: '🏚️',
    title: 'Roofing Works',
    desc: 'We supply and install iron sheets, tiles, and box profile roofing. New roof or replacement — we have got you covered.',
    color: '#CC0000',
    items: [
      { item: 'Iron Sheet Roofing', desc: 'Gauge 30 sheets, supply & fix', price: 'From KES 700/m²' },
      { item: 'Box Profile Roofing', desc: 'Structural box profile, supply & fix', price: 'From KES 950/m²' },
      { item: 'Clay / Concrete Tiles', desc: 'Premium tile roofing, supply & fix', price: 'From KES 1,400/m²' },
      { item: 'Roof Replacement (full)', desc: 'Strip old roof & install new', price: 'From KES 180,000' },
      { item: 'Roof Repair', desc: 'Patch leaks, replace sheets, re-seal', price: 'From KES 25,000' },
      { item: 'Fascia & Guttering', desc: 'PVC or steel, supply & fix', price: 'From KES 850/m' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0047AB]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="blue-line mb-2">
            <span className="font-condensed font-bold text-[#0047AB] tracking-widest uppercase text-xs">What We Do</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Services &<br /><span className="text-gradient-blue">Pricing</span>
          </h1>
          <p className="text-white/50 max-w-2xl text-lg leading-relaxed">
            Transparent, honest pricing for every service we offer. All prices are starting rates in KES — your final quote depends on scope, materials, and site. No hidden figures.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {serviceCategories.map((cat, idx) => (
            <div key={cat.id} className="border border-white/8 overflow-hidden">
              {/* Category header */}
              <div
                className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4"
                style={{ borderLeft: `4px solid ${cat.color}` }}
              >
                <span className="text-4xl">{cat.icon}</span>
                <div className="flex-1">
                  <h2 className="font-condensed font-extrabold text-white text-2xl tracking-wide">{cat.title}</h2>
                  <p className="text-white/50 text-sm mt-1 max-w-xl leading-relaxed">{cat.desc}</p>
                </div>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 text-xs font-condensed font-bold tracking-widest uppercase transition-colors whitespace-nowrap self-start md:self-auto"
                  style={{ background: cat.color, color: 'white' }}
                >
                  Get Quote
                </Link>
              </div>

              {/* Pricing table */}
              <div className="divide-y divide-white/5">
                {cat.items.map((row, i) => (
                  <div
                    key={row.item}
                    className="px-6 md:px-8 py-4 grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 items-center hover:bg-white/[0.02] transition-colors group"
                  >
                    <div className="font-condensed font-semibold text-white text-sm tracking-wide group-hover:text-white transition-colors">
                      {row.item}
                    </div>
                    <div className="text-white/40 text-sm">{row.desc}</div>
                    <div
                      className="font-condensed font-bold text-sm md:text-right"
                      style={{ color: cat.color }}
                    >
                      {row.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing note */}
      <section className="py-12 bg-[#0D0D0D] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start gap-6">
          <div className="text-3xl">💡</div>
          <div className="flex-1">
            <h3 className="font-condensed font-bold text-white text-lg tracking-wide mb-2">Pricing Note</h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-3xl">
              All prices are starting rates in KES and exclude VAT (16%). Final quotes depend on site conditions, materials specification, and project scope. As a new company, we also offer special rates for first clients and referrals — ask us about our <span className="text-[#0047AB] font-semibold">Founding Client discount</span>.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#CC0000] hover:bg-[#990000] text-white font-condensed font-bold tracking-widest uppercase text-sm transition-colors whitespace-nowrap"
          >
            Request Detailed Quote →
          </Link>
        </div>
      </section>
    </>
  )
}
