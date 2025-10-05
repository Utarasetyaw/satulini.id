import React from 'react';
import type { FC } from 'react';
import { AimOutlined, CheckCircleOutlined, DollarCircleOutlined } from '@ant-design/icons';

// =================================================================================
// --- KOMPONEN PRATINJAU AFILIASI DENGAN GAYA SILUET ---
// =================================================================================

const StatCardSilhouette: FC<{ icon: React.ReactNode }> = ({ icon }) => (
    <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center text-gray-400">
            {icon}
            <div className="ml-2 h-4 w-24 bg-gray-200 rounded"></div>
        </div>
        <div className="h-8 w-1/2 bg-gray-200 rounded mt-3"></div>
    </div>
);

export const AffiliatePreview: FC<{ className?: string }> = ({ className }) => {
    const purpleBg = 'bg-[#4d48d5]';

    return (
        <div className={`w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col ${className}`}>
            {/* Header */}
            <div className="flex-shrink-0 mb-6">
                <div className="h-8 w-1/3 bg-gray-200 rounded"></div>
            </div>

            {/* Konten Utama */}
            <div className="w-full flex-grow grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Kolom Kiri: Stats & Link */}
                <div className="md:col-span-1 flex flex-col gap-6">
                    <StatCardSilhouette icon={<AimOutlined />} />
                    <StatCardSilhouette icon={<CheckCircleOutlined />} />
                    <StatCardSilhouette icon={<DollarCircleOutlined />} />

                    <div className="p-4 bg-white border border-gray-100 rounded-lg">
                        <div className="h-5 w-3/4 bg-gray-200 rounded mb-3"></div>
                        <div className="flex gap-2">
                            <div className="flex-grow h-10 bg-gray-100 rounded-md"></div>
                            <div className={`w-24 h-10 ${purpleBg} rounded-md`}></div>
                        </div>
                    </div>
                </div>

                {/* Kolom Kanan: Grafik Performa */}
                <div className="md:col-span-2 bg-white border border-gray-100 rounded-lg p-4 flex flex-col">
                    <div className="h-6 w-1/2 bg-gray-200 rounded mb-4"></div>
                    <div className="flex-grow flex items-end justify-center h-64">
                        {/* SVG untuk siluet grafik garis */}
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 150">
                            <path d="M0,130 L50,100 L100,120 L150,80 L200,90 L250,60 L300,80 L350,50 L400,70" stroke="#d1d5db" strokeWidth="2" fill="none" />
                            <path d="M0,130 L50,100 L100,120 L150,80 L200,90 L250,60 L300,80 L350,50 L400,70 V150 H0 Z" fill="url(#grad-affiliate)" />
                            <defs>
                                <linearGradient id="grad-affiliate" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style={{stopColor: '#e0e7ff', stopOpacity: 0.8}} />
                                    <stop offset="100%" style={{stopColor: '#e0e7ff', stopOpacity: 0}} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};