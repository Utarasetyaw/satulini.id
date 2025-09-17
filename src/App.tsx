import type { FC } from 'react';
import { useMemo } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

// --- Impor Komponen Halaman dan Layout ---
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import ProductPage from './pages/ProductPage';

// --- Impor semua library untuk Wallet ---
// Solana
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';

// Ethereum
// PERBAIKAN: Menghapus tanda hubung ekstra dari nama paket
import { Web3ReactProvider } from '@web3-react/core'; 
import { Web3Provider } from '@ethersproject/providers';

// =================================================================================
// KONFIGURASI DAN HELPER
// =================================================================================

// --- Helper untuk Ethereum (MetaMask) ---
function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

// =================================================================================
// KOMPONEN MAIN LAYOUT
// =================================================================================
const MainLayout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-20 sm:pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};


// =================================================================================
// KOMPONEN APLIKASI UTAMA
// =================================================================================
const App: FC = () => {
  // --- Konfigurasi untuk Solana Wallet Provider ---
  const network = WalletAdapterNetwork.Devnet; 
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    [network]
  );

  return (
    // Membungkus seluruh aplikasi dengan Wallet Provider
    <Web3ReactProvider getLibrary={getLibrary}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
        
          {/* Struktur routing Anda */}
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="product/:slug" element={<ProductPage />} />
            </Route>

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
          
        </WalletProvider>
      </ConnectionProvider>
    </Web3ReactProvider>
  );
};

export default App;