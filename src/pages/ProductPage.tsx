import React, { useMemo } from 'react';
import type { FC } from 'react';
import { useParams, Link } from 'react-router-dom';

// --- Menggunakan ikon dari Ant Design agar konsisten ---
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

// =================================================================================
// --- DATA PRODUK BARU (LOKAL) ---
// Data ini menggantikan 'productData.tsx' yang telah dihapus
// =================================================================================
const allProducts = [
    // Business Features
    { slug: 'ai-auto-builder-e-commerce', label: 'AI Auto Builder E-commerce', description: 'Create and manage your online store with the power of AI.', icon: <ShoppingOutlined /> },
    { slug: 'erp', label: 'ERP', description: 'Integrated system to manage all company resources.', icon: <BoxPlotOutlined /> },
    { slug: 'pos', label: 'POS', description: 'Modern Point of Sale solution for seamless transactions.', icon: <ShoppingCartOutlined /> },
    { slug: 'kol-management', label: 'KOL Management', description: 'Find, manage, and collaborate with Key Opinion Leaders.', icon: <EditOutlined /> },
    { slug: 'finance-analyst-report', label: 'Finance Analyst & Report', description: 'Get deep financial insights with AI analysis.', icon: <RiseOutlined /> },
    { slug: 'live-chat', label: 'Live Chat', description: 'Interact directly with your customers in real-time.', icon: <MessageOutlined /> },
    { slug: 'auto-audit-blockchain', label: 'Auto Audit with Blockchain', description: 'Enhance transparency and security with blockchain-based automated audits.', icon: <LinkOutlined /> },
    { slug: 'seo-management', label: 'SEO Management', description: 'Analyze and improve your site’s search engine performance.', icon: <SearchOutlined /> },
    // Personal Features
    { slug: 'ai-web-portfolio-builder', label: 'AI Web Portfolio Builder', description: 'Create a stunning professional portfolio in minutes.', icon: <PictureOutlined /> },
    { slug: 'affiliate-marketing', label: 'Affiliate Marketing', description: 'Grow your network and earn income through affiliate programs.', icon: <TeamOutlined /> },
    { slug: 'sell-products-services', label: 'Sell Products & Services', description: 'Monetize your skills by selling digital products or services.', icon: <DollarCircleOutlined /> },
    { slug: 'digital-marketing-tools', label: 'Digital Marketing Tools', description: 'A complete toolkit to reach a wider audience.', icon: <SoundOutlined /> },
    { slug: 'company-score-tracking', label: 'Company Score Tracking', description: 'Analyze and track company performance in real-time.', icon: <BarChartOutlined /> },
    { slug: 'funding-transparency', label: 'Funding Transparency', description: 'Ensure every funding transaction is transparently recorded on the blockchain.', icon: <FundProjectionScreenOutlined /> },
    { slug: 'acquisition-merger', label: 'Acquisition and Merger', description: 'Facilitate acquisition and merger processes with verified data.', icon: <GoldOutlined /> },
    { slug: 'social-media-integration', label: 'Social Media Integration', description: 'Manage and analyze all your connected social media accounts in one place.', icon: <MobileOutlined /> },
];


// --- Placeholder Icon Component ---
const CheckCircleIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>);

const ProductPage: FC = () => {
    const { slug } = useParams<{ slug: string }>();

    // PERBAIKAN: Mencari produk dari array lokal, bukan dari file eksternal
    const product = useMemo(() => allProducts.find(p => p.slug === slug), [slug]);

    if (!product) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-purple-600">404</h1>
                <p className="text-2xl font-medium text-gray-800 mt-4">Product Not Found</p>
                <p className="text-gray-500 mt-2">Sorry, the product you are looking for does not exist.</p>
                <Link to="/" className="mt-6 inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 transition">
                  Back to Home
                </Link>
              </div>
            </div>
        );
    }

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-purple-50">
                <div className="max-w-4xl mx-auto py-20 px-4 sm:py-28 sm:px-6 lg:px-8 text-center">
                    <div className="flex justify-center items-center mx-auto mb-6 w-20 h-20 rounded-2xl bg-white text-purple-600 shadow-md">
                        {/* Menggunakan React.cloneElement untuk mengatur ukuran ikon */}
                        {React.cloneElement(product.icon, { style: { fontSize: '40px' } })}
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        {product.label}
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
                        {product.description || "More details about this feature are coming soon."}
                    </p>
                    <div className="mt-10 flex justify-center items-center gap-x-4">
                        <Link
                            to="/pricing"
                            className="inline-block bg-purple-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-purple-700 transition-transform transform hover:scale-105"
                        >
                            View Pricing
                        </Link>
                        <Link
                            to="/"
                            className="inline-block bg-transparent border border-gray-300 rounded-md py-3 px-8 font-medium text-gray-700 hover:bg-gray-100 transition"
                        >
                            Go Back
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-16 sm:py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Key Features</h2>
                        <p className="mt-4 text-lg text-gray-500">The main benefits of using {product.label}.</p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mx-auto">
                                <CheckCircleIcon />
                            </div>
                            <h3 className="mt-5 text-lg font-medium text-gray-900">Benefit 1</h3>
                            <p className="mt-2 text-base text-gray-500">A brief description of how this feature provides the first benefit to the user.</p>
                        </div>
                        <div className="text-center">
                             <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mx-auto">
                                <CheckCircleIcon />
                            </div>
                            <h3 className="mt-5 text-lg font-medium text-gray-900">Benefit 2</h3>
                            <p className="mt-2 text-base text-gray-500">Further explanation of the second benefit that makes this feature stand out.</p>
                        </div>
                        <div className="text-center">
                             <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mx-auto">
                                <CheckCircleIcon />
                            </div>
                            <h3 className="mt-5 text-lg font-medium text-gray-900">Benefit 3</h3>
                            <p className="mt-2 text-base text-gray-500">Details about the third advantage and how it helps achieve goals.</p>
                        </div>
                    </div>

                    <div className="mt-24 text-center">
                         <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
                         <p className="mt-4 text-lg text-gray-500">Simple steps to start using {product.label}.</p>
                         <div className="mt-12 p-8 bg-gray-50 rounded-lg">
                             <p className="text-gray-600">(Visual content or detailed steps will be displayed here)</p>
                         </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductPage;