'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-[#0047AB] flex items-center justify-center skew-x-[-6deg] group-hover:bg-[#CC0000] transition-colors duration-300">
              <span className="font-condensed font-800 text-white text-lg tracking-wider skew-x-[6deg]">J</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#CC0000] group-hover:bg-[#0047AB] transition-colors duration-300" />
          </div>
          <div>
            <div className="font-condensed font-extrabold text-white text-xl tracking-widest leading-none uppercase">
              Jepkonjon
            </div>
            <div className="text-[10px] text-[#0047AB] tracking-[0.2em] uppercase font-medium">
              Construction Ltd
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-condensed font-semibold tracking-widest uppercase transition-colors duration-200 group ${
                pathname === link.href ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-4 right-4 h-[2px] bg-[#0047AB] transition-all duration-300 ${
                  pathname === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                }`}
              />
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-6 py-2.5 bg-[#CC0000] hover:bg-[#990000] text-white text-sm font-condensed font-bold tracking-widest uppercase transition-all duration-200 hover:shadow-lg hover:shadow-red-900/30"
          >
            Free Quote
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0A0A0A] border-t border-white/5 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`py-3 text-sm font-condensed font-semibold tracking-widest uppercase border-b border-white/5 ${
                pathname === link.href ? 'text-[#0047AB]' : 'text-white/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 py-3 bg-[#CC0000] text-white text-center text-sm font-condensed font-bold tracking-widest uppercase"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </header>
  )
}
