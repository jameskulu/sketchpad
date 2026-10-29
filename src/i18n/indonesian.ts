import type { UIStrings } from "./ui";
import type { ToolUIStrings } from "./tool-ui";
import type { PageContent } from "./content-types";
import type { ToolPageContentMap, ToolRelatedInfo } from "./tool-content-types";

export const indonesianUI: UIStrings = {
  siteName: "Sketchpad",
  nav: { blog: "Blog", about: "Tentang", privacyPolicy: "Kebijakan Privasi", terms: "Syarat dan Ketentuan", contact: "Hubungi Kami" },
  footer: { openSketchpad: "Buka sketchpad", copyright: (year) => `© ${year} Sketchpad` },
  canvas: {
    downloadPng: "Unduh PNG (Ctrl+D)", downloadPngShort: "Unduh PNG", palette: "Buka panel alat",
    undo: "Urungkan (Ctrl+Z)", redo: "Ulangi (Ctrl+Shift+Z)", deleteSelection: "Hapus pilihan (Delete)",
    toggleGrid: "Tampilkan/sembunyikan kisi (G)", clearCanvas: "Bersihkan kanvas",
    clearConfirmTitle: "Hapus gambar ini?", clearConfirmBody: "Semua isi kanvas akan dihapus. Kamu bisa langsung mengurungkannya jika berubah pikiran.",
    clearConfirmDelete: "Hapus", clearConfirmCancel: "Batal", toggleFullscreen: "Layar penuh (F)",
    autosaveSaved: "Tersimpan", autosaveSaving: "Menyimpan…", autosaveNotSaved: "Belum tersimpan",
    stroke: "Ketebalan garis", opacity: "Opasitas", fillShapes: "Isi bentuk", fillOn: "Aktif", fillOff: "Nonaktif",
    color: "Warna", pickCustomColor: "Pilih warna khusus", textSize: "Ukuran teks", eraserSize: "Penghapus", px: "px",
    hints: "Spasi untuk menggeser · Ctrl+gulir untuk zoom · [ ] untuk ukuran",
    drawingTools: "Alat menggambar", toolOptions: "Pengaturan alat", strokeSizeAria: "Ketebalan garis", opacityAria: "Opasitas",
    zoomIn: "Perbesar (Ctrl++)", zoomOut: "Perkecil (Ctrl+−)", zoom100: "Kembalikan zoom ke 100%", zoomFit: "Sesuaikan gambar dengan layar",
    statusHint: "Klik untuk menggambar · dua jari untuk zoom · Ctrl+gulir untuk zoom · klik dua kali pada teks untuk mengedit",
  },
  tools: { select: "Pilih", brush: "Kuas", pencil: "Pensil", rect: "Persegi panjang", ellipse: "Elips", triangle: "Segitiga", line: "Garis", arrow: "Panah", text: "Teks", eraser: "Penghapus" },
};

export const indonesianToolUI: ToolUIStrings = {
  exportSvg: "Unduh SVG", exportSvgShort: "SVG",
  tools: { highlighter: "Penyorot", sticky: "Catatan tempel", stamp: "Stempel" },
  graph: { gridSize: "Ukuran kisi", gridSizeAria: "Ukuran kisi", styleHeading: "Gaya kisi", square: "Kotak", dots: "Titik", lines: "Garis", snapToGrid: "Tempel ke kisi", snapToGridAria: "Sejajarkan gambar dengan titik kisi" },
  boardNav: { boards: "Papan", menuAria: "Alat dan papan gambar", short: { "drawing-board": "Papan Gambar", whiteboard: "Papan Tulis", "graph-paper": "Kertas Berpetak", "kids-drawing": "Menggambar untuk Anak" } },
  kids: { stampsHeading: "Stempel", stampHint: "Pilih stempel, lalu ketuk kanvas untuk menempatkannya.", draw: "Gambar", erase: "Hapus", clear: "Bersihkan", undo: "Urungkan", redo: "Ulangi", download: "Unduh", paletteHeading: "Warna" },
};

