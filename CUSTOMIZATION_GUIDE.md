# Panduan Kustomisasi Website Cake & Kue

## Quick Start - 5 Langkah Penting

### 1. Update Nomor WhatsApp
File: `lib/data.ts` - Baris 7
\`\`\`typescript
phone: "62YOUR_PHONE_NUMBER", // Ganti dengan nomor Anda
\`\`\`

### 2. Update Kontak & Sosial Media
File: `lib/data.ts` - Section siteConfig
\`\`\`typescript
email: "your@email.com",
address: "Alamat toko Anda",
socialLinks: {
  instagram: "https://instagram.com/username",
  facebook: "https://facebook.com/username",
}
\`\`\`

### 3. Tambah/Edit Produk
File: `lib/data.ts` - Tambahkan di array `products` atau `pastries`
- Setiap produk perlu ID unik
- Gambar bisa dari folder `public/` atau URL eksternal

### 4. Update Testimoni
File: `lib/data.ts` - Edit array `testimonials`
- Ganti nama, peran, dan konten
- Rating 1-5 bintang

### 5. Edit Halaman Statis
- About Page: `app/about/page.tsx`
- Contact Page: `app/contact/page.tsx`
- Update informasi sesuai bisnis Anda

## Mengubah Logo/Brand

### Option 1: Ganti Icon Emoji
File: `components/navbar.tsx` - Line 21
\`\`\`tsx
<span className="text-primary-foreground font-bold text-lg">🧁</span>
\`\`\`
Ganti emoji 🧁 dengan pilihan lain atau upload gambar.

### Option 2: Upload Logo Sendiri
1. Upload file logo ke folder `public/logo.png`
2. Edit `components/navbar.tsx`:
\`\`\`tsx
<Image 
  src="/logo.png" 
  alt="Logo" 
  width={40} 
  height={40} 
/>
\`\`\`

## Mengubah Tema Warna

### Pilihan Warna Cepat
Edit `app/globals.css` section `:root`:

**Tema Chocolate & Cream:**
\`\`\`css
--primary: oklch(0.5 0.15 30);    /* Coklat gelap */
--accent: oklch(0.7 0.12 50);     /* Cream */
--secondary: oklch(0.4 0.14 25);  /* Coklat sangat gelap */
\`\`\`

**Tema Pink & Gold:**
\`\`\`css
--primary: oklch(0.6 0.16 10);    /* Rose */
--accent: oklch(0.65 0.15 60);    /* Gold */
--secondary: oklch(0.5 0.12 5);   /* Dark rose */
\`\`\`

**Tema Blue & Purple:**
\`\`\`css
--primary: oklch(0.5 0.15 260);   /* Blue */
--accent: oklch(0.6 0.14 280);    /* Purple */
--secondary: oklch(0.4 0.12 250); /* Dark blue */
\`\`\`

## Menambah Halaman Baru

### Contoh: Halaman Blog
1. Buat folder: `app/blog/`
2. Buat file: `app/blog/page.tsx`
3. Template dasar:
\`\`\`tsx
'use client'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      {/* Content here */}
      <Footer />
    </main>
  )
}
\`\`\`

## Menambah Fitur Baru

### Menambah Wishlist
1. Install Zustand: `npm install zustand`
2. Buat store: `lib/store.ts`
3. Gunakan di komponen dengan `useWishlistStore()`

### Menambah Shopping Cart
1. Gunakan Context API atau Zustand
2. Buat komponen CartProvider di layout
3. Tampilkan cart badge di navbar

## FAQ - Pertanyaan Umum

**Q: Bagaimana cara tambah lebih banyak produk?**
A: Edit `lib/data.ts`, tambahkan object baru di array `products` atau `pastries`.

**Q: Bagaimana cara ubah bahasa jadi Inggris?**
A: Edit text di semua file `.tsx`, dan ubah metadata di `app/layout.tsx`.

**Q: Bagaimana cara disable animasi?**
A: Hapus tag `<ScrollReveal>` atau remove class `animate-slide-up`.

**Q: Bagaimana cara add payment gateway?**
A: Integrasikan dengan Stripe, midtrans, atau payment provider lain.

**Q: Bagaimana cara buat form review produk?**
A: Tambahkan form di `app/products/[id]/page.tsx` dengan backend submission.

## Tips & Tricks

1. **Optimasi Gambar**: Gunakan format WebP atau JPEG compressed
2. **SEO**: Update metadata di `app/layout.tsx` untuk setiap halaman
3. **Performance**: Gunakan Next.js Image component untuk lazy loading
4. **Mobile First**: Test selalu di mobile sebelum desktop
5. **Accessibility**: Pastikan semua button/link punya alt text

## Troubleshooting

**Halaman blank?**
- Check browser console untuk error
- Verify imports path benar
- Clear cache: `npm run build`

**Animasi tidak muncul?**
- Check CSS imports di `globals.css`
- Verify `tailwind.config.ts` setup benar
- Test di browser console: `window.IntersectionObserver` exists

**WhatsApp link tidak work?**
- Cek nomor phone format: 62XXXXXX tanpa +
- Test di mobile device untuk akurasi
- Cek browser security settings

## Perlu Bantuan?

Refer ke dokumentasi:
- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- React: https://react.dev

---

Last Updated: 2025
