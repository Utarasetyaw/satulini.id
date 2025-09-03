import type { FC } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

// --- Impor Komponen Halaman dan Layout ---
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import ProductPage from './pages/ProductPage'; // <-- Pastikan ini diimpor

// =================================================================================
// KOMPONEN MAIN LAYOUT
// Ini adalah kerangka untuk semua halaman publik Anda
// =================================================================================
const MainLayout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      {/* Padding-top responsif untuk memberi ruang di bawah Navbar yang 'fixed' */}
      <main className="flex-grow pt-20 sm:pt-24">
        <Outlet /> {/* Di sini konten halaman (Home, Pricing, dll) akan dirender */}
      </main>
      <Footer />
    </div>
  );
};


// =================================================================================
// KOMPONEN APLIKASI UTAMA
// Ini adalah pusat dari routing aplikasi Anda
// =================================================================================
const App: FC = () => {
  // <BrowserRouter> sudah ada di main.tsx, jadi tidak perlu di sini
  return (
      <Routes>
        {/* === Rute Publik (Semua yang menggunakan Navbar & Footer) === */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<PricingPage />} />
          
          {/* Rute dinamis untuk halaman detail produk */}
          <Route path="product/:slug" element={<ProductPage />} />

        </Route>

        {/* === Rute Halaman Tidak Ditemukan (404) === */}
        <Route 
          path="*" 
          element={
            <div className="flex items-center justify-center h-screen bg-gray-100">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-purple-600">404</h1>
                <p className="text-2xl font-medium text-gray-800 mt-4">Halaman Tidak Ditemukan</p>
                <p className="text-gray-500 mt-2">Maaf, halaman yang Anda cari tidak ada.</p>
                <Link to="/" className="mt-6 inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 transition">
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          } 
        />
      </Routes>
  );
};

export default App;

