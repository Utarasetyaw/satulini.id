import React from 'react';
import type { Ad } from '../types';

interface InFeedAdProps {
  ad: Ad;
}

const InFeedAd: React.FC<InFeedAdProps> = ({ ad }) => {
  return (
    <a 
      href={ad.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block w-full rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-[1.02] duration-300"
    >
      <img 
        src={ad.imageUrl} 
        alt="Advertisement" 
        className="w-full h-auto object-cover" 
      />
    </a>
  );
};

export default InFeedAd;