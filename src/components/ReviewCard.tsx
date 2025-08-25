import React from 'react';
import type { ProductReview } from '../types';
// Tidak perlu import './ReviewCard.css' lagi

// Fungsi helper untuk menampilkan bintang, kini juga menggunakan Tailwind
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  return <div className="text-amber-500 text-xl mb-4">{stars}</div>;
};

interface ReviewCardProps {
  review: ProductReview;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col
                   transition-all duration-300 ease-in-out 
                   hover:shadow-xl hover:-translate-y-1">
      
      <img 
        src={review.imageUrl} 
        alt={review.productName} 
        className="w-full h-48 object-cover" 
      />
      
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-xl font-bold text-gray-900 mb-2">
          {review.productName}
        </h4>
        
        <StarRating rating={review.rating} />
        
        <p className="text-gray-600 italic">
          "{review.summary}"
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;