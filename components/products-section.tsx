'use client'

import Image from 'image-next'
import Link from 'next/link'
import { products } from '@/lib/data'
import { ScrollReveal } from './scroll-reveal'
import { Star, ShoppingCart } from 'lucide-react'
import { formatRupiah } from '@/lib/utils'

export function ProductsSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/50 mb-4">
            <span className="text-sm font-medium text-primary">Produk Unggulan</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Koleksi Kue Terbaik Kami
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Pilihan kue premium kami dibuat dengan bahan berkualitas tinggi dan resep spesial
          </p>
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 6).map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 100}>
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
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
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

        {/* View All Button */}
        <ScrollReveal className="text-center mt-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            Lihat Semua Produk
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'
