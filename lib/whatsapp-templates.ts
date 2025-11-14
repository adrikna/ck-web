// Template pesan WhatsApp yang sudah siap pakai

export const whatsappMessages = {
  greeting: 'Halo Cake & Kue, saya ingin bertanya tentang produk Anda',

  orderProduct: (productName: string, quantity: number) => {
    return `Halo, saya ingin memesan:\n\n📦 Produk: ${productName}\n📊 Jumlah: ${quantity}\n\nBisa tolong dikonfirmasi ketersediaan dan waktu pengerjaan?`
  },

  customOrder: (occasion: string, details: string) => {
    return `Halo, saya ingin membuat pesanan custom:\n\n🎉 Acara: ${occasion}\n📝 Detail: ${details}\n\nBisa tolong dibantu dengan konsultasi desain dan harga?`
  },

  inquiry: (subject: string) => {
    return `Halo Cake & Kue, saya ingin bertanya tentang ${subject}. Bisa tolong dijelaskan?`
  },

  delivery: (address: string, date: string) => {
    return `Halo, saya ingin mengorder dengan pengiriman:\n\n📍 Alamat: ${address}\n📅 Tanggal: ${date}\n\nBerapa estimasi ongkir dan bisa tepat waktu?`
  },

  promotion: 'Halo, apakah ada promo atau diskon khusus untuk pembelian hari ini?',

  availability: (productName: string) => {
    return `Halo, produk "${productName}" masih tersedia? Berapa lama proses pengerjaan?`
  },
}
