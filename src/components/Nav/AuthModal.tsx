import { Fragment } from 'react';
import type { FC } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { supabase } from '../../utils/supabaseClient';

// --- Tipe Properti Komponen ---
interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void; // PERUBAHAN 1: Tambahkan prop onLoginSuccess
}

// --- Komponen Ikon ---
const CloseIcon: FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg> );
const AppleIcon: FC = () => ( <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8.289 1.22C6.615.901 4.79.842 3.243 2.158a5.05 5.05 0 0 0-1.42 3.636c0 3.034 2.314 4.545 4.213 4.545 1.056 0 1.672-.43 2.533-.43.861 0 1.373.416 2.52.416 1.897 0 4.103-1.511 4.103-4.441 0-2.314-1.57-3.75-3.418-3.75-1.29 0-2.35.816-3.078.816-.729 0-1.58-.8-2.407-.8zM10.154 8.75c.16 1.215-.99 2.15-2.127 2.15-1.152 0-2.132-.92-2.3-2.135.176-.015.353-.023.53-.023.754 0 1.258.491 2.05.491.791 0 1.15-.491 1.67-.491a2.82 2.82 0 0 1 .127.008z"/></svg>);

// --- Komponen Modal Utama ---
const AuthModal: FC<AuthModalProps> = ({ isOpen, onClose, onLoginSuccess }) => { // PERUBAHAN 2: Terima prop onLoginSuccess
    
    const handleOAuthLogin = async (provider: 'google' | 'apple') => {
        const { error } = await supabase.auth.signInWithOAuth({ provider });
        if (error) {
            console.error(`Error logging in with ${provider}:`, error.message);
            alert(`Error: ${error.message}`);
        } else {
            // PERUBAHAN 3: Panggil onLoginSuccess saat login berhasil
            onLoginSuccess();
        }
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
                                        <button 
                                            onClick={() => handleOAuthLogin('google')}
                                            className="w-full flex items-center justify-center gap-x-3 rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-800 font-semibold transition-colors hover:bg-gray-50"
                                        >
                                            <img src="https://imagepng.org/wp-content/uploads/2019/08/google-icon-1.png" alt="Google" className="w-5 h-5" />
                                            Continue with Google
                                        </button>
                                        <button 
                                            onClick={() => handleOAuthLogin('apple')}
                                            className="w-full flex items-center justify-center gap-x-3 rounded-md border border-transparent bg-black px-5 py-3 text-white font-semibold transition-colors hover:bg-gray-800"
                                        >
                                            <AppleIcon />
                                            Continue with Apple
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