import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import DashboardHeroSvg from "./DashboardHeroSvg";

export default function Hero() {
  // Check if we're on mobile using matchMedia
  const isMobileView = typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches;
  
  // Create a completely different mobile layout
  if (isMobileView) {
    return (
      <div className="bg-white" id="hero">
        <div className="px-4 py-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              <span className="block">Free Websites That Get</span>
              <span className="block text-primary">Local Services Up To 3X More Leads!</span>
            </h1>
            
            <p className="mt-4 text-sm text-gray-600">
              <span className="font-medium">Free Website Audit + High-Speed Hosting Included</span> — Packages start at just $100/month with monthly content.
            </p>
            
            <div className="mt-3 text-sm text-gray-600">
              Perfect for <span className="font-medium">Attorneys</span>, <span className="font-medium">Medical Practices</span>, and <span className="font-medium">Home Service Businesses</span>.
            </div>
            
            <div className="mt-3 text-sm text-gray-600">
              All services include <span className="font-medium">Free Website Audit</span>, <span className="font-medium">High-Speed Hosting</span>, <span className="font-medium">Invoicing</span>, <span className="font-medium">Payments</span> and <span className="font-medium">Content Marketing</span>.
            </div>
            
            <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="font-medium text-gray-900 mb-2">All packages include:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Free Text To Pay and Email Invoicing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Secure Client Payment Portal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Automated Payment Reminders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">No Setup or Monthly Fees</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 flex flex-col gap-3">
              <a 
                href="#get-started"
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-md text-white bg-green-500 hover:bg-green-600"
              >
                Get Started Now
              </a>
              <a 
                href="#features"
                className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Desktop layout
  return (
    <div className="bg-white relative" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        {/* Two-column layout with flex for desktop */}
        <div className="flex flex-row items-center">
          {/* Left column - Text content */}
          <div className="w-1/2 pr-8">
            <h1 id="hero-heading" className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Free Websites That Get</span>
              <span className="block gradient-text font-extrabold">Local Services Up To 3X More Leads and Clients!</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
              <span className="font-bold">Free Website Audit + High-Speed Hosting Included</span> — Packages start at just $100/month with monthly content and more.
            </p>
            <div className="mt-2">
              <p className="text-base text-gray-500 sm:text-lg md:text-base">
                Perfect for <span className="font-medium">Attorneys</span>, <span className="font-medium">Medical Practices</span>, and <span className="font-medium">Home Service Businesses</span> Ready to Grow.
              </p>
            </div>
            <div className="mt-2">
              <p className="text-base text-gray-500 sm:text-lg md:text-base">
                All services include <span className="font-medium">Free Website Audit</span>, <span className="font-medium">High-Speed Hosting</span>, <span className="font-medium">Invoicing</span>, <span className="font-medium">Payments</span> and <span className="font-medium">Content Marketing</span>.
              </p>
            </div>
            
            <div className="mt-5 sm:mt-8 flex">
              <div className="rounded-md shadow">
                <a 
                  href="#get-started"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 md:py-4 md:text-lg md:px-10 animate-pulse-light"
                >
                  Get Started Now
                </a>
              </div>
              <div className="mt-0 ml-3">
                <a 
                  href="#features"
                  className="w-full flex items-center justify-center px-8 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          
          {/* Right column - Dashboard visualization & bullet points */}
          <div className="w-1/2 mt-0 self-start pt-6">
            <div className="w-full mx-auto ml-auto rounded-lg shadow-lg overflow-hidden">
              <DashboardHeroSvg />
            </div>
            
            {/* Features list */}
            <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="font-medium text-gray-900 mb-2">All packages include:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Free Text To Pay and Email Invoicing</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Secure Client Payment Portal</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Automated Payment Reminders</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">No Setup or Monthly Fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
