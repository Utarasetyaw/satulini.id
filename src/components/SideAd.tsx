import React from 'react';
import type { Ad } from '../types';

interface SideAdProps {
  position: 'left' | 'right';
  ad: Ad;
}

const SideAd: React.FC<SideAdProps> = ({ position, ad }) => {
  return (
    <div
      className={`
        hidden 2xl:block absolute top-44 z-10
        ${position === 'left' ? 'left-5' : 'right-5'}
      `}
    >
      <a
        href={ad.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-md overflow-hidden"
      >
        <img
          src={ad.imageUrl}
          alt="Advertisement"
          className="block w-full h-auto object-cover"
        />
      </a>
    </div>
  );
};

export default SideAd;