import type { FC } from 'react';

// =================================================================================
// --- KOMPONEN PRATINJAU FINANCE DENGAN GAYA SILUET ---
// =================================================================================
export const FinancePreview: FC<{ className?: string }> = ({ className }) => {
    // Definisikan warna utama langsung di dalam kelas Tailwind untuk konsistensi
    const purpleBg = 'bg-[#4d48d5]'; // Warna ungu sesuai RGB(77, 72, 213)

    const TableRowSilhouette = () => (
        <div className="flex w-full py-4 border-b border-gray-100">
            <div className="w-1/5 pr-2"><div className="h-4 bg-gray-100 rounded"></div></div>
            <div className="w-1/5 pr-2"><div className="h-4 bg-gray-100 rounded"></div></div>
            <div className="w-2/5 pr-2"><div className="h-4 bg-gray-100 rounded"></div></div>
            <div className="w-1/5 pr-2"><div className="h-4 bg-gray-100 rounded"></div></div>
            <div className="w-1/5 pr-2"><div className="h-4 bg-gray-100 rounded"></div></div>
        </div>
    );
    
    return (
        <div className={`w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col ${className}`}>
            {/* Header */}
            <div className="flex justify-between items-start flex-shrink-0 mb-6">
                <div>
                    <div className="h-8 w-64 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-96 bg-gray-100 rounded"></div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-56 h-10 bg-gray-100 rounded-lg"></div>
                    <div className={`w-28 h-10 ${purpleBg} rounded-lg`}></div>
                </div>
            </div>

            {/* Konten Utama dengan Tabs */}
            <div className="w-full flex-grow bg-white border border-gray-100 rounded-lg flex flex-col">
                {/* Tab Bar */}
                <div className="flex border-b border-gray-200 px-4">
                    <div className={`py-3 px-4 text-transparent ${purpleBg} bg-opacity-10 border-b-2 border-[#4d48d5]`}>
                        <div className="h-5 w-24 bg-purple-200 rounded"></div>
                    </div>
                    <div className="py-3 px-4 text-transparent">
                        <div className="h-5 w-24 bg-gray-200 rounded"></div>
                    </div>
                    <div className="py-3 px-4 text-transparent">
                        <div className="h-5 w-32 bg-gray-200 rounded"></div>
                    </div>
                </div>
                
                {/* Konten Tab (menampilkan siluet Jurnal Umum) */}
                <div className="p-6 flex-grow overflow-hidden">
                    {/* Header Tabel */}
                    <div className="flex w-full pb-3">
                        <div className="w-1/5 pr-2"><div className="h-4 w-1/2 bg-gray-300 rounded"></div></div>
                        <div className="w-1/5 pr-2"><div className="h-4 w-1/2 bg-gray-300 rounded"></div></div>
                        <div className="w-2/5 pr-2"><div className="h-4 w-1/3 bg-gray-300 rounded"></div></div>
                        <div className="w-1/5 pr-2"><div className="h-4 w-1/2 bg-gray-300 rounded"></div></div>
                        <div className="w-1/5 pr-2"><div className="h-4 w-1/2 bg-gray-300 rounded"></div></div>
                    </div>
                    <TableRowSilhouette />
                    <TableRowSilhouette />
                    <TableRowSilhouette />
                    <TableRowSilhouette />
                </div>
            </div>
        </div>
    );
};