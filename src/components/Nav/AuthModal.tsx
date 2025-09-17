import { Fragment } from 'react';
import type { FC } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { supabase } from '../../utils/supabaseClient';

// --- Tipe Properti Komponen ---
interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  // onLoginSuccess tidak lagi dibutuhkan di sini
}

// --- Komponen Ikon ---
const CloseIcon: FC = () => ( <svg xmlns="http://www.w.3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg> );
const TwitterIcon: FC = () => ( <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 5.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>);
const FacebookIcon: FC = () => ( <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0 0 3.604 0 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H11.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>);
const AppleIcon: FC = () => ( <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8.289 1.22C6.615.901 4.79.842 3.243 2.158a5.05 5.05 0 0 0-1.42 3.636c0 3.034 2.314 4.545 4.213 4.545 1.056 0 1.672-.43 2.533-.43.861 0 1.373.416 2.52.416 1.897 0 4.103-1.511 4.103-4.441 0-2.314-1.57-3.75-3.418-3.75-1.29 0-2.35.816-3.078.816-.729 0-1.58-.8-2.407-.8zM10.154 8.75c.16 1.215-.99 2.15-2.127 2.15-1.152 0-2.132-.92-2.3-2.135.176-.015.353-.023.53-.023.754 0 1.258.491 2.05.491.791 0 1.15-.491 1.67-.491a2.82 2.82 0 0 1 .127.008z"/></svg>);
const ComingSoonBadge: FC = () => (
    <span className="ml-auto text-xs font-semibold text-gray-600 bg-gray-200 px-2 py-0.5 rounded-full">
        Coming Soon
    </span>
);

// --- Komponen Modal Utama ---
const AuthModal: FC<AuthModalProps> = ({ isOpen, onClose }) => {
    
    const handleOAuthLogin = (provider: 'google' | 'twitter') => {
        // Fungsi ini hanya memulai proses redirect.
        // Penanganan sukses akan dilakukan oleh listener di Navbar.tsx
        supabase.auth.signInWithOAuth({ provider });
        onClose(); // Langsung tutup modal untuk pengalaman pengguna yang lebih baik
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-xl font-bold leading-6 text-gray-900 text-center">
                                    Continue with Socials
                                </Dialog.Title>
                                <p className="mt-2 text-sm text-gray-500 text-center">
                                    Pilih provider untuk melanjutkan.
                                </p>
                                <div className="mt-8">
                                    <div className="space-y-3">
                                        {/* --- Tombol Aktif --- */}
                                        <button 
                                            onClick={() => handleOAuthLogin('google')}
                                            className="w-full flex items-center justify-center gap-x-3 rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-800 font-semibold transition-colors hover:bg-gray-50"
                                        >
                                            <img src="https://imagepng.org/wp-content/uploads/2019/08/google-icon-1.png" alt="Google" className="w-5 h-5" />
                                            Continue with Google
                                        </button>
                                        
                                        <button 
                                            onClick={() => handleOAuthLogin('twitter')}
                                            className="w-full flex items-center justify-center gap-x-3 rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-800 font-semibold transition-colors hover:bg-gray-50"
                                        >
                                            <TwitterIcon />
                                            Continue with Twitter
                                        </button>
                                        
                                        {/* --- Tombol Coming Soon --- */}
                                        <button
                                            disabled
                                            className="w-full flex items-center justify-center gap-x-3 rounded-md border border-gray-300 bg-gray-50 px-5 py-3 text-gray-500 font-semibold opacity-60 cursor-not-allowed"
                                        >
                                            <FacebookIcon />
                                            Continue with Facebook
                                            <ComingSoonBadge />
                                        </button>

                                        <button
                                            disabled
                                            className="w-full flex items-center justify-center gap-x-3 rounded-md border border-gray-300 bg-gray-50 px-5 py-3 text-gray-500 font-semibold opacity-60 cursor-not-allowed"
                                        >
                                            <AppleIcon />
                                            Continue with Apple
                                            <ComingSoonBadge />
                                        </button>
                                    </div>
                                </div>
                                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
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

export default AuthModal;