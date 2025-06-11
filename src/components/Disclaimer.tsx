import React, { useState } from 'react';
export const Disclaimer = () => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return <div className="bg-blue-50 border-b border-blue-100">
      <div className="max-w-[768px] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          <div className="text-sm text-blue-700">
            <p className="font-medium mb-0.5">Limited Dataset Disclaimer</p>
            <p>
              This claims validation tool is providing information based on a
              limited dataset and is for demonstration purposes. The analysis
              and recommendations will continue to improve as our dataset
              expands.
            </p>
          </div>
        </div>
        <button onClick={() => setIsVisible(false)} className="flex-shrink-0 ml-3 text-blue-500 hover:text-blue-700" aria-label="Close disclaimer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>;
};