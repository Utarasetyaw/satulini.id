// src/components/Navbar/navData.tsx
import React from 'react';
// DIUBAH: Path impor diperbaiki ke file nav.i18n
import type { TranslationKey } from '../../context/nav.i18n';
import {
    ShoppingBagIcon, BoxIcon, ShoppingCartIcon, ClipboardIcon, TrendingUpIcon, MessageCircleIcon, LinkIcon,
    ImagePlusIcon, HandshakeIcon, DollarSignIcon, MegaphoneIcon,
    BarChartIcon, LockIcon, ScaleIcon
} from './Icons';

// Definisi Tipe/Interface untuk struktur data
export interface FeatureItem { 
    icon: React.ReactElement; 
    label: string; 
    to: string; 
}

export interface SolutionCategory {
    title: string;
    description: string;
    features: FeatureItem[];
}

export interface SolutionsContent {
    [key: string]: SolutionCategory;
}

// Data utama untuk konten Mega Menu
export const solutionsMegaMenuContent: SolutionsContent = {
  business: {
    title: 'Complete Solution for Your Business',
    description: 'Advanced tools to automate and grow your business operations.',
    features: [
      { icon: <ShoppingBagIcon />, label: 'AI Auto Builder E-commerce', to: '/product/ai-auto-builder-e-commerce' },
      { icon: <BoxIcon />, label: 'ERP', to: '/product/erp' },
      { icon: <ShoppingCartIcon />, label: 'POS', to: '/product/pos' },
      { icon: <ClipboardIcon />, label: 'CMS', to: '/product/cms' },
      { icon: <TrendingUpIcon />, label: 'Finance Analyst & Report', to: '/product/finance-analyst-report' },
      { icon: <MessageCircleIcon />, label: 'Live Chat', to: '/product/live-chat' },
      { icon: <LinkIcon />, label: 'Auto Audit with Blockchain', to: '/product/auto-audit-blockchain' },
    ],
  },
  personal: {
    title: 'Build Your Personal Brand',
    description: 'Maximize your online potential with a powerful website and marketing tools.',
    features: [
      { icon: <ImagePlusIcon />, label: 'AI Builder Web Portfolio', to: '/product/ai-builder-web-portofolio' },
      { icon: <HandshakeIcon />, label: 'Affiliate Marketing', to: '/product/affiliate-marketing' },
      { icon: <DollarSignIcon />, label: 'Sell Products & Services', to: '/product/sell-products-services' },
      { icon: <MegaphoneIcon />, label: 'Digital Marketing Tools', to: '/product/digital-marketing-tools' },
    ],
  },
  investor: {
    title: 'Smart & Transparent Investments',
    description: 'Get data and insights for better investment decisions.',
    features: [
      { icon: <BarChartIcon />, label: 'Tracking Score Company', to: '/product/tracking-score-company' },
      { icon: <LockIcon />, label: 'Funding Transparency', to: '/product/funding-transparency' },
      { icon: <ScaleIcon />, label: 'Acquisition and Merger', to: '/product/acquisition-merger' },
    ],
  },
};

// Data untuk kategori solusi, digunakan di menu
export const solutionCategories = [
    { 
        id: 'business', 
        nameKey: 'businessTitle' as TranslationKey,
        iconUrl: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/big-business-2453818-2030375.png' 
    },
    { 
        id: 'personal', 
        nameKey: 'personalTitle' as TranslationKey,
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
    },
    { 
        id: 'investor', 
        nameKey: 'investorTitle' as TranslationKey,
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/2422/2422793.png'
    },
];