import type { FC } from 'react';
import { Link } from 'react-router-dom';
import type { Article } from '../types'; // Menggunakan tipe data terpusat

interface ArticleCardProps {
  article: Article;
  layout?: 'default' | 'horizontal';
}

const ArticleCard: FC<ArticleCardProps> = ({ article, layout = 'default' }) => {
  const { id, title, excerpt, imageUrl, category } = article;

  if (layout === 'horizontal') {
    return (
      <Link to={`/articles/${id}`} className="block bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl md:flex">
        <div className="md:w-1/3">
          <img src={imageUrl} alt={title} className="w-full h-56 md:h-full object-cover" />
        </div>
        <div className="p-6 md:w-2/3">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">{category}</span>
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{title}</h3>
          <p className="text-gray-600 text-sm">{excerpt}</p>
        </div>
      </Link>
    );
  }

  // Layout default (vertikal)
  return (
    <Link to={`/articles/${id}`} className="block bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">{category}</span>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm">{excerpt}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
