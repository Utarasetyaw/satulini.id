import React from 'react';
// The separate CSS file is no longer needed

const InFeedAd: React.FC = () => {
  return (
    <div 
      className="w-full h-64 bg-stone-200 border border-dashed border-gray-400 
                 flex items-center justify-center 
                 text-gray-500 font-bold 
                 rounded-lg my-4"
    >
      <p>Space for Advertisement</p>
    </div>
  );
};

export default InFeedAd;