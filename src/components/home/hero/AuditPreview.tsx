import type { FC } from 'react';
import { CheckCircleFilled, LinkOutlined } from '@ant-design/icons';

// =================================================================================
// --- KOMPONEN PRATINJAU AUDIT DENGAN GAYA SILUET ---
// =================================================================================

const AuditStatCardSilhouette: FC = () => (
    <div className="p-4 bg-purple-50 rounded-lg text-center">
        <div className="h-8 w-1/2 bg-purple-100 rounded mx-auto mb-2"></div>
        <div className="h-4 w-3/4 bg-gray-100 rounded mx-auto"></div>
    </div>
);

const AuditTableRowSilhouette: FC = () => (
    <div className="flex w-full py-4 border-b border-gray-100 items-center">
        <div className="w-1/4 pr-2"><div className="h-4 bg-gray-100 rounded"></div></div>
        <div className="w-1/4 pr-2"><div className="h-4 bg-gray-100 rounded"></div></div>
        <div className="w-1/4 pr-2"><div className="h-4 bg-gray-100 rounded"></div></div>
        <div className="w-1/4 pr-2 flex items-center justify-center">
            <CheckCircleFilled style={{ color: '#a0aec0' }} className="mr-2" />
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
        </div>
    </div>
);

const BlockchainStepSilhouette: FC = () => (
    <div className="flex flex-col items-start px-2 relative">
        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center border-2 border-[#4d48d5]/50">
            <LinkOutlined style={{ color: '#4d48d5', opacity: 0.6 }} />
        </div>
        <div className="ml-2 -mt-4 pl-8"> {/* Adjusted margin and padding */}
            <div className="h-4 w-24 bg-gray-100 rounded mb-1"></div>
            <div className="h-3 w-32 bg-gray-50 rounded"></div>
        </div>
    </div>
);


export const AuditPreview: FC<{ className?: string }> = ({ className }) => {
    // Definisikan warna utama langsung di dalam kelas Tailwind untuk konsistensi
    const purpleBg = 'bg-[#4d48d5]';

    return (
        <div className={`w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col ${className}`}>
            {/* Header */}
            <div className="flex justify-between items-start flex-shrink-0 mb-6">
                <div>
                    <div className="h-8 w-72 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-96 bg-gray-100 rounded"></div>
                </div>
                <div className={`w-36 h-10 ${purpleBg} rounded-lg text-white flex items-center justify-center`}>
                    <div className="h-4 w-24 bg-purple-200 rounded"></div>
                </div>
            </div>

            {/* Statistik */}
            <div className="grid grid-cols-3 gap-4 mb-6 flex-shrink-0">
                <AuditStatCardSilhouette />
                <AuditStatCardSilhouette />
                <AuditStatCardSilhouette />
            </div>

            {/* Blockchain Visualizer */}
            <div className="flex-grow flex flex-col space-y-6 overflow-y-auto">
                <div className="bg-white border border-gray-100 rounded-lg p-4">
                    <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>
                    <div className="relative flex flex-col space-y-8 py-4">
                        <BlockchainStepSilhouette />
                        <div className="absolute left-7 top-10 w-0.5 h-full bg-gray-200 -z-10"></div> {/* Vertical line */}
                        <BlockchainStepSilhouette />
                        <BlockchainStepSilhouette />
                    </div>
                </div>

                {/* Audit Trail Table */}
                <div className="bg-white border border-gray-100 rounded-lg p-4">
                    <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>
                    {/* Header Tabel */}
                    <div className="flex w-full pb-3 text-gray-400 font-medium text-sm">
                        <div className="w-1/4 pr-2">Tx Hash</div>
                        <div className="w-1/4 pr-2">Timestamp</div>
                        <div className="w-1/4 pr-2">Aksi</div>
                        <div className="w-1/4 pr-2 text-center">Status</div>
                    </div>
                    <AuditTableRowSilhouette />
                    <AuditTableRowSilhouette />
                </div>
            </div>
        </div>
    );
};