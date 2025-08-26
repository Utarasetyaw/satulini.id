export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string; // Konten lengkap artikel
  imageUrl: string;
  category: string;
  author: string;
  publishedDate: string; // Format 'YYYY-MM-DD'
  isFeatured?: boolean;
}

export const articles: Article[] = [
  {
    id: 1,
    title: '5 Tips Merawat Monstera Deliciosa Agar Tumbuh Subur',
    excerpt: 'Monstera Deliciosa adalah tanaman ikonik. Pelajari cara merawatnya agar daunnya pecah sempurna dan sehat.',
    content: `
Monstera Deliciosa, atau yang sering disebut Janda Bolong, adalah salah satu tanaman hias paling populer. Perawatannya relatif mudah, namun ada beberapa hal penting yang perlu diperhatikan agar ia tumbuh subur dan mengeluarkan daun-daunnya yang ikonik.

**1. Pencahayaan yang Tepat**
Monstera menyukai cahaya terang namun tidak langsung. Sinar matahari langsung dapat membakar daunnya. Tempatkan di dekat jendela yang menghadap ke timur atau di ruangan yang terang.

**2. Penyiraman**
Siram Monstera ketika 2-3 cm bagian atas tanah sudah terasa kering. Pastikan pot memiliki lubang drainase yang baik untuk menghindari akar busuk. Jangan biarkan tanah tergenang air.

**3. Kelembapan Udara**
Sebagai tanaman tropis, Monstera menyukai kelembapan tinggi. Anda bisa menyemprot daunnya dengan air sesekali atau meletakkan humidifier di dekatnya.

**4. Pemupukan**
Beri pupuk cair seimbang sebulan sekali selama musim tanam (musim semi dan panas). Hentikan pemupukan di musim dingin.

**5. Penopang (Turus)**
Monstera adalah tanaman merambat. Berikan turus atau penopang agar ia bisa tumbuh ke atas dan menghasilkan daun yang lebih besar.
    `,
    imageUrl: 'https://i.pinimg.com/736x/6a/9b/37/6a9b37c15a5e7d0c08b4402b38caee2d.jpg',
    category: 'Perawatan',
    author: 'Andini Putri',
    publishedDate: '2025-08-15',
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Panduan Memilih Pot yang Tepat untuk Tanaman Hias',
    excerpt: 'Ukuran, bahan, dan drainase pot sangat mempengaruhi kesehatan tanaman Anda. Jangan salah pilih!',
    content: `
Memilih pot bukan hanya soal estetika, tetapi juga soal kesehatan akar tanaman Anda. Pot yang salah bisa menyebabkan masalah seperti akar busuk atau dehidrasi.

**Ukuran Pot**
Pilih pot yang diameternya hanya 2-5 cm lebih besar dari pot sebelumnya. Pot yang terlalu besar akan menahan terlalu banyak air dan bisa menyebabkan akar busuk.

**Bahan Pot**
- **Terracotta (Tanah Liat):** Sangat berpori, cocok untuk tanaman yang suka tanah kering seperti kaktus dan sukulen.
- **Plastik:** Ringan dan menahan kelembapan lebih lama, baik untuk tanaman yang suka tanah lembap.
- **Keramik (Berlapis Glasir):** Mirip dengan plastik dalam menahan air, namun lebih berat dan seringkali lebih dekoratif.

**Lubang Drainase**
Ini adalah syarat mutlak! Pastikan setiap pot yang Anda beli memiliki lubang di bagian bawahnya agar kelebihan air bisa keluar.
    `,
    imageUrl: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/682/2023/11/18/IMG_20231117_224604-2396506206.jpg',
    category: 'Tips & Trik',
    author: 'Budi Santoso',
    publishedDate: '2025-07-20',
  },
  {
    id: 3,
    title: 'Inspirasi Dekorasi Ruang Tamu dengan Tanaman Gantung',
    excerpt: 'Ciptakan suasana asri dan hemat tempat dengan memanfaatkan tanaman gantung. Lihat ide-ide kreatif di sini.',
    content: `
Tanaman gantung adalah solusi cerdas untuk menambahkan sentuhan hijau tanpa mengorbankan ruang lantai yang berharga. Berikut beberapa ide untuk ruang tamu Anda:

**1. Gunakan Macrame**
Gantungan pot dari tali macrame memberikan sentuhan bohemian dan artistik. Sangat cocok untuk tanaman seperti Sirih Gading atau Spider Plant.

**2. Rak Gantung Ambalan**
Pasang beberapa papan ambalan di dinding dan biarkan tanaman menjuntai ke bawah. Ini menciptakan efek 'dinding hijau' yang dinamis.

**3. Gantung di Dekat Jendela**
Manfaatkan cahaya alami dengan menggantung tanaman di dekat jendela. Ini tidak hanya baik untuk tanaman, tetapi juga menciptakan siluet yang indah.
    `,
    imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.oUixRUOhMWG182Rgf1mJpQHaE8?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'Inspirasi',
    author: 'Citra Lestari',
    publishedDate: '2025-06-10',
  },
  {
    id: 4,
    title: 'Cara Memperbanyak Sukulen dengan Mudah',
    excerpt: 'Punya satu sukulen? Anda bisa punya puluhan! Pelajari teknik propagasi daun yang sederhana dan tingkat keberhasilannya tinggi.',
    content: `
Memperbanyak sukulen adalah salah satu hal paling memuaskan dalam berkebun. Cara termudah adalah melalui propagasi daun.

**Langkah-langkah:**
1.  **Pilih Daun Sehat:** Ambil daun yang sehat dan penuh dari bagian bawah tanaman. Putar perlahan hingga lepas dari batangnya. Pastikan pangkal daun tidak rusak.
2.  **Keringkan:** Biarkan daun di tempat kering dan teduh selama beberapa hari hingga bagian lukanya mengering dan membentuk kalus.
3.  **Letakkan di Atas Media Tanam:** Siapkan nampan berisi media tanam khusus kaktus & sukulen. Letakkan daun-daun di atasnya (jangan ditanam).
4.  **Semprot Sedikit Air:** Semprot sedikit air di sekitar daun setiap beberapa hari sekali untuk menjaga kelembapan.
5.  **Tunggu Tunas & Akar:** Dalam beberapa minggu, akar dan tunas baru akan muncul dari pangkal daun. Biarkan daun tua mengering dengan sendirinya.
    `,
    imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.rtHyNripJcm6QxmA3yByXQHaF7?cb=thfc1&w=500&h=400&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'Tips & Trik',
    author: 'Budi Santoso',
    publishedDate: '2025-05-25',
  },
  {
    id: 5,
    title: 'Mengenal Hama Kutu Putih dan Cara Membasminya',
    excerpt: 'Kutu putih adalah hama umum yang bisa merusak koleksi tanaman Anda. Kenali tanda-tandanya dan cara efektif untuk mengatasinya.',
    content: `
Kutu putih (mealybugs) adalah serangga kecil yang terlihat seperti kapas putih dan sering bersembunyi di sela-sela daun atau batang. Mereka menghisap getah tanaman dan bisa membuatnya layu.

**Cara Membasmi:**
- **Alkohol:** Celupkan cotton bud ke dalam alkohol 70% dan oleskan langsung ke kutu. Alkohol akan melarutkan lapisan lilin pelindungnya.
- **Minyak Nimba (Neem Oil):** Campurkan minyak nimba dengan air dan sedikit sabun cuci piring. Semprotkan ke seluruh bagian tanaman pada sore hari.
- **Isolasi:** Segera pisahkan tanaman yang terinfeksi dari koleksi Anda yang lain untuk mencegah penyebaran.
    `,
    imageUrl: 'https://www.ruparupa.com/blog/wp-content/uploads/2022/02/Screen-Shot-2022-02-22-at-17.07.01-768x468.jpg',
    category: 'Perawatan',
    author: 'Andini Putri',
    publishedDate: '2025-04-18',
  },
  {
    id: 6,
    title: 'Calathea: Si Cantik yang Penuh Drama',
    excerpt: 'Calathea memiliki daun yang sangat indah, namun perawatannya cukup menantang. Apa saja yang perlu diperhatikan?',
    content: `
Calathea sering disebut 'Prayer Plant' karena daunnya yang bergerak naik di malam hari dan turun di siang hari. Keindahan corak daunnya membuat banyak orang jatuh cinta, namun perawatannya memerlukan perhatian khusus.

**Kunci Perawatan Calathea:**
- **Kelembapan Tinggi:** Ini adalah syarat utama. Calathea tidak akan tumbuh baik di udara kering. Gunakan humidifier atau letakkan di dekat tanaman lain.
- **Air Bersih:** Calathea sensitif terhadap mineral dalam air keran. Gunakan air suling, air hujan, atau air AC untuk menyiram.
- **Cahaya Terang, Tidak Langsung:** Sama seperti Monstera, sinar matahari langsung akan membuat warna daunnya pudar dan gosong.
- **Jangan Biarkan Tanah Kering Total:** Jaga agar media tanam tetap lembap, tetapi tidak becek.
    `,
    imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.3NiBkKaw2ItZP3lF6BBXHQHaE8?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'Perawatan',
    author: 'Andini Putri',
    publishedDate: '2025-03-22',
  }
];
