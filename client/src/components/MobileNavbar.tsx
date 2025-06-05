import { Link } from "wouter";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";


export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-white shadow-sm">

        
        {/* Logo and menu button */}
        <div className="py-2 px-3 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/assets/stacked-profits-logo.png"
              alt="Stacked Profits"
              className="h-8 w-auto"
            />
          </Link>
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu overlay with fixed narrow width */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Semi-transparent background */}
          <div className="absolute inset-0 bg-black bg-opacity-20" onClick={() => setIsMenuOpen(false)}></div>
          
          {/* Menu panel - fixed width, positioned on the right with slide-in animation */}
          <div className="relative bg-white w-[260px] h-full overflow-y-auto flex flex-col animate-in slide-in-from-right duration-300 shadow-2xl">
            {/* Header with close button */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-3 py-2 flex justify-end">
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="p-1 rounded-md text-gray-500 hover:text-primary focus:outline-none"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Logo at the top of menu items */}
            <div className="flex justify-center py-5">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <img
                  src="/assets/stacked-profits-logo.png"
                  alt="Stacked Profits"
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            
            {/* Menu items - with reduced padding */}
            <nav className="px-2 pt-2 pb-4 space-y-1 overflow-y-auto flex-1">
              <a
                href="#features"
                className="block px-2 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block px-2 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <Link
                href="/cfo-services"
                className="block px-2 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                CFO Services
              </Link>
              
              {/* Services submenu */}
              <div className="px-2 py-1.5 text-sm font-medium text-gray-700">
                Services
              </div>
              <div className="pl-3 space-y-0.5">
                <a href="#websites" className="block px-2 py-1 text-xs text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Websites</a>
                <a href="#google-business" className="block px-2 py-1 text-xs text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Google Business Profile</a>
                <a href="#invoicing" className="block px-2 py-1 text-xs text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Invoicing</a>
                <a href="#payments" className="block px-2 py-1 text-xs text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Payments</a>
                <a href="#crm" className="block px-2 py-1 text-xs text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>CRM</a>
                <a href="#content" className="block px-2 py-1 text-xs text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Content Marketing</a>
                <a href="#ai" className="block px-2 py-1 text-xs text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>AI</a>
                <a href="#chat" className="block px-2 py-1 text-xs text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Chat</a>
                <a href="#appointments" className="block px-2 py-1 text-xs text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Appointments</a>
              </div>
              
              <a
                href="#faq"
                className="block px-2 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="https://blog.stackedprofits.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-2 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              
              {/* Get Started button */}
              <div className="px-2 pt-3">
                <a
                  href="#get-started"
                  className="block w-full py-2 px-3 rounded-md text-center font-medium text-white bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}