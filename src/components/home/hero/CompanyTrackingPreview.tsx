import type { FC } from 'react';
import { RiseOutlined } from '@ant-design/icons';

// =================================================================================
// --- KOMPONEN PRATINJAU COMPANY SCORE TRACKING DENGAN GAYA SILUET ---
// =================================================================================

const CompanyItemSilhouette: FC = () => (
    <div className="flex items-center p-3 border border-gray-100 rounded-lg mb-3 bg-white">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex-shrink-0"></div>
        <div className="ml-3 flex-grow min-w-0">
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            <div className="w-full bg-gray-100 rounded-full h-2.5 mt-2">
                <div className="bg-purple-300 h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
        </div>
        <div className="ml-4 flex-shrink-0 flex items-center text-green-500">
            <RiseOutlined />
            <div className="h-4 w-10 bg-green-100 rounded ml-1"></div>
        </div>
    </div>
);

const NewsItemSilhouette: FC = () => (
    <div className="flex py-2">
        <div className="flex-grow">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-3 w-1/3 bg-gray-100 rounded mt-2"></div>
        </div>
    </div>
);

export const CompanyTrackingPreview: FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col ${className}`}>
            {/* Header */}
            <div className="flex-shrink-0 mb-6">
                <div className="h-8 w-1/2 bg-gray-200 rounded"></div>
            </div>

            {/* Konten Utama */}
            <div className="w-full flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
                {/* Kolom Kiri: Daftar Pantau */}
                <div className="bg-gray-50/70 border border-gray-100 rounded-lg p-4 flex flex-col">
                    <div className="h-6 w-1/2 bg-gray-200 rounded mb-4"></div>
                    <div className="flex-grow overflow-y-auto pr-2">
                        <CompanyItemSilhouette />
                        <CompanyItemSilhouette />
                        <CompanyItemSilhouette />
                        <CompanyItemSilhouette />
                    </div>
                </div>

                {/* Kolom Kanan: Detail & Berita */}
                <div className="flex flex-col gap-6">
                    <div className="bg-white border border-gray-100 rounded-lg p-4 flex-grow flex flex-col">
                         <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
                         <div className="flex-grow flex items-end justify-center h-48">
                            {/* SVG untuk siluet grafik garis */}
                            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 150">
                                <path d="M0,130 L50,100 L100,120 L150,80 L200,90 L250,60 L300,80 L350,50 L400,70" stroke="#d1d5db" strokeWidth="2" fill="none" />
                            </svg>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-lg p-4">
                        <div className="h-5 w-1/3 bg-gray-200 rounded mb-3"></div>
                        <div className="space-y-2">
                            <NewsItemSilhouette />
                            <NewsItemSilhouette />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};