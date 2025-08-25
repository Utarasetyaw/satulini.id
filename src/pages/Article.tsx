import React, { useState, useMemo } from 'react';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';

// --- Komponen Utama Halaman Artikel ---
const Article: React.FC = () => {
  // 1. State untuk menyimpan kategori yang sedang dipilih
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 2. Ambil semua kategori unik dari data artikel secara dinamis
  const categories = useMemo(() => {
    const allCategories = articles.map(article => article.category);
    return ['All', ...Array.from(new Set(allCategories))];
  }, []);

  // 3. Filter artikel berdasarkan kategori yang dipilih
  const filteredArticles = useMemo(() => {
    // Selalu kecualikan artikel yang 'isFeatured' karena sudah ada di homepage
    const baseArticles = articles.filter(article => !article.isFeatured);
    
    if (selectedCategory === 'All') {
      return baseArticles;
    }
    return baseArticles.filter(article => article.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header Halaman */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-green-800 mb-4">
            Semua Artikel
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan panduan, tips, dan inspirasi untuk perjalanan berkebun Anda. Pilih kategori di bawah untuk memulai.
          </p>
        </div>

        {/* Tombol Filter Kategori */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300
                ${selectedCategory === category
                  ? 'bg-green-800 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-green-100 border border-gray-300'
                }`
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Artikel */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <ArticleCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                imageUrl={article.imageUrl}
                category={article.category} // Kita bisa teruskan kategori ke card
                layout="default" // Gunakan layout default (vertikal)
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-16">
            <h3 className="text-2xl font-semibold mb-2">Oops!</h3>
            <p>Tidak ada artikel yang cocok dengan kategori "{selectedCategory}".</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;