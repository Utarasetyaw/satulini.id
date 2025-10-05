import type { FC } from 'react';
// =================================================================================
// --- KOMPONEN PRATINJAU DIGITAL MARKETING DENGAN GAYA SILUET ---
// =================================================================================

const StatCardSilhouette: FC = () => (
    <div className="p-3 bg-gray-50 rounded-lg text-center">
        <div className="h-7 w-1/2 bg-gray-200 rounded mx-auto mb-2"></div>
        <div className="h-4 w-3/4 bg-gray-100 rounded mx-auto"></div>
    </div>
);

const CampaignItemSilhouette: FC = () => (
    <div className="py-3 border-b border-gray-100">
        <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
        <div className="flex justify-between items-center">
            <div className="h-3 w-1/4 bg-gray-100 rounded"></div>
            <div className="h-3 w-1/4 bg-gray-100 rounded"></div>
        </div>
    </div>
);

const CalendarDaySilhouette: FC<{ hasPost?: boolean }> = ({ hasPost }) => (
    <div className={`w-full aspect-square border border-gray-100 bg-gray-50/50 rounded-sm p-1`}>
        {hasPost && <div className="w-full h-2 bg-purple-200 rounded-full"></div>}
    </div>
);

export const MarketingPreview: FC<{ className?: string }> = ({ className }) => {
    const purpleBg = 'bg-[#4d48d5]';

    return (
        <div className={`w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col ${className}`}>
            {/* Header */}
            <div className="flex justify-between items-center flex-shrink-0 mb-6">
                <div className="h-8 w-1/3 bg-gray-200 rounded"></div>
                <div className={`w-36 h-10 ${purpleBg} rounded-lg`}></div>
            </div>
            
            {/* Kartu Statistik */}
            <div className="grid grid-cols-3 gap-4 mb-6 flex-shrink-0">
                <StatCardSilhouette />
                <StatCardSilhouette />
                <StatCardSilhouette />
            </div>

            {/* Konten Utama: Kalender & Kampanye */}
            <div className="w-full flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
                {/* Kalender Jadwal Konten */}
                <div className="bg-white border border-gray-100 rounded-lg p-4 flex flex-col">
                    <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
                    <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-400 mb-1">
                        <span>S</span><span>S</span><span>R</span><span>K</span><span>J</span><span>S</span><span>M</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                        {Array.from({ length: 35 }).map((_, i) => (
                            <CalendarDaySilhouette key={i} hasPost={i % 4 === 0 && i > 2} />
                        ))}
                    </div>
                </div>

                {/* Performa Kampanye */}
                <div className="bg-white border border-gray-100 rounded-lg p-4 flex flex-col">
                    <div className="h-6 w-1/2 bg-gray-200 rounded mb-4"></div>
                    <div className="flex-grow overflow-y-auto pr-2">
                        <CampaignItemSilhouette />
                        <CampaignItemSilhouette />
                        <CampaignItemSilhouette />
                        <CampaignItemSilhouette />
                    </div>
                </div>
            </div>
        </div>
    );
};