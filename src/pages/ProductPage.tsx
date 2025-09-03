import type { FC } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug } from '../data/productData'; // Sesuaikan path jika perlu

// --- Komponen Ikon Placeholder ---
const CheckCircleIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>);

const ProductPage: FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const product = getProductBySlug(slug);

    if (!product) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-purple-600">404</h1>
                <p className="text-2xl font-medium text-gray-800 mt-4">Produk Tidak Ditemukan</p>
                <p className="text-gray-500 mt-2">Maaf, produk yang Anda cari tidak ada.</p>
                <Link to="/" className="mt-6 inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 transition">
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
        );
    }

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-purple-50">
                <div className="max-w-4xl mx-auto py-20 px-4 sm:py-28 sm:px-6 lg:px-8 text-center">
                    <div className="flex justify-center items-center mx-auto mb-6 w-20 h-20 rounded-2xl bg-white text-purple-600 shadow-md">
                        {product.icon}
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        {product.label}
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
                        {product.description || "Detail lebih lanjut tentang fitur ini akan segera hadir."}
                    </p>
                    <div className="mt-10 flex justify-center items-center gap-x-4">
                        <Link
                            to="/pricing"
                            className="inline-block bg-purple-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-purple-700 transition-transform transform hover:scale-105"
                        >
                            Lihat Harga
                        </Link>
                        <Link
                            to="/"
                            className="inline-block bg-transparent border border-gray-300 rounded-md py-3 px-8 font-medium text-gray-700 hover:bg-gray-100 transition"
                        >
                            Kembali
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-16 sm:py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Placeholder: Key Features */}
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Fitur Utama</h2>
                        <p className="mt-4 text-lg text-gray-500">Manfaat utama menggunakan {product.label}.</p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mx-auto">
                                <CheckCircleIcon />
                            </div>
                            <h3 className="mt-5 text-lg font-medium text-gray-900">Manfaat 1</h3>
                            <p className="mt-2 text-base text-gray-500">Deskripsi singkat tentang bagaimana fitur ini memberikan manfaat pertama bagi pengguna.</p>
                        </div>
                        <div className="text-center">
                             <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mx-auto">
                                <CheckCircleIcon />
                            </div>
                            <h3 className="mt-5 text-lg font-medium text-gray-900">Manfaat 2</h3>
                            <p className="mt-2 text-base text-gray-500">Penjelasan lebih lanjut mengenai manfaat kedua yang membuat fitur ini unggul.</p>
                        </div>
                        <div className="text-center">
                             <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mx-auto">
                                <CheckCircleIcon />
                            </div>
                            <h3 className="mt-5 text-lg font-medium text-gray-900">Manfaat 3</h3>
                            <p className="mt-2 text-base text-gray-500">Detail tentang keuntungan ketiga dan bagaimana hal itu membantu mencapai tujuan.</p>
                        </div>
                    </div>

                    {/* Placeholder: How it Works */}
                    <div className="mt-24 text-center">
                         <h2 className="text-3xl font-extrabold text-gray-900">Bagaimana Cara Kerjanya</h2>
                         <p className="mt-4 text-lg text-gray-500">Langkah-langkah sederhana untuk mulai menggunakan {product.label}.</p>
                         <div className="mt-12 p-8 bg-gray-50 rounded-lg">
                             <p className="text-gray-600">(Konten visual atau langkah-langkah detail akan ditampilkan di sini)</p>
                         </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductPage;

