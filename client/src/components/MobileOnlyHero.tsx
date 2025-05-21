import React from 'react';

export default function MobileOnlyHero() {
  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh', 
      backgroundColor: 'white',
      zIndex: 999,
      padding: '16px',
      overflow: 'auto'
    }} 
    className="block md:hidden"
    data-mobile-hero="true"
    >
      <div className="text-center pt-16">
        <h1 className="text-2xl font-bold text-gray-900">
          <span className="block">Free Websites That Get</span>
          <span className="block text-primary">Local Services</span>
          <span className="block text-primary">Up To 3X More Leads!</span>
        </h1>
        
        <p className="mt-3 text-sm text-gray-600">
          <span className="font-medium">Free Website Audit + Hosting Included</span>
        </p>
        
        <p className="mt-2 text-sm text-gray-600">
          Perfect for Attorneys, Medical, and Home Services
        </p>
        
        {/* Growth stats pills - MOBILE ONLY */}
        <div className="my-8">
          <div className="flex justify-center gap-4">
            <div className="flex flex-col items-center justify-center w-20 h-20 bg-green-500 text-white rounded-full shadow-lg">
              <span className="font-bold text-lg">3X</span>
              <span className="text-xs">Growth</span>
            </div>
            <div className="flex flex-col items-center justify-center w-20 h-20 bg-blue-500 text-white rounded-full shadow-lg">
              <span className="font-bold text-lg">+208%</span>
              <span className="text-xs">Leads</span>
            </div>
            <div className="flex flex-col items-center justify-center w-20 h-20 bg-indigo-500 text-white rounded-full shadow-lg">
              <span className="font-bold text-lg">+300%</span>
              <span className="text-xs">Clients</span>
            </div>
          </div>
        </div>
        
        {/* Quick benefits list */}
        <div className="my-6 bg-gray-50 p-4 rounded-lg border border-gray-100 text-left">
          <h3 className="font-medium text-gray-900 mb-3">All packages include:</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              <span className="text-gray-700">Free Website Audit</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              <span className="text-gray-700">High-Speed Hosting</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              <span className="text-gray-700">Secure Payment Processing</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              <span className="text-gray-700">Monthly Content Updates</span>
            </li>
          </ul>
        </div>
        
        <div className="mt-6 space-y-3">
          <button
            onClick={() => {
              // Close this overlay and scroll to get-started
              const element = document.getElementById('get-started');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
              // Remove this overlay
              const overlay = document.querySelector('[data-mobile-hero]');
              if (overlay) {
                overlay.remove();
              }
            }}
            className="block w-full py-3 px-4 bg-green-500 text-white font-medium rounded-md shadow-md"
          >
            Get Started Now
          </button>
          <button
            onClick={() => {
              // Close this overlay and scroll to features
              const element = document.getElementById('features');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
              // Remove this overlay
              const overlay = document.querySelector('[data-mobile-hero]');
              if (overlay) {
                overlay.remove();
              }
            }}
            className="block w-full py-3 px-4 bg-white text-gray-700 font-medium rounded-md border border-gray-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}