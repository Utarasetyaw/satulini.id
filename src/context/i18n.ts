import { translations as navTranslations } from './nav.i18n';
import { translations as homeTranslations } from './home.i18n';

// Gabungkan kedua objek terjemahan menjadi satu objek tunggal
export const translations = {
  en: { ...navTranslations.en, ...homeTranslations.en },
  id: { ...navTranslations.id, ...homeTranslations.id },
  zh: { ...navTranslations.zh, ...homeTranslations.zh },
};

// Buat tipe 'TranslationKey' baru dari gabungan semua kunci terjemahan.
// Ini memastikan type safety dan auto-complete di seluruh aplikasi.
export type TranslationKey = keyof typeof translations.en;