export const indonesianContent: PageContent = {
  htmlLang: "id",
  seoTitle: "Sketchpad — Menggambar Online Gratis Tanpa Daftar",
  seoDescription: "Menggambar online gratis dengan kuas, pensil, bentuk, panah, dan teks. Simpan gambar sebagai PNG tanpa membuat akun atau memasang aplikasi.",
  home: {
    h1: "Sketchpad Online Gratis",
    intro: ["Mulai menggambar langsung di browser. Pilih kuas atau pensil, tentukan warna, lalu buat sketsa, coretan, atau diagram. Tidak perlu akun maupun instalasi.", "Gunakan mouse, jari, atau stylus di komputer, tablet, dan ponsel. Kanvas disimpan secara lokal di browser; unduh PNG untuk menyimpan salinan di perangkatmu."],
    toolsHeading: "Alat sederhana untuk menuangkan ide",
    tools: ["Kuas dan pensil untuk menggambar bebas, penghapus untuk memperbaiki detail, serta urungkan dan ulangi untuk mengoreksi perubahan.", "Tambahkan persegi panjang, elips, segitiga, garis, panah, dan teks. Atur warna, ketebalan, dan opasitas, lalu gunakan kisi untuk membantu menyusun gambar."],
    rankingHeading: "Pilih kanvas sesuai kebutuhan",
    ranking: ["Gunakan sketchpad untuk coretan dan sketsa cepat. [Papan gambar](/id/drawing-board/) menambahkan catatan tempel dan penyorot, sedangkan [kertas berpetak](/id/graph-paper/) membantu menyelaraskan bentuk."],
    kidsHeading: "Ruang menggambar untuk anak",
    kids: ["Halaman [menggambar untuk anak](/id/kids-drawing/) menyediakan tombol besar, warna cerah, dan stempel emoji. Tunjukkan cara menggambar, mengurungkan, dan mengunduh hasilnya sebelum anak mulai bereksperimen."],
    sections: [
      { heading: "Cara mulai menggambar", ordered: true, paragraphs: ["Mulai dari satu ide kecil dan gunakan sedikit warna agar gambar mudah dibaca."], list: ["Pilih kuas atau pensil dan atur ketebalan garis.", "Buat sketsa awal, lalu tambahkan bentuk atau teks bila diperlukan.", "Gunakan urungkan untuk membatalkan perubahan terakhir.", "Unduh PNG setelah selesai dan buka filenya untuk memeriksa hasilnya."] },
      { heading: "Menyimpan hasil pekerjaan", paragraphs: ["Penyimpanan otomatis menggunakan browser pada perangkat yang sama. Setiap jenis papan memiliki kanvasnya sendiri. Menghapus data situs, menggunakan mode privat, atau berpindah perangkat dapat membuat gambar tidak tersedia lagi.", "Unduh hasil penting sebelum menutup sesi. PNG adalah gambar hasil ekspor, bukan berkas proyek yang dapat dibuka kembali sebagai objek yang bisa diedit."] },
    ],
    faqHeading: "Pertanyaan yang sering diajukan",
    faq: [
      { q: "Apakah sketchpad ini gratis?", a: "Ya. Alat menggambar dan unduhan PNG dapat digunakan tanpa akun atau biaya berlangganan." },
      { q: "Di mana gambar saya disimpan?", a: "Gambar disimpan secara lokal di browser pada perangkatmu, bukan di perpustakaan cloud. Unduh salinan untuk menyimpannya di luar browser." },
      { q: "Bisa dipakai di ponsel?", a: "Bisa. Gunakan jari atau stylus untuk menggambar dan dua jari untuk memperbesar atau menggeser tampilan." },
      { q: "Bisa menggambar bersama secara langsung?", a: "Belum. Papan ini digunakan secara lokal. Untuk menjelaskan ide kepada orang lain, bagikan layar atau kirim gambar hasil ekspor." },
    ],
    closing: ["Pilih alat, buat garis pertama, dan kembangkan idemu. Tidak perlu menyiapkan dokumen atau membuat akun."],
    toolLinksHeading: "Alat menggambar lainnya",
  },
  about: {
    h1: "Tentang Simple Sketchpad", intro: ["Simple Sketchpad adalah kanvas online untuk menggambar, membuat diagram, dan mencatat ide secara visual tanpa membuat akun."],
    whatHeading: "Yang bisa kamu lakukan", what: ["Menggambar dengan kuas atau pensil.", "Menambahkan bentuk, panah, dan teks.", "Memperbaiki gambar dengan penghapus serta urungkan dan ulangi.", "Mengatur warna, ketebalan garis, opasitas, kisi, dan zoom.", "Mengunduh hasil sebagai PNG; halaman alat juga menyediakan SVG."],
    privacyHeading: "Gambarmu tetap di perangkatmu", privacy: ["Isi kanvas disimpan di penyimpanan lokal browser dan tidak diunggah oleh aplikasi ke server. Situs menggunakan layanan analitik dan iklan. Baca selengkapnya di"],
    contactHeading: "Pertanyaan atau masukan?", contact: ["Kirim pertanyaan, laporan masalah, atau saran melalui halaman"],
  },
  contact: { h1: "Hubungi Kami", intro: ["Punya pertanyaan, menemukan masalah, atau ingin mengusulkan fitur? Kirim email kepada kami. Untuk laporan masalah, sertakan jenis perangkat, browser, dan langkah untuk mengulanginya."], emailTitle: "Kirim email", emailDesc: "Pertanyaan, masukan, dan laporan masalah." },
  privacy: {
    h1: "Kebijakan Privasi", updated: "Terakhir diperbarui: September 2026.",
    shortHeading: "Ringkasan", short: ["Simple Sketchpad berjalan di browser. Kami tidak meminta akun, dan isi kanvas tidak diunggah oleh aplikasi ke server. Situs menggunakan Google Analytics dan Google AdSense untuk pengukuran kunjungan dan iklan."],
    storeHeading: "Data yang disimpan di perangkat", store: ["Aplikasi menggunakan penyimpanan lokal browser agar gambar dapat dipulihkan saat kamu kembali. Data ini:"],
    storeList: ["Disimpan pada browser dan perangkat yang kamu gunakan.", "Dapat dihapus melalui pengaturan data situs pada browser.", "Tidak dikirim ke server oleh fitur penyimpanan kanvas."],
    notHeading: "Akun, iklan, dan analitik", notList: ["Tidak ada akun atau profil yang perlu dibuat.", "Google Analytics dan Google AdSense dapat menggunakan cookie dan memproses alamat IP, perkiraan lokasi, serta halaman yang dikunjungi. Isi kanvas tidak dikirim ke layanan tersebut oleh aplikasi.", "Kami tidak menjual gambar atau membagikannya kepada pengiklan."],
    cookiesHeading: "Cookie", cookies: ["Layanan Google dapat menggunakan cookie untuk mengukur kunjungan dan menayangkan iklan. Kamu dapat memblokir atau menghapus cookie melalui browser dan mengatur personalisasi iklan melalui Google Ads Settings. Penyimpanan lokal untuk kanvas berbeda dari cookie."],
    changesHeading: "Perubahan kebijakan", changes: ["Perubahan kebijakan akan diterbitkan di halaman ini dengan tanggal pembaruan yang baru."],
    contactHeading: "Hubungi kami", contact: ["Untuk pertanyaan tentang privasi, kirim email ke"],
  },
  terms: {
    h1: "Syarat dan Ketentuan", updated: "Terakhir diperbarui: September 2026. Syarat ini mengatur penggunaan situs dan layanan Simple Sketchpad. Dengan menggunakannya, kamu menyetujui syarat ini.",
    sections: [
      { title: "1. Penggunaan layanan", body: ["Layanan merupakan alat menggambar gratis yang berjalan di perangkat pengguna. Penggunaan pribadi dan komersial diperbolehkan sesuai syarat ini. Tidak diperlukan akun atau pembayaran."] },
      { title: "2. Konten milikmu", body: ["Kamu tetap memiliki hak atas gambar dan teks yang kamu buat. Kami tidak menerima, menyimpan di server, atau mengklaim kepemilikan isi kanvas. Kamu bertanggung jawab atas konten dan penggunaan hasil ekspor."] },
      { title: "3. Penggunaan yang wajar", body: ["Jangan gunakan layanan untuk membuat atau menyebarkan konten ilegal, melecehkan, memfitnah, cabul, atau tidak pantas. Jangan mengganggu, merekayasa balik, atau merusak layanan."] },
      { title: "4. Tanpa jaminan", body: ["Layanan disediakan sebagaimana adanya dan sesuai ketersediaan, tanpa jaminan tersurat maupun tersirat, termasuk kelayakan jual, kesesuaian untuk tujuan tertentu, dan tidak adanya pelanggaran hak. Kami tidak menjamin layanan selalu tersedia, bebas kesalahan, atau aman."] },
      { title: "5. Batas tanggung jawab", body: ["Sejauh diizinkan hukum, kami tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, konsekuensial, atau punitif, maupun kehilangan data akibat penggunaan layanan. Total tanggung jawab kami tidak melebihi jumlah yang kamu bayarkan untuk layanan, yaitu nol."] },
      { title: "6. Penyimpanan lokal", body: ["Kanvas disimpan otomatis di browser. Menghapus data browser dapat menghapus gambar secara permanen. Unduh hasil penting dan baca Kebijakan Privasi untuk detail penyimpanan."] },
      { title: "7. Layanan pihak ketiga", body: ["Situs dapat menautkan layanan pihak ketiga. Kami tidak bertanggung jawab atas konten atau praktik situs tersebut."] },
      { title: "8. Perubahan syarat", body: ["Kami dapat memperbarui syarat ini. Versi terbaru akan diterbitkan di halaman ini. Penggunaan berkelanjutan setelah perubahan berarti menerima syarat yang diperbarui."] },
      { title: "9. Kontak", body: ["Untuk pertanyaan tentang syarat ini, kirim email ke hello@simplesketchpad.com."] },
    ],
  },
};

