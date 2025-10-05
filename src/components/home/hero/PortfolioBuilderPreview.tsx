import React from 'react';
import type { FC } from 'react';
import { UserOutlined, AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

// =================================================================================
// --- KOMPONEN PRATINJAU PORTFOLIO BUILDER DENGAN GAYA SILUET ---
// =================================================================================

const SidebarItemSilhouette: FC<{ icon: React.ReactNode, active?: boolean }> = ({ icon, active }) => (
    <div className={`flex items-center p-3 rounded-lg ${active ? 'bg-purple-100' : ''}`}>
        <div className={`text-xl ${active ? 'text-[#4d48d5]' : 'text-gray-300'}`}>{icon}</div>
        <div className={`h-4 w-24 ml-3 ${active ? 'bg-purple-200' : 'bg-gray-200'} rounded`}></div>
    </div>
);

const ProjectCardSilhouette: FC = () => (
    <div className="w-full bg-white border border-gray-100 rounded-lg">
        <div className="w-full h-32 bg-gray-100 rounded-t-lg"></div>
        <div className="p-3">
            <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-3 w-1/2 bg-gray-100 rounded mt-2"></div>
        </div>
    </div>
);


export const PortfolioBuilderPreview: FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`w-full h-full flex bg-white rounded-2xl shadow-2xl overflow-hidden ${className}`}>
            {/* Kolom Kiri: Sidebar Editor */}
            <div className="w-1/4 border-r border-gray-100 p-4 flex flex-col bg-gray-50/50">
                <div className="h-8 w-3/4 bg-gray-200 rounded mb-6"></div>
                <div className="space-y-2">
                    <SidebarItemSilhouette icon={<UserOutlined />} active />
                    <SidebarItemSilhouette icon={<AppstoreOutlined />} />
                    <SidebarItemSilhouette icon={<MailOutlined />} />
                    <SidebarItemSilhouette icon={<SettingOutlined />} />
                </div>
            </div>

            {/* Kolom Kanan: Pratinjau Website */}
            <div className="w-3/4 flex flex-col p-6 overflow-y-auto">
                {/* Hero Section Website */}
                <div className="flex items-center mb-8">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex-shrink-0"></div>
                    <div className="ml-6">
                        <div className="h-8 w-64 bg-gray-200 rounded"></div>
                        <div className="h-4 w-80 bg-gray-100 rounded mt-2"></div>
                        <div className="h-4 w-72 bg-gray-100 rounded mt-1"></div>
                    </div>
                </div>

                {/* Galeri Proyek */}
                <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ProjectCardSilhouette />
                    <ProjectCardSilhouette />
                    <ProjectCardSilhouette />
                    <ProjectCardSilhouette />
                </div>
            </div>
        </div>
    );
};