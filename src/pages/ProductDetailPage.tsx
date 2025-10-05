import React, { useMemo } from 'react';
import type { FC } from 'react';
import { useParams } from 'react-router-dom'; // Asumsi Anda menggunakan React Router

// --- Import SEMUA Komponen Pratinjau Siluet & Ikon ---
import {
    ShoppingOutlined, // Menggantikan ShoppingBagIcon
    BoxPlotOutlined, // Menggantikan BoxIcon
    ShoppingCartOutlined,
    EditOutlined, // Menggantikan ClipboardIcon
    RiseOutlined, // Menggantikan TrendingUpIcon
    MessageOutlined, // Menggantikan MessageCircleIcon
    LinkOutlined,
    SearchOutlined, // Untuk SEO
    PictureOutlined, // Menggantikan ImagePlusIcon
    TeamOutlined, // Menggantikan HandshakeIcon
    DollarCircleOutlined, // Menggantikan DollarSignIcon
    SoundOutlined, // Menggantikan MegaphoneIcon
    BarChartOutlined,
    FundProjectionScreenOutlined, // Menggantikan LockIcon untuk Funding
    GoldOutlined, // Menggantikan ScaleIcon untuk Merger
    MobileOutlined, // Untuk Social Media
} from '@ant-design/icons';
import { EcommerceBuilderPreview } from '../components/hero/EcommerceBuilderPreview';
import { AdminManagementPreview } from '../components/hero/AdminManagementPreview';
import { PosPreview } from '../components/hero/PosPreview';
import { KolPreview } from '../components/hero/KolPreview';
import { FinancePreview } from '../components/hero/FinancePreview';
import { LiveChatPreview } from '../components/hero/LiveChatPreview';
import { AuditPreview } from '../components/hero/AuditPreview';
import { SeoPreview } from '../components/hero/SeoPreview';
import { PortfolioBuilderPreview } from '../components/hero/PortfolioBuilderPreview';
import { AffiliatePreview } from '../components/hero/AffiliatePreview';
import { ProductServicesPreview } from '../components/hero/ProductServicesPreview';
import { MarketingPreview } from '../components/hero/MarketingPreview';
import { CompanyTrackingPreview } from '../components/hero/CompanyTrackingPreview';
import { FundingPreview } from '../components/hero/FundingPreview';
import { MergerPreview } from '../components/hero/MergerPreview';
import { SocialMediaPreview } from '../components/hero/SocialMediaPreview';

// =================================================================================
// --- DATA PRODUK BARU (LOKAL) ---
// =================================================================================
const allFeatures = [
    // Business Features
    { slug: 'ai-auto-builder-e-commerce', label: 'AI Auto Builder E-commerce', description: 'Create and manage your online store with the power of AI.', icon: <ShoppingOutlined />, preview: <EcommerceBuilderPreview className="w-full h-full" /> },
    { slug: 'erp', label: 'ERP', description: 'Integrated system to manage all company resources.', icon: <BoxPlotOutlined />, preview: <AdminManagementPreview className="w-full h-full" /> },
    { slug: 'pos', label: 'POS', description: 'Modern Point of Sale solution for seamless transactions.', icon: <ShoppingCartOutlined />, preview: <PosPreview className="w-full h-full" /> },
    { slug: 'kol-management', label: 'KOL Management', description: 'Find, manage, and collaborate with Key Opinion Leaders.', icon: <EditOutlined />, preview: <KolPreview className="w-full h-full" /> },
    { slug: 'finance-analyst-report', label: 'Finance Analyst & Report', description: 'Get deep financial insights with AI analysis.', icon: <RiseOutlined />, preview: <FinancePreview className="w-full h-full" /> },
    { slug: 'live-chat', label: 'Live Chat', description: 'Interact directly with your customers in real-time.', icon: <MessageOutlined />, preview: <LiveChatPreview className="w-full h-full" /> },
    { slug: 'auto-audit-blockchain', label: 'Auto Audit with Blockchain', description: 'Enhance transparency and security with blockchain-based automated audits.', icon: <LinkOutlined />, preview: <AuditPreview className="w-full h-full" /> },
    { slug: 'seo-management', label: 'SEO Management', description: 'Analyze and improve your site’s search engine performance.', icon: <SearchOutlined />, preview: <SeoPreview className="w-full h-full" /> },
    // Personal Features
    { slug: 'ai-web-portfolio-builder', label: 'AI Web Portfolio Builder', description: 'Create a stunning professional portfolio in minutes.', icon: <PictureOutlined />, preview: <PortfolioBuilderPreview className="w-full h-full" /> },
    { slug: 'affiliate-marketing', label: 'Affiliate Marketing', description: 'Grow your network and earn income through affiliate programs.', icon: <TeamOutlined />, preview: <AffiliatePreview className="w-full h-full" /> },
    { slug: 'sell-products-services', label: 'Sell Products & Services', description: 'Monetize your skills by selling digital products or services.', icon: <DollarCircleOutlined />, preview: <ProductServicesPreview className="w-full h-full" /> },
    { slug: 'digital-marketing-tools', label: 'Digital Marketing Tools', description: 'A complete toolkit to reach a wider audience.', icon: <SoundOutlined />, preview: <MarketingPreview className="w-full h-full" /> },
    { slug: 'company-score-tracking', label: 'Company Score Tracking', description: 'Analyze and track company performance in real-time.', icon: <BarChartOutlined />, preview: <CompanyTrackingPreview className="w-full h-full" /> },
    { slug: 'funding-transparency', label: 'Funding Transparency', description: 'Ensure every funding transaction is transparently recorded on the blockchain.', icon: <FundProjectionScreenOutlined />, preview: <FundingPreview className="w-full h-full" /> },
    { slug: 'acquisition-merger', label: 'Acquisition and Merger', description: 'Facilitate acquisition and merger processes with verified data.', icon: <GoldOutlined />, preview: <MergerPreview className="w-full h-full" /> },
    { slug: 'social-media-integration', label: 'Social Media Integration', description: 'Manage and analyze all your connected social media accounts in one place.', icon: <MobileOutlined />, preview: <SocialMediaPreview className="w-full h-full" /> },
];

// =================================================================================
// --- Komponen Utama Halaman Detail Produk ---
// =================================================================================

export const ProductDetailPage: FC = () => {
    const { slug } = useParams<{ slug: string }>(); 
    
    // Logika pencarian disederhanakan untuk mencari di array lokal
    const product = useMemo(() => allFeatures.find(f => f.slug === slug), [slug]);
    
    if (!product) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-2xl text-gray-600">Produk tidak ditemukan.</h1>
            </div>
        );
    }

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    
                    {/* Kolom Kiri: Teks Deskripsi */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-xl mb-6 text-purple-600">
                            {React.cloneElement(product.icon, { style: { fontSize: '32px' } })}
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                            {product.label}
                        </h1>
                        <p className="mt-5 text-lg sm:text-xl text-gray-500 max-w-3xl">
                            {product.description}
                        </p>
                        <div className="mt-10">
                            <a href="/pricing" className="inline-block bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-purple-700 transition-colors">
                                Lihat Harga
                            </a>
                        </div>
                    </div>
                    
                    {/* Kolom Kanan: Pratinjau Siluet (Langsung dirender) */}
                    <div className="w-full aspect-[4/3] lg:aspect-auto lg:h-[720px]">
                        {product.preview}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};