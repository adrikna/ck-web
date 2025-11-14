'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Award, Heart, Users, Zap } from 'lucide-react'

const teamMembers = [
  {
    name: 'Siti Azizah',
    role: 'Founder & Head Chef',
    description: 'Lulusan pastry school internasional dengan 10+ tahun pengalaman',
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    name: 'Bambang Suryanto',
    role: 'Operations Manager',
    description: 'Berpengalaman dalam manajemen bisnis dan customer service',
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    name: 'Eka Mustika',
    role: 'Head Pastry Chef',
    description: 'Spesialis dalam dekorasi kue custom dan design inovatif',
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    name: 'Dani Wijaya',
    role: 'Quality Assurance',
    description: 'Memastikan setiap produk memenuhi standar kualitas tertinggi',
    image: '/placeholder.svg?height=300&width=300',
  },
]

const values = [
  {
    icon: Heart,
    title: 'Kualitas Terbaik',
    description: 'Kami menggunakan bahan premium dan resep terbaik untuk setiap produk',
  },
  {
    icon: Users,
    title: 'Kepuasan Pelanggan',
    description: 'Kepuasan Anda adalah prioritas utama kami dalam setiap layanan',
  },
  {
    icon: Award,
    title: 'Inovasi Berkelanjutan',
    description: 'Terus berinovasi menghadirkan rasa dan desain terbaru untuk Anda',
  },
  {
    icon: Zap,
    title: 'Layanan Cepat',
    description: 'Delivery tepat waktu dan response cepat untuk setiap pertanyaan',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="w-full py-12 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Tentang <span className="text-primary">Cake & Kue</span>
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Kami adalah toko kue online yang berdedikasi untuk menghadirkan produk premium dengan cita rasa autentik
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-foreground/5">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Cake & Kue Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Kisah Kami Dimulai
                  </h2>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    Cake & Kue didirikan pada tahun 2020 oleh Siti Azizah, seorang baker profesional yang memiliki passion dalam membuat kue berkualitas tinggi. Dimulai dari dapur kecil, kini kami telah melayani ribuan pelanggan di seluruh Jakarta.
                  </p>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    Misi kami adalah menghadirkan produk bakery premium dengan cita rasa autentik yang tidak hanya lezat, tetapi juga dibuat dengan cinta dan perhatian terhadap setiap detail.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Bahan Premium</div>
                      <div className="text-foreground/60">Kami hanya menggunakan bahan-bahan pilihan terbaik</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Resep Autentik</div>
                      <div className="text-foreground/60">Resep yang telah teruji dan diwariskan turun temurun</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Dibuat Fresh</div>
                      <div className="text-foreground/60">Setiap produk dibuat fresh sesuai pesanan</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-foreground/60">
              Ini yang membedakan kami dari toko kue lainnya
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="p-6 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tim Kami
            </h2>
            <p className="text-lg text-foreground/60">
              Profesional berbakat yang berdedikasi untuk kesuksesan Anda
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center group">
                  <div className="relative overflow-hidden rounded-xl mb-4 aspect-square bg-foreground/5">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-foreground/60 text-sm">{member.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1000+', label: 'Pesanan Terselesaikan' },
              { number: '500+', label: 'Pelanggan Setia' },
              { number: '4.9★', label: 'Rating Kepuasan' },
              { number: '5+', label: 'Tahun Pengalaman' },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
