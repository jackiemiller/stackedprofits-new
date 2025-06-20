import { Link } from "wouter";

export default function MobileHeroBasic() {
  return (
    <div className="bg-white px-4 py-6 block md:hidden" id="hero-mobile">
      <div className="text-center">
        {/* Removed the duplicate logo to reduce clutter */}
        
        <h1 className="text-2xl font-bold text-gray-900">
          <span className="block">Free Websites and Website Audits That Get</span>
          <span className="block text-primary">Law Firms</span>
          <span className="block text-primary">Up To 5X More Clients!</span>
        </h1>
        
        <p className="mt-3 text-sm text-gray-500">
          <span className="font-medium">Free Legal Practice Audit + Hosting Included</span>
        </p>
        
        <p className="mt-2 text-sm text-gray-500">
          Strategic CFO Advisory + Comprehensive Digital Marketing for Legal Practices
        </p>
        
        {/* Growth stats - pill style for mobile */}
        <div className="my-6">
          <div className="flex flex-wrap justify-center gap-3">
            <div className="inline-flex items-center bg-green-500 text-white rounded-full px-4 py-1.5 shadow-md">
              <span className="font-bold text-lg mr-1">5X</span>
              <span className="text-xs">Growth</span>
            </div>
            <div className="inline-flex items-center bg-blue-500 text-white rounded-full px-4 py-1.5 shadow-md">
              <span className="font-bold text-lg mr-1">+300%</span>
              <span className="text-xs">Cases</span>
            </div>
            <div className="inline-flex items-center bg-indigo-500 text-white rounded-full px-4 py-1.5 shadow-md">
              <span className="font-bold text-lg mr-1">+20</span>
              <span className="text-xs">Hours</span>
            </div>
          </div>
        </div>
        
        {/* Quick summary points */}
        <div className="my-4 bg-gray-50 p-4 rounded-lg border border-gray-100 text-left">
          <h3 className="font-medium text-gray-900 text-sm mb-2">All packages include:</h3>
          <ul className="space-y-1.5 text-sm">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-700">Free Legal Practice Audit</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-700">CFO Advisory Services</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-700">Client Acquisition Systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-700">Digital Marketing</span>
            </li>
          </ul>
        </div>
        
        <div className="mt-4 flex flex-col gap-3">
          <a
            href="#get-started"
            className="w-full flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-md text-white bg-green-500 hover:bg-green-600 shadow-sm"
          >
            Get Started Now
          </a>
          <a
            href="#features"
            className="w-full flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}