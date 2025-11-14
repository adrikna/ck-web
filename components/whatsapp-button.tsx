'use client'

import { siteConfig } from '@/lib/data'
import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  message?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'floating'
}

export function WhatsAppButton({
  message = 'Halo Cake & Kue, saya ingin bertanya tentang produk dan layanan Anda',
  className = '',
  variant = 'primary',
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(message)}`

  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all'

  const variants = {
    primary: 'px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10',
    floating:
      'fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-110 z-50',
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {variant !== 'floating' && 'Chat WhatsApp'}
    </a>
  )
}
