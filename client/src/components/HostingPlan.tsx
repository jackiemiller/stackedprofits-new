import { CheckIcon } from "lucide-react";

const hostingFeatures = [
  "Free SSL Certificate",
  "300K Visits Monthly",
  "Updates, Backups, and Support",
  "Unlimited Websites",
  "Unlimited Storage", 
  "Unlimited Bandwidth",
  "NVMe SSD High-Speed Interface",
  "Free Domain ($11.99 value)",
  "Free Unlimited Email Addresses",
  "Python, Node.JS, Ruby, GIT support",
  "2GB Backup Storage",
  "99.9% Uptime Guarantee",
  "Live Chat Support",
  "Free Website Migration",
  "Complete Security Suite",
  "90-Day Money-Back Guarantee"
];

export default function HostingPlan() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Website Hosting</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Premium Hosting Included In All Packages
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Enterprise-grade hosting for your business website.
          </p>
        </div>

        <div className="mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex items-center justify-between border-b border-gray-200 pb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">🌐 High-Performance Hosting</h3>
                <p className="text-sm text-gray-500 mt-1">Included with all package options</p>
              </div>
              <div>
                <span className="bg-primary text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">Website Included Free</span>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-lg font-medium text-gray-900">Starting at $100/month with Package 01</p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {hostingFeatures.map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <CheckIcon className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-500">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="px-6 py-8 bg-gray-50 border-t border-gray-200">
            <div className="text-center">
              <a 
                href="#get-started" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Get Started Now
              </a>
              <p className="mt-4 text-sm text-gray-500">Choose your preferred package after consultation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
