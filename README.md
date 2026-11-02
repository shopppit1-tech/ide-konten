# Viral Content Studio (PWA)

Web app berisi 100 ide konten dalam 10 kategori, pencarian, filter, foto inspirasi, tombol ide acak, salin ide, dan prompt produksi AI.

## Upload ke GitHub Pages
1. Buat repository GitHub baru.
2. Upload semua isi folder ini (index.html, ideas.js, manifest.json, sw.js, README.md, dan folder assets).
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu Save.
6. Tunggu proses deployment selesai. Buka URL GitHub Pages yang diberikan.

## Instal sebagai aplikasi
- Buka URL GitHub Pages melalui Chrome di Android.
- Pilih menu ⋮ → **Install app** atau **Tambahkan ke layar utama**.
- Pada komputer, gunakan ikon install di address bar jika tersedia.

## Catatan
- PWA dan service worker memerlukan HTTPS atau localhost. GitHub Pages menyediakan HTTPS.
- Foto inspirasi dimuat dari Unsplash, sehingga foto membutuhkan koneksi internet. Daftar ide dan aset inti disimpan melalui cache setelah kunjungan pertama.
- Ini adalah aplikasi statis: tidak membutuhkan backend, database, atau API key.
- Foto merupakan ilustrasi inspirasi kategori, bukan foto spesifik untuk masing-masing dari 100 judul.
