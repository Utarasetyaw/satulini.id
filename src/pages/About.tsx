import React, { Fragment } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Disclosure, Transition } from '@headlessui/react';
import { BookOpen, Users, Lightbulb, ChevronUp, Mail, Phone } from 'lucide-react';

// --- Komponen untuk Kartu Nilai ---
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const ValueCard: FC<ValueCardProps> = ({ icon, title, text }) => (
  <div className="p-6 text-center">
    <div className="flex justify-center items-center mb-4">
      <div className="bg-green-100 p-4 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{text}</p>
  </div>
);

// --- Komponen Utama Halaman About ---
const About: FC = () => {
  const { t } = useTranslation();
  // Mengambil array of objects untuk FAQ, pastikan i18n.ts memiliki struktur ini
  const faqs = t('aboutPage.faqs', { returnObjects: true }) as { q: string, a: string }[];

  return (
    <div className="bg-gray-50">

      {/* --- Hero Section --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h1 className="text-green-800 text-sm font-bold uppercase tracking-widest">{t('aboutPage.title')}</h1>
        <p className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
          {t('aboutPage.heading')}
        </p>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          {t('aboutPage.subheading')}
        </p>
      </div>
      
      {/* --- Our Values Section --- */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    {t('aboutPage.valuesTitle')}
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ValueCard icon={<BookOpen className="text-green-800" size={28} />} title={t('aboutPage.value1Title')} text={t('aboutPage.value1Text')} />
                <ValueCard icon={<Users className="text-green-800" size={28} />} title={t('aboutPage.value2Title')} text={t('aboutPage.value2Text')} />
                <ValueCard icon={<Lightbulb className="text-green-800" size={28} />} title={t('aboutPage.value3Title')} text={t('aboutPage.value3Text')} />
            </div>
        </div>
      </div>

      {/* --- FAQ Section with Accordion --- */}
      <div className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('aboutPage.faqTitle')}
          </h2>
          <div className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure key={index} as="div" className="bg-white p-4 rounded-lg shadow-sm">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full text-left text-lg font-medium text-green-900">
                      <span>{faq.q}</span>
                      <ChevronUp className={`${ open ? 'transform rotate-180' : '' } w-5 h-5 text-green-700 transition-transform`} />
                    </Disclosure.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-2"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-2"
                    >
                      <Disclosure.Panel className="pt-4 pb-2 text-base text-gray-600 leading-relaxed">
                        {faq.a}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>

      {/* --- Contact Section --- */}
      <div className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('aboutPage.contactTitle')}</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">{t('aboutPage.contactText')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800">{t('aboutPage.contactGeneral')}</h4>
              <a href="mailto:info@portaltanaman.com" className="flex items-center justify-center gap-2 mt-2 text-green-700 hover:text-green-900">
                <Mail size={16} /> info@portaltanaman.com
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{t('aboutPage.contactSupport')}</h4>
              <a href="mailto:support@portaltanaman.com" className="flex items-center justify-center gap-2 mt-2 text-green-700 hover:text-green-900">
                <Mail size={16} /> support@portaltanaman.com
              </a>
              <a href="tel:+62212345678" className="flex items-center justify-center gap-2 mt-1 text-gray-600 hover:text-black">
                <Phone size={16} /> (021) 2345-678
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{t('aboutPage.contactPartnerships')}</h4>
              <a href="mailto:partner@portaltanaman.com" className="flex items-center justify-center gap-2 mt-2 text-green-700 hover:text-green-900">
                <Mail size={16} /> partner@portaltanaman.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- Privacy Section --- */}
      <div className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('aboutPage.privacyTitle')}</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {t('aboutPage.privacyText')}
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
