# Cake & Kue - Website Toko Kue Online Premium

Website modern untuk toko kue online "Cake & Kue" dengan fitur lengkap termasuk katalog produk, layanan custom, pemesanan via WhatsApp, dan halaman informatif.

## Fitur Utama

✨ **Desain Modern & Responsif**
- Design yang modern dengan animasi scroll reveal dari bawah ke atas
- Fully responsive untuk mobile, tablet, dan desktop
- Dark mode support built-in

🎨 **Tema Warna**
- Primary: Coklat hangat (#8B5A3C)
- Accent: Orange cerah (#E8A76B)
- Secondary: Coklat tua (#6B3E2E)
- Background: Putih bersih (#F8F8F8)

📦 **Katalog Produk**
- 6 variasi kue premium dengan deskripsi lengkap
- 3 pilihan pastry
- Rating dan ulasan pelanggan
- Gambar produk berkualitas tinggi

📄 **Halaman**
- Home - Hero, produk unggulan, layanan, testimoni, FAQ
- Products - Grid produk dengan filter
- Product Details - Informasi lengkap, gambar gallery, opsi pemesanan
- Services - Detail lengkap setiap layanan
- About - Kisah, nilai, dan tim
- Contact - Form dan informasi kontak

🔄 **Integrasi WhatsApp**
- Tombol "Pesan Sekarang" di setiap halaman
- Message templates untuk berbagai jenis pesanan
- Direktori konversi ke WhatsApp Business
- Pre-filled messages dengan detail pesanan

📊 **Komponen Reusable**
- Navbar & Footer dengan branding
- Scroll Reveal untuk animasi masuk dari bawah
- Product Cards dengan hover effects
- Service Cards dengan expandable features
- Testimonial Cards dengan ratings

## Struktur Data Terpusat

Semua data disimpan di `lib/data.ts` untuk kemudahan modifikasi:

\`\`\`typescript
// lib/data.ts
- siteConfig: Informasi umum website (nama, phone, email, sosial media)
- navLinks: Menu navigasi
- products: Katalog kue (6 produk)
- pastries: Katalog pastry (3 produk)
- services: Layanan (4 layanan)
- testimonials: Ulasan pelanggan (4 testimoni)
- faqItems: Pertanyaan yang sering diajukan
\`\`\`

## Cara Memodifikasi Data

### 1. Mengubah Informasi Kontak
Edit `lib/data.ts`:
\`\`\`typescript
export const siteConfig = {
  name: "Cake & Kue",
  phone: "6281234567890", // Format: 62 tanpa +
  email: "info@cakeandkue.com",
  address: "Jl. Roti Manis No. 123, Jakarta",
}
\`\`\`

### 2. Menambah/Mengubah Produk
Edit `lib/data.ts` - array `products`:
\`\`\`typescript
export const products = [
  {
    id: 1,
    name: "Nama Produk",
    price: 350000,
    category: "cake",
    rating: 4.8,
    reviews: 124,
    description: "Deskripsi singkat",
    fullDescription: "Deskripsi lengkap",
    image: "/path/to/image.jpg",
    images: ["/img1.jpg", "/img2.jpg", "/img3.jpg"],
    serving: "8-10 orang",
    preparation: "2-3 hari",
    ingredients: "Bahan-bahan",
  },
  // ... tambah produk baru di sini
]
\`\`\`

### 3. Mengubah Tema Warna
Edit `app/globals.css`:
\`\`\`css
:root {
  --primary: oklch(0.55 0.16 35); /* Coklat */
  --accent: oklch(0.62 0.18 45);  /* Orange */
  --secondary: oklch(0.45 0.15 20); /* Coklat tua */
  /* ... */
}
\`\`\`

### 4. Mengubah Nomor WhatsApp
Edit `lib/data.ts`:
\`\`\`typescript
export const siteConfig = {
  phone: "6281234567890", // Ganti dengan nomor baru
}
\`\`\`

## Integrasi Gambar

Gambar dapat diganti dengan:
1. URL eksternal (free stock photo sites)
2. Upload sendiri ke folder `public/`
3. Gunakan placeholder: `/placeholder.svg?height=300&width=300`

## Animasi Scroll Reveal

Animasi otomatis pada komponen dengan ScrollReveal:
\`\`\`tsx
<ScrollReveal delay={100}>
  <div>Konten akan muncul dengan animasi dari bawah</div>
</ScrollReveal>
\`\`\`

## Utilities Tersedia

- `formatRupiah()` - Format harga ke format Indonesia
- `generateWhatsAppLink()` - Generate WhatsApp link dengan pesan
- `useScrollReveal()` - Custom hook untuk scroll animation

## Deployment

Project dapat di-deploy ke:
- Vercel (recommended)
- Netlify
- Railway
- AWS Amplify

Push ke GitHub dan connect dengan platform pilihan Anda.

## Contact & Support

Untuk informasi lebih lanjut tentang website:
- Email: admin@cakeandkue.com
- WhatsApp: Klik tombol "Chat Kami" di website

---

Built with Next.js 16, React 19, dan Tailwind CSS v4
