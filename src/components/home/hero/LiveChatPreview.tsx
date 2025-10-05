import type { FC } from 'react';

// =================================================================================
// --- KOMPONEN PRATINJAU LIVE CHAT DENGAN GAYA SILUET ---
// =================================================================================

const ConversationItemSilhouette: FC<{ active?: boolean }> = ({ active }) => (
    <div className={`flex items-center p-3 rounded-lg ${active ? 'bg-purple-50' : ''}`}>
        <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
        <div className="ml-3 flex-grow min-w-0">
            <div className="flex justify-between items-center">
                <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
                <div className="h-3 w-10 bg-gray-200 rounded"></div>
            </div>
            <div className="h-3 w-4/5 bg-gray-200 rounded mt-2"></div>
        </div>
    </div>
);

const ChatBubbleSilhouette: FC<{ align?: 'left' | 'right' }> = ({ align = 'left' }) => (
    <div className={`flex my-2 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-xs p-3 rounded-lg ${align === 'right' ? 'bg-[#4d48d5]' : 'bg-gray-200'}`}>
            <div className={`h-3 w-32 ${align === 'right' ? 'bg-purple-300' : 'bg-gray-300'} rounded mb-1`}></div>
            <div className={`h-3 w-20 ${align === 'right' ? 'bg-purple-300' : 'bg-gray-300'} rounded`}></div>
        </div>
    </div>
);

export const LiveChatPreview: FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`w-full h-full flex bg-white rounded-2xl shadow-2xl overflow-hidden ${className}`}>
            {/* Kolom Kiri: Daftar Percakapan */}
            <div className="w-1/3 border-r border-gray-100 p-4 flex flex-col">
                <div className="h-10 w-full bg-gray-100 rounded-lg mb-4"></div>
                <div className="flex-grow overflow-y-auto space-y-2">
                    <ConversationItemSilhouette active />
                    <ConversationItemSilhouette />
                    <ConversationItemSilhouette />
                    <ConversationItemSilhouette />
                </div>
            </div>

            {/* Kolom Kanan: Jendela Chat */}
            <div className="w-2/3 flex flex-col">
                {/* Header Chat */}
                <div className="flex-shrink-0 flex items-center p-4 border-b border-gray-100">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="ml-3">
                        <div className="h-5 w-32 bg-gray-300 rounded"></div>
                        <div className="h-3 w-20 bg-gray-200 rounded mt-1"></div>
                    </div>
                </div>

                {/* Area Pesan */}
                <div className="flex-grow p-6 overflow-y-auto">
                    <ChatBubbleSilhouette align="left" />
                    <ChatBubbleSilhouette align="right" />
                    <ChatBubbleSilhouette align="left" />
                </div>

                {/* Input Pesan */}
                <div className="flex-shrink-0 p-4 border-t border-gray-100">
                    <div className="w-full h-12 bg-gray-100 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};