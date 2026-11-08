/* =========================
   FORMAT RUPIAH
========================= */

function formatRupiah(angka) {

    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(angka);

}

/* =========================
   LOGIN
========================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (
            email === "demo@bukukita.com" &&
            password === "12345"
        ) {
            sessionStorage.setItem("login", "yes");
            window.location.href = "dashboard.html";

        } else {
            alert("Email/password yang anda masukkan salah");

        }

    });

}

/* =========================
   LUPA PASSWORD
========================= */

function lupaPassword() {

    let email = prompt("Masukkan email Anda:");
    if (email) {
        alert(
            "Simulasi pemulihan password untuk " + email
        );
    }

}

/* =========================
   DAFTAR
========================= */

function daftar() {

    let nama = prompt("Masukkan nama:");
    let email = prompt("Masukkan email:");
    let password = prompt("Masukkan password:");
    if (nama && email && password) {
        alert("Pendaftaran berhasil (simulasi)");
    }

}

/* =========================
   GREETING DASHBOARD
========================= */

const greeting = document.getElementById("greeting");

if (greeting) {
    let jam = new Date().getHours();

    if (jam < 11) {
        greeting.innerText = "Selamat pagi";
    } else if (jam < 15) {
        greeting.innerText = "Selamat siang";
    } else if (jam < 18) {
        greeting.innerText = "Selamat sore";
    } else {
        greeting.innerText = "Selamat malam";
    }

}

/* =========================
   KATALOG BUKU
========================= */

const daftarBuku = document.getElementById("daftarBuku");

if (daftarBuku) {
    tampilkanBuku();
}

function tampilkanBuku() {

    let container = document.getElementById("daftarBuku");

    container.innerHTML = "";

    dataKatalogBuku.forEach(function(buku) {
        let card = document.createElement("div");
        card.className = "book-card";
        card.innerHTML = `

            <img src="${buku.gambar}" alt="${buku.judul}">
            <h3>${buku.judul}</h3>
            <p>Penulis: ${buku.penulis}</p>
            <p>Kategori: ${buku.kategori}</p>
            <p>Harga: ${formatRupiah(buku.harga)}</p>
            <p>Stok: ${buku.stok}</p>
            <button onclick="pesanBuku(${buku.id})">
                Pesan
            </button>

        `;

        container.appendChild(card);

    });

}

/* =========================
   TAMBAH BUKU
========================= */

function tambahBuku() {

    let judul = prompt("Masukkan judul buku:");
    if (!judul) return;
    let penulis = prompt("Masukkan nama penulis:");
    let harga = Number(prompt("Masukkan harga buku:"));
    let stok = Number(prompt("Masukkan jumlah stok:"));

    if (
        !penulis ||
        harga <= 0 ||
        stok < 0 ||
        !Number.isFinite(harga) ||
        !Number.isFinite(stok)
    ) {
        alert("Data buku tidak valid");

        return;
    }

    let bukuBaru = {

        id: Date.now(),
        judul: judul,
        penulis: penulis,
        kategori: "Umum",
        harga: harga,
        stok: stok,
        gambar: "img/buku1.png"

    };

    dataKatalogBuku.push(bukuBaru);
    tampilkanBuku();
    alert("Buku berhasil ditambahkan");

}

/* =========================
   PILIH BUKU
========================= */

function pesanBuku(id) {

    sessionStorage.setItem("bukuDipilih", id);
    window.location.href = "checkout.html";

}

/* =========================
   CHECKOUT
========================= */

const pilihBuku = document.getElementById("pilihBuku");
if (pilihBuku) {

    dataKatalogBuku.forEach(function(buku) {
        let option = document.createElement("option");
        option.value = buku.id;
        option.textContent =
            buku.judul + " - " + formatRupiah(buku.harga);

        pilihBuku.appendChild(option);
    });

    let selected = sessionStorage.getItem("bukuDipilih");

    if (selected) {
        pilihBuku.value = selected;

    }

    pilihBuku.addEventListener("change", hitungTotal);
    document.getElementById("jumlah")
        .addEventListener("input", hitungTotal);

    hitungTotal();

}

/* =========================
   HITUNG TOTAL
========================= */

function hitungTotal() {

    let select = document.getElementById("pilihBuku");
    if (!select) return;
    let id = Number(select.value);

    let jumlah = Number(
        document.getElementById("jumlah").value
    );

    let buku = dataKatalogBuku.find(function(b) {

        return b.id === id;

    });

    if (buku && jumlah > 0) {

        let total = buku.harga * jumlah;
        document.getElementById("total").innerText =
            formatRupiah(total);

    }

}

/* =========================
   SIMPAN PESANAN
========================= */

const formPesanan = document.getElementById("formPesanan");

if (formPesanan) {

    formPesanan.addEventListener("submit", function(event) {

        event.preventDefault();
        let id = Number(
            document.getElementById("pilihBuku").value
        );

        let buku = dataKatalogBuku.find(function(b) {
            return b.id === id;

        });

        let jumlah = Number(
            document.getElementById("jumlah").value
        );

        if (!buku || jumlah <= 0) {

            alert("Data pesanan tidak valid");
            return;

        }

        if (jumlah > buku.stok) {

            alert("Stok buku tidak mencukupi");
            return;

        }

        let pesanan = {

            resi: "BK" + Date.now(),
            nama: document.getElementById("nama").value,
            email: document.getElementById("emailPesan").value,
            telepon: document.getElementById("telepon").value,
            buku: buku.judul,
            jumlah: jumlah,
            total: buku.harga * jumlah,
            alamat: document.getElementById("alamat").value,
            pembayaran: document.getElementById("pembayaran").value,
            tanggal: new Date().toLocaleDateString("id-ID"),
            status: "Pesanan diterima",
            ekspedisi: "JNE",
            paket: "Reguler"

        };

        buku.stok -= jumlah;
        dataPesanan.push(pesanan);
        alert(
            "Pesanan berhasil dibuat!\n" +
            "Nomor resi: " + pesanan.resi
        );

        sessionStorage.removeItem("bukuDipilih");
        window.location.href = "tracking.html";

    });

}

/* =========================
   TRACKING PENGIRIMAN
========================= */

function cariResi() {

    let nomor = document.getElementById("nomorResi").value;
    let pesanan = dataPesanan.find(function(p) {

        return p.resi.toLowerCase() === nomor.toLowerCase();

    });

    let hasil = document.getElementById("hasilTracking");
    if (!pesanan) {

        hasil.innerHTML = `
            <p>Nomor resi tidak ditemukan.</p>
        `;
        return;

    }

    hasil.innerHTML = `

        <h2>Informasi Pengiriman</h2>
        <p>Nomor Resi: ${pesanan.resi}</p>
        <p>Nama Pemesan: ${pesanan.nama}</p>
        <p>Status: ${pesanan.status}</p>
        <p>Ekspedisi: ${pesanan.ekspedisi}</p>
        <p>Jenis Paket: ${pesanan.paket}</p>
        <p>Tanggal: ${pesanan.tanggal}</p>
        <p>Total Pembayaran:
            ${formatRupiah(pesanan.total)}
        </p>
        <p>Alamat: ${pesanan.alamat}</p>
        <progress value="50" max="100"></progress>
        <p>Pesanan sedang diproses.</p>

    `;

}
