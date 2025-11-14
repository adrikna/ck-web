'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { products, pastries } from '@/lib/data'
import { ScrollReveal } from '@/components/scroll-reveal'
import { formatRupiah } from '@/lib/utils'
import { ShoppingCart } from 'lucide-react'

export default function ProductsPage() {
  const [filter, setFilter] = useState<'all' | 'cake' | 'pastry'>('all')

  const filteredProducts = filter === 'all'
    ? [...products, ...pastries]
    : filter === 'cake'
      ? products
      : pastries

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="w-full py-12 md:py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Semua Produk
            </h1>
            <p className="text-lg text-foreground/60">
              Koleksi lengkap kue dan pastry premium kami
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal className="flex flex-wrap gap-4">
            {[
              { value: 'all', label: 'Semua Produk' },
              { value: 'cake', label: 'Kue' },
              { value: 'pastry', label: 'Pastry' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value as typeof filter)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  filter === option.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-foreground hover:border-primary'
                }`}
              >
                {option.label}
              </button>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 50}>
                <Link href={`/products/${product.id}`}>
                  <div className="group cursor-pointer h-full">
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-2xl bg-foreground/5 mb-4 aspect-square">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {product.rating}★
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-foreground/60 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          <div className="text-xl font-bold text-primary">
                            {formatRupiah(product.price)}
                          </div>
                          <div className="text-xs text-foreground/50">
                            ({product.reviews} ulasan)
                          </div>
                        </div>
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          <ShoppingCart className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
