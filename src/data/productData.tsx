// IMPORTANT: Make sure this file is saved with the name `productData.tsx` (not .ts)

import React from 'react';
import type { FC } from 'react';

// --- Interfaces & Data Types ---
export interface FeatureItem { 
  icon: React.ReactElement; 
  label: string; 
  to: string; 
  description?: string; // Optional description for the detail page
}

export interface SolutionCategory {
    title: string;
    description: string;
    features: FeatureItem[];
}

export interface SolutionsContent {
    [key: string]: SolutionCategory;
}

// --- Icon Components ---
const ShoppingBagIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>);
const BoxIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>);
const ShoppingCartIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>);
const ClipboardIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>);
const TrendingUpIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>);
const MessageCircleIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>);
const LinkIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L9.4 6.6A.2.2 0 0 1 9.4 6.94"/><path d="M4.6 9.06a.2.2 0 0 1 0-.28L7.07 6.07a5 5 0 0 1 7.07 7.07l-3 3a5 5 0 0 1-7.54-.54"/></svg>);
const ImagePlusIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><line x1="16" y1="5" x2="21" y2="5"/><line x1="18.5" y1="2.5" x2="18.5" y2="7.5"/><path d="M12 8l-3 3-5-5"/><circle cx="8.5" cy="8.5" r="2"/></svg>);
const HandshakeIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 11.5V17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5.5L4 12V6a2 2 0 0 1 2-2h3"/><path d="M21 12V7a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v5l1 1.5V19a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-7.5l1-1.5z"/></svg>);
const DollarSignIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>);
const MegaphoneIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-3-2 12L3 11"/><path d="M11.62 10.18L10 21.68l-2-2-3 3"/></svg>);
const BarChartIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>);
const LockIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>);
const ScaleIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16.5-6-3-6 3V2l6-3 6 3v14.5Zm-10 0v-5l6-3 6 3v5l-6 3-6-3Z"/></svg>);

// --- Data for Mega Menu ---
export const solutionsMegaMenuContent: SolutionsContent = {
  business: {
    title: 'Complete Solution for Your Business',
    description: 'Powerful tools to automate and grow your business operations.',
    features: [
      { icon: <ShoppingBagIcon />, label: 'AI Auto Builder E-commerce', to: '/product/ai-auto-builder-e-commerce', description: 'Create and manage your online store with the power of AI.' },
      { icon: <BoxIcon />, label: 'ERP', to: '/product/erp', description: 'Integrated system to manage all company resources.' },
      { icon: <ShoppingCartIcon />, label: 'POS', to: '/product/pos', description: 'Modern Point of Sale solution for seamless transactions.' },
      { icon: <ClipboardIcon />, label: 'CMS', to: '/product/cms', description: 'Manage your website content easily and efficiently.' },
      { icon: <TrendingUpIcon />, label: 'Finance Analyst & Report', to: '/product/finance-analyst-report', description: 'Get deep financial insights with AI analysis.' },
      { icon: <MessageCircleIcon />, label: 'Live Chat', to: '/product/live-chat', description: 'Interact directly with your customers in real-time.' },
      { icon: <LinkIcon />, label: 'Auto Audit with Blockchain', to: '/product/auto-audit-blockchain', description: 'Enhance transparency and security with blockchain-based automated audits.' },
    ],
  },
  personal: {
    title: 'Build Your Personal Brand',
    description: 'Maximize your online potential with a powerful website and marketing tools.',
    features: [
      { icon: <ImagePlusIcon />, label: 'AI Web Portfolio Builder', to: '/product/ai-builder-web-portofolio', description: 'Create a stunning professional portfolio in minutes.' },
      { icon: <HandshakeIcon />, label: 'Affiliate Marketing', to: '/product/affiliate-marketing', description: 'Grow your network and earn income through affiliate programs.' },
      { icon: <DollarSignIcon />, label: 'Sell Products & Services', to: '/product/jual-produk-jasa', description: 'Monetize your skills by selling digital products or services.' },
      { icon: <MegaphoneIcon />, label: 'Digital Marketing Tools', to: '/product/digital-marketing-tools', description: 'A complete toolkit to reach a wider audience.' },
    ],
  },
  investor: {
    title: 'Smart & Transparent Investing',
    description: 'Get data and insights for better investment decisions.',
    features: [
      { icon: <BarChartIcon />, label: 'Tracking Score Company', to: '/product/tracking-score-company', description: 'Analyze and track company performance in real-time.' },
      { icon: <LockIcon />, label: 'Funding Transparency', to: '/product/funding-transparency', description: 'Ensure every funding transaction is transparently recorded on the blockchain.' },
      { icon: <ScaleIcon />, label: 'Acquisition and Merger', to: '/product/acquisition-merge', description: 'Facilitate acquisition and merger processes with verified data.' },
    ],
  },
};

// --- Helper Function ---
export const getProductBySlug = (slug?: string): FeatureItem | null => {
    if (!slug) return null;
    for (const categoryKey in solutionsMegaMenuContent) {
        const category = solutionsMegaMenuContent[categoryKey];
        for (const feature of category.features) {
            if (feature.to.endsWith(slug)) {
                return feature;
            }
        }
    }
    return null;
};