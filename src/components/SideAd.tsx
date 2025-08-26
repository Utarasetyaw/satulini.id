import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[];
  }
}

interface SideAdProps {
  position: 'left' | 'right';
}

const SideAd: React.FC<SideAdProps> = ({ position }) => {
  const adRef = useRef(null);

  useEffect(() => {
    if (adRef.current) {
      try {
        if (typeof window !== 'undefined' && window.adsbygoogle) {
          (window.adsbygoogle as any[]).push({});
        }
      } catch (e) {
        console.error("AdSense script not loaded:", e);
      }
    }
  }, []);

  return (
    <div
      className={`
        hidden 2xl:block absolute top-44 z-10 w-40 h-[600px]
        ${position === 'left' ? 'left-5' : 'right-5'}
      `}
    >
      <ins
        ref={adRef} // Use the ref to ensure the element exists
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '100%' }}
        data-ad-client="ca-pub-7008233253543982"
        data-ad-slot="1254649439" // Ganti dengan ID unit iklan Sidebar Anda
      ></ins>
    </div>
  );
};

export default SideAd;