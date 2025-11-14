'use client'

import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/20 border border-accent/50">
              <span className="text-sm font-medium text-accent">Kue Premium Berkualitas Tinggi</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Nikmati Kelezatan <span className="text-primary">Kue Autentik</span>
            </h1>

            <p className="text-lg text-foreground/70 max-w-xl leading-relaxed">
              Cake & Kue menawarkan kue premium dengan cita rasa autentik. Setiap produk dibuat dengan bahan pilihan terbaik dan penuh perhatian terhadap detail.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`https://wa.me/${siteConfig.phone}?text=Halo, saya ingin memesan kue. Bisa tolong jelaskan pilihan yang tersedia?`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
              >
                Pesan Sekarang
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors font-medium"
              >
                Lihat Produk
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-foreground/60">Pelanggan Puas</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-foreground/60">Pesanan Terselesaikan</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-foreground/60">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full min-h-96 animate-slide-up" style={{ animationDelay: '150ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl" />
            <img
              src="/chocolate-cake-premium-professional.jpg"
              alt="Premium Chocolate Cake"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-2xl flex items-center justify-center text-4xl shadow-lg">
              🎂
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
