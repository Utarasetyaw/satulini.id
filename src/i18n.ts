import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Data terjemahan lengkap untuk seluruh aplikasi
const resources = {
  en: {
    translation: {
      // Navbar & General
      "brand": "Plant Portal",
      "home": "Home",
      "plants": "Plants",
      "articles": "Articles",
      "events": "Events",
      "faq": "FAQ",
      "about": "About Us",
      "language": "English",

      // Footer
      "footer": {
        "description": "The most complete source of information about the world of ornamental plants, from care to urban jungle decoration inspiration.",
        "explore": "Explore",
        "gallery": "Plant Gallery",
        "support": "Support",
        "contact": "Contact Us",
        "privacy": "Privacy Policy",
        "newsletterTitle": "Subscribe to Newsletter",
        "newsletterDescription": "Get the latest tips and news delivered to your inbox.",
        "emailPlaceholder": "Your Email",
        "subscribeButton": "Subscribe",
        "copyright": "All Rights Reserved."
      },

      // About Page
      "aboutPage": {
        "title": "About Us",
        "heading": "Spreading the Love for Plants",
        "subheading": "Plant Portal was born from a simple idea: to make the world of plant care more accessible, enjoyable, and a part of the modern lifestyle.",
        "valuesTitle": "Our Values",
        "value1Title": "Education",
        "value1Text": "We are committed to providing accurate, tested, and easy-to-understand information.",
        "value2Title": "Community",
        "value2Text": "Building a positive space for plant lovers to share and learn together.",
        "value3Title": "Inspiration",
        "value3Text": "Presenting creative ideas to integrate the beauty of plants into daily life.",
        "faqTitle": "Frequently Asked Questions",
        "faqs": [
          { "q": "How do I know when to water my plant?", "a": "The best way is to check the soil moisture. Stick your finger about an inch into the soil. If it feels dry, it's time to water. Most houseplants prefer their soil to dry out slightly between waterings." },
          { "q": "What kind of light does my plant need?", "a": "It varies by plant. 'Bright, indirect light' is a common requirement, meaning a spot near a window but not in direct sun. We recommend checking the specific guide for your plant type in our 'Plants' section." },
          { "q": "Should I fertilize my houseplants?", "a": "Yes, most houseplants benefit from fertilizer during their growing season (spring and summer). A balanced, water-soluble fertilizer applied every 2-4 weeks is a good starting point." }
        ],
        "contactTitle": "Get in Touch",
        "contactText": "Have questions or suggestions? We'd love to hear from you! Reach out to the appropriate department below.",
        "contactGeneral": "General Inquiries",
        "contactSupport": "Support & Help",
        "contactPartnerships": "Partnerships",
        "privacyTitle": "Privacy Policy",
        "privacyText": "Your privacy is important to us. At Plant Portal, we are committed to protecting your personal information. We only collect data necessary for the functionality of our newsletter subscription and do not share your information with third parties. All data is handled securely and in accordance with applicable regulations."
      },
      
      // Event Page
      "eventPage": {
        "title": "Events & Workshops",
        "description": "Join our exciting events, from exhibitions to workshops, to deepen your knowledge about plants.",
        "noEvents": "No events scheduled yet. Please check back later!",
        "featuredBadge": "UPCOMING EVENT",
        "registerButton": "Register Now",
        "otherEvents": "Other Upcoming Events",
        "pastEvents": "Past Events",
        "detailsButton": "View Details",
        "statusFinished": "Finished",
        "detail": {
          "backLink": "Back to All Events",
          "detailsTitle": "Event Details",
          "descriptionTitle": "About The Event",
          "dateLabel": "Date",
          "timeLabel": "Time",
          "locationLabel": "Location",
          "organizerLabel": "Organizer"
        }
      },

      "articlePage": {
        "title": "All Articles",
        "description": "Find guides, tips, and inspiration for your gardening journey. Choose a category below to get started.",
        "allCategory": "All",
        "noArticles": "Oops!",
        "noArticlesText": "There are no articles matching the \"{category}\" category.",
        "detail": {
          "backLink": "Back to All Articles",
          "by": "By",
          "publishedOn": "Published on",
          "relatedArticles": "Related Articles"
        }
      },
      "plantPage": {
        "title": "Plant Gallery",
        "description": "Explore various popular plants to beautify your home. Use the search to find a specific plant.",
        "searchPlaceholder": "Search plant name (e.g., Monstera)...",
        "notFound": "Oops! No plant named \"{searchTerm}\" was found.",
        "detail": {
          "backLink": "Back to Gallery",
          "careLevel": "Care Level",
          "size": "Size",
          "family": "Family",
          "description": "Description",
          "whereToBuy": "Where to Buy",
          "visitStore": "Visit Store"
        }
      }
    }
  },
  id: {
    translation: {
      // Navbar & General
      "brand": "Portal Tanaman",
      "home": "Beranda",
      "plants": "Tanaman",
      "articles": "Artikel",
      "events": "Acara",
      "faq": "FAQ",
      "about": "Tentang Kami",
      "language": "Indonesia",

      // Footer
      "footer": {
        "description": "Sumber informasi terlengkap seputar dunia tanaman hias, dari perawatan hingga inspirasi dekorasi urban jungle.",
        "explore": "Jelajahi",
        "gallery": "Galeri Tanaman",
        "support": "Dukungan",
        "contact": "Kontak Kami",
        "privacy": "Kebijakan Privasi",
        "newsletterTitle": "Langganan Newsletter",
        "newsletterDescription": "Dapatkan tips dan berita terbaru langsung ke inbox Anda.",
        "emailPlaceholder": "Email Anda",
        "subscribeButton": "Langganan",
        "copyright": "Hak Cipta Dilindungi."
      },

      // About Page
      "aboutPage": {
        "title": "Tentang Kami",
        "heading": "Menyebarkan Kecintaan Pada Tanaman",
        "subheading": "Portal Tanaman lahir dari sebuah ide sederhana: membuat dunia merawat tanaman lebih mudah diakses, menyenangkan, dan menjadi bagian dari gaya hidup modern.",
        "valuesTitle": "Nilai-Nilai Kami",
        "value1Title": "Edukasi",
        "value1Text": "Kami berkomitmen untuk menyediakan informasi yang akurat, teruji, dan mudah dipahami.",
        "value2Title": "Komunitas",
        "value2Text": "Membangun ruang yang positif bagi para pecinta tanaman untuk berbagi dan belajar bersama.",
        "value3Title": "Inspirasi",
        "value3Text": "Menyajikan ide-ide kreatif untuk mengintegrasikan keindahan tanaman dalam kehidupan sehari-hari.",
        "faqTitle": "Pertanyaan Umum (FAQ)",
        "faqs": [
          { "q": "Bagaimana saya tahu kapan harus menyiram tanaman?", "a": "Cara terbaik adalah dengan memeriksa kelembapan tanah. Masukkan jari Anda sekitar 2-3 cm ke dalam tanah. Jika terasa kering, saatnya menyiram. Sebagian besar tanaman hias lebih suka tanahnya sedikit mengering di antara penyiraman." },
          { "q": "Jenis cahaya apa yang dibutuhkan tanaman saya?", "a": "Setiap tanaman berbeda. 'Cahaya terang tidak langsung' adalah kebutuhan umum, yang berarti tempat di dekat jendela tetapi tidak terkena sinar matahari langsung. Kami sarankan untuk memeriksa panduan spesifik untuk jenis tanaman Anda di bagian 'Tanaman'." },
          { "q": "Apakah saya perlu memberi pupuk pada tanaman hias saya?", "a": "Ya, sebagian besar tanaman hias mendapat manfaat dari pupuk selama musim pertumbuhannya (musim semi dan panas). Pupuk seimbang yang larut dalam air yang diberikan setiap 2-4 minggu adalah awal yang baik." }
        ],
        "contactTitle": "Hubungi Kami",
        "contactText": "Punya pertanyaan atau saran? Kami ingin sekali mendengarnya dari Anda! Hubungi departemen yang sesuai di bawah ini.",
        "contactGeneral": "Pertanyaan Umum",
        "contactSupport": "Dukungan & Bantuan",
        "contactPartnerships": "Kemitraan",
        "privacyTitle": "Kebijakan Privasi",
        "privacyText": "Privasi Anda penting bagi kami. Di Portal Tanaman, kami berkomitmen untuk melindungi informasi pribadi Anda. Kami hanya mengumpulkan data yang diperlukan untuk fungsionalitas langganan buletin kami dan tidak membagikan informasi Anda dengan pihak ketiga. Semua data ditangani dengan aman dan sesuai dengan peraturan yang berlaku."
      },

      // Event Page
      "eventPage": {
        "title": "Event & Workshop",
        "description": "Ikuti berbagai acara menarik kami, mulai dari pameran hingga workshop untuk memperdalam pengetahuan Anda tentang tanaman.",
        "noEvents": "Belum ada event yang dijadwakan. Silakan cek kembali nanti!",
        "featuredBadge": "EVENT TERDEKAT",
        "registerButton": "Daftar Sekarang",
        "otherEvents": "Event Mendatang Lainnya",
        "pastEvents": "Event Lampau",
        "detailsButton": "Lihat Detail",
        "statusFinished": "Selesai",
        "detail": {
          "backLink": "Kembali ke Semua Event",
          "detailsTitle": "Detail Acara",
          "descriptionTitle": "Tentang Acara",
          "dateLabel": "Tanggal",
          "timeLabel": "Waktu",
          "locationLabel": "Lokasi",
          "organizerLabel": "Penyelenggara"
        }
      },
      "articlePage": {
        "title": "Semua Artikel",
        "description": "Temukan panduan, tips, dan inspirasi untuk perjalanan berkebun Anda. Pilih kategori di bawah untuk memulai.",
        "allCategory": "Semua",
        "noArticles": "Oops!",
        "noArticlesText": "Tidak ada artikel yang cocok dengan kategori \"{category}\".",
        "detail": {
          "backLink": "Kembali ke Semua Artikel",
          "by": "Oleh",
          "publishedOn": "Diterbitkan pada",
          "relatedArticles": "Artikel Terkait"
        }
      },
      "plantPage": {
        "title": "Galeri Tanaman",
        "description": "Jelajahi berbagai jenis tanaman populer untuk mempercantik rumah Anda. Gunakan pencarian untuk menemukan tanaman spesifik.",
        "searchPlaceholder": "Cari nama tanaman (e.g., Monstera)...",
        "notFound": "Oops! Tanaman dengan nama \"{searchTerm}\" tidak ditemukan.",
        "detail": {
          "backLink": "Kembali ke Galeri",
          "careLevel": "Tingkat Perawatan",
          "size": "Ukuran",
          "family": "Famili",
          "description": "Deskripsi",
          "whereToBuy": "Tempat Membeli",
          "visitStore": "Kunjungi Toko"
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "id", // Bahasa default
    fallbackLng: "en", // Bahasa cadangan jika terjemahan tidak ditemukan
    interpolation: {
      escapeValue: false // React sudah aman dari XSS
    }
  });

export default i18n;
