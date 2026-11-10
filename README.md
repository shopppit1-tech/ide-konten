# IDE KONTEN — Viral Content Studio (PWA)

Aplikasi PWA berisi **201 ide konten dalam 20 kategori**, pencarian, filter, foto inspirasi, ide acak, dan pembuat prompt video yang bisa disalin. Aplikasi ini membantu menyiapkan ide dan prompt; video dibuat menggunakan alat pilihan pengguna, bukan langsung dari aplikasi.

## Fitur

- 201 ide yang mencakup hewan, misteri, fakta, transformasi, tantangan, cerita, otomotif, keluarga, berita, serial, kuliner, edukasi, wisata, cerita interaktif, proses memuaskan, tips praktis, nostalgia, AI praktis, FoodTok, serta challenge dan transformasi.
- Foto inspirasi untuk setiap kategori. Tiga foto kategori baru disimpan lokal di `assets/idea-food.jpg`, `assets/idea-learning.jpg`, dan `assets/idea-travel.jpg`.
- Prompt video vertikal 9:16 otomatis mengikuti ide dan kategori yang dipilih.
- Pencarian ide, filter kategori, ide acak, salin prompt, dan dukungan instalasi PWA.
- Tidak membutuhkan backend, database, atau API key. Foto untuk kategori lama masih dimuat dari Unsplash dan memerlukan internet.

## Publikasi di GitHub Pages

1. Buka **Settings → Pages** pada repositori.
2. Pada **Build and deployment**, pilih **Deploy from a branch**.
3. Pilih branch `main` dan folder `/ (root)`, lalu simpan.
4. Setelah deployment selesai, buka URL GitHub Pages yang ditampilkan.

## Instal sebagai aplikasi

- Buka URL GitHub Pages melalui Chrome di Android.
- Pilih menu ⋮ → **Install app** atau **Tambahkan ke layar utama**.
- Pada komputer, gunakan ikon instal di address bar jika tersedia.

## Catatan

- PWA dan service worker memerlukan HTTPS atau localhost. GitHub Pages menyediakan HTTPS.
- Ide dan aset foto lokal kategori baru disimpan di cache setelah pemuatan pertama. Foto inspirasi kategori lama dimuat dari Unsplash.
- Foto merupakan inspirasi suasana, bukan visual khusus untuk tiap judul.
- Prompt video dapat disalin dan dipakai di alat AI pilihan pengguna. Tidak ada ide yang menjamin viral; periksa fakta sebelum menerbitkan konten faktual.
