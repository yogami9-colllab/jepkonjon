# Jepkonjon Company Limited — Website Frontend

> Building Nakuru's Future, One Structure at a Time.

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (headings) + Barlow / Barlow Condensed (body)
- **Color Palette**: Blue (#0047AB), Red (#CC0000), Black (#0A0A0A), White

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with Navbar + Footer
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles + Tailwind
│   ├── about/page.tsx    # About Us page
│   ├── services/page.tsx # Services & Pricing page
│   ├── projects/page.tsx # Portfolio page
│   └── contact/page.tsx  # Contact page (with form)
└── components/
    ├── Navbar.tsx         # Responsive navbar
    ├── Footer.tsx         # Footer with links
    └── WhatsAppFloat.tsx  # Floating WhatsApp button
```

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero, stats, services preview, CTA |
| Services | `/services` | Full pricing tables for all 6 services |
| About | `/about` | Story, values, team |
| Projects | `/projects` | Portfolio (launch state + future cards) |
| Contact | `/contact` | Enquiry form + contact details + map |

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repo to [vercel.com](https://vercel.com)
3. Deploy — zero config needed for Next.js

### Environment Variables (for full integration)
```env
NEXT_PUBLIC_GA_ID=          # Google Analytics 4
NEXT_PUBLIC_MAPS_API_KEY=   # Google Maps API
CLOUDINARY_CLOUD_NAME=      # Cloudinary images
```

## Next Steps
- Connect to Node.js + Express backend (see Technology Guide)
- Add MongoDB Atlas for enquiry storage
- Enable Google Analytics 4
- Replace team photos and add real project images via Cloudinary

---
*Jepkonjon Company Limited | Nakuru, Kenya 20100 | info@jepkonjon.co.ke*
