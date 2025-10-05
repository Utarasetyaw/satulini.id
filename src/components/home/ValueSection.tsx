import React from 'react';
import type { FC } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ShareAltOutlined, LockOutlined, SyncOutlined, PlaySquareOutlined, PictureOutlined, MessageOutlined, RobotOutlined } from '@ant-design/icons';

// =================================================================================
// --- KOMPONEN SILUET AI YANG BARU DENGAN INTERAKSI UI & ANIMASI ---
// =================================================================================

const AiSilhouette: FC = () => (
    <div className="relative w-full max-w-2xl mx-auto aspect-video flex items-center justify-center p-8 overflow-hidden">
        {/* Latar Belakang Lingkaran Ungu (Optional, untuk kedalaman) */}
        <div className="absolute inset-0 bg-purple-50/20 rounded-2xl scale-110 -z-10 animate-fade-in-up [animation-delay:0.2s]"></div>

        {/* Simulasi Halaman Web/Dashboard di Kiri */}
        <div className="relative w-1/2 h-full bg-white rounded-xl shadow-lg border border-gray-100 p-4 transform -translate-x-1/4 animate-fade-in-up [animation-delay:0s]">
            {/* Header / Nav */}
            <div className="flex items-center space-x-1 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            <div className="h-2 w-3/4 bg-gray-200 rounded mb-4"></div> {/* Judul */}
            <div className="h-10 w-full bg-purple-100 rounded mb-4 animate-pulse-fast [animation-delay:0.5s]"></div> {/* Primary Button */}
            
            {/* Konten Placeholder */}
            <div className="h-3 w-5/6 bg-gray-100 rounded mb-2"></div>
            <div className="h-3 w-4/5 bg-gray-100 rounded mb-6"></div>
            
            {/* Image Placeholder */}
            <div className="relative w-full h-24 bg-gray-50 rounded-lg flex items-center justify-center mb-6">
                <PictureOutlined className="text-4xl text-gray-300" />
            </div>

            {/* Konten Teks Lanjutan */}
            <div className="h-3 w-full bg-gray-100 rounded mb-2"></div>
            <div className="h-3 w-2/3 bg-gray-100 rounded"></div>
        </div>

        {/* Blok AI di Kanan */}
        <div className="relative w-40 h-40 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-purple-100 transform translate-x-1/4 animate-fade-in-up [animation-delay:0.2s]">
            <RobotOutlined className="text-6xl text-purple-600 animate-bounce-slow" />
        </div>

        {/* Garis Koneksi dan Elemen Interaktif */}
        {/* Garis 1: Video */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100">
             <path d="M 40 25 C 60 20, 75 25, 80 30" fill="none" stroke="#a78bfa" strokeWidth="2" className="animate-dash-line" style={{ animationDelay: '0.5s' }} />
        </svg>
        <div className="absolute top-[20%] right-[30%] w-16 h-12 bg-white rounded-lg shadow-md flex items-center justify-center border border-purple-100 animate-slide-in-right [animation-delay:0.5s]">
            <PlaySquareOutlined className="text-3xl text-purple-500" />
        </div>

        {/* Garis 2: Gambar */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100">
             <path d="M 40 50 C 60 45, 75 50, 80 55" fill="none" stroke="#a78bfa" strokeWidth="2" className="animate-dash-line" style={{ animationDelay: '1s' }} />
        </svg>
        <div className="absolute top-[45%] right-[30%] w-16 h-12 bg-white rounded-lg shadow-md flex items-center justify-center border border-purple-100 animate-slide-in-right [animation-delay:1s]">
            <PictureOutlined className="text-3xl text-purple-500" />
        </div>

        {/* Garis 3: Chat */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100">
             <path d="M 40 75 C 60 80, 75 75, 80 70" fill="none" stroke="#a78bfa" strokeWidth="2" className="animate-dash-line" style={{ animationDelay: '1.5s' }} />
        </svg>
        <div className="absolute bottom-[20%] right-[30%] w-16 h-12 bg-white rounded-lg shadow-md flex items-center justify-center border border-purple-100 animate-slide-in-right [animation-delay:1.5s]">
            <MessageOutlined className="text-3xl text-purple-500" />
        </div>
    </div>
);

// --- BlockchainSilhouette tidak berubah ---
const BlockchainSilhouette: FC = () => {
    const Block = ({ index, isMining }: { index: number, isMining?: boolean }) => (
        <div className={`w-48 h-48 bg-white border ${isMining ? 'border-dashed border-purple-400' : 'border-gray-200'} rounded-lg p-3 flex flex-col shadow-md animate-fade-in-up`} style={{ animationDelay: `${index * 200}ms` }}>
            <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                <span>Blok #{123 + index}</span>
                {isMining ? <SyncOutlined spin className="text-purple-500" /> : <LockOutlined />}
            </div>
            <div className="flex-grow flex flex-col justify-center space-y-2 text-xs font-mono">
                <div>
                    <span className="text-gray-400">Tx Hash:</span>
                    <div className="h-2 w-full bg-gray-100 rounded mt-1"></div>
                </div>
                <div>
                    <span className="text-gray-400">Timestamp:</span>
                    <div className="h-2 w-3/4 bg-gray-100 rounded mt-1"></div>
                </div>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded"></div>
        </div>
    );

    return (
        <div className="w-full flex items-center justify-center py-10">
            <div className="flex items-center">
                <Block index={0} />
                <ShareAltOutlined className="text-3xl text-gray-300 transform -rotate-45 mx-2 animate-pulse [animation-delay:200ms]" />
                <Block index={1} />
                <ShareAltOutlined className="text-3xl text-gray-300 transform -rotate-45 mx-2 animate-pulse [animation-delay:400ms]" />
                <Block index={2} isMining />
            </div>
        </div>
    );
};


// =================================================================================
// --- KOMPONEN UTAMA dengan Layout Vertikal ---
// =================================================================================

export const ValueSection: FC = () => {
  const { t } = useLanguage();

  const featureData = [
    { 
      label: t('feature1Label'), 
      title: t('feature1Title'), 
      description: t('feature1Description'), 
      visual: <AiSilhouette />,
    },
    { 
      label: t('feature2Label'), 
      title: t('feature2Title'), 
      description: t('feature2Description'), 
      visual: <BlockchainSilhouette />,
    },
  ];

  return (
    <div className="relative bg-white pt-24 pb-32 overflow-hidden">
      <div className="text-center mb-16">
        <p className="font-semibold leading-7 text-purple-600">{t('featureSectionTagline')}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">{t('featureSectionTitle')}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">{t('featureSectionSubtitle')}</p>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-32">
            {featureData.map((feature) => (
              <div key={feature.label} className="flex flex-col items-center text-center"> 
                <div className="w-full">
                  {feature.visual}
                </div>
                <div className="w-full max-w-3xl mt-12">
                  <p className="font-semibold leading-7 text-purple-600">{feature.label}</p>
                  <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">{feature.title}</h3>
                  <p className="mt-6 text-lg leading-8 text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};