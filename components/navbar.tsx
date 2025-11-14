'use client'

import { useState } from 'react'
import Link from 'next/link'
import { navLinks, siteConfig } from '@/lib/data'
import { Menu, X, ShoppingBag } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">🧁</span>
            </div>
            <div>
              <div className="font-bold text-lg text-foreground">Cake & Kue</div>
              <div className="text-xs text-muted-foreground hidden sm:block">Premium Bakery</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.phone}?text=Halo, saya ingin bertanya tentang produk Cake & Kue`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <ShoppingBag className="w-4 h-4" />
              Pesan Sekarang
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${siteConfig.phone}?text=Halo, saya ingin bertanya tentang produk Cake & Kue`}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
