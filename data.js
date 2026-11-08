const dataKatalogBuku = [
    {
        id: 1,
        judul: "Python",
        penulis: "Andrea Hirata",
        kategori: "Bahasa Pemrograman",
        harga: 150000,
        stok: 12,
        gambar: "img/buku1.png"
    },

    {
        id: 2,
        judul: "Basis Data",
        penulis: "Catur",
        kategori: "Data Base",
        harga: 92000,
        stok: 8,
        gambar: "img/buku2.png"
    },

    {
        id: 3,
        judul: "IPA SMA Kelas 10",
        penulis: "James Clear",
        kategori: "Pengetahuan Alam",
        harga: 107000,
        stok: 15,
        gambar: "img/buku3.png"
    },

    {
        id: 4,
        judul: "Logika Matematika",
        penulis: "Dr Putu Heryy Gunawan",
        kategori: "Perhitungan",
        harga: 100000,
        stok: 2,
        gambar: "img/buku4.png"
    }
];

// Data transaksi awal
let dataPesanan = [
    {
        resi: "BK001",
        nama: "Diva Panca",
        email: "diva@email.com",
        telepon: "081234567890",
        buku: "Python",
        jumlah: 1,
        total: 150000,
        alamat: "Bekasi",
        pembayaran: "Transfer Bank",
        tanggal: "2026-11-07",
        status: "Dikemas",
        ekspedisi: "JNE",
        paket: "Reguler"
    }
];

File ini digunakan untuk menyimpan data buku dalam bentuk array JavaScript. Data buku nantinya ditampilkan secara dinamis pada halaman katalog.
Penjelasan
- dataKatalogBuku merupakan variabel array yang menyimpan data buku.
- id digunakan sebagai identitas buku.
- judul menyimpan nama buku.
- penulis menyimpan nama penulis.
- kategori menyimpan kategori buku.
- harga menyimpan harga buku.
- stok menyimpan jumlah buku yang tersedia.
- gambar menyimpan lokasi gambar buku.
- dataPesanan menyimpan data transaksi yang digunakan untuk tracking dan riwayat.    
