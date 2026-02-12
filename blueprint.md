# blueprint_full.md

# 🧀 Cheezzybite: Professional Company Profile Blueprint
**Scale:** Full-Feature Corporate & Brand Website
**Concept:** "The Cheese Journey" (Storytelling via Scroll)
**Tech Stack:** Next.js, GSAP (ScrollTrigger, Flip Plugin), Lenis (Smooth Scroll)

---

### A. Color Palette (Extracted from Reference)* **Cheezzy Red (Primary):** `#B93628` (Warna merah bata/maroon pada pola catur)* **Melted Yellow (Secondary):** `#FFC845` (Warna karakter keju & lelehan)* **Dough Cream (Background):** `#FFF6E0` (Warna dasar hangat/krem)* **Crispy Brown (Text/Accent):** `#5D3A29` (Warna teks agar kontras tapi tidak hitam pekat)



## 1. Site Architecture (Sitemap)
Website ini akan memiliki alur naratif yang panjang (Long-scrolling) namun terstruktur jelas.

1.  **Preloader:** Brand Intro.
2.  **Hero Section:** First Impression.
3.  **The Story (Tentang Kami):** Sejarah & Visi.
4.  **The Secret (Quality/USP):** Bedah Produk (Parallax).
5.  **Menu Collection:** Katalog Lengkap.
6.  **Order Flow:** Cara Pesan.
7.  **Partnership/Reseller:** Peluang Bisnis (B2B).
8.  **Social Proof:** Testimoni & Liputan.
9.  **FAQ:** Pertanyaan Umum.
10. **Footer:** Kontak & Legal.

---

## 2. Detailed Section Breakdown & Motion Strategy

### 0. GLOBAL NAVIGATION (Navbar)
* **Style:** *Floating Pill* (Melayang di tengah bawah/atas) atau *Sticky Header* transparan yang berubah solid saat scroll.
* **Menu Items:** Beranda, Cerita Kami, Menu, Kemitraan, Kontak.
* **Interaction:** Menu aktif akan memiliki indikator "lelehan" di bawah teksnya.

### 1. HERO SECTION: "The Craving Starter"
* **Visual:** Teks raksasa **"CHEEZZY BITE"** memenuhi layar (viewport).
* **Parallax Action:**
    * Huruf-huruf tersebut "bolong" (transparent cutout), dan video *close-up* keju meleleh diputar di belakang teks (masking).
    * Saat scroll, kamera seolah "masuk" ke dalam lubang huruf tersebut, membawa user ke section berikutnya (Zoom transition).

### 2. THE STORY: "More Than Just Snacks"
* **Content:** Menceritakan awal mula Cheezzybite. Bukan sekadar teks panjang, tapi *kinetic typography*.
* **Typography Motion:**
    * Kalimat muncul per kata (*staggered*) sesuai irama scroll.
    * Kata kunci seperti **"PREMIUM"**, **"HOMEMADE"**, **"PASSION"** diberi ukuran 3x lipat lebih besar dan font berbeda (*contrast font*).
* **Parallax:** Elemen grafis abstrak (garis-garis keju, pola papan catur) bergerak lambat di background untuk menjaga dinamika.

### 3. THE SECRET: "Deconstructed Quality" (USP)
* **Visual:** Sebuah Dimsum Udang Keju besar di tengah layar.
* **Interaction (Scroll-based Explosion):**
    * Saat user scroll, dimsum tersebut **"terurai"** (exploded view) menjadi layer-layer bahan:
        * Layer Atas: Kulit dimsum yang tipis & kenyal.
        * Layer Tengah: Udang segar utuh (bukan cincang).
        * Layer Inti: Keju blok premium.
    * Setiap layer memiliki label teks yang muncul dari samping dengan garis penunjuk (*callout line*).
* **Tujuan:** Menunjukkan kualitas bahan secara visual (Show, don't just tell).

### 4. MENU COLLECTION: "The Gallery"
* **Layout:** Horizontal Scroll Slider (sangat modern untuk katalog).
* **Cards:** Kartu produk besar dengan foto *high-res*.
* **Hover Effect:**
    * Saat kursor diarahkan ke foto produk, foto menjadi *zoom-in* dan muncul detail harga serta tombol "Lihat Detail".
    * Background website berubah warna secara halus mengikuti "tema warna" produk tersebut (Misal: Udang Keju = Kuning, Dimsum Ayam = Merah Bata).

### 5. HOW TO ORDER: "Easy Steps"
* **Visual:** Ilustrasi grafis / Iconography besar (line art tebal).
* **Animation:**
    * Path animasi (garis putus-putus) yang menghubungkan langkah 1 (Pilih) -> 2 (Chat) -> 3 (Bayar) -> 4 (Nikmati).
    * Ikon bergerak *bouncing* (memantul) terus-menerus (*loop*).

### 6. PARTNERSHIP / RESELLER: "Grow With Us" (Professional Section)
* **Vibe:** Lebih serius tapi tetap *approachable*.
* **Layout:** Split screen. Kiri: Foto mitra sukses / toko fisik. Kanan: Teks ajakan & form singkat.
* **Typography:** Judul **"JADI BAGIAN DARI KAMI"** menggunakan font solid & tegas.
* **CTA:** Tombol "Download Proposal Kemitraan" (PDF) dengan animasi *magnetic button*.

### 7. SOCIAL PROOF & GALLERY
* **Content:** Grid foto Instagram (customer makan) & logo-logo event/bazaar yang pernah diikuti.
* **Motion:** *Infinite Marquee* (teks berjalan) berisi review singkat: *"Enak banget!" - "Kejunya gak pelit!" - "Nagih!"*.

### 8. FAQ (Accordion)
* **Desain:** Pertanyaan ditulis dengan font besar. Saat diklik, jawaban meluncur ke bawah (*slide down*).
* **Detail:** Icon panah berubah menjadi potongan keju segitiga saat aktif.

### 9. FOOTER
* **Isi:** Alamat lengkap, Link Social Media, Copyright, Link Cepat.
* **Visual:** Di bagian paling bawah footer, ada ilustrasi "footer" (kaki) karakter maskot yang sedang duduk santai, menutup halaman dengan manis.

---

## 3. Technical Enhancements for "Professional" Feel

1.  **Page Transitions:** Tidak ada *hard refresh*. Saat pindah halaman (misal ke detail menu), gunakan transisi *wipe* warna kuning/merah agar terasa seperti aplikasi *native*.
2.  **Smooth Scrolling (Lenis):** Wajib digunakan agar efek parallax terasa mewah dan tidak patah-patah (*jittery*).
3.  **Responsive Typography:** Menggunakan satuan `clamp()` pada CSS agar ukuran teks raksasa tetap proporsional di HP, Tablet, dan Desktop tanpa merusak layout.
4.  **Performance:** Karena banyak gambar & animasi, gunakan teknik *Lazy Loading* agresif untuk section bawah.

---