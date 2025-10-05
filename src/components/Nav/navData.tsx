import React from 'react';
// Impor ikon dari Ant Design
import {
    ShoppingOutlined,
    BoxPlotOutlined,
    ShoppingCartOutlined,
    EditOutlined,
    RiseOutlined,
    MessageOutlined,
    LinkOutlined,
    SearchOutlined,
    PictureOutlined,
    TeamOutlined,
    DollarCircleOutlined,
    SoundOutlined,
    BarChartOutlined,
    FundProjectionScreenOutlined,
    GoldOutlined,
    MobileOutlined,
} from '@ant-design/icons';

// Definisi Tipe/Interface
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

// =================================================================================
// --- DATA BARU: Link Navigasi Utama ---
// =================================================================================
export const mainNavLinks = [
    { label: 'Home', to: '/' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Product', to: '#', hasMegaMenu: true }, 
];

// =================================================================================
// --- Data utama untuk konten Mega Menu (Lengkap & Sesuai Fitur Terbaru) ---
// =================================================================================
export const solutionsMegaMenuContent: SolutionsContent = {
  business: {
    title: 'Complete Solution for Your Business',
    description: 'Advanced tools to automate and grow your business operations.',
    features: [
      { icon: <ShoppingOutlined />, label: 'AI Auto Builder E-commerce', to: '/product/ai-auto-builder-e-commerce' },
      { icon: <BoxPlotOutlined />, label: 'ERP', to: '/product/erp' },
      { icon: <ShoppingCartOutlined />, label: 'POS', to: '/product/pos' },
      { icon: <EditOutlined />, label: 'KOL Management', to: '/product/kol-management' },
      { icon: <RiseOutlined />, label: 'Finance Analyst & Report', to: '/product/finance-analyst-report' },
      { icon: <MessageOutlined />, label: 'Live Chat', to: '/product/live-chat' },
      { icon: <LinkOutlined />, label: 'Auto Audit with Blockchain', to: '/product/auto-audit-blockchain' },
      { icon: <SearchOutlined />, label: 'SEO Management', to: '/product/seo-management' },
    ],
  },
  personal: {
    title: 'For Your Personal & Investment Needs',
    description: 'Manage your brand, sell services, and make transparent investments within the ecosystem.',
    features: [
      { icon: <PictureOutlined />, label: 'AI Web Portfolio Builder', to: '/product/ai-web-portfolio-builder' },
      { icon: <TeamOutlined />, label: 'Affiliate Marketing', to: '/product/affiliate-marketing' },
      { icon: <DollarCircleOutlined />, label: 'Sell Products & Services', to: '/product/sell-products-services' },
      { icon: <SoundOutlined />, label: 'Digital Marketing Tools', to: '/product/digital-marketing-tools' },
      { icon: <BarChartOutlined />, label: 'Company Score Tracking', to: '/product/company-score-tracking' },
      { icon: <FundProjectionScreenOutlined />, label: 'Funding Transparency', to: '/product/funding-transparency' },
      { icon: <GoldOutlined />, label: 'Acquisition and Merger', to: '/product/acquisition-merger' },
      { icon: <MobileOutlined />, label: 'Social Media Integration', to: '/product/social-media-integration' },
    ],
  },
};

// =================================================================================
// --- Data untuk kategori solusi (Lengkap) ---
// =================================================================================
export const solutionCategories = [
    { 
        id: 'business', 
        name: 'Business',
        iconUrl: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/big-business-2453818-2030375.png' 
    },
    { 
        id: 'personal', 
        name: 'Personal & Investment',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
    },
];