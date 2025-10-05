import type { FC } from 'react';

// =================================================================================
// --- KOMPONEN PRATINJAU POS DENGAN GAYA SILUET ---
// =================================================================================

const ProductSilhouette: FC = () => (
    <div className="w-1/4 p-2">
        <div className="w-full bg-white border border-gray-100 rounded-lg">
            <div className="w-full h-24 bg-gray-100 rounded-t-lg"></div>
            <div className="p-3">
                <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
                <div className="h-3 w-1/2 bg-gray-200 rounded mt-2"></div>
            </div>
        </div>
    </div>
);

const CartItemSilhouette: FC = () => (
    <div className="flex items-center justify-between py-3 border-b border-gray-200">
        <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-100 rounded-md flex-shrink-0"></div>
            <div className="ml-3">
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
                <div className="h-3 w-16 bg-gray-200 rounded mt-1"></div>
            </div>
        </div>
        <div className="h-4 w-12 bg-gray-200 rounded"></div>
    </div>
);

export const PosPreview: FC<{ className?: string }> = ({ className }) => {
    // Definisikan warna utama langsung di dalam kelas Tailwind untuk konsistensi
    const purpleBg = 'bg-[#4d48d5]'; // Warna ungu sesuai RGB(77, 72, 213)

    return (
        <div className={`w-full h-full flex bg-white rounded-2xl shadow-2xl overflow-hidden ${className}`}>
            {/* Kolom Kiri: Daftar Produk */}
            <div className="flex-[3] p-6 flex flex-col bg-gray-50/50">
                <div className="w-full h-12 bg-white border border-gray-200 rounded-lg mb-4"></div>
                <div className="flex space-x-2 mb-6">
                    <div className={`w-24 h-9 ${purpleBg} rounded-lg`}></div>
                    <div className="w-24 h-9 bg-white border border-gray-200 rounded-lg"></div>
                    <div className="w-24 h-9 bg-white border border-gray-200 rounded-lg"></div>
                </div>
                <div className="flex-grow overflow-hidden">
                    <div className="flex flex-wrap -m-2">
                        {Array.from({ length: 12 }).map((_, i) => <ProductSilhouette key={i} />)}
                    </div>
                </div>
            </div>

            {/* Kolom Kanan: Keranjang */}
            <div className="flex-[2] p-6 bg-white border-l border-gray-100 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <div className="h-6 w-40 bg-gray-200 rounded"></div>
                    <div className="h-8 w-28 bg-gray-100 rounded-lg"></div>
                </div>
                <div className="flex-grow overflow-y-auto">
                    <CartItemSilhouette />
                    <CartItemSilhouette />
                    <CartItemSilhouette />
                </div>
                <div className="flex-shrink-0 pt-4">
                    <div className="w-full h-px bg-gray-200 my-4"></div>
                    <div className="flex justify-between items-center"><div className="h-4 w-16 bg-gray-200 rounded"></div><div className="h-4 w-24 bg-gray-200 rounded"></div></div>
                    <div className="flex justify-between items-center mt-2"><div className="h-4 w-12 bg-gray-200 rounded"></div><div className="h-4 w-20 bg-gray-200 rounded"></div></div>
                    <div className="w-full h-px bg-gray-200 my-4"></div>
                    <div className="flex justify-between items-center">
                        <div className="h-6 w-16 bg-gray-200 rounded"></div>
                        <div className={`h-6 w-28 ${purpleBg} rounded`}></div>
                    </div>
                    <div className={`w-full h-12 ${purpleBg} rounded-lg mt-6`}></div>
                </div>
            </div>
        </div>
    );
};