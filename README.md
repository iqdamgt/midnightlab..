# MIDNIGHT LAB..

Game horor 3D berbasis browser bertema edukasi. Kamu terjebak semalaman di lab komputer sekolah, harus menjawab soal-soal jurusan RPL, dan menghindari hantu bernama **El Kalla**.

> Seluruh karakter, cerita, dan kejadian adalah fiksi. Game ini dibuat untuk hiburan dan pembelajaran, dan tidak menggambarkan institusi atau tempat tertentu.

Dibuat oleh Iqdham, Kevin, Arif.

## Cerita (Single Player)
Wandih adalah siswa SMK jurusan RPL yang malas dan tiga kali tidak naik kelas. Karena menolak mengerjakan remedial, gurunya menghukumnya menjaga lab komputer semalaman dan mengerjakan semua soal di lembar kertas. Tengah malam, sosok hitam bernama El Kalla muncul. Setelah berhasil keluar dari lab, layar menghitam dan Wandih bermonolog tentang pengalamannya semalaman, lalu game kembali ke menu utama.

## Tujuan
1. Temukan dan jawab semua lembar soal di meja komputer (muncul 5 lembar per gelombang). Pilihan jawaban diacak tiap kertas dibuka.
2. Telepon guru, lalu ambil kunci di meja guru (ruang biru).
3. Buka pintu di ruangan itu dan keluar.

## Kontrol
| | PC / Laptop | HP |
|---|---|---|
| Jalan | W A S D atau tombol panah | geser layar kiri |
| Lari | Shift (tahan) | - |
| Melihat | Mouse | geser layar kanan |
| Interaksi | E | ketuk tulisan interaksi |
| Senter | F | tombol senter kanan bawah |

### Shortcut keyboard (PC / Laptop)
| Tombol | Fungsi |
|---|---|
| 1 - 4 | Memilih jawaban saat membaca kertas soal |
| Q | Menutup kertas soal tanpa menjawab |
| P | Jeda dan lanjut (Single Player) |
| M | Bisukan / hidupkan semua suara |
| Esc | Melepas kursor mouse (Single Player otomatis menjeda) |
| Enter / Space | Melanjutkan teks cerita |
| Enter (Multi Player) | Membuka chat, Enter lagi untuk kirim, Esc untuk tutup |
| Z / X / C (Multi Player) | Tanda cepat: soal di sini / kunci di sini / hantu! |
| Panah kiri / kanan (Multi Player) | Berganti pemain yang ditonton saat menjadi penonton |

## Aturan
- Jawaban benar menjadi hijau, salah menjadi merah. Lembar yang salah bisa dicoba lagi.
- **Gagal** jika salah menjawab 50% dari jumlah soal, atau jika disentuh El Kalla.
- Saat El Kalla muncul, sembunyi di lemari (E). Jika ia berdiri di depan lemari, ia pergi setelah 5 detik.

## Tingkat Kesulitan
| Level | Single Player | Multi Player | Hantu muncul |
|---|---|---|---|
| Mudah | 15 soal | 20 soal | 55 dtk |
| Sedang | 10 soal | 15 soal | 40 dtk |
| Sulit | 5 soal | 10 soal | 30 dtk (SP) / 25 dtk (MP) |

## Mode
- **Single Player:** cerita Wandih melawan El Kalla sendirian, lengkap dengan cerita pembuka, telepon guru, dan ending.
- **Multi Player:** 2 sampai 4 pemain lewat PeerJS. Satu pemain membuat room dan membagikan kode, yang lain masuk dengan kode itu. Ada chat lobi/dalam game, penanda lokasi (soal, kunci, hantu), dan mode penonton.

## Saran dan Peringatan
- **Matikan jumpscare** (ikon gigi di atas layar) jika di bawah umur, mudah takut, memiliki kecemasan, penyakit jantung, atau sensitif terhadap kilatan cahaya dan suara keras.
- **Mainkan Single Player dulu** untuk mengenal denah lab, lemari, dan pola hantu tanpa tekanan pemain lain.
- Istirahat jika merasa pusing, sesak, atau cemas berlebihan.

## Pengaturan
Volume musik, volume efek suara, sensitivitas mouse/layar, dan jumpscare (suara dan efek kilat).

## Teknologi dan Struktur
HTML, CSS, JavaScript, [Three.js r128](https://threejs.org/), PeerJS 1.5.4 (keduanya dimuat dari cdnjs, jadi perlu internet).

| File | Fungsi |
|---|---|
| `index.html` | Struktur halaman dan menu |
| `style.css` | Tampilan |
| `game.js` | Mesin game, cerita, kontrol |
| `mp.js`, `mp2.js` | Multiplayer |
| `soal.js` | Bank soal |
| `cerita.js` | Cerita pembuka, telepon, monolog, dan ending |
| `aset.js` | Daftar gambar dan suara |

## Menjalankan
Buka `index.html` di browser modern (Chrome, Edge, Firefox, Safari) dengan koneksi internet, atau jalankan lewat server lokal, misalnya `python3 -m http.server`, lalu buka `http://localhost:8000`.
