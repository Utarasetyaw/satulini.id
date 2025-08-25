import React from 'react';
// Tidak perlu import './SideAd.css' lagi

interface SideAdProps {
  position: 'left' | 'right';
}

const SideAd: React.FC<SideAdProps> = ({ position }) => {
  return (
    <div 
      className={`
        hidden 2xl:block absolute top-44 w-40 h-[600px] z-10
        ${position === 'left' ? 'left-5' : 'right-5'}
      `}
    >
      <div 
        className="w-full h-full bg-stone-200 border border-dashed border-gray-300 
                   flex items-center justify-center 
                   text-gray-500 font-bold rounded-md"
      >
        Space for Advertisement
      </div>
    </div>
  );
};

export default SideAd;