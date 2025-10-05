import React from 'react';
import type { FC } from 'react';
import { LineChartOutlined, CheckSquareOutlined, SyncOutlined, CarOutlined } from '@ant-design/icons';

// =================================================================================
// --- KOMPONEN PRATINJAU DASHBOARD DENGAN GAYA SILUET ---
// =================================================================================

const StatCardSilhouette: FC<{ icon: React.ReactNode }> = ({ icon }) => (
    <div className="p-4 bg-gray-50 rounded-lg flex items-center">
        <div className="text-2xl text-gray-300 mr-4">{icon}</div>
        <div className="flex-grow">
            <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-1/2 bg-gray-100 rounded"></div>
        </div>
    </div>
);

const ProductListItemSilhouette: FC = () => (
    <div className="flex items-center py-2 border-b border-gray-100">
        <div className="w-10 h-10 bg-gray-100 rounded-md flex-shrink-0"></div>
        <div className="ml-3 flex-grow">
            <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
        </div>
        <div className="h-5 w-16 bg-gray-100 rounded"></div>
    </div>
);

export const DashboardPreview: FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col ${className}`}>
            {/* Header */}
            <div className="h-8 w-1/2 bg-gray-200 rounded mb-6 flex-shrink-0"></div>

            {/* Kartu Statistik */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 flex-shrink-0">
                <StatCardSilhouette icon={<LineChartOutlined />} />
                <StatCardSilhouette icon={<SyncOutlined />} />
                <StatCardSilhouette icon={<CheckSquareOutlined />} />
                <StatCardSilhouette icon={<CarOutlined />} />
            </div>

            {/* Konten Utama */}
            <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden">
                {/* Grafik */}
                <div className="lg:col-span-2 bg-white border border-gray-100 rounded-lg p-4 flex flex-col">
                    <div className="flex space-x-2 mb-4">
                        <div className="h-8 w-20 bg-[#4d48d5] rounded-md"></div>
                        <div className="h-8 w-20 bg-gray-100 rounded-md"></div>
                        <div className="h-8 w-20 bg-gray-100 rounded-md"></div>
                    </div>
                    <div className="flex-grow flex items-end justify-center h-64">
                        {/* SVG untuk siluet grafik garis */}
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 150">
                            <path d="M0,130 L50,100 L100,120 L150,80 L200,90 L250,60 L300,80 L350,50 L400,70" stroke="#d1d5db" strokeWidth="2" fill="none" />
                            <path d="M0,130 L50,100 L100,120 L150,80 L200,90 L250,60 L300,80 L350,50 L400,70 V150 H0 Z" fill="url(#grad)" />
                            <defs>
                                <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style={{stopColor: '#e0e7ff', stopOpacity: 0.8}} />
                                    <stop offset="100%" style={{stopColor: '#e0e7ff', stopOpacity: 0}} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

                {/* Produk Terlaris */}
                <div className="lg:col-span-1 bg-white border border-gray-100 rounded-lg p-4 flex flex-col">
                    <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
                    <div className="flex-grow overflow-y-auto pr-2">
                        <ProductListItemSilhouette />
                        <ProductListItemSilhouette />
                        <ProductListItemSilhouette />
                        <ProductListItemSilhouette />
                    </div>
                </div>
            </div>
        </div>
    );
};