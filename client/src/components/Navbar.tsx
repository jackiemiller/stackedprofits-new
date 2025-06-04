import { Link } from "wouter";
import { useMobile } from "@/hooks/use-mobile";
import { ChevronDown, Phone, Mail } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MobileNavbar from "./MobileNavbar";
// Logo import removed - using SVG instead

export default function Navbar() {
  const isMobile = useMobile();
  
  if (isMobile) {
    return <MobileNavbar />;
  }
  
  return (
    <div className="sticky top-0 z-50">
      {/* Desktop contact bar */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-2">
          <div className="flex items-center text-sm text-gray-600 whitespace-nowrap">
            <a href="mailto:john@stackedprofits.com" className="flex items-center hover:text-primary transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              <span>john@stackedprofits.com</span>
            </a>
          </div>
          <div className="flex items-center whitespace-nowrap">
            <a 
              href="tel:9044243654" 
              className="flex items-center px-3 py-1 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span>Call Us: 904-424-3654</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Desktop navigation */}
      <nav className="bg-white shadow-soft">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <svg
                  width="240"
                  height="40"
                  viewBox="0 0 240 40"
                  className="h-10 w-auto"
                >
                  <defs>
                    <linearGradient id="stackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1e3a8a" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                    <linearGradient id="profitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#16a34a" />
                      <stop offset="100%" stopColor="#15803d" />
                    </linearGradient>
                  </defs>
                  
                  {/* Stack Icon */}
                  <g transform="translate(0,8)">
                    <path d="M0 10 L10 5 L20 10 L10 15 Z" fill="url(#stackGradient)" />
                    <path d="M0 15 L10 10 L20 15 L10 20 Z" fill="url(#stackGradient)" opacity="0.8" />
                    <path d="M0 20 L10 15 L20 20 L10 25 Z" fill="url(#stackGradient)" opacity="0.6" />
                  </g>
                  
                  {/* Stacked Text */}
                  <text x="28" y="27" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="url(#stackGradient)">
                    Stacked
                  </text>
                  
                  {/* Profits Text */}
                  <text x="105" y="27" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="url(#profitGradient)">
                    Profits
                  </text>
                </svg>
              </Link>
            </div>
            
            <div className="hidden md:ml-6 md:flex md:space-x-6">
              <a href="#features" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
                Features
              </a>
              <a href="#pricing" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
                Pricing
              </a>
              <Link href="/cfo-services" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
                CFO Services
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-primary">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-60">
                  <DropdownMenuItem>
                    <a href="#websites" className="w-full">Websites</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#google-business" className="w-full">Google Business Profile</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#invoicing" className="w-full">Invoicing</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#payments" className="w-full">Payments</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#crm" className="w-full">CRM</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#content" className="w-full">Content Marketing</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#ai" className="w-full">AI</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#chat" className="w-full">Chat</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#appointments" className="w-full">Appointments</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="#faq" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
                FAQ
              </a>
              <a href="https://blog.stackedprofits.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
                Blog
              </a>
            </div>
            
            <div className="flex items-center space-x-2">
              <a 
                href="/mobile-preview" 
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gray-300"
              >
                Mobile Preview
              </a>
              <a 
                href="#get-started" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}