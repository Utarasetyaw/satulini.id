import React from 'react';
import type { FC } from 'react';
import { InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

// =================================================================================
// --- KOMPONEN PRATINJAU INTEGRASI SOSMED DENGAN GAYA SILUET ---
// =================================================================================

const StatCardSilhouette: FC = () => (
    <div className="p-3 bg-gray-50 rounded-lg text-center">
        <div className="h-7 w-1/2 bg-gray-200 rounded mx-auto mb-2"></div>
        <div className="h-4 w-3/4 bg-gray-100 rounded mx-auto"></div>
    </div>
);

const PostItemSilhouette: FC<{ icon: React.ReactNode }> = ({ icon }) => (
    <div className="flex p-3 border border-gray-100 rounded-lg mb-3 bg-white">
        <div className="w-24 h-24 bg-gray-100 rounded-md flex-shrink-0"></div>
        <div className="ml-4 flex-grow min-w-0">
            <div className="flex items-center text-gray-400">
                {icon}
                <div className="h-4 w-20 bg-gray-200 rounded ml-2"></div>
            </div>
            <div className="h-3 w-full bg-gray-100 rounded mt-2"></div>
            <div className="h-3 w-5/6 bg-gray-100 rounded mt-1"></div>
            <div className="flex space-x-4 mt-3">
                <div className="h-4 w-12 bg-gray-100 rounded-full"></div>
                <div className="h-4 w-12 bg-gray-100 rounded-full"></div>
            </div>
        </div>
    </div>
);

export const SocialMediaPreview: FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col ${className}`}>
            {/* Header */}
            <div className="flex-shrink-0 mb-6">
                <div className="h-8 w-1/3 bg-gray-200 rounded"></div>
            </div>
            
            {/* Kartu Statistik */}
            <div className="grid grid-cols-3 gap-4 mb-6 flex-shrink-0">
                <StatCardSilhouette />
                <StatCardSilhouette />
                <StatCardSilhouette />
            </div>

            {/* Konten Utama */}
            <div className="w-full flex-grow grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
                {/* Kolom Kiri: Postingan Terbaru */}
                <div className="md:col-span-2 bg-gray-50/70 border border-gray-100 rounded-lg p-4 flex flex-col">
                    <div className="h-6 w-1/2 bg-gray-200 rounded mb-4"></div>
                    <div className="flex-grow overflow-y-auto pr-2">
                        <PostItemSilhouette icon={<InstagramOutlined />} />
                        <PostItemSilhouette icon={<FacebookOutlined />} />
                        <PostItemSilhouette icon={<TwitterOutlined />} />
                    </div>
                </div>

                {/* Kolom Kanan: Pertumbuhan & Akun */}
                <div className="md:col-span-1 flex flex-col gap-6">
                    <div className="bg-white border border-gray-100 rounded-lg p-4 flex-grow flex flex-col">
                         <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
                         <div className="flex-grow flex items-end justify-center h-40">
                            {/* SVG untuk siluet grafik garis */}
                            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 150">
                                <path d="M0,100 L50,110 L100,90 L150,80 L200,60 L250,70 L300,40 L350,50 L400,20" stroke="#d1d5db" strokeWidth="2" fill="none" />
                            </svg>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-lg p-4">
                        <div className="h-5 w-1/2 bg-gray-200 rounded mb-3"></div>
                        <div className="space-y-2">
                             <div className="h-6 w-full bg-gray-100 rounded"></div>
                             <div className="h-6 w-full bg-gray-100 rounded"></div>
                             <div className="h-6 w-full bg-gray-100 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};