import React, { useState, Fragment } from 'react';
import type { FC } from 'react';
import { Transition } from '@headlessui/react';
import { useLanguage } from '../../context/LanguageContext';

// Tipe dan data statis bisa disimpan di sini atau di file terpisah
type ProductKey = 'business' | 'personal';

const staticData = {
  productImages: {
    businessDefault: "https://images.ctfassets.net/w8fc6tgspyjz/3FllRRqmlYB2Bdf3ASg3fT/14ff2e7789c12cfc0a55358c50aa5312/home-tabs-v3-projects-desktop.png",
    personalDefault: "https://images.ctfassets.net/w8fc6tgspyjz/ANJFM8HigJCMUwQxflBvU/226711f57db215ba057f50f7a9b68c37/home-tabs-v4-chat-desktop.png",
    featureEcommerce: "https://images.ctfassets.net/w8fc6tgspyjz/3FllRRqmlYB2Bdf3ASg3fT/14ff2e7789c12cfc0a55358c50aa5312/home-tabs-v3-projects-desktop.png",
    featureErp: "https://images.ctfassets.net/w8fc6tgspyjz/ANJFM8HigJCMUwQxflBvU/226711f57db215ba057f50f7a9b68c37/home-tabs-v4-chat-desktop.png",
  }
};

const useTheme = () => ({ isDark: false }); // Hook tema tiruan

// --- Komponen Kartu Fitur (dijadikan komponen internal untuk HeroSection) ---
const DynamicFeatureCard: FC<{
  productFeatures: any;
  isDark: boolean, 
  onTabChange: (key: ProductKey) => void,
  onFeatureClick: (imageUrl: string) => void
}> = ({ productFeatures, isDark, onTabChange, onFeatureClick }) => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<ProductKey>('business');
    const currentProduct = productFeatures[activeTab];

    const handleTabClick = (tabKey: ProductKey) => {
      setActiveTab(tabKey);
      onTabChange(tabKey);
    };

    const TabButton: FC<{tabKey: ProductKey, children: React.ReactNode}> = ({ tabKey, children }) => (
        <button
            onClick={() => handleTabClick(tabKey)}
            className={`w-full py-2.5 text-sm font-semibold leading-5 rounded-lg transition-colors focus:outline-none ${
                activeTab === tabKey ? 'bg-purple-600 text-white shadow' : 'text-gray-700 hover:bg-gray-100'
            }`}
        >
            {children}
        </button>
    );

    const MAX_FEATURES = 8;
    type Feature = { icon: string; label: string; imageSrc?: string };
    const paddedFeatures: (Feature | null)[] = [...currentProduct.features];
    while (paddedFeatures.length < MAX_FEATURES) {
      paddedFeatures.push(null);
    }

    const tabKeyMapping: Record<ProductKey, 'businessTab' | 'personalTab'> = {
      business: 'businessTab',
      personal: 'personalTab',
    };

    return (
        <div className={`rounded-2xl p-6 sm:p-8 bg-white/70 border-gray-200/50 border shadow-2xl backdrop-blur-xl`}>
            <div className={`flex p-1 space-x-1 rounded-xl mb-6 bg-gray-200/60`}>
                <TabButton tabKey="business">{t('businessTab')}</TabButton>
                <TabButton tabKey="personal">{t('personalTab')}</TabButton>
            </div>
            <Transition as={Fragment} show={true} key={activeTab} enter="transition-opacity duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                <div className="flex flex-col min-h-[420px]">
                     <div className="mb-6">
                        <h3 className={`text-xl font-semibold mb-2 text-gray-900`}>{currentProduct.title}</h3>
                        <p className={`text-sm text-gray-600 min-h-[3rem]`}>{currentProduct.description}</p>
                    </div>
                    <div className="flex-grow">
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
                        {paddedFeatures.map((item, index) => (
                           item ? (
                                <div key={item.label} onClick={() => item.imageSrc && onFeatureClick(item.imageSrc)} className={`flex flex-col items-center justify-center p-2 rounded-lg border text-center cursor-pointer transition-all duration-200 hover:scale-105 aspect-square bg-white/50 border-gray-200`}>
                                    <div className="text-2xl mb-1">{item.icon}</div>
                                    <div className={`text-[11px] font-medium leading-tight text-gray-700`}>{item.label}</div>
                                </div>
                           ) : <div key={`placeholder-${index}`} className="aspect-square"></div>
                        ))}
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 mt-8">
                        {t('getStartedButton')} {t(tabKeyMapping[activeTab])}
                    </button>
                </div>
            </Transition>
        </div>
    );
};


// --- Komponen Utama Hero Section ---
export const HeroSection: FC = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [activeImageTab, setActiveImageTab] = useState<ProductKey>('business');
  const [activeFeatureImage, setActiveFeatureImage] = useState<string | null>(null);

  const productFeatures = {
    business: {
      title: t('businessCardTitle'), description: t('businessCardDescription'), imageSrc: staticData.productImages.businessDefault,
      features: [
        { icon: '🛍️', label: t('businessFeature1'), imageSrc: staticData.productImages.featureEcommerce },
        { icon: '📦', label: t('businessFeature2'), imageSrc: staticData.productImages.featureErp },
        { icon: '🛒', label: t('businessFeature3') }, { icon: '📝', label: t('businessFeature4') },
        { icon: '📈', label: t('businessFeature5') }, { icon: '💬', label: t('businessFeature6') },
        { icon: '🔗', label: t('businessFeature7') },
      ],
    },
    personal: {
      title: t('personalCardTitle'), description: t('personalCardDescription'), imageSrc: staticData.productImages.personalDefault,
      features: [
        { icon: '🖼️', label: t('personalFeature1') }, { icon: '🤝', label: t('personalFeature2') },
        { icon: '💰', label: t('personalFeature3') }, { icon: '📢', label: t('personalFeature4') },
        { icon: '📊', label: t('personalFeature5') }, { icon: '⛓️', label: t('personalFeature6') },
        { icon: '⚖️', label: t('personalFeature7') },
      ],
    },
  };

  const handleTabChange = (tabKey: ProductKey) => {
    setActiveImageTab(tabKey);
    setActiveFeatureImage(null);
  };
  
  const handleFeatureClick = (imageUrl: string) => setActiveFeatureImage(imageUrl);
  
  const currentImageSrc = activeFeatureImage || productFeatures[activeImageTab].imageSrc;

  return (
    <section className="pt-10 pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 mt-4 text-gray-900">{t('heroTitle')}</h1>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xl md:text-2xl text-gray-700">{t('heroSubtitle')}</p>
          </div>
        </div>
      </div>
      <div className="mt-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="relative lg:w-[75%] lg:-ml-16 z-0">
            <Transition as={Fragment} show={true} key={currentImageSrc} enter="transition-opacity duration-500 ease-in-out" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-300 ease-in-out absolute inset-0" leaveFrom="opacity-100" leaveTo="opacity-0">
              <img src={currentImageSrc} alt="App dashboard feature" className="w-full rounded-2xl shadow-2xl" />
            </Transition>
            <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-r from-transparent via-transparent to-white"></div>
          </div>
          <div className="mt-8 lg:mt-0 lg:absolute lg:top-1/2 lg:right-0 lg:transform lg:-translate-y-1/2 lg:w-full lg:max-w-md xl:max-w-lg z-10">
            <DynamicFeatureCard productFeatures={productFeatures} isDark={isDark} onTabChange={handleTabChange} onFeatureClick={handleFeatureClick} />
          </div>
        </div>
      </div>
    </section>
  );
};