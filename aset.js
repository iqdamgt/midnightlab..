// ASET BUATAN SENDIRI (sound dan wajah El Kalla)
// Cara pakai: taruh file di folder yang SAMA dengan index.html, lalu tulis nama filenya di bawah.
// Contoh: malam:'malam.mp3'   (data URI base64 juga boleh)
// Kosongkan ('') kalau belum ada, game tetap jalan tanpa suara itu.
const SND={
 menu:'backsound.mp3',         // backsound halaman utama (berulang terus)
 malam:'night.mp3',            // suara malam hari saat pemain mengerjakan tugas (berulang terus)
 kertas:'ambil.mp3',           // saat pemain klik interaksi lembar kertas soal
 kunci:'kunci.mp3',                     // saat mengambil kunci (kosong = pakai suara kertas)
 senter:'senter.mp3',          // klik tombol senter (hidup/mati)
 langkah:'langkah.mp3',        // langkah pemain
 gagal:'gagal.mp3',            // jawaban salah
 berhasil:'berhasil.mp3',      // jawaban benar
 hantu:'hantu.mp3',            // suara El Kalla (berulang tetap selama ia berkeliaran, makin pelan kalau jauh)
 jumpscare:'jumpscare.mp3',    // wajah jumpscare saat diculik (5 detik)
 glitch:'glitch.mp3',                    // efek glitch setelah jumpscare (8 detik)
 lemariBuka:'lemaribuka.mp3',               // membuka lemari (saat masuk dan saat keluar)
 lemariTutup:'lemaritutup.mp3',              // menutup lemari (terdengar 0,7 detik setelah dibuka)
 pintuBuka:'bukapintu.mp3',                // membuka pintu exit dengan kunci
 selesai:'cihuy.mp3',          // saat semua soal selesai
 ending:'finish.mp3' // musik halaman ending (BERHASIL! + PULANG), diputar SEKALI saja (tidak berulang)
};
// Wajah El Kalla: nama file gambar (png/jpg, sebaiknya persegi), contoh 'wajah.png'
const FACE_URL='hantu.png';// Gambar badan pemain (kotak ala Minecraft, terlihat saat menunduk). Satu gambar ditempel ke semua sisi balok. Kalau file tidak ada, dipakai warna seragam.
// Ukuran yang disarankan (rasio sama dengan baloknya, boleh kelipatan lain, pixel art lebih bagus):
//   badan.png  = 128 x 192 px (rasio 2:3)  -> torso 8x12 blok
//   tangan.png =  64 x 192 px (rasio 1:3)  -> dipakai untuk tangan kiri & kanan
//   kaki.png   =  64 x 192 px (rasio 1:3)  -> dipakai untuk kaki kiri & kanan
const SKIN={badan:'',tangan:'',kaki:''}; // skin lama tidak dipakai lagi (pakai SKIN_FULL di bawah)

// SKIN FULL BODY (opsional): tiap sisi (atas/bawah/kanan/depan/kiri/belakang) punya gambar sendiri, tangan & kaki kiri-kanan bisa beda.
// Isi nama file atlas dari folder skin-full/ (lihat skin-full/BACA-SAYA.txt). Kosong ('') = pakai SKIN lama (satu gambar ke semua sisi).
const SKIN_FULL={
 badan:'badan_full.png',               // 768x512
 tanganKanan:'tangan-kanan_full.png',  // 512x512
 tanganKiri:'tangan-kiri_full.png',    // 512x512
 kakiKanan:'kaki-kanan_full.png',      // 512x512
 kakiKiri:'kaki-kiri_full.png'         // 512x512
 ,kepala:'kepala_full.png'          // 1024x512, dipakai di avatar pemain lain (kamera sendiri ada di dalam kepala)
};