const related: ToolRelatedInfo = {
  "drawing-board": { label: "Papan Gambar Online", blurb: "Susun rencana, diagram, dan ide dengan catatan tempel." },
  whiteboard: { label: "Papan Tulis Online", blurb: "Jelaskan pelajaran dan ide di kanvas yang luas." },
  "graph-paper": { label: "Kertas Berpetak Online", blurb: "Sejajarkan bentuk dengan kisi dan jarak yang bisa diatur." },
  "kids-drawing": { label: "Menggambar untuk Anak", blurb: "Tombol besar, warna cerah, dan stempel yang menyenangkan." },
};

export const indonesianTools: ToolPageContentMap = {
  "drawing-board": {
    seoTitle: "Papan Gambar Online Gratis — Rencana dan Diagram", seoDescription: "Buat diagram, rencana, dan catatan visual dengan papan gambar online gratis. Gunakan bentuk, panah, teks, dan catatan tempel tanpa mendaftar.",
    h1: "Papan Gambar Online",
    intro: ["Tuangkan ide menjadi gambar yang mudah dijelaskan. Gunakan kuas, pensil, bentuk, panah, dan teks untuk menyusun diagram atau rencana. Tambahkan catatan tempel untuk ide yang ingin dipindah-pindahkan."],
    sections: [
      { heading: "Mulai dari satu pertanyaan", paragraphs: ["Tulis tujuan di bagian atas papan. Buat satu catatan untuk setiap ide, kelompokkan ide terkait, lalu tambahkan panah untuk menjelaskan hubungannya. Gunakan penyorot untuk bagian yang paling penting."] },
      { heading: "Simpan dan bagikan hasilnya", paragraphs: ["Kanvas disimpan secara lokal di browser. Unduh PNG untuk dokumen dan pesan, atau SVG untuk gambar yang tetap tajam saat diperbesar. Papan ini tidak mendukung pengeditan bersama secara langsung; gunakan berbagi layar untuk menjelaskan ide kepada kelompok."] },
    ], relatedHeading: "Coba kanvas lainnya", related, faqHeading: "Pertanyaan yang sering diajukan",
    faq: [{ q: "Apakah perlu membuat akun?", a: "Tidak. Buka halaman dan langsung gunakan alatnya." }, { q: "Apakah setiap papan menyimpan gambar sendiri?", a: "Ya. Papan gambar, papan tulis, kertas berpetak, dan halaman anak menggunakan penyimpanan kanvas terpisah di browser." }],
    closing: ["Mulai dengan satu ide, lalu tambahkan detail seperlunya."],
  },
  whiteboard: {
    seoTitle: "Papan Tulis Online Gratis untuk Belajar dan Mencatat Ide", seoDescription: "Gunakan papan tulis online gratis untuk menjelaskan pelajaran, mencatat ide, dan membuat diagram. Tanpa akun, dengan unduhan PNG dan SVG.",
    h1: "Papan Tulis Online Gratis",
    intro: ["Jelaskan ide di kanvas luas dengan kuas, penyorot, bentuk, teks, dan catatan tempel. Geser dan perbesar tampilan agar tetap punya ruang saat pembahasan berkembang."],
    sections: [
      { heading: "Untuk belajar dan menjelaskan", paragraphs: ["Tulis topik utama, gambar contoh, lalu tambahkan label singkat. Gunakan warna berbeda untuk pertanyaan dan kesimpulan. Kamu bisa berbagi layar saat mengajar atau berdiskusi, dengan satu orang menggambar pada papan."] },
      { heading: "Navigasi dan ekspor", paragraphs: ["Tahan Spasi sambil menyeret untuk menggeser kanvas. Gunakan Ctrl+gulir untuk zoom, atau dua jari pada layar sentuh. Unduh PNG atau SVG setelah selesai; penyimpanan lokal tidak memindahkan gambar ke perangkat lain."] },
    ], relatedHeading: "Coba kanvas lainnya", related, faqHeading: "Pertanyaan yang sering diajukan",
    faq: [{ q: "Bisa diedit beberapa orang sekaligus?", a: "Belum. Ini papan lokal tanpa sinkronisasi bersama. Bagikan layar atau kirim hasil ekspor." }, { q: "Bisa dipakai untuk pelajaran?", a: "Bisa. Gunakan teks, bentuk, dan gambar bebas, lalu unduh catatan untuk dibagikan setelah pelajaran." }], closing: ["Buka papan, tulis topik, dan mulai menjelaskan."],
  },
  "graph-paper": {
    seoTitle: "Kertas Berpetak Online — Kisi untuk Menggambar", seoDescription: "Menggambar di kertas berpetak online dengan kisi garis, titik, dan kotak. Atur jarak kisi dan sejajarkan bentuk dengan fitur tempel ke kisi.",
    h1: "Kertas Berpetak Online",
    intro: ["Gunakan kisi untuk membantu menyusun bentuk, diagram, dan sketsa geometri. Pilih gaya garis, titik, atau kotak, ubah jaraknya, lalu aktifkan tempel ke kisi untuk menyelaraskan elemen."],
    sections: [
      { heading: "Pilih jarak kisi sebelum menggambar", paragraphs: ["Kisi rapat membantu detail kecil, sedangkan kisi lebih lebar cocok untuk bentuk besar. Ukuran kisi menggunakan piksel, bukan ukuran fisik kertas. Tambahkan label ukuran sendiri jika membuat denah kasar."] },
      { heading: "Periksa hasil ekspor", paragraphs: ["Unduh PNG atau SVG untuk membagikan gambar. Kisi adalah panduan tampilan dan tidak ikut dalam hasil ekspor saat ini. Halaman ini bukan pembuat PDF kertas berpetak siap cetak dengan ukuran fisik tertentu."] },
    ], relatedHeading: "Coba kanvas lainnya", related, faqHeading: "Pertanyaan yang sering diajukan",
    faq: [{ q: "Apa fungsi tempel ke kisi?", a: "Fitur ini menyelaraskan posisi elemen yang didukung ke titik kisi agar susunannya lebih rapi." }, { q: "Apakah kisi ikut diunduh?", a: "Tidak. Hasil PNG dan SVG berisi gambar, sedangkan kisi hanya menjadi panduan di layar." }], closing: ["Atur kisi, pilih pensil atau bentuk, lalu mulai menyusun gambar."],
  },
  "kids-drawing": {
    seoTitle: "Menggambar Online untuk Anak — Gratis dan Mudah", seoDescription: "Kanvas menggambar untuk anak dengan tombol besar, warna cerah, penghapus, dan stempel emoji. Unduh hasil sebagai PNG tanpa akun.",
    h1: "Menggambar Online untuk Anak",
    intro: ["Ruang menggambar sederhana dengan warna cerah, kuas, penghapus, dan stempel emoji. Anak bisa menggambar menggunakan jari, stylus, atau mouse tanpa membuat akun."],
    sections: [
      { heading: "Mulai dengan tiga tombol", paragraphs: ["Tunjukkan cara memilih warna, menggambar, dan mengurungkan. Setelah itu, coba stempel: pilih gambar emoji lalu ketuk kanvas. Orang dewasa dapat membantu mengunduh hasil sebelum membersihkan kanvas."] },
      { heading: "Ide menggambar untuk dicoba", paragraphs: ["Ajak anak menggambar makhluk dengan tiga mata, taman imajinasi, atau kendaraan yang bisa terbang. Berikan ruang untuk memilih warna dan bentuk sendiri."], list: ["Gambar wajah dengan ekspresi berbeda.", "Buat pemandangan dengan tiga warna.", "Gunakan stempel sebagai awal sebuah cerita."] },
      { heading: "Menyimpan gambar anak", paragraphs: ["Gunakan Unduh untuk menyimpan PNG. Kanvas disimpan lokal di browser; membersihkan data situs dapat menghapusnya. Halaman tidak memiliki chat atau akun. Situs menggunakan layanan analitik dan iklan seperti dijelaskan dalam Kebijakan Privasi."] },
    ], relatedHeading: "Coba kanvas lainnya", related, faqHeading: "Pertanyaan yang sering diajukan",
    faq: [{ q: "Bisa menggambar dengan jari?", a: "Bisa. Gunakan layar sentuh pada ponsel atau tablet, atau mouse pada komputer." }, { q: "Bagaimana menyimpan gambarnya?", a: "Tekan Unduh untuk menyimpan PNG di perangkat. Minta bantuan orang dewasa jika diperlukan." }], closing: ["Pilih warna dan mulai dengan satu coretan."],
  },
};
