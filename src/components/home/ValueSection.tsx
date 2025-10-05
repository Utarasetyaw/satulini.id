import type { FC } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const featureImages = {
  ai: "https://cdn-icons-png.flaticon.com/512/10644/10644640.png",
  blockchain: "https://png.pngtree.com/png-clipart/20230127/original/pngtree-blockchain-vector-icon-png-image_8932227.png",
};

export const ValueSection: FC = () => {
  const { t } = useLanguage();

  const featureData = [
    { label: t('feature1Label'), title: t('feature1Title'), description: t('feature1Description'), imageSrc: featureImages.ai, imagePosition: 'left' },
    { label: t('feature2Label'), title: t('feature2Title'), description: t('feature2Description'), imageSrc: featureImages.blockchain, imagePosition: 'right' },
  ];

  return (
    <div className="relative bg-white pt-24 pb-32 overflow-hidden">
      <div className="text-center mb-16">
        <p className="font-semibold leading-7 text-purple-600">{t('featureSectionTagline')}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">{t('featureSectionTitle')}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">{t('featureSectionSubtitle')}</p>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {featureData.map((feature, index) => (
          <div key={feature.label} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index !== featureData.length - 1 ? 'mb-32' : ''}`}> 
            <div className={`lg:w-1/2 text-center lg:text-left ${feature.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
              <p className="font-semibold leading-7 text-purple-600">{feature.label}</p>
              <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">{feature.title}</h3>
              <p className="mt-6 text-lg leading-8 text-gray-500">{feature.description}</p>
            </div>
            <div className={`lg:w-1/2 ${feature.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
              <img src={feature.imageSrc} alt={feature.title} className="w-full h-auto rounded-2xl shadow-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};