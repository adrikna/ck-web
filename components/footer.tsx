import Link from 'next/link'
import { navLinks, siteConfig } from '@/lib/data'
import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">🧁</span>
              </div>
              <div>
                <div className="font-bold text-lg">Cake & Kue</div>
                <div className="text-xs text-background/70">Premium Bakery</div>
              </div>
            </div>
            <p className="text-sm text-background/70">
              Kue premium dengan cita rasa autentik. Pesanan khusus untuk acara spesial Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-bold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href={`tel:+${siteConfig.phone}`} className="hover:text-background transition-colors">
                  +{siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-background transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-4">Ikuti Kami</h3>
            <div className="flex gap-3">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
              >
                <span className="text-sm font-bold">WA</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10" />

        {/* Bottom Section */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>&copy; {currentYear} Cake & Kue. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
