import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[];
  }
}

interface InFeedAdProps {
  // We're no longer using the `ad` prop, but it might still be in a union type.
  // We'll keep it as a comment for clarity.
  // ad: Ad;
}

const InFeedAd: React.FC<InFeedAdProps> = () => {
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
    <div className="my-8 text-center">
      <ins
        ref={adRef} // Use the ref to ensure the element exists
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7008233253543982"
        data-ad-slot="1254649439" // Ganti dengan ID unit iklan In-Feed Anda
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default InFeedAd;