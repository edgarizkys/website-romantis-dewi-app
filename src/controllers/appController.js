// World-Class Controllers for Website Romantis Dewi (Website Romantis & Love Story)

let surat_cintaData = [
  {
    "id": 1,
    "judul": "Untuk Dewi Tercinta",
    "untuk": "Dewi Tri Octariani Mulyono",
    "isi": "Dewiku sayang, setiap hari bersamamu adalah hadiah terindah dari Tuhan. Aku bersyukur memilikimu. I love you more than words can say.",
    "tanggal": "2026-07-25",
    "mood": "Romantis"
  },
  {
    "id": 2,
    "judul": "Selamat Pagi, Sayang",
    "untuk": "Dewi Tri Octariani Mulyono",
    "isi": "Selamat pagi, bidadariku. Semoga harimu seindah senyumanmu. Aku akan selalu ada untukmu, hari ini dan selamanya.",
    "tanggal": "2026-07-24",
    "mood": "Sweet"
  },
  {
    "id": 3,
    "judul": "Catatan untuk Masa Depan Kita",
    "untuk": "Dewi Tri Octariani Mulyono",
    "isi": "Suatu hari nanti kita akan melihat ke belakang dan tersenyum. Semua perjuangan ini akan worth it. Aku percaya pada kita.",
    "tanggal": "2026-07-20",
    "mood": "Penuh Harapan"
  }
];

exports.getAllSurat_Cinta = async (req, res) => {
    const tenantId = req.headers['x-tenant-id'] || 'default_tenant';
    res.json({ success: true, tenantId, count: surat_cintaData.length, data: surat_cintaData });
};

exports.createSurat_Cinta = async (req, res) => {
    const item = { id: Date.now(), tenant_id: req.headers['x-tenant-id'] || 'default_tenant', ...req.body };
    surat_cintaData.unshift(item);
    res.status(201).json({ success: true, data: item });
};

exports.deleteSurat_Cinta = async (req, res) => {
    surat_cintaData = surat_cintaData.filter(i => i.id !== parseInt(req.params.id));
    res.json({ success: true, message: 'Surat Cinta deleted' });
};

let kenanganData = [
  {
    "id": 1,
    "judul": "Hari Pertama Bertemu",
    "tanggal": "2025-01-15",
    "lokasi": "Kafe Favorit",
    "deskripsi": "Hari itu kamu datang dengan senyummu yang mencairkan hatiku. Aku tahu saat itu juga, kamu istimewa.",
    "perasaan": "Jatuh Cinta"
  },
  {
    "id": 2,
    "judul": "Kencan Pertama Kita",
    "tanggal": "2025-02-14",
    "lokasi": "Taman Kota",
    "deskripsi": "Valentine pertama bersama. Kamu pakai dress pink, aku gugup bukan main. Momen terbaikku.",
    "perasaan": "Bahagia"
  },
  {
    "id": 3,
    "judul": "Anniversary 1 Tahun",
    "tanggal": "2026-01-15",
    "lokasi": "Restoran Italia",
    "deskripsi": "Setahun bersama, dan aku semakin yakin. Kamu bukan hanya pacarku, kamu adalah rumahku.",
    "perasaan": "Cinta Mendalam"
  }
];

exports.getAllKenangan = async (req, res) => {
    const tenantId = req.headers['x-tenant-id'] || 'default_tenant';
    res.json({ success: true, tenantId, count: kenanganData.length, data: kenanganData });
};

exports.createKenangan = async (req, res) => {
    const item = { id: Date.now(), tenant_id: req.headers['x-tenant-id'] || 'default_tenant', ...req.body };
    kenanganData.unshift(item);
    res.status(201).json({ success: true, data: item });
};

exports.deleteKenangan = async (req, res) => {
    kenanganData = kenanganData.filter(i => i.id !== parseInt(req.params.id));
    res.json({ success: true, message: 'Gallery Kenangan deleted' });
};

let janjiData = [
  {
    "id": 1,
    "judul": "Janji Setia",
    "isi": "Aku berjanji akan selalu mencintaimu, Dewi. Di saat senang maupun susah, aku akan selalu ada di sampingmu.",
    "tanggal": "2026-01-15",
    "status": "Berlaku Selamanya"
  },
  {
    "id": 2,
    "judul": "Janji untuk Selalu Ada",
    "isi": "Kapanpun kamu butuhkan aku, aku akan datang. Tidak ada jarak yang terlalu jauh, tidak ada waktu yang terlalu larut.",
    "tanggal": "2026-03-14",
    "status": "Berlaku Selamanya"
  },
  {
    "id": 3,
    "judul": "Janji Membahagiakan",
    "isi": "Aku berjanji akan menjadi versi terbaik dari diriku untukmu. Karena kamu layak mendapatkan yang terbaik.",
    "tanggal": "2026-07-25",
    "status": "Berlaku Selamanya"
  }
];

exports.getAllJanji = async (req, res) => {
    const tenantId = req.headers['x-tenant-id'] || 'default_tenant';
    res.json({ success: true, tenantId, count: janjiData.length, data: janjiData });
};

exports.createJanji = async (req, res) => {
    const item = { id: Date.now(), tenant_id: req.headers['x-tenant-id'] || 'default_tenant', ...req.body };
    janjiData.unshift(item);
    res.status(201).json({ success: true, data: item });
};

exports.deleteJanji = async (req, res) => {
    janjiData = janjiData.filter(i => i.id !== parseInt(req.params.id));
    res.json({ success: true, message: 'Janji Cinta deleted' });
};

exports.getAnalytics = async (req, res) => {
    res.json({ success: true, platform: 'Website Romantis Dewi', domain: 'Website Romantis & Love Story', version: '5.0.0-WorldClass', architecture: 'Multi-Tenant Ready + Redis Cache' });
};