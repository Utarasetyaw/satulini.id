// src/context/nav.i18n.ts

export const translations = {
  en: { 
    home: "Home", 
    product: "Product", 
    pricing: "Pricing", 
    whitepaper: "Whitepaper", 
    preRegister: "Pre Register", 
    preRegisterWeb3: "Pre Register Web3", 
    language: "Language", 
    businessTitle: "For Business", 
    personalTitle: "For Personal", 
    investorTitle: "For Investor", 
    tagline: "The all-in-one platform", 
  },
  id: { 
    home: "Beranda", 
    product: "Produk", 
    pricing: "Harga", 
    whitepaper: "Whitepaper", 
    preRegister: "Pra-Daftar", 
    preRegisterWeb3: "Pra-Daftar Web3", 
    language: "Bahasa", 
    businessTitle: "Untuk Bisnis", 
    personalTitle: "Untuk Personal", 
    investorTitle: "Untuk Investor", 
    tagline: "Platform lengkap untuk semua", 
  },
  zh: { 
    home: "首页", 
    product: "产品", 
    pricing: "价钱", 
    whitepaper: "白皮书", 
    preRegister: "预先登记", 
    preRegisterWeb3: "Web3 预注册", 
    language: "语言", 
    businessTitle: "商业用途", 
    personalTitle: "个人用途", 
    investorTitle: "投资者用途", 
    tagline: "一体化平台", 
  },
};

// Ini adalah praktik yang baik untuk membuat tipe dari kunci terjemahan
// agar kode lebih aman dan auto-complete di editor Anda berfungsi.
export type TranslationKey = keyof typeof translations.en;