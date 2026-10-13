// snd = sound khusus adegan ini, diputar saat adegan muncul (berhenti saat pindah adegan).
// Isi nama file, contoh snd:'adegan1.mp3'. Kosong = tidak ada sound khusus adegan.
// Cerita pembuka (OPEN), telepon ke guru (CALL), dan ending berhasil (END). ok:true = tampilkan tombol OK. Tiap adegan: e=ikon, t=judul, bg=[warna1,warna2], x=teks
const OPEN=[
{snd:'',e:'🎒',t:'SMK • JURUSAN RPL',bg:['#1b2a49','#050810'],x:'Namanya Wandih. Siswa SMK jurusan RPL yang pemalas, lalai, dan kepala batu. Tugas diabaikan. Peraturan sekolah terus ia langgar.'},
{snd:'fah1.mp3',e:'📉',t:'LANGGANAN TERBAWAH',bg:['#3a1c1c','#0d0505'],x:'Tiga kali tidak naik kelas. Setiap pembagian rapor, namanya selalu ada di urutan paling bawah. Ranking paling akhir.'},
{snd:'fah2.mp3',e:'📝',t:'REMEDIAL',bg:['#2f2f1a','#0a0a05'],x:'Suatu hari nilainya kembali jadi yang terendah. Guru mapel kejuruan memberinya tugas remedial. Wandih malah menolak mengerjakannya.'},
{snd:'tindeck.mp3',e:'😡',t:'HUKUMAN',bg:['#4a1111','#120303'],x:'Guru marah. “Kalau tidak mau mengerjakan tugas remedialnya, malam ini bapak kunci kamu di lab komputer! Kerjakan semua soal di lembar kertas yang ada di situ. Sudah selesai semua, baru kamu boleh pulang!”'},
{snd:'takotnyee.mp3',e:'👤',t:'CERITA DARI TEMAN',bg:['#10101a','#000000'],x:'Wandih teringat. Dulu teman-temannya pernah menginap di lab komputer karena rumah mereka jauh dari sekolah, sibuk mengedit poster dan membuat prototipe RPL untuk event sekolah. Tengah malam, mereka diganggu sosok yang mengerikan. Sejak itu teman-temannya kapok menginap di lab komputer.'},
{snd:'l.mp3',e:'🌙',t:'TENGAH MALAM',bg:['#050510','#000000'],x:'Pintu lab terkunci. Lampu berkedip. Sunyi... lalu terdengar langkah pelan. Cari lembar soal dan selesaikan sebelum El Kalla menculikmu! Kalau ia muncul, sembunyi di lemari.'}];
const CALL=[
{snd:'ringtone.mp3',e:'📱',t:'WANDIH',bg:['#0e1a2e','#02050a'],x:'“Pak, saya sudah mengerjakan semua soal dengan benar.”'},
{snd:'yeay.mp3',e:'👨‍🏫',t:'GURU',bg:['#1a1426','#04020a'],x:'“Bagus, ambil kunci cadangan yang ada di meja depan di ruangan kedua.”'},
{snd:'',e:'👨‍🏫',t:'GURU',bg:['#1a1426','#04020a'],x:'“Kunci itu untuk pintu di ruangan kedua.”'},
{snd:'oke.mp3',e:'📱',t:'WANDIH',bg:['#0e1a2e','#02050a'],x:'“Oke, Pak.”'}];
const END=[
{snd:'cihuy.mp3',e:'🏆',t:'BERHASIL!',bg:['#16301f','#030a05'],x:'Wandih berhasil mengerjakan semua soal dengan benar.'},
{snd:'sleeping.mp3',e:'🛏️',t:'PULANG',bg:['#1f2a4a','#05070f'],x:'Dari lab komputer itu, Wandih langsung pulang ke rumahnya dan tidur dengan nyenyak.',ok:true}];
// Monolog setelah keluar dari lab (hanya Single Player): layar hitam, tokoh utama berbicara. Tiap adegan: x=teks (tanpa ikon/judul)
const MONO=[
{snd:'',e:'',t:'',bg:['#000','#000'],x:'(Di luar ruangan, udara malam terasa dingin. Wandih terdiam, masih was-was dengan kejadian barusan.)'},
{snd:'',e:'',t:'',bg:['#000','#000'],x:'“Semalaman di lab komputer itu... rasanya lebih lama dari tiga kali tidak naik kelas.”'},
{snd:'',e:'',t:'',bg:['#000','#000'],x:'“Lampu berkedip, langkah kaki di belakangku, hantu itu... Aku hampir diculik olehnya. Untung ada lemari untuk bersembunyi.”'},
{snd:'',e:'',t:'',bg:['#000','#000'],x:'“Soal-soal yang dulu kuanggap remeh malah jadi petunjuk keluarku. Kalau dari dulu rajin belajar, aku tidak perlu melalui semua ini.”'},
{snd:'',e:'',t:'',bg:['#000','#000'],x:'“Mulai besok, tugas langsung kukerjakan di hari itu juga. Aku tidak mau lagi mengulangi kesalahan sebelumnya.”'}];
