const questions = [
  {
    category: "Red sign",
    questions: [
      {
        question: "Apa arti rambu berwarna merah dengan tanda silang?",
        options: ["Dilarang berhenti", "Dilarang masuk", "Dilarang parkir", "Dilarang putar balik"],
        correctAnswer: 2,
      },
      {
        question: "Rambu dilarang masuk biasanya berbentuk...",
        options: ["Persegi", "Segitiga", "Lingkaran", "Oktagon"],
        correctAnswer: 2,
      },
      {
        question: "Warna dasar rambu larangan adalah...",
        options: ["Kuning", "Merah", "Biru", "Putih"],
        correctAnswer: 3,
      },
      {
        question: "Simbol 'P' dicoret merah berarti...",
        options: ["Parkir bebas", "Dilarang parkir", "Parkir khusus", "Area parkir terbatas"],
        correctAnswer: 1,
      },
      {
        question: "Apa bentuk dari rambu 'Dilarang Masuk'?",
        options: ["Lingkaran dengan garis horizontal putih", "Lingkaran merah dengan tanda seru", "Persegi merah", "Segitiga merah"],
        correctAnswer: 0,
      },
      {
        question: "Rambu merah paling umum digunakan untuk...",
        options: ["Perintah", "Larangan", "Peringatan", "Informasi"],
        correctAnswer: 1,
      },
      {
        question: "Apa arti rambu merah bergambar motor dicoret?",
        options: ["Motor harus pelan-pelan", "Motor harus menyalakan lampu", "Dilarang masuk bagi sepeda motor", "Motor wajib helm"],
        correctAnswer: 2,
      },
      {
        question: "Rambu dilarang mendahului berbentuk...",
        options: ["Segitiga", "Lingkaran merah dengan dua mobil", "Kotak biru", "Lingkaran kuning"],
        correctAnswer: 1,
      },
      {
        question: "Jika melihat rambu lingkaran merah dengan simbol truk, artinya...",
        options: ["Truk harus cepat", "Truk dilarang melintas", "Truk wajib parkir", "Truk harus belok kanan"],
        correctAnswer: 1,
      },
      {
        question: "Apa fungsi utama dari rambu lalu lintas merah?",
        options: ["Memberi peringatan bahaya", "Memberikan arah", "Menyampaikan informasi", "Melarang atau membatasi sesuatu"],
        correctAnswer: 3,
      },
    ],
  },
  {
    category: "Blue sign",
    questions: [
      {
        question: "Rambu biru menunjukkan...",
        options: ["Larangan", "Peringatan", "Perintah", "Informasi"],
        correctAnswer: 2,
      },
      {
        question: "Rambu biru bergambar panah ke kanan berarti...",
        options: ["Dilarang ke kanan", "Belok kanan wajib", "Putar balik ke kanan", "Parkir ke kanan"],
        correctAnswer: 1,
      },
      {
        question: "Rambu bundar biru dengan tanda panah lurus berarti...",
        options: ["Wajib lurus", "Dilarang belok", "Jalan satu arah", "Peringatan jalan lurus"],
        correctAnswer: 0,
      },
      {
        question: "Warna biru pada rambu menunjukkan bahwa pengendara harus...",
        options: ["Menghindari jalan", "Mematuhi perintah", "Berhenti sejenak", "Mengurangi kecepatan"],
        correctAnswer: 1,
      },
      {
        question: "Rambu biru dengan simbol sepeda menunjukkan...",
        options: ["Sepeda dilarang", "Area parkir sepeda", "Jalur khusus sepeda", "Tempat sewa sepeda"],
        correctAnswer: 2,
      },
      {
        question: "Rambu biru dengan simbol pejalan kaki menunjukkan...",
        options: ["Larangan menyeberang", "Tempat istirahat", "Jalur pejalan kaki", "Tempat tunggu bus"],
        correctAnswer: 2,
      },
      {
        question: "Apa arti rambu biru dengan simbol bus?",
        options: ["Terminal bus", "Bus tidak boleh masuk", "Jalur khusus bus", "Rambu larangan bus"],
        correctAnswer: 2,
      },
      {
        question: "Rambu biru digunakan untuk menunjukkan...",
        options: ["Peringatan bahaya", "Aturan yang harus ditaati", "Informasi jarak", "Pusat kota"],
        correctAnswer: 1,
      },
      {
        question: "Simbol roda dua pada rambu biru berarti...",
        options: ["Dilarang motor", "Jalur motor", "Parkir motor", "Putaran motor"],
        correctAnswer: 1,
      },
      {
        question: "Rambu biru memiliki bentuk umum...",
        options: ["Persegi panjang", "Lingkaran", "Segitiga", "Oktagon"],
        correctAnswer: 1,
      },
    ],
  },
  {
    category: "Yellow sign",
    questions: [
      {
        question: "Rambu kuning digunakan untuk...",
        options: ["Peringatan bahaya", "Perintah", "Larangan", "Informasi arah"],
        correctAnswer: 0,
      },
      {
        question: "Bentuk umum rambu peringatan adalah...",
        options: ["Lingkaran", "Segitiga sama sisi", "Segitiga sama kaki", "Belah ketupat"],
        correctAnswer: 3,
      },
      {
        question: "Rambu kuning dengan gambar anak-anak berarti...",
        options: ["Tempat bermain", "Sekolah di sekitar", "Dilarang masuk anak-anak", "Wajib pelan"],
        correctAnswer: 1,
      },
      {
        question: "Rambu kuning dengan simbol tikungan menunjukkan...",
        options: ["Jalur cepat", "Jalur satu arah", "Ada tikungan tajam", "Belokan wajib"],
        correctAnswer: 2,
      },
      {
        question: "Jika kamu melihat rambu kuning bergambar hewan, maka...",
        options: ["Hewan dilarang", "Hewan peliharaan dekat", "Kemungkinan hewan menyeberang", "Kebun binatang di depan"],
        correctAnswer: 2,
      },
      {
        question: "Rambu kuning bergambar rel kereta berarti...",
        options: ["Kereta tidak aktif", "Dilarang melintas", "Ada perlintasan kereta api", "Jalur khusus kendaraan berat"],
        correctAnswer: 2,
      },
      {
        question: "Apa warna garis tepi pada rambu kuning?",
        options: ["Merah", "Putih", "Hitam", "Biru"],
        correctAnswer: 2,
      },
      {
        question: "Rambu peringatan dipasang di lokasi...",
        options: ["Dekat kantor polisi", "Area rawan kecelakaan", "Dekat rumah sakit", "Dekat SPBU"],
        correctAnswer: 1,
      },
      {
        question: "Rambu kuning sering ditemukan di...",
        options: ["Area parkir", "Jalan bebas hambatan", "Dekat tikungan dan persimpangan", "Terminal"],
        correctAnswer: 2,
      },
      {
        question: "Rambu kuning dengan simbol jalan bergelombang berarti...",
        options: ["Jalan rusak", "Jalan lurus", "Jalan tol", "Jalan turunan"],
        correctAnswer: 0,
      },
    ],
  },
  {
    category: "Study case",
    questions: [
      {
        question: "Kamu melihat rambu dilarang parkir, tetapi ada banyak motor yang parkir. Apa yang kamu lakukan?",
        options: ["Ikut parkir", "Menegur petugas", "Melaporkan ke polisi", "Mencari tempat parkir lain"],
        correctAnswer: 3,
      },
      {
        question: "Saat melihat rambu 'Hati-hati anak sekolah', apa tindakan yang benar?",
        options: ["Percepat laju kendaraan", "Bunyikan klakson", "Kurangi kecepatan dan waspada", "Abaikan"],
        correctAnswer: 2,
      },
      {
        question: "Ada rambu biru dengan panah lurus, namun jalan ditutup. Apa tindakan tepat?",
        options: ["Terobos saja", "Tanya warga sekitar", "Cari rute alternatif", "Mundur pelan-pelan"],
        correctAnswer: 2,
      },
      {
        question: "Melihat rambu 'Dilarang Mendahului', tetapi jalan kosong. Apa tindakan benar?",
        options: ["Tetap mendahului", "Mengikuti aturan dan tidak menyalip", "Menunggu petugas", "Tanya ke penumpang"],
        correctAnswer: 1,
      },
      {
        question: "Rambu kuning bergambar tanjakan curam, kamu harus...",
        options: ["Memacu kendaraan", "Mengurangi kecepatan", "Menepi", "Berhenti mendadak"],
        correctAnswer: 1,
      },
      {
        question: "Jika rambu tidak terlihat karena tertutup pohon, apa yang sebaiknya dilakukan?",
        options: ["Abaikan saja", "Tunggu kendaraan lain lewat", "Kurangi kecepatan dan tetap waspada", "Berhenti dan bertanya"],
        correctAnswer: 2,
      },
      {
        question: "Jika rambu menunjukkan jalur pejalan kaki, apa yang harus kamu lakukan?",
        options: ["Percepat laju kendaraan", "Berhenti bila ada yang menyeberang", "Tetap melaju", "Membunyikan klakson"],
        correctAnswer: 1,
      },
      {
        question: "Rambu menunjukkan perlintasan rel tanpa palang. Tindakan tepat?",
        options: ["Tetap jalan tanpa berhenti", "Berhenti dan lihat kiri-kanan", "Bunyikan klakson keras", "Putar balik"],
        correctAnswer: 1,
      },
      {
        question: "Melihat rambu tikungan tajam ke kiri, kamu harus...",
        options: ["Berbelok tajam ke kanan", "Mengurangi kecepatan", "Mundur", "Berhenti total"],
        correctAnswer: 1,
      },
      {
        question: "Apa yang harus dilakukan saat melihat rambu peringatan hewan menyeberang?",
        options: ["Percepat kendaraan", "Bunyikan klakson", "Kurangi kecepatan dan waspada", "Abaikan"],
        correctAnswer: 2,
      },
    ],
  },
];
