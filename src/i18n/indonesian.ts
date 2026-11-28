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
  collab: {
    collaborate: "Langsung",
    live: "Langsung",
    title: "Kolaborasi Langsung",
    tabLive: "Sesi Langsung",
    tabShareableLink: "Tautan Berbagi",
    inactiveDesc: "Undang teman untuk menggambar dan bertukar ide secara real-time. Kursor dan goresan tersinkronisasi seketika.",
    yourName: "Nama Anda",
    namePlaceholder: "Nama Anda",
    startLiveSession: "Mulai sesi langsung",
    startingSession: "Memulai sesi...",
    sessionActive: "Sesi aktif",
    shareLinkWithPeers: "Bagikan tautan dengan teman",
    copyLink: "Salin tautan",
    copied: "✓ Tersalin!",
    linkCopiedNotice: "✓ Tautan berhasil disalin ke papan klip!",
    saveName: "Simpan",
    savedName: "Tersimpan!",
    activeCollaborators: "Kolaborator aktif",
    onlineCount: (n) => `${n} daring`,
    stopSession: "Hentikan sesi",
    followView: "Ikuti tampilan",
    following: "Mengikuti",
    viewingPeer: (name) => `Melihat ${name}`,
    stopFollowing: "Berhenti",
    readOnlyTabDesc: "Ekspor sebagai tautan hanya-baca. Siapa pun dengan tautan ini dapat melihat gambarmu tanpa mengubah gambar asli.",
    readOnlyLinkLabel: "Tautan hanya-baca",
    readOnlyGenerating: "Membuat tautan berbagi...",
    readOnlyCopiedNotice: "✓ Tautan hanya-baca berhasil disalin ke papan klip!",
    openPreview: "Buka pratinjau di tab baru ↗",
    readOnlyNote: "Gambar dikompresi langsung di dalam hash URL. Tidak memerlukan akun atau basis data.",
    readOnlyBannerBadge: "Tampilan hanya-baca",
    duplicateToEdit: "Gandakan untuk mengedit",
    shareLinkMenu: "Bagikan tautan",
    shareLinkMenuDesc: "Ekspor sebagai tautan hanya-baca",
  },
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
    tools: [
      "Kuas dan pensil untuk menggambar bebas, penghapus untuk memperbaiki detail, serta urungkan dan ulangi untuk mengoreksi perubahan.",
      "Tambahkan persegi panjang, elips, segitiga, garis, panah, dan teks. Atur warna, ketebalan, dan opasitas, lalu gunakan kisi untuk membantu menyusun gambar.",
      "Dan jika sketsa Anda membutuhkan perhitungan jumlah — seperti mencatat inventaris pada denah ruangan, menghitung kehadiran pada denah tempat duduk, atau melacak adegan papan cerita —, [Simple Tally Counter](https://simpletallycounter.com/) menyediakan penghitung online yang praktis dan bebas gangguan di tab peramban Anda. Tanpa perlu mendaftar atau memasang aplikasi.",
    ],
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
    h1: "Tentang Simple Sketchpad",
    intro: [
      "Simple Sketchpad adalah papan gambar dan sketchpad digital online yang terbuka, cepat, dan mengutamakan privasi. Pilih alat, gambar, dan karyamu tersimpan otomatis di browser — tanpa biaya langganan, tanpa akun, dan tanpa registrasi.",
    ],
    missionHeading: "Misi & Filosofi Kami",
    mission: [
      "Perangkat lunak kreatif modern semakin rumit dan sarat beban — dipenuhi kewajiban membuat akun, pembatasan berbayar bulanan, bilah alat yang membingungkan, serta pelacakan cloud yang mengganggu privasi. Simple Sketchpad diciptakan sebagai solusi tandingan yang terarah.",
      "Misi kami adalah menyediakan bidang berpikir visual yang dapat diakses instan dalam hitungan milidetik di perangkat apa pun tanpa gangguan. Baik Anda seorang insinyur yang merancang alur sistem, pengajar yang menjelaskan bukti geometri, animator yang menyusun papan cerita (storyboard), atau anak-anak yang asyik mencoret-coret di sore hari, kanvas langsung siap digunakan tanpa kendala.",
    ],
    teamHeading: "Siapa Kami & Standar Editorial",
    team: [
      "Simple Sketchpad dikembangkan dan dikelola oleh komunitas independen yang terdiri dari pengembang perangkat lunak, ilustrator teknis, dan penulis edukasi. Kami memiliki komitmen kuat terhadap standar web terbuka, teknologi ramah privasi, dan komunikasi visual yang lugas.",
      "Setiap artikel, tutorial, dan panduan teknis yang dipublikasikan di blog kami diteliti, ditulis, dan diverifikasi secara independen oleh tim editorial. Kami menguji diagram, denah lantai, dan alur teknis langsung di berbagai peramban modern untuk memastikan seluruh panduan memberikan rekomendasi yang praktis, akurat, dan dapat diterapkan.",
    ],
    techHeading: "Arsitektur Privasi 100% Sisi Klien",
    tech: [
      "Simple Sketchpad beroperasi sepenuhnya di dalam browser Anda menggunakan HTML5 Canvas 2D API. Berbeda dengan papan tulis cloud, gambar, catatan, dan referensi yang Anda unggah tidak pernah menyentuh server aplikasi eksternal.",
      "Karya kreatif Anda disimpan secara lokal di LocalStorage dan cache terindeks pada peramban Anda. Kolaborasi langsung berjalan melalui saluran data peer-to-peer WebRTC dan saluran siaran lokal, memastikan ide-ide Anda tetap rahasia hanya di antara Anda dan rekan yang Anda undang secara langsung.",
    ],
    whatHeading: "Yang bisa kamu lakukan",
    what: [
      "Menggambar dan membuat sketsa dengan kuas halus atau pensil grafit yang tampak nyata.",
      "Menambahkan bentuk dan teks — persegi panjang, elips, segitiga, garis, dan panah terarah.",
      "Bekerja di mana saja — mendukung input layar sentuh, mouse, dan stylus di semua perangkat.",
      "Menyempurnakan gambar dengan urungkan/ulangi, opasitas dan ketebalan garis yang dapat disesuaikan, kisi, zoom, dan geser.",
      "Mengekspor hasil karya sebagai file vektor SVG bersih atau PNG beresolusi tinggi kapan pun Anda siap.",
    ],
    privacyHeading: "Privasi adalah prioritas",
    privacy: [
      "Semua yang Anda gambar tetap berada di perangkat Anda sendiri. Gambar Anda hanya disimpan di penyimpanan lokal browser dan tidak pernah diunggah ke server. Baca Kebijakan Privasi untuk rincian selengkapnya.",
    ],
    contactHeading: "Pertanyaan atau masukan?",
    contact: [
      "Kami siap mendengar masukan Anda — kunjungi halaman kontak kami.",
    ],
  },
  contact: {
    h1: "Hubungi Kami",
    intro: [
      "Punya pertanyaan, menemukan kendala teknis, atau memiliki ide untuk menyempurnakan Simple Sketchpad? Kami sangat senang mendengar dari Anda.",
    ],
    emailTitle: "Kirim email langsung",
    emailDesc: "Untuk bantuan umum, saran, laporan masalah, dan pertanyaan editorial.",
    responseHeading: "Perkiraan Waktu Respons",
    responseDesc: "Kami meninjau setiap pesan yang masuk dan biasanya memberikan jawaban dalam kurun waktu 24 hingga 48 jam kerja. Mohon cantumkan rincian peramban dan perangkat Anda jika melaporkan kendala teknis.",
    supportHeading: "Apa yang bisa kami bantu",
    supportList: [
      "Dukungan teknis dan pemecahan masalah performa kanvas di berbagai perangkat.",
      "Saran fitur baru, permintaan alat gambar, dan masukan pengalaman pengguna.",
      "Pertanyaan editorial, usulan topik tutorial, atau koreksi untuk panduan blog kami.",
      "Pertanyaan seputar kebijakan privasi, keamanan data, atau penggunaan edukatif di sekolah dan universitas.",
    ],
  },
  privacy: {
    h1: "Kebijakan Privasi",
    updated: "Terakhir diperbarui: November 2026. Kebijakan ini menjelaskan data apa yang dapat diproses oleh Simple Sketchpad (\"kami\") saat Anda menggunakan situs web ini.",
    shortHeading: "Ringkasan",
    short: [
      "Gambar Anda tetap berada di browser Anda dan tidak pernah diunggah ke server mana pun. Situs ini menggunakan skrip standar Google Analytics dan Google AdSense, yang dapat menyetel cookie dan memproses data penggunaan sebagaimana dijelaskan di bawah ini.",
    ],
    storeHeading: "Data yang disimpan — dan lokasinya",
    store: [
      "Simple Sketchpad adalah aplikasi berbasis sisi klien (client-side). Saat Anda menggambar, aplikasi menyimpan karya Anda di penyimpanan lokal peramban agar dapat dipulihkan saat Anda berkunjung kembali. Data ini:",
    ],
    storeList: [
      "hanya disimpan di perangkat lokal Anda;",
      "dapat dihapus kapan saja melalui fitur \"hapus data situs\" di peramban Anda;",
      "tidak pernah dikirimkan, disimpan, atau diindeks di server web kami.",
    ],
    notHeading: "Hal yang tidak kami lakukan",
    notList: [
      "Tidak ada akun atau pendaftaran. Tidak ada proses registrasi dan tidak ada profil pribadi pengguna yang dibuat.",
      "Tidak mengakses konten kanvas. Skrip analitik dan periklanan tidak pernah menerima, melihat, atau memproses isi gambar maupun catatan Anda.",
      "Tidak menjual karya seni Anda. Kami tidak menjual gambar, sketsa, atau aset ekspor Anda kepada pihak ketiga atau pengiklan.",
    ],
    cookiesHeading: "Cookie dan Iklan Pihak Ketiga (Google AdSense)",
    cookies: [
      "Situs web ini menggunakan Google AdSense dan Google Analytics. Vendor pihak ketiga, termasuk Google, menggunakan cookie untuk menayangkan iklan berdasarkan kunjungan sebelumnya oleh pengguna ke situs web ini atau situs web lain di internet.",
      "Penggunaan cookie periklanan oleh Google memungkinkan Google dan mitranya untuk menayangkan iklan kepada pengguna berdasarkan kunjungan mereka ke Simple Sketchpad dan/atau situs web lain di internet.",
      "Pengguna dapat memilih untuk menonaktifkan iklan yang dipersonalisasi dengan mengunjungi Setelan Iklan Google (https://adssettings.google.com). Atau, Anda dapat memilih untuk menonaktifkan penggunaan cookie pihak ketiga untuk iklan yang dipersonalisasi dengan mengunjungi halaman Consumer Choice dari Digital Advertising Alliance di www.aboutads.info/choices atau Network Advertising Initiative Opt-Out Tool di optout.networkadvertising.org.",
      "Anda juga dapat menonaktifkan cookie sepenuhnya melalui pengaturan browser Anda. Penyimpanan lokal (LocalStorage) yang digunakan untuk penyimpanan otomatis gambar bukanlah cookie dan tetap bersifat privat di perangkat lokal Anda.",
    ],
    ccpaHeading: "Undang-Undang Privasi Konsumen California (CCPA / CPRA)",
    ccpa: [
      "Berdasarkan California Consumer Privacy Act (CCPA) dan California Privacy Rights Act (CPRA), penduduk California memiliki hak hukum tertentu terkait informasi pribadi mereka, termasuk hak untuk meminta pengungkapan informasi pribadi yang dikumpulkan, hak untuk meminta penghapusan, dan hak untuk menolak penjualan atau pembagian informasi pribadi.",
      "Simple Sketchpad tidak mengumpulkan pengidentifikasi pribadi, akun pengguna, nama, atau alamat, serta tidak menjual atau membagikan isi gambar kanvas Anda. Mitra periklanan pihak ketiga (seperti Google AdSense) dapat mengumpulkan pengidentifikasi pseudonim atau sinyal perangkat untuk keperluan periklanan. Untuk menggunakan hak Anda, kelola preferensi cookie melalui pengaturan browser Anda atau hubungi kami di hello@simplesketchpad.com.",
    ],
    gdprHeading: "Hak Privasi Eropa (GDPR)",
    gdpr: [
      "Bagi individu yang berada di Area Ekonomi Eropa (EEA), Inggris Raya, dan Swiss: Kami memproses data dengan dasar hukum kepentingan yang sah dan persetujuan pengguna jika berlaku.",
      "Anda berhak meminta akses, perbaikan, atau penghapusan data pribadi apa pun yang mungkin kami simpan, membatasi atau menolak pemrosesan, serta meminta portabilitas data. Anda juga berhak mengajukan keluhan kepada otoritas pengawas perlindungan data setempat. Karena kanvas gambar kami beroperasi murni di sisi klien tanpa menyimpan akun pengguna di server jarak jauh, gambar Anda tidak pernah keluar dari perangkat lokal Anda.",
    ],
    changesHeading: "Perubahan kebijakan",
    changes: ["Jika kami mengubah kebijakan ini, versi yang diperbarui akan dipublikasikan di halaman ini dengan tanggal pembaruan yang baru."],
    contactHeading: "Hubungi kami",
    contact: ["Punya pertanyaan tentang kebijakan privasi ini atau hak data Anda? Hubungi kami di"],
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
