import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import DashboardHeroSvg from "./DashboardHeroSvg";
import { useEffect, useState } from "react";

export default function Hero() {
  return (
    <div className="bg-white relative" id="hero-section">
      {/* Mobile Stats Circles - Only show on smaller screens */}
      <div className="block md:hidden py-6 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            <span className="block">Free Smart Websites and Website Audits That Get</span>
            <span className="block text-primary">Law Firms Up To 5X More Clients!</span>
          </h1>
          
          <p className="mt-3 text-sm text-gray-600">
            <span className="font-medium">Free Legal Practice Audit + High-Speed Hosting Included</span>
          </p>
          
          <p className="mt-2 text-sm text-gray-600">
            Strategic CFO Advisory + Comprehensive Digital Marketing for Legal Practices
          </p>
          
          {/* Growth stats - Prominent circles */}
          <div className="my-8">
            <div className="flex justify-center gap-3">
              <div className="flex flex-col items-center justify-center w-20 h-20 bg-green-500 text-white rounded-full shadow-lg">
                <span className="font-bold text-lg">5X</span>
                <span className="text-xs">Growth</span>
              </div>
              <div className="flex flex-col items-center justify-center w-20 h-20 bg-blue-500 text-white rounded-full shadow-lg">
                <span className="font-bold text-lg">+300%</span>
                <span className="text-xs">Cases</span>
              </div>
              <div className="flex flex-col items-center justify-center w-20 h-20 bg-indigo-500 text-white rounded-full shadow-lg">
                <span className="font-bold text-lg">+20</span>
                <span className="text-xs">Hours</span>
              </div>
            </div>
          </div>
          
          <div className="mt-3 text-sm text-gray-600">
            All services include <span className="font-medium">Free Legal Practice Audit</span>, <span className="font-medium">CFO Advisory</span>, and <span className="font-medium">Digital Marketing</span>.
          </div>
          
          <div className="mt-6 space-y-3">
            <a 
              href="#get-started"
              className="block w-full py-3 px-4 bg-green-500 text-white font-medium rounded-md shadow-md hover:bg-green-600"
            >
              Get Started Now
            </a>
            <a 
              href="#features"
              className="block w-full py-3 px-4 bg-white text-gray-700 font-medium rounded-md border border-gray-300 hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Desktop Layout - Hide on mobile */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
          {/* Two-column layout with flex for desktop */}
          <div className="flex flex-row items-center">
            {/* Left column - Text content */}
            <div className="w-1/2 pr-8">
              <h1 id="hero-heading" className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Free Websites and Website Audits That Get</span>
                <span className="block gradient-text font-extrabold">Law Firms Up To 5X More Clients!</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                <span className="font-bold">Free Legal Practice Audit + High-Speed Hosting Included</span> — Strategic CFO advisory and comprehensive digital marketing packages start at just $100/month.
              </p>
              <div className="mt-2">
                <p className="text-base text-gray-500 sm:text-lg md:text-base">
                  Specialized for <span className="font-medium">Law Firms</span> and <span className="font-medium">Legal Practices</span> Ready to Dominate Their Market and Grow 5X Their Profit.
                </p>
              </div>
              <div className="mt-2">
                <p className="text-base text-gray-500 sm:text-lg md:text-base">
                  All services include <span className="font-medium">Free Legal Practice Audit</span>, <span className="font-medium">High-Speed Hosting</span>, <span className="font-medium">CFO Advisory</span>, <span className="font-medium">Client Acquisition Systems</span> and <span className="font-medium">Digital Marketing</span>.
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
    </div>
  );
}