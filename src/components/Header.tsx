import React from 'react';
export const Header = () => {
  return <header className="bg-white border-b">
      <div className="max-w-[768px] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="font-bold text-xl text-[#6A36FC]">Scoop</div>
          <div className="text-gray-400">×</div>
          <div className="text-gray-700">Vytalogy Wellness</div>
        </div>
        <div className="text-sm text-gray-500">Technical Demonstration</div>
      </div>
    </header>;
};