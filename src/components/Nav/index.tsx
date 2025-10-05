// src/components/Navbar/index.tsx
'use client'; 

import { useState, useEffect } from 'react';
import type { FC } from 'react';

// Impor komponen-komponen Nav yang sudah dipecah
import { DesktopNav } from './components/DesktopNav';
import { TabletNav } from './components/TabletNav';
import { MobileNav } from './components/MobileNav';

// Impor utilitas dan modal
import { supabase } from '../../utils/supabaseClient';
import AuthModal from './AuthModal';
import WalletConnectModal from './WalletConnectModal';
import SuccessModal from './SuccessModal';

const Navbar: FC = () => {
    // DIHAPUS: State untuk isMobileMenuOpen tidak lagi diperlukan di sini
    // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // State untuk modal tetap di sini
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    // Semua fungsi untuk mengontrol state (handlers) tetap di sini
    const openAuthModal = () => setIsAuthModalOpen(true);
    const openWalletModal = () => setIsWalletModalOpen(true);
    const closeAuthModal = () => setIsAuthModalOpen(false);
    const closeWalletModal = () => setIsWalletModalOpen(false);
    const closeSuccessModal = () => { setIsSuccessModalOpen(false); sessionStorage.setItem('hasSeenLoginSuccess', 'true'); };
    const handleWalletLoginSuccess = () => { closeWalletModal(); setTimeout(() => { setIsSuccessModalOpen(true); }, 300); };
    
    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN' && session && !sessionStorage.getItem('hasSeenLoginSuccess')) {
                setIsAuthModalOpen(false); setIsWalletModalOpen(false); setIsSuccessModalOpen(true);
            }
            if (event === 'SIGNED_OUT') { sessionStorage.removeItem('hasSeenLoginSuccess'); }
        });
        return () => { authListener?.subscription?.unsubscribe(); };
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-40 p-4">
            <div className="max-w-7xl mx-auto">
                <DesktopNav 
                    openAuthModal={openAuthModal} 
                    openWalletModal={openWalletModal} 
                />
                
                <TabletNav 
                    openAuthModal={openAuthModal} 
                    openWalletModal={openWalletModal} 
                />
                
                {/* DIUBAH: Props untuk MobileNav disederhanakan */}
                <MobileNav 
                    openAuthModal={openAuthModal} 
                    openWalletModal={openWalletModal}
                />
            </div>
            
            {/* Modals tetap di sini */}
            <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
            <WalletConnectModal isOpen={isWalletModalOpen} onClose={closeWalletModal} onLoginSuccess={handleWalletLoginSuccess} />
            <SuccessModal isOpen={isSuccessModalOpen} onClose={closeSuccessModal} />
        </header>
    );
};

export default Navbar;