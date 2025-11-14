'use client'

import { useState } from 'react'
import { generateWhatsAppLink, formatRupiah } from '@/lib/utils'
import { siteConfig } from '@/lib/data'

interface ProductQuickOrderProps {
  productName: string
  price: number
  productId: number
  maxQuantity?: number
}

export function ProductQuickOrder({
  productName,
  price,
  productId,
  maxQuantity = 20,
}: ProductQuickOrderProps) {
  const [quantity, setQuantity] = useState(1)

  const totalPrice = price * quantity
  const message = `Halo, saya ingin memesan:\n\n${productName}\nJumlah: ${quantity}\nTotal: ${formatRupiah(totalPrice)}\n\nBisa tolong dikonfirmasi ketersediaan dan waktu pengerjaan?`

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-foreground/60">Jumlah:</span>
        <div className="flex items-center border border-border rounded-lg">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 text-primary hover:bg-primary/10 transition-colors font-medium"
          >
            −
          </button>
          <span className="px-6 py-2 font-bold text-foreground">{quantity}</span>
          <button
            onClick={() => setQuantity(Math.min(maxQuantity, quantity + 1))}
            className="px-4 py-2 text-primary hover:bg-primary/10 transition-colors font-medium"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between py-4 border-t border-border">
        <span className="text-foreground/60">Total:</span>
        <span className="text-2xl font-bold text-primary">{formatRupiah(totalPrice)}</span>
      </div>

      <a
        href={generateWhatsAppLink(message, siteConfig.phone)}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-bold text-center"
      >
        Pesan Sekarang via WhatsApp
      </a>
    </div>
  )
}
