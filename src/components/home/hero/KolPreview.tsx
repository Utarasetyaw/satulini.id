import type { FC } from 'react';
import { EnvironmentOutlined } from '@ant-design/icons';

// =================================================================================
// --- KOMPONEN PRATINJAU MANAJEMEN KOL DENGAN GAYA SILUET ---
// =================================================================================

const KolCardSilhouette: FC = () => (
    <div className="w-full p-3 border border-gray-100 rounded-lg mb-4 bg-white">
        <div className="flex items-start">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex-shrink-0"></div>
            <div className="ml-3 flex-grow min-w-0">
                <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-3 w-1/2 bg-gray-100 rounded mt-2"></div>
            </div>
        </div>
        <div className="flex space-x-2 mt-3">
            <div className="h-5 w-16 bg-gray-100 rounded-full"></div>
            <div className="h-5 w-20 bg-gray-100 rounded-full"></div>
        </div>
        <div className="w-full h-9 bg-[#4d48d5] rounded-lg mt-4"></div>
    </div>
);

export const KolPreview: FC<{ className?: string }> = ({ className }) => {
    // Definisikan warna utama langsung di dalam kelas Tailwind untuk konsistensi

    return (
        <div className={`w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col ${className}`}>
            {/* Bagian Atas: Filter */}
            <div className="flex-shrink-0">
                <div className="h-8 w-1/3 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-4/5 bg-gray-100 rounded mb-6"></div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2 h-12 bg-gray-100 rounded-lg"></div>
                    <div className="w-full md:w-1/2 flex gap-2">
                        <div className="flex-1 h-12 bg-gray-100 rounded-lg"></div>
                        <div className="flex-1 h-12 bg-gray-100 rounded-lg"></div>
                        <div className="flex-1 h-12 bg-gray-100 rounded-lg"></div>
                    </div>
                </div>
            </div>

            {/* Bagian Bawah: Peta dan Hasil */}
            <div className="flex-grow mt-6 flex flex-col md:flex-row gap-6 overflow-hidden">
                {/* Kiri: Peta */}
                <div className="w-full md:w-7/12 h-64 md:h-full bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center">
                     <EnvironmentOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />
                </div>
                {/* Kanan: Hasil Pencarian */}
                <div className="w-full md:w-5/12 h-full flex flex-col">
                    <div className="h-6 w-1/2 bg-gray-200 rounded mb-4"></div>
                    <div className="flex-grow overflow-y-auto pr-2">
                        <KolCardSilhouette />
                        <KolCardSilhouette />
                    </div>
                </div>
            </div>
        </div>
    );
};