import { useState } from 'react';
import MobileHeroSimple from './MobileHeroSimple';
import { Toaster } from "@/components/ui/toaster";

export default function MobileView() {
  const [viewportWidth, setViewportWidth] = useState(320); // iPhone 5/SE width - extremely narrow
  
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="mb-4 flex flex-col space-y-4">
        <h2 className="text-xl font-bold">Mobile Hero Test</h2>
        <div className="flex flex-wrap gap-2">
          <div className="w-full text-sm text-gray-600 mb-1">iOS Devices:</div>
          <button 
            onClick={() => setViewportWidth(320)} 
            className={`px-3 py-1 rounded ${viewportWidth === 320 ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            iPhone 5/SE (320px)
          </button>
          <button 
            onClick={() => setViewportWidth(375)} 
            className={`px-3 py-1 rounded ${viewportWidth === 375 ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            iPhone (375px)
          </button>
          <button 
            onClick={() => setViewportWidth(390)} 
            className={`px-3 py-1 rounded ${viewportWidth === 390 ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            iPhone 12/13 (390px)
          </button>
          
          <div className="w-full text-sm text-gray-600 mt-2 mb-1">Android Devices:</div>
          <button 
            onClick={() => setViewportWidth(360)} 
            className={`px-3 py-1 rounded ${viewportWidth === 360 ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Android Small (360px)
          </button>
          <button 
            onClick={() => setViewportWidth(393)} 
            className={`px-3 py-1 rounded ${viewportWidth === 393 ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Pixel 6 (393px)
          </button>
          <button 
            onClick={() => setViewportWidth(412)} 
            className={`px-3 py-1 rounded ${viewportWidth === 412 ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Samsung Galaxy (412px)
          </button>
        </div>
      </div>
      
      <div className="border-2 border-gray-300 rounded-lg overflow-hidden mx-auto" style={{ width: `${viewportWidth}px` }}>
        <div style={{ width: `${viewportWidth}px`, height: '600px', overflow: 'auto' }}>
          <div className="mobile-preview" style={{ width: `${viewportWidth}px`, overflowX: 'hidden' }}>
            <div className="relative max-w-full overflow-x-hidden">
              <MobileHeroSimple />
              <Toaster />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-500 text-center">
        Current viewport width: {viewportWidth}px
      </div>
    </div>
  );
}