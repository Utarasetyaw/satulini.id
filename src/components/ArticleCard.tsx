import React from 'react';
// Tidak perlu import './ArticleCard.css' lagi

interface ArticleCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  category?: string;
  layout?: 'default' | 'horizontal'; // Style bisa 'default' (vertikal) atau 'horizontal'
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  title, 
  excerpt, 
  imageUrl, 
  category, 
  layout = 'default' 
}) => {
  // Menentukan class utama berdasarkan prop 'layout'
  const isHorizontal = layout === 'horizontal';

  return (
    // Styling kondisional:
    // - Default: flex-col (tumpukan vertikal)
    // - Horizontal: md:grid (grid 2 kolom di layar medium ke atas)
    <div 
      className={`
        bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group
        ${isHorizontal ? 'md:grid md:grid-cols-[200px_1fr] md:gap-6 items-center' : 'flex flex-col'}
      `}
    >
      <div className={isHorizontal ? 'w-full h-full' : 'h-52'}>
        <img 
          src={imageUrl} 
          alt={title} 
          className={`
            w-full h-full object-cover transition-transform duration-500
            ${isHorizontal ? 'md:rounded-lg' : 'group-hover:scale-105'}
          `}
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {category && (
          <div className="text-green-800 font-bold uppercase text-xs tracking-wider mb-2">
            {category}
          </div>
        )}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-4">
          {excerpt}
        </p>
        <a href="#" className="self-start mt-auto font-bold text-green-800 hover:underline">
          Baca Selengkapnya →
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;