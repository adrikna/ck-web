'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { services, siteConfig } from '@/lib/data'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Check } from 'lucide-react'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="w-full py-12 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 max-w-2xl">
              Layanan <span className="text-primary">Lengkap Kami</span>
            </h1>
            <p className="text-lg text-foreground/60 max-w-xl">
              Kami menyediakan berbagai layanan untuk membuat acara spesial Anda sempurna dengan produk berkualitas premium
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Detail */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Left - Text (or right on odd) */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/${siteConfig.phone}?text=Halo, saya tertarik dengan layanan ${service.title}. Bisa tolong jelaskan lebih detail?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                  >
                    Hubungi Kami
                  </a>
                </div>

                {/* Right - Image (or left on odd) */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden bg-foreground/5 aspect-square">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-8xl">{service.icon}</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap untuk Acara Spesial Anda?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Hubungi kami sekarang untuk konsultasi gratis dan mendapatkan penawaran terbaik
            </p>
            <a
              href={`https://wa.me/${siteConfig.phone}?text=Halo Cake & Kue, saya ingin konsultasi untuk acara spesial saya. Bisa bantu?`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-background text-primary hover:bg-background/90 transition-colors font-bold text-lg"
            >
              Hubungi Kami Sekarang
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
