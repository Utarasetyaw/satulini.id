import type { FC } from 'react';
import { ArrowUpOutlined, CheckCircleOutlined } from '@ant-design/icons';

// =================================================================================
// --- KOMPONEN PRATINJAU SEO DENGAN GAYA SILUET ---
// =================================================================================

const KeywordTableRow: FC = () => (
    <div className="flex w-full py-4 border-b border-gray-100 items-center">
        <div className="w-2/5 pr-2"><div className="h-4 bg-gray-100 rounded"></div></div>
        <div className="w-1/5 pr-2 flex justify-center"><ArrowUpOutlined className="text-green-400" /></div>
        <div className="w-1/5 pr-2 flex justify-center"><div className="h-4 w-1/2 bg-gray-200 rounded"></div></div>
        <div className="w-1/5 pr-2 flex justify-center"><div className="h-4 w-1/2 bg-gray-200 rounded"></div></div>
    </div>
);

export const SeoPreview: FC<{ className?: string }> = ({ className }) => {
    const purpleColor = '#4d48d5';

    return (
        <div className={`w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col ${className}`}>
            {/* Header */}
            <div className="flex-shrink-0 mb-6">
                <div className="h-8 w-48 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-full bg-gray-100 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-100 rounded mt-1"></div>
            </div>

            {/* Konten Utama */}
            <div className="w-full flex-grow grid grid-cols-3 grid-rows-2 gap-6">
                {/* Site Audit Card */}
                <div className="col-span-3 lg:col-span-2 row-span-1 bg-white border border-gray-100 rounded-lg p-6 flex items-center">
                    <div className="flex-shrink-0">
                        <div style={{borderColor: purpleColor, borderWidth: '12px'}} className="w-32 h-32 rounded-full flex items-center justify-center bg-purple-50">
                            <div className="h-10 w-16 bg-purple-100 rounded"></div>
                        </div>
                    </div>
                    <div className="ml-6">
                        <div className="h-6 w-32 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 w-48 bg-gray-100 rounded"></div>
                        <div className="h-4 w-40 bg-gray-100 rounded mt-1"></div>
                    </div>
                </div>

                {/* On-Page Checklist */}
                <div className="col-span-3 lg:col-span-1 row-span-1 bg-white border border-gray-100 rounded-lg p-6">
                    <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
                    <div className="space-y-3">
                        <div className="flex items-center"><CheckCircleOutlined className="text-green-400 mr-2" /><div className="h-4 w-full bg-gray-100 rounded"></div></div>
                        <div className="flex items-center"><CheckCircleOutlined className="text-green-400 mr-2" /><div className="h-4 w-5/6 bg-gray-100 rounded"></div></div>
                        <div className="flex items-center"><CheckCircleOutlined className="text-orange-400 mr-2" /><div className="h-4 w-full bg-gray-100 rounded"></div></div>
                    </div>
                </div>

                {/* Keyword Performance */}
                <div className="col-span-3 row-span-1 bg-white border border-gray-100 rounded-lg p-6">
                     <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>
                     <div className="flex w-full pb-3 text-gray-400 font-medium text-sm">
                        <div className="w-2/5 pr-2">Kata Kunci</div>
                        <div className="w-1/5 pr-2 text-center">Peringkat</div>
                        <div className="w-1/5 pr-2 text-center">Perubahan</div>
                        <div className="w-1/5 pr-2 text-center">Volume</div>
                    </div>
                    <KeywordTableRow/>
                    <KeywordTableRow/>
                </div>
            </div>
        </div>
    );
};