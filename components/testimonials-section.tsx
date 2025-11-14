'use client'

import { testimonials } from '@/lib/data'
import { ScrollReveal } from './scroll-reveal'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-secondary/20 border border-secondary/50 mb-4">
            <span className="text-sm font-medium text-secondary">Testimoni</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Ribuan pelanggan puas telah merasakan kelezatan produk kami
          </p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 100}>
              <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 border-t border-border pt-6">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-foreground/60">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
