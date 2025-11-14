'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { siteConfig } from '@/lib/data'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate form submission
    const message = `Nama: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nSubyek: ${formData.subject}\n\nPesan:\n${formData.message}`
    const whatsappUrl = `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')

    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setIsSubmitted(false)
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="w-full py-12 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Hubungi <span className="text-primary">Kami</span>
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Ada pertanyaan? Kami siap membantu Anda. Hubungi kami melalui berbagai saluran komunikasi
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Kirim Pesan
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-foreground font-medium mb-2">Nama</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Nama Anda"
                    />
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Email Anda"
                    />
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-2">Nomor Telepon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Nomor Telepon"
                    />
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-2">Subjek</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Subjek Pesan"
                    />
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-2">Pesan</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Pesan Anda"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Kirim Pesan
                  </button>

                  {isSubmitted && (
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500 text-green-700">
                      Pesan berhasil dikirim! Kami akan menghubungi Anda segera.
                    </div>
                  )}
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={100}>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Informasi Kontak
                </h2>

                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground mb-1">Telepon</div>
                      <a
                        href={`tel:+${siteConfig.phone}`}
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        +{siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground mb-1">Email</div>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-foreground/70 hover:text-primary transition-colors break-all"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground mb-1">Alamat</div>
                      <p className="text-foreground/70">{siteConfig.address}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground mb-1">Jam Operasional</div>
                      <div className="text-foreground/70 space-y-1 text-sm">
                        <p>Senin - Jumat: 08:00 - 20:00</p>
                        <p>Sabtu: 09:00 - 21:00</p>
                        <p>Minggu: 10:00 - 20:00</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-8 border-t border-border">
                    <div className="font-bold text-foreground mb-4">Ikuti Kami</div>
                    <div className="flex gap-4">
                      <a
                        href={siteConfig.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <span className="text-sm font-bold">📷</span>
                      </a>
                      <a
                        href={siteConfig.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <span className="text-sm font-bold">f</span>
                      </a>
                      <a
                        href={`https://wa.me/${siteConfig.phone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <span className="text-sm font-bold">WA</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
