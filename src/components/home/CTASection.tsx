import type { FC } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const CTASection: FC = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-6 sm:py-24 lg:px-8">
        <div className="relative isolate overflow-hidden bg-purple-600 shadow-2xl rounded-3xl px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('ctaTitle')}</h2>
            <p className="mt-6 text-lg leading-8 text-purple-100">{t('ctaSubtitle')}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg mb-4">{t('ctaButton')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};