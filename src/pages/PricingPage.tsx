import React, { useState, Fragment, useMemo } from 'react';
import type { FC, FormEvent } from 'react';
import { Dialog, Transition, Switch } from '@headlessui/react';

// --- Icon Components (tidak berubah) ---
const CloseIcon: FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg> );

// =================================================================================
// DATA & TIPE UNTUK FITUR KUSTOM
// =================================================================================
interface Feature {
    id: string;
    name: string;
    price: number;
    isAi: boolean;
}

// --- Data untuk Paket Bisnis ---
const businessFeatures: Feature[] = [
    { id: 'b-ecommerce', name: 'AI Auto Builder E-commerce', price: 100000, isAi: true },
    { id: 'b-erp', name: 'ERP (Enterprise Resource Planning)', price: 50000, isAi: false },
    { id: 'b-pos', name: 'POS (Point of Sale)', price: 50000, isAi: false },
    { id: 'b-kol', name: 'KOL Management', price: 50000, isAi: false },
    { id: 'b-finance', name: 'Finance Analyst & Report', price: 50000, isAi: false },
    { id: 'b-chat', name: 'Live Chat', price: 50000, isAi: false },
    { id: 'b-audit', name: 'Auto Audit with Blockchain', price: 50000, isAi: false },
    { id: 'b-seo', name: 'SEO Management', price: 50000, isAi: false },
];
const BUSINESS_BASE_PRICE = 50000;

// --- Data untuk Paket Personal ---
const personalFeatures: Feature[] = [
    { id: 'p-portfolio', name: 'AI Web Portfolio Builder', price: 75000, isAi: true },
    { id: 'p-affiliate', name: 'Affiliate Marketing', price: 30000, isAi: false },
    { id: 'p-products', name: 'Sell Products & Services', price: 30000, isAi: false },
    { id: 'p-marketing', name: 'Digital Marketing Tools', price: 30000, isAi: false },
    { id: 'p-tracking', name: 'Company Score Tracking', price: 40000, isAi: false },
    { id: 'p-funding', name: 'Funding Transparency', price: 40000, isAi: false },
    { id: 'p-merger', name: 'Acquisition and Merger', price: 40000, isAi: false },
    { id: 'p-social', name: 'Social Media Integration', price: 30000, isAi: false },
];
const PERSONAL_BASE_PRICE = 25000;

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
};

// =================================================================================
// WAITING LIST MODAL COMPONENT (tidak ada perubahan)
// =================================================================================
const WaitingListModal: FC<{
    isOpen: boolean, 
    onClose: () => void, 
    planDetails: string,
}> = ({ isOpen, onClose, planDetails }) => { /* ... kode modal tidak berubah ... */ };

