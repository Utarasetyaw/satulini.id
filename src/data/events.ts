import type { Event } from '../types';

// Helper function to parse Indonesian date strings into a JavaScript Date object
const parseDate = (dateStr: string): Date | null => {
  const monthMap: { [key: string]: number } = {
    'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'jun': 5,
    'jul': 6, 'agu': 7, 'sep': 8, 'okt': 9, 'nov': 10, 'des': 11,
    'januari': 0, 'februari': 1, 'maret': 2, 'april': 3, 'mei': 4, 'juni': 5,
    'juli': 6, 'agustus': 7, 'september': 8, 'oktober': 9, 'november': 10, 'desember': 11
  };

  const parts = dateStr.toLowerCase().replace(/,/g, '').split(/[\s-]+/);
  if (parts.length < 2) return null;

  let dayPart = parts[0];
  let monthPart = parts[1];
  let yearPart = '2025';

  // Handle date ranges by taking the end date
  const dayRangeMatch = dateStr.match(/\d+\s*-\s*(\d+)/);
  if (dayRangeMatch) {
    dayPart = dayRangeMatch[1];
    monthPart = parts[parts.length - 2];
  }

  let day = parseInt(dayPart);
  let month = monthMap[monthPart.toLowerCase()];
  let year = parseInt(yearPart);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    // Fallback for single-day events or if the parser fails
    day = parseInt(parts[0]);
    month = monthMap[parts[1].toLowerCase()];
  }
  
  return new Date(year, month, day);
};

// Original data
const rawEvents: Event[] = [
  {
    type: 'event',
    id: 1,
    title: "FLOII Expo 2025",
    date: "23-26 Oktober 2025",
    location: "Hall 5, Ice BSD City",
    imageUrl: "https://img.inews.id/media/600/files/networks/2023/10/04/b04b4_floii-expo-2023.jpeg",
    url: "https://floii-expo.com/"
  },
  {
    type: 'event',
    id: 2,
    title: "Workshop Kokedama untuk Pemula",
    date: "12 Okt 2025",
    location: "Komunitas Taman Kota",
    imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500&q=80",
    url: "https://tse3.mm.bing.net/th/id/OIP.pJiQOon88cqMfxqRZNQjDgHaE8?cb=thfc1&w=1050&h=700&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    type: 'event',
    id: 3,
    title: "Bazaar Sukulen & Kaktus",
    date: "02 Nov 2025",
    location: "Mall Taman Anggrek",
    imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500&q=80",
    url: "https://www.example.com/bazaar-sukulen"
  },
  {
    type: 'event',
    id: 4,
    title: "Landscape Istanbul Fair (LIF)",
    date: "8-11 Oktober 2025",
    location: "Istanbul, Turki",
    imageUrl: "https://aiph.org/wp-content/uploads/2023/10/landscape_istanbul_fair-1050x700.png",
    url: "https://www.peyzajistanbulfuari.com/"
  },
  {
    type: 'event',
    id: 5,
    title: "Pameran Flora dan Fauna (Flona)",
    date: "1 Agustus - 8 September 2025",
    location: "Taman Lapangan Banteng, Jakarta",
    imageUrl: "https://tse3.mm.bing.net/th/id/OIP.1_L_m0Yj2M6M2f5b-w8f_wHaFj?w=225&h=180&c=7&r=0&o=5&pid=1.7",
    url: "https://disparekraf.jakarta.go.id/agenda/detail/pameran-flora-dan-fauna-flona-jakarta"
  },
  {
    type: 'event',
    id: 6,
    title: "Hong Kong Flower Show",
    date: "14-23 Maret 2025",
    location: "Hong Kong",
    imageUrl: "https://tse3.mm.bing.net/th/id/OIP.9Yv6M7T6k1g0H8sQ8hV70wHaE8?w=260&h=180&c=7&r=0&o=5&pid=1.7",
    url: "https://www.hk-flower-show.hk/"
  },
  {
    type: 'event',
    id: 7,
    title: "Melbourne International Flower & Garden Show",
    date: "26-30 Maret 2025",
    location: "Melbourne, Australia",
    imageUrl: "https://tse3.mm.bing.net/th/id/OIP.f5N_i9qR7-z5w5j1g7M35wHaE8?w=260&h=180&c=7&r=0&o=5&pid=1.7",
    url: "https://melbflowershow.com.au/"
  },
  {
    type: 'event',
    id: 8,
    title: "Harrogate Spring Flower Show",
    date: "24-27 April 2025",
    location: "Yorkshire, Inggris",
    imageUrl: "https://tse3.mm.bing.net/th/id/OIP.1_h_W_p_F4f_Y8y8h5k_QHaE7?w=260&h=180&c=7&r=0&o=5&pid=1.7",
    url: "https://www.flowershow.org.uk/"
  },
  {
    type: 'event',
    id: 9,
    title: "The 12th International Flora Malesiana Symposium",
    date: "21-26 Juli 2025",
    location: "Manokwari, Papua Barat, Indonesia",
    imageUrl: "https://tse3.mm.bing.net/th/id/OIP.V2-uV9_7jF-o-z7x2x7D_QHaE7?w=260&h=180&c=7&r=0&o=5&pid=1.7",
    url: "https://floramalesiana.org/"
  },
  {
    type: 'event',
    id: 10,
    title: "International Conference on Molecular Plant Sciences (ICMPS2025)",
    date: "8-12 Agustus 2025",
    location: "Guiyang, Tiongkok",
    imageUrl: "https://tse3.mm.bing.net/th/id/OIP.Q_w_Y_s_d_k_M_y_Q_q_Q_wHaE8?w=260&h=180&c=7&r=0&o=5&pid=1.7",
    url: "http://www.icmps2025.com/"
  },
  {
    type: 'event',
    id: 11,
    title: "The 1st International Horticulture Symposium (IHS)",
    date: "26-29 Agustus 2025",
    location: "Universitas Brawijaya, Indonesia",
    imageUrl: "https://tse3.mm.bing.net/th/id/OIP.7Y_z_y_D_b_k_r_w_g_w_c_QHaE8?w=260&h=180&c=7&r=0&o=5&pid=1.7",
    url: "https://ihs.fp.ub.ac.id/"
  }
];

// Get today's date at the beginning of the day for comparison
const today = new Date();
today.setHours(0, 0, 0, 0);

// Filter out events that have already passed based on their end date
const upcomingEvents = rawEvents.filter(event => {
  const endDate = parseDate(event.date);
  return endDate && endDate.getTime() >= today.getTime();
});

// Sort the filtered events by date in ascending order
export const events: Event[] = upcomingEvents.sort((a, b) => {
  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);

  if (!dateA) return 1;
  if (!dateB) return -1;

  return dateA.getTime() - dateB.getTime();
});