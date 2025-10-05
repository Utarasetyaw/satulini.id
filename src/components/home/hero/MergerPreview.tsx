import type { FC } from 'react';

// =================================================================================
// --- KOMPONEN PRATINJAU AKUISISI & MERGER DENGAN GAYA SILUET ---
// =================================================================================

const KanbanDealCard: FC = () => (
    <div className="p-3 bg-white border border-gray-200 rounded-md">
        <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
        <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
    </div>
);

const MarketplaceItem: FC = () => (
    <div className="flex items-center p-3 border-b border-gray-100">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0"></div>
        <div className="ml-4 flex-grow">
            <div className="h-5 w-1/2 bg-gray-200 rounded"></div>
            <div className="h-3 w-3/4 bg-gray-100 rounded mt-2"></div>
        </div>
        <div className="flex-shrink-0 w-24 h-8 bg-purple-100 rounded-md"></div>
    </div>
);

export const MergerPreview: FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col ${className}`}>
            {/* Header */}
            <div className="flex-shrink-0 mb-6">
                <div className="h-8 w-1/2 bg-gray-200 rounded"></div>
            </div>

            {/* Konten Utama */}
            <div className="w-full flex-grow flex flex-col gap-6 overflow-hidden">
                {/* Pipeline Kesepakatan (Kanban) */}
                <div className="bg-white border border-gray-100 rounded-lg p-4">
                    <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>
                    <div className="grid grid-cols-3 gap-4">
                        {/* Kolom Kanban */}
                        <div className="bg-gray-50/70 p-2 rounded-md">
                            <div className="h-4 w-1/2 bg-gray-200 rounded mb-3"></div>
                            <div className="space-y-2">
                                <KanbanDealCard />
                                <KanbanDealCard />
                            </div>
                        </div>
                        {/* Kolom Kanban */}
                        <div className="bg-gray-50/70 p-2 rounded-md">
                            <div className="h-4 w-3/4 bg-gray-200 rounded mb-3"></div>
                             <div className="space-y-2">
                                <KanbanDealCard />
                            </div>
                        </div>
                        {/* Kolom Kanban */}
                        <div className="bg-gray-50/70 p-2 rounded-md">
                            <div className="h-4 w-1/2 bg-gray-200 rounded mb-3"></div>
                        </div>
                    </div>
                </div>

                {/* Marketplace Peluang */}
                <div className="bg-white border border-gray-100 rounded-lg p-4 flex-grow flex flex-col">
                    <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>
                    <div className="flex-grow overflow-y-auto">
                        <MarketplaceItem />
                        <MarketplaceItem />
                        <MarketplaceItem />
                    </div>
                </div>
            </div>
        </div>
    );
};