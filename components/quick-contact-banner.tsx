'use client'

import { siteConfig } from '@/lib/data'
import { Phone, Mail, MapPin } from 'lucide-react'

export function QuickContactBanner() {
  return (
    <section className="sticky bottom-0 z-40 w-full border-t border-border bg-background/95 backdrop-blur-sm py-3">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a
            href={`tel:+${siteConfig.phone}`}
            className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{siteConfig.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">{siteConfig.email}</span>
            <span className="sm:hidden">Email</span>
          </a>
        </div>

        <a
          href={`https://wa.me/${siteConfig.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors font-medium text-sm"
        >
          <span>💬</span>
          Chat Kami
        </a>
      </div>
    </section>
  )
}
