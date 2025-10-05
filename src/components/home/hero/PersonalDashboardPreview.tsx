import type { FC } from 'react';
import { UserOutlined, ArrowUpOutlined } from '@ant-design/icons';

// =================================================================================
// --- KOMPONEN PRATINJAU DASBOR PRIBADI DENGAN GAYA SILUET ---
// =================================================================================

const StatCardSilhouette: FC = () => (
    <div className="p-4 bg-gray-50 rounded-lg">
        <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
        <div className="h-7 w-1/2 bg-purple-100 rounded"></div>
    </div>
);

const InvestmentItemSilhouette: FC = () => (
    <div className="flex items-center py-3 border-b border-gray-100">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex-shrink-0"></div>
        <div className="ml-3 flex-grow">
            <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
            <div className="h-3 w-1/2 bg-gray-100 rounded mt-1"></div>
        </div>
        <div className="flex items-center text-green-500">
            <ArrowUpOutlined />
            <div className="h-5 w-12 bg-green-100 rounded ml-1"></div>
        </div>
    </div>
);


export const PersonalDashboardPreview: FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col ${className}`}>
            {/* Header Profil */}
            <div className="flex items-center flex-shrink-0 mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-300 text-3xl"><UserOutlined/></div>
                <div className="ml-4">
                    <div className="h-6 w-40 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-56 bg-gray-100 rounded"></div>
                </div>
            </div>

            {/* Konten Utama */}
            <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden">
                {/* Kolom Kiri: Portofolio & Stats */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                    <div className="p-4 bg-white border border-gray-100 rounded-lg">
                        <div className="h-5 w-3/4 bg-gray-200 rounded mb-3"></div>
                        <div className="w-full h-32 bg-gray-100 rounded-md"></div>
                    </div>
                    <StatCardSilhouette />
                    <StatCardSilhouette />
                </div>

                {/* Kolom Kanan: Investasi */}
                <div className="lg:col-span-2 bg-white border border-gray-100 rounded-lg p-4 flex flex-col">
                    <div className="h-6 w-1/2 bg-gray-200 rounded mb-4"></div>
                    <div className="flex-grow overflow-y-auto pr-2">
                        <InvestmentItemSilhouette />
                        <InvestmentItemSilhouette />
                        <InvestmentItemSilhouette />
                        <InvestmentItemSilhouette />
                    </div>
                </div>
            </div>
        </div>
    );
};