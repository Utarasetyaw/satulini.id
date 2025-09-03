import { Fragment, useState } from 'react';
import type { FC } from 'react';
import { Dialog, Transition } from '@headlessui/react';

// --- Tipe Properti Komponen ---
interface WalletConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// --- Komponen Ikon ---
const CloseIcon: FC = () => ( <svg xmlns="http://www.w.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg> );
const BackIcon: FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg> );

// --- DATA DIPERBARUI: Menggunakan link ikon baru dan daftar yang disederhanakan ---
const chainOptions = [
    { name: 'Sui', iconUrl: 'https://blog.sui.io/content/images/2023/04/Sui_Droplet_Logo_Blue-3.png' },
    { name: 'Solana', iconUrl: 'https://www.liblogo.com/img-logo/so2809s56c-solana-logo-solana-crypto-logo-png-file-png-all.png' },
    { name: 'Ethereum', iconUrl: 'https://logowik.com/content/uploads/images/ethereum-eth7803.logowik.com.webp' },
    { name: 'BNB Chain', iconUrl: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Binance-Coin-BNB-icon.png' },
];

const walletOptions = [
    { name: 'MetaMask', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg' },
    { name: 'Trust Wallet', iconUrl: 'https://s3.coinmarketcap.com/static/img/portraits/624abda1883bf23e6a46cb36.png' },
    { name: 'Coinbase Wallet', iconUrl: 'https://brandlogo.org/wp-content/uploads/2024/04/Coinbase-Icon.png' },
];

const ComingSoonBadge: FC = () => (
    <span className="ml-auto text-xs font-semibold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
        Coming Soon
    </span>
);

// --- Komponen Modal Utama ---
const WalletConnectModal: FC<WalletConnectModalProps> = ({ isOpen, onClose }) => {
    const [view, setView] = useState<'chains' | 'wallets'>('chains');

    const handleClose = () => {
        onClose();
        // Reset ke tampilan awal setelah modal ditutup
        setTimeout(() => setView('chains'), 300);
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={handleClose}>
                {/* Backdrop */}
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                
                                {view === 'chains' ? (
                                    <>
                                        <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-gray-900 text-center">
                                            Choose Network
                                        </Dialog.Title>
                                        <div className="mt-4 space-y-2">
                                            {chainOptions.map(chain => (
                                                <button key={chain.name} onClick={() => setView('wallets')} className="w-full flex items-center gap-x-4 p-3 rounded-xl hover:bg-gray-100 transition-colors">
                                                    <img src={chain.iconUrl} alt={`${chain.name} logo`} className="w-8 h-8 rounded-full object-contain" />
                                                    <span className="font-semibold text-gray-800">{chain.name}</span>
                                                    <ComingSoonBadge />
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="relative text-center">
                                            <button onClick={() => setView('chains')} className="absolute left-0 top-0.5 p-1 rounded-full hover:bg-gray-100 text-gray-500">
                                                <BackIcon />
                                            </button>
                                            <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-gray-900">
                                                Connect a Wallet
                                            </Dialog.Title>
                                        </div>
                                        <div className="mt-4 space-y-2">
                                            {walletOptions.map(wallet => (
                                                <button key={wallet.name} className="w-full flex items-center gap-x-4 p-3 rounded-xl hover:bg-gray-100 transition-colors">
                                                    <img src={wallet.iconUrl} alt={`${wallet.name} logo`} className="w-8 h-8 rounded-full object-contain" />
                                                    <span className="font-semibold text-gray-800">{wallet.name}</span>
                                                    <ComingSoonBadge />
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}

                                <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
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