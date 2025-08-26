// Tipe data untuk setiap event
export interface Event {
  id: number;
  title: string;
  date: string; // Format: 'YYYY-MM-DD'
  displayDate: string;
  time: string;
  location: string;
  organizer: string;
  description: string;
  imageUrl: string;
  url?: string;
}

// Contoh data acara yang lebih detail
export const events: Event[] = [
  {
    id: 1,
    title: 'Pameran Anggrek Nasional 2025',
    date: '2025-09-15',
    displayDate: '15 September 2025',
    time: '10:00 - 21:00 WIB',
    location: 'Jakarta Convention Center',
    organizer: 'Asosiasi Anggrek Indonesia',
    description: 'Pameran anggrek terbesar di Indonesia, menampilkan ribuan spesies langka dari seluruh nusantara. Akan ada kontes anggrek, lelang, dan talkshow dari para ahli botani ternama.',
    imageUrl: 'https://faktualnews.co/images/2024/08/pameran-anggrek.jpg',
    url: '#'
  },
  {
    id: 2,
    title: 'Workshop Kokedama untuk Pemula',
    date: '2025-10-05',
    displayDate: '5 Oktober 2025',
    time: '13:00 - 16:00 WIB',
    location: 'Taman Mini Indonesia Indah',
    organizer: 'Komunitas Seni Tanaman',
    description: 'Belajar seni membuat Kokedama, bola lumut dari Jepang, langsung dari ahlinya. Semua bahan disediakan, dan Anda bisa membawa pulang hasil karya Anda.',
    imageUrl: 'https://faktualnews.co/images/2024/08/pameran-anggrek.jpg',
    url: '#'
  },
  {
    id: 3,
    title: 'Bazar Tanaman Hias Urban',
    date: '2024-11-20',
    displayDate: '20 November 2024',
    time: '09:00 - 17:00 WIB',
    location: 'Plaza Senayan, Jakarta',
    organizer: 'Urban Jungle Community',
    description: 'Temukan berbagai jenis tanaman hias populer dan langka di bazar kami. Dapatkan harga spesial dan konsultasi gratis seputar perawatan tanaman.',
    imageUrl: 'https://faktualnews.co/images/2024/08/pameran-anggrek.jpg',
    url: '#'
  },
  {
    id: 4,
    title: 'Seminar Hidroponik Modern',
    date: '2024-08-10',
    displayDate: '10 Agustus 2024',
    time: '09:00 - 12:00 WIB',
    location: 'Universitas Gadjah Mada, Yogyakarta',
    organizer: 'Fakultas Pertanian UGM',
    description: 'Seminar yang membahas teknik-teknik terbaru dalam budidaya hidroponik skala rumahan maupun industri. Cocok untuk pemula dan praktisi.',
    imageUrl: 'https://faktualnews.co/images/2024/08/pameran-anggrek.jpg',
    url: '#'
  }
];
