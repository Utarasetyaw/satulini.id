// src/components/Navbar/components/TabletNav.tsx
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import { useLanguage } from '../../../context/LanguageContext';
import { MenuIcon, CloseIcon } from '../Icons';
import { VerticalMenu } from './VerticalMenu';
import logo from '../../../assets/Logo.png';

// Tipe untuk props yang diterima
interface TabletNavProps {
    openAuthModal: () => void;
    openWalletModal: () => void;
}

export const TabletNav: FC<TabletNavProps> = ({ openAuthModal, openWalletModal }) => {
    const { t } = useLanguage();

    // Tombol-tombol otentikasi
    const authButtons = (
        <>
            <button onClick={openAuthModal} className="block w-full text-center px-3 py-3 text-base font-semibold leading-7 text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-50">
                {t('preRegister')}
            </button>
            <button onClick={openWalletModal} className="block w-full text-center px-3 py-3 text-base font-semibold leading-7 text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-50">
                {t('preRegisterWeb3')}
            </button>
        </>
    );

    return (
        // Komponen ini hanya akan tampil di ukuran MD (tablet) ke atas dan hilang di LG (desktop) ke atas
        <nav className="relative hidden md:block lg:hidden">
            <Disclosure>
                {({ open, close }) => (
                    <div className="w-full rounded-2xl shadow-lg ring-1 bg-white/80 ring-black/5 backdrop-blur-lg">
                        {/* Bagian Navbar yang selalu terlihat */}
                        <div className="flex justify-between items-center h-16 px-6">
                            <Link to="/" onClick={open ? (() => close()) : undefined}>
                                <img src={logo} alt="Satulini Logo" className="h-8 w-auto" />
                            </Link>
                            <Disclosure.Button className="p-2 text-gray-600 rounded-full hover:bg-black/5">
                                <span className="sr-only">Toggle menu</span>
                                {open ? <CloseIcon /> : <MenuIcon />}
                            </Disclosure.Button>
                        </div>

                        {/* Panel Dropdown dengan Animasi */}
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform -translate-y-4 opacity-0"
                            enterTo="transform translate-y-0 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform translate-y-0 opacity-100"
                            leaveTo="transform -translate-y-4 opacity-0"
                        >
                            <Disclosure.Panel className="px-6 pb-6">
                                <div className="border-t border-gray-200 pt-4 flex flex-col gap-y-4">
                                    {/* Menggunakan kembali komponen menu vertikal */}
                                    <VerticalMenu closeMenu={close}/>
                                    
                                    {/* Bagian tombol-tombol */}
                                    <div className="border-t border-gray-200 pt-4 flex flex-col gap-y-3">
                                        {authButtons}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </div>
                )}
            </Disclosure>
        </nav>
    );
};