// =================================================================================
// --- KOMPONEN KUSTOMISASI PAKET (Bisa dipakai ulang) ---
// =================================================================================
const CustomPackageBuilder: FC<{
    title: string;
    subtitle: string;
    basePrice: number;
    availableFeatures: Feature[];
    onBuildPackage: (details: string) => void;
}> = ({ title, subtitle, basePrice, availableFeatures, onBuildPackage }) => {
    
    const [selectedFeatures, setSelectedFeatures] = useState<Record<string, boolean>>({
        [availableFeatures[0].id]: true, // Aktifkan fitur pertama secara default
    });

    const handleFeatureToggle = (featureId: string) => {
        setSelectedFeatures(prev => ({ ...prev, [featureId]: !prev[featureId] }));
    };

    const totalPrice = useMemo(() => {
        const featuresPrice = availableFeatures.reduce((total, feature) => {
            return selectedFeatures[feature.id] ? total + feature.price : total;
        }, 0);
        return basePrice + featuresPrice;
    }, [selectedFeatures]);

    const handleSubmit = () => {
        const chosenFeatures = availableFeatures
            .filter(f => selectedFeatures[f.id])
            .map(f => f.name)
            .join(', ');
        const details = `${title} (${formatPrice(totalPrice)}/bulan) dengan fitur: ${chosenFeatures}`;
        onBuildPackage(details);
    };
    
    return (
        <div className="mt-20">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{title}</h2>
            <p className="text-lg text-gray-500 max-w-3xl mb-10">{subtitle}</p>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Kolom Kiri: Pilihan Fitur */}
                <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Pilih Fitur Tambahan (Add-ons)</h3>
                    <ul className="space-y-4">
                        {availableFeatures.map((feature) => (
                            <li key={feature.id} className={`p-4 rounded-lg transition-all ${selectedFeatures[feature.id] ? 'bg-purple-50' : 'bg-gray-50'}`}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className={`font-semibold ${selectedFeatures[feature.id] ? 'text-purple-800' : 'text-gray-800'}`}>{feature.name}{feature.isAi && <span className="ml-2 text-xs font-bold text-purple-600">(AI)</span>}</p>
                                        <p className={`text-sm ${selectedFeatures[feature.id] ? 'text-purple-600' : 'text-gray-500'}`}>{formatPrice(feature.price)} / bulan</p>
                                    </div>
                                    <Switch checked={selectedFeatures[feature.id] || false} onChange={() => handleFeatureToggle(feature.id)} className={`${selectedFeatures[feature.id] ? 'bg-purple-600' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}><span className={`${selectedFeatures[feature.id] ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white`} /></Switch>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Kolom Kanan: Ringkasan Harga */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 p-8 bg-white border border-gray-200 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-900 text-center">Ringkasan Harga</h3>
                        <ul className="mt-6 space-y-3 text-sm">
                            <li className="flex justify-between"><span className="text-gray-600">Platform Dasar</span><span className="font-medium">{formatPrice(basePrice)}</span></li>
                            {availableFeatures.map(feature => selectedFeatures[feature.id] && (<li key={feature.id} className="flex justify-between"><span className="text-gray-600">{feature.name}</span><span className="font-medium">+{formatPrice(feature.price)}</span></li>))}
                        </ul>
                        <div className="mt-6 pt-6 border-t"><p className="text-gray-600">Total per Bulan</p><p className="mt-2 text-4xl font-extrabold text-gray-900">{formatPrice(totalPrice)}</p></div>
                        <button onClick={handleSubmit} className="mt-8 block w-full py-3 px-6 rounded-md text-center font-medium text-white bg-purple-600 hover:bg-purple-700">Join Waiting List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


// =================================================================================
// --- KOMPONEN UTAMA PRICING PAGE ---
// =================================================================================
const PricingPage: FC = () => {
    const [isWaitingListModalOpen, setWaitingListModalOpen] = useState(false);
    const [modalPlanDetails, setModalPlanDetails] = useState('');

    const openModal = (details: string) => {
        setModalPlanDetails(details);
        setWaitingListModalOpen(true);
    };

    return (
        <>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                    {/* Title */}
                    <div className="sm:flex sm:flex-col sm:items-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center tracking-tight">
                            Pilihan Paket Fleksibel
                        </h1>
                        <p className="mt-5 text-lg sm:text-xl text-gray-500 sm:text-center max-w-3xl">
                            Bayar hanya untuk fitur yang Anda butuhkan. Bangun paket Bisnis atau Personal Anda sendiri.
                        </p>
                    </div>
                    
                    <CustomPackageBuilder 
                        title="Untuk Bisnis"
                        subtitle="Bangun paket enterprise Anda dengan memilih fitur-fitur canggih yang dibutuhkan."
                        basePrice={BUSINESS_BASE_PRICE}
                        availableFeatures={businessFeatures}
                        onBuildPackage={openModal}
                    />

                    <div className="my-24 border-t border-gray-200"></div>

                     <CustomPackageBuilder 
                        title="Untuk Personal"
                        subtitle="Kembangkan brand dan investasi personal Anda dengan fitur-fitur pilihan."
                        basePrice={PERSONAL_BASE_PRICE}
                        availableFeatures={personalFeatures}
                        onBuildPackage={openModal}
                    />
                </div>
            </div>

            <WaitingListModal isOpen={isWaitingListModalOpen} onClose={() => setWaitingListModalOpen(false)} planDetails={modalPlanDetails} />
        </>
    );
};

export default PricingPage;