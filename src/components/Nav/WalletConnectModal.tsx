import { Fragment, useState, useEffect } from 'react';
import type { FC } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { supabase } from '../../utils/supabaseClient';

// --- Tipe Properti Komponen ---
interface WalletConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

// --- Komponen Ikon ---
const CloseIcon: FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg> );

// --- Komponen Utama Modal ---
const WalletConnectModal: FC<WalletConnectModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { connect: connectSol, connected: solConnected, select: selectWallet } = useWallet();

  // Reset error setiap kali modal dibuka
  useEffect(() => {
    if (isOpen) {
      setError(null);
    }
  }, [isOpen]);

  const handleSolanaLogin = async () => {
    setError(null);
    setIsLoading(true);
    try {
      // Jika wallet belum terhubung, pilih Phantom dan hubungkan
      if (!solConnected) {
        selectWallet('Phantom');
        await connectSol().catch(() => {
          // Menangkap error jika pengguna menolak koneksi di pop-up wallet
          throw new Error("Koneksi wallet dibatalkan.");
        });
      }
      
      // Lanjutkan dengan proses Sign-In with Web3 dari Supabase
      const { error } = await supabase.auth.signInWithWeb3({
        chain: 'solana',
        statement: 'Selamat datang di Satulini! Ini adalah verifikasi untuk login.',
      });

      if (error) throw error;
      
      // Jika berhasil, panggil onLoginSuccess
      onLoginSuccess();

    } catch (err: any) {
      setError(err.message || 'Gagal login dengan Solana.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => !isLoading && onClose()}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 sm:p-8 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-xl font-bold leading-6 text-gray-900 text-center">
                  Connect & Sign In
                </Dialog.Title>
                 <p className="mt-2 text-sm text-gray-500 text-center">
                  Buktikan kepemilikan wallet Anda untuk login.
                </p>

                <div className="mt-8 space-y-4">
                  <button
                    onClick={handleSolanaLogin}
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-x-4 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                  >
                     <img src="https://avatars.githubusercontent.com/u/78793368?s=280&v=4" alt="Phantom" className="h-8 w-8 rounded-full"/>
                     <div className="text-left flex-grow">
                        <p className="font-semibold text-gray-800">
                          {isLoading ? 'Menunggu...' : 'Sign In with Phantom'}
                        </p>
                        <p className="text-xs text-gray-500">Jaringan Solana</p>
                    </div>
                  </button>
                </div>
                
                {error && (
                    <div className="mt-4 text-center text-sm text-red-600 bg-red-100 p-3 rounded-lg">
                        {error}
                    </div>
                )}

                <button onClick={onClose} disabled={isLoading} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
                  <span className="sr-only">Close</span>
                  <CloseIcon />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default WalletConnectModal;