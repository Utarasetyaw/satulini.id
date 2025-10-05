import React, { useState, Fragment } from 'react';
import type { FC } from 'react';
import { Transition } from '@headlessui/react';
// Path import disesuaikan dengan struktur folder Anda
import { useLanguage } from '../../context/LanguageContext';
import { EcommerceBuilderPreview } from './hero/EcommerceBuilderPreview';
import { AdminManagementPreview } from './hero/AdminManagementPreview';
import { PosPreview } from './hero/PosPreview';
import { KolPreview } from './hero/KolPreview';
import { FinancePreview } from './hero/FinancePreview';
import { LiveChatPreview } from './hero/LiveChatPreview';
import { AuditPreview } from './hero/AuditPreview';
import { SeoPreview } from './hero/SeoPreview';
import { DashboardPreview } from './hero/DashboardPreview';
import { PersonalDashboardPreview } from './hero/PersonalDashboardPreview';
import { PortfolioBuilderPreview } from './hero/PortfolioBuilderPreview';
import { AffiliatePreview } from './hero/AffiliatePreview';
import { ProductServicesPreview } from './hero/ProductServicesPreview';
import { MarketingPreview } from './hero/MarketingPreview';
import { CompanyTrackingPreview } from './hero/CompanyTrackingPreview';
import { FundingPreview } from './hero/FundingPreview';
import { MergerPreview } from './hero/MergerPreview';
import { SocialMediaPreview } from './hero/SocialMediaPreview';

// Tipe dan data statis
type ProductKey = 'business' | 'personal';
type PreviewType = 'builder' | 'admin' | 'pos' | 'kol' | 'finance' | 'chat' | 'audit' | 'seo' | 'portfolio' | 'affiliate' | 'products' | 'marketing' | 'tracking' | 'funding' | 'merger' | 'social' | null;

// Custom Hook untuk memisahkan semua logika dari komponen utama
const useHeroSectionLogic = () => {
    const { t } = useLanguage();
    const [activeImageTab, setActiveImageTab] = useState<ProductKey>('business');
    const [activePreview, setActivePreview] = useState<PreviewType>(null);

    const productFeatures = {
        business: {
          title: t('businessCardTitle'),
          description: t('businessCardDescription'),
          features: [
            { icon: '🛍️', label: t('businessFeature1'), preview: 'builder' as const },
            { icon: '📦', label: t('businessFeature2'), preview: 'admin' as const },
            { icon: '🛒', label: t('businessFeature3'), preview: 'pos' as const },
            { icon: '📝', label: t('businessFeature4'), preview: 'kol' as const },
            { icon: '📈', label: t('businessFeature5'), preview: 'finance' as const },
            { icon: '💬', label: t('businessFeature6'), preview: 'chat' as const },
            { icon: '🔗', label: t('businessFeature7'), preview: 'audit' as const },
            { icon: '🔎', label: t('businessFeature8'), preview: 'seo' as const },
          ],
        },
        personal: {
          title: t('personalCardTitle'),
          description: t('personalCardDescription'),
          features: [
            { icon: '🖼️', label: t('personalFeature1'), preview: 'portfolio' as const },
            { icon: '🤝', label: t('personalFeature2'), preview: 'affiliate' as const },
            { icon: '💰', label: t('personalFeature3'), preview: 'products' as const },
            { icon: '📢', label: t('personalFeature4'), preview: 'marketing' as const },
            { icon: '📊', label: t('personalFeature5'), preview: 'tracking' as const },
            { icon: '⛓️', label: t('personalFeature6'), preview: 'funding' as const },
            { icon: '⚖️', label: t('personalFeature7'), preview: 'merger' as const },
            { icon: '📱', label: t('personalFeature8'), preview: 'social' as const },
          ],
        },
    };

    const handleTabChange = (tabKey: ProductKey) => {
        setActiveImageTab(tabKey);
        setActivePreview(null);
    };
  
    const handleFeatureClick = (feature: any) => {
        if (feature.preview) {
            setActivePreview(feature.preview);
        }
    };

    return {
        t,
        productFeatures,
        handleTabChange,
        handleFeatureClick,
        activePreview,
        activeImageTab,
    };
};


