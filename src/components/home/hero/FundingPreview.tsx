import type { FC } from 'react';

// =================================================================================
// --- KOMPONEN PRATINJAU FUNDING TRANSPARENCY DENGAN GAYA SILUET ---
// =================================================================================

const StatCardSilhouette: FC = () => (
    <div className="p-4 bg-gray-50 rounded-lg">
        <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
        <div className="h-7 w-1/2 bg-purple-100 rounded"></div>
    </div>
);

const TransactionItemSilhouette: FC = () => (
    <div className="flex items-center justify-between py-3 border-b border-gray-100">
        <div className="flex-grow min-w-0">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-3 w-1/3 bg-gray-100 rounded mt-2"></div>
        </div>
        <div className="h-5 w-20 bg-purple-100 rounded ml-4"></div>
    </div>
);

export const FundingPreview: FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col ${className}`}>
            {/* Header */}
            <div className="flex-shrink-0 mb-6">
                <div className="h-8 w-1/2 bg-gray-200 rounded"></div>
            </div>

            {/* Statistik */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 flex-shrink-0">
                <StatCardSilhouette />
                <StatCardSilhouette />
                <StatCardSilhouette />
                <StatCardSilhouette />
            </div>

            {/* Konten Utama */}
            <div className="w-full flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
                {/* Kiri: Alokasi Dana */}
                <div className="bg-white border border-gray-100 rounded-lg p-4 flex flex-col">
                    <div className="h-6 w-1/2 bg-gray-200 rounded mb-4"></div>
                    <div className="flex-grow flex items-center justify-center">
                        <div className="relative w-48 h-48">
                            {/* SVG untuk Donut Chart */}
                            <svg className="w-full h-full" viewBox="0 0 36 36">
                                <path className="stroke-current text-gray-100" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="stroke-current text-purple-400" strokeWidth="3" fill="none" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="stroke-current text-purple-300" strokeWidth="3" fill="none" strokeDasharray="30, 100" strokeDashoffset="-40" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-6 w-20 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kanan: Riwayat Transaksi */}
                <div className="bg-white border border-gray-100 rounded-lg p-4 flex flex-col">
                    <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
                    <div className="flex-grow overflow-y-auto pr-2">
                        <TransactionItemSilhouette />
                        <TransactionItemSilhouette />
                        <TransactionItemSilhouette />
                        <TransactionItemSilhouette />
                    </div>
                </div>
            </div>
        </div>
    );
};