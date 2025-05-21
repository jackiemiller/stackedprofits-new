import React from 'react';

export default function MobileHeroSection() {
  return (
    <div className="bg-white px-4 py-8" id="mobile-hero-section">
      <div className="text-center">
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
        <div className="mt-6 mb-8">
          <div className="flex justify-center space-x-3">
            <div className="mobile-growth-stat">
              <span className="font-bold text-xl">3X</span>
              <span className="text-xs">Growth</span>
            </div>
            <div className="mobile-growth-stat blue">
              <span className="font-bold text-xl">+208%</span>
              <span className="text-xs">Leads</span>
            </div>
            <div className="mobile-growth-stat purple">
              <span className="font-bold text-xl">+300%</span>
              <span className="text-xs">Clients</span>
            </div>
          </div>
        </div>
        
        {/* Quick benefits list */}
        <div className="mt-4 mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100 text-left">
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
          <a 
            href="#get-started"
            className="block w-full py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-200"
          >
            Get Started Now
          </a>
          <a 
            href="#features"
            className="block w-full py-3 px-4 bg-white text-gray-700 font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-all duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}