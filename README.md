# UTS-PemrogramanWeb
# Diva Oktiana Panca Ramadani
# 312510313
# 📚 Toko Buku Online - BukuKita

## 1. Deskripsi Project

BukuKita merupakan aplikasi website sederhana untuk pemesanan buku secara online. Website ini dibuat sebagai tugas UTS Web menggunakan HTML, CSS, dan JavaScript.

Aplikasi ini membantu pengguna untuk melihat katalog buku, mengetahui informasi stok, melakukan pemesanan, mengisi informasi pembayaran, serta melihat status pengiriman buku.

Project ini menggunakan konsep **Front-End Development**, sehingga seluruh data yang digunakan berasal dari variabel JavaScript dan data dummy, tanpa menggunakan server atau database.

## 2. Tujuan Project

Tujuan dari pembuatan website BukuKita adalah:

- Membuat website pemesanan buku online sederhana.
- Menerapkan penggunaan HTML untuk membuat struktur halaman website.
- Menggunakan CSS untuk mengatur tampilan website.
- Menggunakan JavaScript untuk membuat website lebih interaktif.
- Menampilkan data buku secara dinamis menggunakan array JavaScript.
- Membuat fitur pemesanan buku dan simulasi tracking pengiriman.
- Memahami proses pengembangan website berbasis front-end.

## 3. Struktur Folder Project

Struktur folder project dibuat sebagai berikut:

```text
tugas-uts-web1/
│
├── index.html
├── dashboard.html
├── stok.html
├── tracking.html
├── checkout.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── script.js
│   └── data.js
│
├── assets/
│   └── logo.png
│
└── img/
    ├── buku1.png
    ├── buku2.png
    └── buku3.png
```

### Penjelasan Struktur Folder

| File/Folder | Keterangan |
|---|---|
| `index.html` | Halaman login pengguna |
| `dashboard.html` | Halaman utama website |
| `stok.html` | Halaman informasi stok dan katalog buku |
| `tracking.html` | Halaman informasi pengiriman |
| `checkout.html` | Halaman pemesanan buku |
| `css/style.css` | File untuk mengatur tampilan website |
| `js/script.js` | File JavaScript untuk mengatur fungsi website |
| `js/data.js` | File untuk menyimpan data dummy buku dan pesanan |
| `assets/logo.png` | Folder penyimpanan logo website |
| `img/` | Folder penyimpanan gambar buku |

## 4. Teknologi yang Digunakan

Project ini menggunakan beberapa teknologi berikut:

### HTML

HTML digunakan untuk membuat struktur halaman website, seperti form login, menu navigasi, katalog buku, tabel, dan form pemesanan.

### CSS

CSS digunakan untuk mengatur tampilan website, seperti warna, ukuran teks, tata letak, navigasi, kartu buku, dan tabel.

### JavaScript

JavaScript digunakan untuk membuat website lebih interaktif, seperti:

- Validasi login.
- Menampilkan greeting berdasarkan waktu.
- Menampilkan katalog buku secara dinamis.
- Menambahkan buku baru.
- Menghitung total harga.
- Menyimpan simulasi pesanan.
- Mencari nomor resi.
- Menampilkan informasi tracking.

### Data Dummy

Data buku dan transaksi disimpan menggunakan variabel JavaScript dalam file `data.js`.

Website tidak menggunakan database atau server untuk menyimpan data.

## 5. Langkah-Langkah Menjalankan Project

### Langkah 1: Membuat Folder Project

Buat folder baru dengan nama:

```text
tugas-uts-web1
```

Folder ini digunakan sebagai tempat menyimpan seluruh file website.

### Langkah 2: Membuat Struktur Folder

Di dalam folder project, buat folder:

```text
css
js
assets
img
```

Kemudian buat file HTML:

```text
index.html
dashboard.html
stok.html
tracking.html
checkout.html
```

Buat juga file:

```text
css/style.css
js/script.js
js/data.js
```

### Langkah 3: Memasukkan Kode Program

Masukkan kode HTML ke masing-masing file halaman website.

Masukkan kode CSS ke file:

```text
css/style.css
```

Masukkan kode JavaScript utama ke file:

```text
js/script.js
```

Masukkan data dummy buku dan transaksi ke file:

```text
js/data.js
```

Pastikan nama file dan folder sesuai dengan struktur project.

### Langkah 4: Menambahkan Gambar Buku

Masukkan gambar buku ke folder:

```text
img/
```

Contoh:

```text
img/buku1.png
img/buku2.png
img/buku3.png
```

Gambar tersebut digunakan untuk menampilkan ilustrasi buku pada halaman katalog.

Jika belum memiliki gambar, website tetap dapat dijalankan dengan menyesuaikan bagian gambar pada kode JavaScript.

### Langkah 5: Menjalankan Website

Setelah semua file selesai dibuat:

1. Buka folder `tugas-uts-web1`.
2. Cari file `index.html`.
3. Klik dua kali file tersebut.
4. Website akan terbuka menggunakan browser.
5. Masukkan email dan password demo.
6. Setelah berhasil login, pengguna akan diarahkan ke halaman dashboard.

Website dapat dijalankan menggunakan browser seperti Google Chrome atau Microsoft Edge.

