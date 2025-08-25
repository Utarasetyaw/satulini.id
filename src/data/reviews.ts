import type { ProductReview } from '../types';

// The 'type' property is added to each object
export const reviews: ProductReview[] = [
  {
    type: 'review',
    id: 1,
    productName: "Pupuk Organik Cair 'Subur Jaya'",
    rating: 5,
    summary: "Pupuk terbaik! Tanaman saya tumbuh lebih cepat dan daunnya lebih hijau berkilau setelah 2 minggu pemakaian.",
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&q=80",
  },
  {
    type: 'review',
    id: 2,
    productName: "Sekop Tangan Stainless Steel",
    rating: 4,
    summary: "Sangat kokoh dan nyaman digenggam. Hanya saja sedikit berat, tapi kualitasnya sepadan.",
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&q=80",
  },
  {
    type: 'review',
    id: 3,
    productName: "Pot Siram Otomatis",
    rating: 5,
    summary: "Solusi jenius untuk yang sering lupa menyiram. Tanaman tetap segar meski ditinggal beberapa hari.",
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&q=80",
  },
];