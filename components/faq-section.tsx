'use client'

import { useState } from 'react'
import { faqItems } from '@/lib/data'
import { ScrollReveal } from './scroll-reveal'
import { ChevronDown } from 'lucide-react'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="w-full py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/50 mb-4">
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-foreground/60">
            Temukan jawaban untuk pertanyaan umum tentang produk dan layanan kami
          </p>
        </ScrollReveal>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">
                      {item.question}
                    </h3>
                    {openIndex === index && (
                      <p className="text-foreground/70 mt-3 leading-relaxed">
                        {item.answer}
                      </p>
                    )}
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
