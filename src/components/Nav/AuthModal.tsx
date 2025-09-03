import { Fragment } from 'react';
import type { FC } from 'react';
import { Dialog, Transition } from '@headlessui/react';

// --- Tipe Properti Komponen ---
interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// --- Komponen Ikon ---
const CloseIcon: FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg> );

const ComingSoonBadge: FC = () => (
    <span className="ml-auto text-xs font-semibold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
        Coming Soon
    </span>
);


// --- Komponen Modal Utama ---
const AuthModal: FC<AuthModalProps> = ({ isOpen, onClose }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-xl font-bold leading-6 text-gray-900 text-center">
                                    Sign In or Sign Up
                                </Dialog.Title>
                                <p className="mt-2 text-sm text-gray-500 text-center">
                                    Fitur registrasi akan segera hadir. Terima kasih atas kesabaran Anda!
                                </p>
                                <div className="mt-8 opacity-50 cursor-not-allowed">
                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="email" className="sr-only">Email</label>
                                            <input disabled type="email" name="email" id="email" className="w-full rounded-md bg-gray-100 border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500" placeholder="Enter your email" />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="sr-only">Password</label>
                                            <input disabled type="password" name="password" id="password" className="w-full rounded-md bg-gray-100 border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500" placeholder="Enter your password" />
                                        </div>
                                        <button disabled type="submit" className="w-full flex justify-center items-center rounded-md bg-purple-600 px-5 py-3 text-base font-semibold text-white">
                                            Continue
                                            <span className="ml-3 text-xs font-semibold text-purple-900 bg-purple-200 px-2 py-0.5 rounded-full">
                                                Coming Soon
                                            </span>
                                        </button>
                                    </form>
                                    <div className="relative my-6">
                                        <div className="absolute inset-0 flex items-center" aria-hidden="true"><div className="w-full border-t border-gray-300" /></div>
                                        <div className="relative flex justify-center text-sm"><span className="bg-white px-2 text-gray-500">OR</span></div>
                                    </div>
                                    <div className="space-y-3">
                                        <button disabled className="w-full flex items-center justify-center gap-x-3 rounded-md bg-gray-100 border border-gray-300 px-5 py-3 text-gray-500 font-semibold">
                                            <img src="https://imagepng.org/wp-content/uploads/2019/08/google-icon-1.png" alt="Google" className="w-5 h-5" />
                                            Continue with Google
                                            <ComingSoonBadge />
                                        </button>
                                        <button disabled className="w-full flex items-center justify-center gap-x-3 rounded-md bg-gray-100 border border-gray-300 px-5 py-3 text-gray-500 font-semibold">
                                            <img src="https://www.freeiconspng.com/uploads/apple-icon-4.png" alt="Apple" className="w-5 h-5" />
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

