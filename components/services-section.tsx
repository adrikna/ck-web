'use client'

import { services } from '@/lib/data'
import { ScrollReveal } from './scroll-reveal'

export function ServicesSection() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/50 mb-4">
            <span className="text-sm font-medium text-accent">Layanan Kami</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Layanan Lengkap untuk Kebutuhan Anda
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan untuk membuat acara spesial Anda sempurna
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <div className="group p-8 rounded-2xl border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features (hidden by default, shows on hover) */}
                <div className="mt-4 pt-4 border-t border-border/0 group-hover:border-border/100 transition-all">
                  <ul className="space-y-2 text-xs text-foreground/60 max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-300">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
