'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import type { FC, ReactNode } from 'react';

// Diubah: Impor dari file i18n gabungan yang baru
import { translations } from './i18n'; 
import type { TranslationKey } from './i18n';

// Tipe untuk bahasa yang didukung
export type Language = 'en' | 'id' | 'zh';

// Tipe untuk Context
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider yang akan membungkus aplikasi Anda
export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Efek untuk memuat bahasa yang tersimpan dari localStorage saat komponen dimuat
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'id', 'zh'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Fungsi untuk mengubah dan menyimpan bahasa
  const setLanguage = (lang: Language) => {
    localStorage.setItem('language', lang);
    setLanguageState(lang);
  };

  // Fungsi 't' (translate) untuk mendapatkan teks berdasarkan kunci
  const t = (key: TranslationKey): string => {
    // Memberikan fallback ke bahasa Inggris jika sebuah kunci tidak ditemukan
    // di bahasa yang sedang aktif.
    return translations[language][key] || translations.en[key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook kustom untuk mempermudah penggunaan di komponen lain
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};