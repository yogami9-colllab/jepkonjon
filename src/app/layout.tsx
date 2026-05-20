import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Jepkonjon Company Limited | Building Nakuru\'s Future',
  description: 'Professional building and construction company in Nakuru, Kenya. NCA Registered. Residential, commercial, renovations, civil works.',
  keywords: 'construction company Nakuru, builder Nakuru Kenya, NCA registered contractor, bungalow construction Kenya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] text-white font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
