import React from 'react';
import type { FC } from 'react';
import { RiseOutlined, ShoppingCartOutlined, DollarCircleOutlined } from '@ant-design/icons';

// =================================================================================
// --- KOMPONEN PRATINJAU PRODUK & LAYANAN DENGAN GAYA SILUET ---
// =================================================================================

const StatCardSilhouette: FC<{ icon: React.ReactNode }> = ({ icon }) => (
    <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center text-gray-400 text-xl">
            {icon}
            <div className="ml-2 h-4 w-24 bg-gray-200 rounded"></div>
        </div>
        <div className="h-7 w-1/2 bg-gray-200 rounded mt-3"></div>
    </div>
);

const ProductRowSilhouette: FC = () => (
    <div className="flex w-full py-4 border-b border-gray-100 items-center">
        <div className="w-2/5 pr-2 flex items-center">
            <div className="w-10 h-10 bg-gray-100 rounded-md flex-shrink-0"></div>
            <div className="ml-3 h-4 flex-grow bg-gray-200 rounded"></div>
        </div>
        <div className="w-1/5 pr-2"><div className="h-4 bg-gray-100 rounded"></div></div>
        <div className="w-1/5 pr-2"><div className="h-4 bg-gray-100 rounded"></div></div>
        <div className="w-1/5 pr-2"><div className="h-4 bg-gray-100 rounded"></div></div>
    </div>
);

export const ProductServicesPreview: FC<{ className?: string }> = ({ className }) => {
    const purpleBg = 'bg-[#4d48d5]';

    return (
        <div className={`w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col ${className}`}>
            {/* Header */}
            <div className="flex justify-between items-center flex-shrink-0 mb-6">
                <div className="h-8 w-1/3 bg-gray-200 rounded"></div>
                <div className={`w-32 h-10 ${purpleBg} rounded-lg`}></div>
            </div>
            
            {/* Kartu Statistik */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 flex-shrink-0">
                <StatCardSilhouette icon={<DollarCircleOutlined />} />
                <StatCardSilhouette icon={<ShoppingCartOutlined />} />
                <StatCardSilhouette icon={<RiseOutlined />} />
            </div>

            {/* Konten Utama: Daftar Produk */}
            <div className="w-full flex-grow bg-white border border-gray-100 rounded-lg flex flex-col overflow-hidden">
                {/* Header Tabel */}
                <div className="flex w-full p-4 bg-gray-50/50 text-gray-400 font-medium text-sm">
                    <div className="w-2/5 pr-2">Produk</div>
                    <div className="w-1/5 pr-2">Harga</div>
                    <div className="w-1/5 pr-2">Stok</div>
                    <div className="w-1/5 pr-2">Penjualan</div>
                </div>
                
                {/* Body Tabel */}
                <div className="px-4 flex-grow overflow-y-auto">
                    <ProductRowSilhouette />
                    <ProductRowSilhouette />
                    <ProductRowSilhouette />
                    <ProductRowSilhouette />
                </div>
            </div>
        </div>
    );
};