// Komponen Kartu Fitur (DynamicFeatureCard)
const DynamicFeatureCard: FC<{
  productFeatures: any;
  onTabChange: (key: ProductKey) => void;
  onFeatureClick: (feature: any) => void;
}> = ({ productFeatures, onTabChange, onFeatureClick }) => {
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
    type Feature = { icon: string; label: string; preview?: PreviewType };
    const paddedFeatures: (Feature | null)[] = [...(currentProduct.features || [])];
    while (paddedFeatures.length < MAX_FEATURES) {
      paddedFeatures.push(null);
    }

    return (
        <div className="rounded-2xl p-6 sm:p-8 bg-white/70 border-gray-200/50 border shadow-2xl backdrop-blur-xl">
            <div className="flex p-1 space-x-1 rounded-xl mb-6 bg-gray-200/60">
                <TabButton tabKey="business">{t('businessTab')}</TabButton>
                <TabButton tabKey="personal">{t('personalTab')}</TabButton>
            </div>
            <Transition as={Fragment} show={true} key={activeTab} enter="transition-opacity duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                <div className="flex flex-col min-h-[420px]">
                     <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{currentProduct.title}</h3>
                        <p className="text-sm text-gray-600 min-h-[3rem]">{currentProduct.description}</p>
                    </div>
                    <div className="flex-grow">
                      <div className="grid grid-cols-4 gap-3 sm:gap-4">
                        {paddedFeatures.map((item, index) => (
                           item ? (
                                <div key={item.label} onClick={() => onFeatureClick(item)} className="flex flex-col items-center justify-center p-2 rounded-lg border text-center cursor-pointer transition-all duration-200 hover:scale-105 aspect-square bg-white/50 border-gray-200">
                                    <div className="text-2xl mb-1">{item.icon}</div>
                                    <div className="text-[11px] font-medium leading-tight text-gray-700">{item.label}</div>
                                </div>
                           ) : <div key={`placeholder-${index}`} className="aspect-square"></div>
                        ))}
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 mt-8">
                        {t('getStartedButton')} {t(activeTab === 'business' ? 'businessTab' : 'personalTab')}
                    </button>
                </div>
            </Transition>
        </div>
    );
};


// --- Komponen Utama Hero Section ---
export const HeroSection: FC = () => {
  const { t, productFeatures, handleTabChange, handleFeatureClick, activePreview, activeImageTab } = useHeroSectionLogic();

  const renderActivePreview = () => {
    if (activePreview) {
        switch (activePreview) {
            case 'builder':   return <EcommerceBuilderPreview className="flex-grow" />;
            case 'admin':     return <AdminManagementPreview className="flex-grow" />;
            case 'pos':       return <PosPreview className="flex-grow" />;
            case 'kol':       return <KolPreview className="flex-grow" />;
            case 'finance':   return <FinancePreview className="flex-grow" />;
            case 'chat':      return <LiveChatPreview className="flex-grow" />;
            case 'audit':     return <AuditPreview className="flex-grow" />;
            case 'seo':       return <SeoPreview className="flex-grow" />;
            case 'portfolio': return <PortfolioBuilderPreview className="flex-grow" />;
            case 'affiliate': return <AffiliatePreview className="flex-grow" />;
            case 'products':  return <ProductServicesPreview className="flex-grow" />;
            case 'marketing': return <MarketingPreview className="flex-grow" />;
            case 'tracking':  return <CompanyTrackingPreview className="flex-grow" />;
            case 'funding':   return <FundingPreview className="flex-grow" />;
            case 'merger':    return <MergerPreview className="flex-grow" />;
            case 'social':    return <SocialMediaPreview className="flex-grow" />;
            default:          return null;
        }
    }

    if (activeImageTab === 'personal') {
        return <PersonalDashboardPreview className="flex-grow" />;
    }

    return <DashboardPreview className="flex-grow" />;
  };

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
          {/* PERBAIKAN DI SINI:
            Logika diubah menjadi: Terapkan 'lg:-ml-16' HANYA jika 'activePreview' bernilai null (saat dasbor default ditampilkan).
          */}
          <div className={`hidden lg:flex relative lg:w-[70%] xl:w-[75%] z-0 md:min-h-[640px] lg:min-h-[720px] flex-col ${activePreview === null ? 'lg:-ml-16' : ''}`}>
            {renderActivePreview()}
            <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-r from-transparent via-transparent to-white"></div>
          </div>
          
          <div className="mt-8 lg:mt-0 lg:absolute lg:top-1/2 lg:right-0 lg:transform lg:-translate-y-1/2 lg:w-full lg:max-w-md xl:max-w-lg z-10">
            <DynamicFeatureCard
              productFeatures={productFeatures}
              onTabChange={handleTabChange}
              onFeatureClick={handleFeatureClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};