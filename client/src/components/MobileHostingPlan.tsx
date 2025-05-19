import { CheckIcon } from "lucide-react";

// Shorter feature descriptions for mobile to prevent cut-off
const hostingFeatures = [
  "Free SSL Certificate",
  "300K Visits Monthly",
  "Updates, Backups, and Support",
  "Unlimited Websites",
  "Unlimited Storage", 
  "Unlimited Bandwidth",
  "NVMe SSD High-Speed Interface",
  "Free Domain ($11.99 value)",
  "Free Email Addresses",
  "Python, Node.JS Support",
  "2GB Backup Storage",
  "99.9% Uptime Guarantee",
  "Live Chat Support",
  "Free Site Migration",
  "Security Suite",
  "90-Day Money-Back"
];

export default function MobileHostingPlan() {
  return (
    <div className="py-8 bg-gray-50">
      <div className="px-4">
        <div className="text-center">
          <h2 className="text-sm text-primary font-semibold tracking-wide uppercase">Website Hosting</h2>
          <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900">
            Premium Hosting Included
          </p>
          <p className="mt-2 text-md text-gray-500">
            Enterprise-grade hosting for your business website.
          </p>
        </div>

        <div className="mt-6 bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-4 py-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">🌐 High-Performance</h3>
                <p className="text-xs text-gray-500 mt-1">Included with all packages</p>
              </div>
              <div>
                <span className="bg-primary text-white text-xs font-semibold px-2 py-0.5 rounded-full">Free Website</span>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-md font-medium text-gray-900">Starting at $100/month with Package 01</p>
              
              {/* Mobile-optimized feature grid - using list for narrower columns */}
              <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-3">
                {hostingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckIcon className="h-4 w-4 text-green-500" />
                    </div>
                    <p className="ml-2 text-xs text-gray-600 pr-1">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="px-4 py-4 bg-gray-50 border-t border-gray-200">
            <div className="text-center">
              <a 
                href="#get-started" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90"
              >
                Get Started Now
              </a>
              <p className="mt-2 text-xs text-gray-500">Choose your package after consultation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}