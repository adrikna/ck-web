'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { products, pastries, siteConfig } from '@/lib/data'
import { ScrollReveal } from '@/components/scroll-reveal'
import { formatRupiah, generateWhatsAppLink } from '@/lib/utils'
import { Star, ArrowLeft, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react'

export default function ProductDetailPage({product_id}:{product_id:any}) {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const allProducts = [...products, ...pastries]
  const product = allProducts.find((p) => p.id === parseInt(product_id))

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-2">Produk tidak ditemukan</h1>
            <Link href="/products" className="text-primary hover:underline">
              Kembali ke daftar produk
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const orderMessage = `Halo, saya ingin memesan:\n\n${product.name}\nJumlah: ${quantity}\nTotal: ${formatRupiah(product.price * quantity)}\n\nBisa tolong dikonfirmasi ketersediaan dan waktu pengerjaan?`;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center gap-2 text-sm text-foreground/60">
        <Link href="/" className="hover:text-primary">Beranda</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-primary">Produk</Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      {/* Product Detail */}
      <section className="w-full py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image Section */}
            <ScrollReveal>
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-2xl bg-foreground/5 aspect-square">
                  <img
                    src={product.images?.[selectedImage] || product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Thumbnail Images */}
                {product.images && (
                  <div className="flex gap-3">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === index
                            ? 'border-primary'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <img src={image || "/placeholder.svg"} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Content Section */}
            <ScrollReveal delay={100}>
              <div className="space-y-6">
                {/* Title & Rating */}
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.round(product.rating)
                              ? 'fill-primary text-primary'
                              : 'fill-border text-border'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-bold text-primary">{product.rating}</span>
                    <span className="text-foreground/60">({product.reviews} ulasan)</span>
                  </div>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">
                    {formatRupiah(product.price)}
                  </div>
                  <p className="text-foreground/60">Harga per porsi/unit</p>
                </div>

                {/* Description */}
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {product.fullDescription}
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4 py-6 border-t border-b border-border">
                  <div>
                    <div className="text-sm text-foreground/60 mb-1">Porsi</div>
                    <div className="font-bold text-foreground">{product.serving}</div>
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60 mb-1">Persiapan</div>
                    <div className="font-bold text-foreground">{product.preparation}</div>
                  </div>
                </div>

                {/* Ingredients */}
                <div>
                  <div className="font-bold text-foreground mb-2">Bahan Utama</div>
                  <p className="text-foreground/70 text-sm">
                    {product.ingredients}
                  </p>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-4">
                  <span className="text-foreground/60">Jumlah:</span>
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
                    >
                      −
                    </button>
                    <span className="px-6 py-2 font-bold text-foreground">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={generateWhatsAppLink(orderMessage, siteConfig.phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-bold text-center"
                  >
                    Pesan Sekarang
                  </a>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Benefits */}
                <div className="space-y-3 pt-4 border-t border-border">
                  {[
                    { icon: Truck, text: 'Pengiriman cepat & aman' },
                    { icon: Shield, text: 'Kualitas terjamin' },
                    { icon: RotateCcw, text: 'Garansi kepuasan' },
                  ].map((benefit, idx) => {
                    const Icon = benefit.icon
                    return (
                      <div key={idx} className="flex items-center gap-3 text-foreground/70">
                        <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{benefit.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Related Products */}
          <div className="mt-20 pt-20 border-t border-border">
            <ScrollReveal className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Produk Serupa</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {allProducts
                .filter((p) => p.category === product.category && p.id !== product.id)
                .slice(0, 3)
                .map((related, idx) => (
                  <ScrollReveal key={related.id} delay={idx * 100}>
                    <Link href={`/products/${related.id}`}>
                      <div className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-xl bg-foreground/5 mb-3 aspect-square">
                          <img
                            src={related.image || "/placeholder.svg"}
                            alt={related.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {related.name}
                        </h3>
                        <div className="text-primary font-bold mt-2">
                          {formatRupiah(related.price)}
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
