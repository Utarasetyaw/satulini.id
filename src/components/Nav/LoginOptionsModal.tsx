import { Fragment } from 'react';
import type { FC } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface LoginOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWeb2: () => void;
  onSelectWeb3: () => void;
}

const CloseIcon: FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg> );
const UserIcon: FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> );
const WalletIcon: FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"/><path d="M18 12.5a4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 1 0-9z"/></svg> );

const LoginOptionsModal: FC<LoginOptionsModalProps> = ({ isOpen, onClose, onSelectWeb2, onSelectWeb3 }) => {
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
                  Connect to Satulini
                </Dialog.Title>
                 <p className="mt-2 text-sm text-gray-500 text-center">
                  Pilih metode koneksi yang Anda inginkan.
                </p>
                <div className="mt-8 space-y-4">
                  <button onClick={onSelectWeb2} className="w-full flex items-center gap-x-4 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <UserIcon />
                    <div className="text-left">
                      <p className="font-semibold text-gray-800">Continue with Socials</p>
                      <p className="text-xs text-gray-500">Gunakan Google, Apple, dll.</p>
                    </div>
                  </button>
                  <button onClick={onSelectWeb3} className="w-full flex items-center gap-x-4 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <WalletIcon />
                    <div className="text-left">
                      <p className="font-semibold text-gray-800">Continue with Wallet</p>
                      <p className="text-xs text-gray-500">Gunakan MetaMask, Phantom, dll.</p>
                    </div>
                  </button>
                </div>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><CloseIcon /></button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default LoginOptionsModal;