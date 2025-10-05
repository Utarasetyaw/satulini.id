import type { FC } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const companyLogos = [
  { 
    name: 'Microsoft', 
    src: 'https://d1n3oewcfgleny.cloudfront.net/assets/MS_Startups.png' 
  },
  { 
    name: 'Supabase', 
    src: 'https://docs.noodl.net/2.9/assets/images/thumb-482e9d6fff2db0af7ec052ddd85e66b0.png' 
  },
];

export const TrustedBySection: FC = () => {
  const { t } = useLanguage();
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">{t('trustedByTitle')}</h2>
        {/* DIUBAH: Menggunakan grid untuk layout responsif */}
        <div className="mx-auto mt-16 grid grid-cols-1 place-items-center gap-12 sm:grid-cols-2 sm:gap-x-20 lg:gap-x-24">
          {companyLogos.map((logo) => (
            <img 
              key={logo.name} 
              // DIUBAH: Ukuran logo dibuat responsif
              className="h-20 sm:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105" 
              src={logo.src} 
              alt={logo.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};