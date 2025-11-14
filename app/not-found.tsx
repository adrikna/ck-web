import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-4">Halaman Tidak Ditemukan</h2>
          <p className="text-foreground/60 text-lg mb-8">
            Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