## 6. Akun Login Demo

Untuk mencoba fitur login, gunakan akun demo berikut:

| Informasi | Data |
|---|---|
| Email | `demo@bukukita.com` |
| Password | `12345` |

Akun tersebut digunakan untuk simulasi login pada aplikasi.

## 7. Fitur Website

### A. Login

Halaman login digunakan untuk masuk ke aplikasi BukuKita.

Fitur yang tersedia:

- Input email.
- Input password.
- Tombol Login.
- Validasi email dan password.
- Pesan alert jika login tidak sesuai.
- Tombol Lupa Password.
- Tombol Daftar.

### B. Dashboard

Dashboard merupakan halaman utama setelah login.

Fitur yang tersedia:

- Greeting berdasarkan waktu lokal.
- Menu navigasi.
- Informasi singkat toko buku.
- Menu menuju katalog.
- Menu menuju pemesanan.
- Menu menuju tracking pengiriman.

### C. Informasi Stok/Katalog

Halaman katalog digunakan untuk menampilkan informasi buku.

Fitur yang tersedia:

- Menampilkan daftar buku.
- Menampilkan gambar buku.
- Menampilkan judul buku.
- Menampilkan nama penulis.
- Menampilkan kategori buku.
- Menampilkan harga.
- Menampilkan jumlah stok.
- Menambahkan buku baru.
- Memilih buku untuk dipesan.

Data katalog diambil dari variabel:

```javascript
dataKatalogBuku
```

### D. Checkout/Pemesanan

Halaman checkout digunakan untuk melakukan simulasi pemesanan buku.

Fitur yang tersedia:

- Input nama pemesan.
- Input email.
- Input nomor telepon.
- Memilih buku.
- Mengatur jumlah buku.
- Input alamat pengiriman.
- Memilih metode pembayaran.
- Menghitung total harga.
- Membuat pesanan.

Total pembayaran dihitung berdasarkan harga buku dikalikan jumlah buku yang dipesan.

### E. Tracking Pengiriman

Halaman tracking digunakan untuk melihat informasi pengiriman pesanan.

Fitur yang tersedia:

- Input nomor resi.
- Tombol Cari.
- Menampilkan nama pemesan.
- Menampilkan nomor resi.
- Menampilkan status pengiriman.
- Menampilkan nama ekspedisi.
- Menampilkan jenis paket.
- Menampilkan tanggal pengiriman.
- Menampilkan total pembayaran.
- Menampilkan alamat pengiriman.

Nomor resi dicari berdasarkan data transaksi yang terdapat pada variabel JavaScript.

## 8. Alur Penggunaan Website

Alur penggunaan website BukuKita:

```text
Pengguna
   |
   v
Halaman Login
   |
   v
Dashboard
   |
   v
Informasi Stok/Katalog
   |
   v
Memilih Buku
   |
   v
Halaman Checkout
   |
   v
Mengisi Data Pemesan
   |
   v
Memilih Pembayaran
   |
   v
Membuat Pesanan
   |
   v
Nomor Resi
   |
   v
Tracking Pengiriman
```

## 9. Cara Kerja Data

Data buku disimpan dalam array JavaScript:

```javascript
const dataKatalogBuku = [];
```

Data transaksi disimpan dalam variabel:

```javascript
let dataPesanan = [];
```

Ketika pengguna membuat pesanan, JavaScript akan:

1. Mengambil data pemesan.
2. Mengambil buku yang dipilih.
3. Mengambil jumlah buku.
4. Menghitung total pembayaran.
5. Membuat nomor resi.
6. Mengurangi jumlah stok buku.
7. Menambahkan data transaksi ke array.
8. Mengarahkan pengguna ke halaman tracking.

Seluruh proses dilakukan di sisi front-end.

## 10. Batasan Project

Project ini merupakan aplikasi front-end sederhana yang menggunakan data dummy.

Beberapa batasan aplikasi:

- Data belum disimpan dalam database.
- Data transaksi tidak tersimpan permanen setelah halaman dimuat ulang.
- Login masih menggunakan akun demo.
- Belum menggunakan autentikasi server.
- Pembayaran masih berupa simulasi.
- Tracking pengiriman masih berupa simulasi.
- Belum terhubung dengan API ekspedisi.

## 11. Kesimpulan

Website BukuKita merupakan aplikasi pemesanan buku online sederhana yang dikembangkan menggunakan HTML, CSS, dan JavaScript.

Aplikasi ini memiliki lima halaman utama, yaitu login, dashboard, informasi stok/katalog, checkout, dan tracking pengiriman.

Melalui project ini, pengguna dapat memahami penerapan front-end development, penggunaan array JavaScript, manipulasi DOM, validasi form, perhitungan total harga, serta interaksi antarhalaman website.

Project ini diharapkan dapat menjadi dasar untuk pengembangan aplikasi pemesanan buku yang lebih lengkap pada tahap selanjutnya.

---

**Nama Project:** BukuKita - Toko Buku Online  
**Jenis Project:** Front-End Web Application  
**Bahasa Pemrograman:** HTML, CSS, JavaScript  
**Penyimpanan Data:** JavaScript Dummy Data  
**Tujuan:** Tugas UTS Web
