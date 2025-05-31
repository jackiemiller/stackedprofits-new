import { Link } from "wouter";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 overflow-hidden sm:py-12 sm:px-6 lg:px-8">
        
        {/* Contact Information - Mobile Bottom Placement */}
        <div className="flex flex-col justify-center items-center space-y-4 mb-6 text-center">
          <a href="tel:904-424-3654" className="flex flex-col items-center hover:text-primary transition-colors">
            <span className="text-green-600 text-lg font-bold">Call</span>
            <span className="text-gray-800 text-lg font-bold">904-424-3654</span>
          </a>
          <a href="mailto:john@stackedprofits.com" className="text-lg font-bold hover:text-primary transition-colors">
            <span className="text-blue-600">Email:</span> <span className="text-gray-800">john@stackedprofits.com</span>
          </a>
        </div>

        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-3 py-1 sm:px-5 sm:py-2">
            <a href="#" className="text-sm sm:text-base text-gray-500 hover:text-gray-900">About</a>
          </div>
          <div className="px-3 py-1 sm:px-5 sm:py-2">
            <a href="#features" className="text-sm sm:text-base text-gray-500 hover:text-gray-900">Features</a>
          </div>
          <div className="px-3 py-1 sm:px-5 sm:py-2">
            <a href="#pricing" className="text-sm sm:text-base text-gray-500 hover:text-gray-900">Pricing</a>
          </div>
          <div className="px-3 py-1 sm:px-5 sm:py-2">
            <a href="#faq" className="text-sm sm:text-base text-gray-500 hover:text-gray-900">FAQ</a>
          </div>
          <div className="px-3 py-1 sm:px-5 sm:py-2">
            <a href="#" className="text-sm sm:text-base text-gray-500 hover:text-gray-900">Blog</a>
          </div>
          <div className="px-3 py-1 sm:px-5 sm:py-2">
            <a href="#" className="text-sm sm:text-base text-gray-500 hover:text-gray-900">Contact</a>
          </div>
        </nav>
        
        <div className="mt-6 flex justify-center space-x-4 sm:space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>
        
        <p className="mt-6 text-center text-sm text-gray-400 sm:text-base">
          &copy; {new Date().getFullYear()} Stacked Profits. All rights reserved.
        </p>
        <div className="mt-2 text-center text-xs text-gray-400 sm:text-sm">
          <p>All services include our integrated business management platform</p>
        </div>
      </div>
    </footer>
  );
}