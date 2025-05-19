import { Check } from "lucide-react";

// New package model based on the image
interface PackageFeature {
  text: string;
}

interface Package {
  name: string;
  price: string;
  features: PackageFeature[];
}

const packages: Package[] = [
  {
    name: "Package 01",
    price: "$100/month",
    features: [
      { text: "Website with hosting" },
      { text: "Custom With Upfront Fee" },
      { text: "1 Article / Month" },
    ]
  },
  {
    name: "Package 02",
    price: "$300/month",
    features: [
      { text: "Website with hosting" },
      { text: "Custom With Upfront Fee" },
      { text: "2 Articles / Month" },
      { text: "AI chat on the website" },
      { text: "GBP review responses" },
      { text: "GBP management" },
      { text: "2 new website pages monthly" },
    ]
  },
  {
    name: "Package 03",
    price: "$500/month",
    features: [
      { text: "Website with hosting" },
      { text: "Custom With Upfront Fee" },
      { text: "3 Articles / Month" },
      { text: "AI chat on the website" },
      { text: "GBP review responses" },
      { text: "GBP management" },
      { text: "2 new website pages monthly" },
      { text: "Voice AI handling calls" },
      { text: "Appointment booking" },
    ]
  }
];

export default function PricingTable() {
  return (
    <div className="py-6 sm:py-12 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm sm:text-base text-primary font-semibold tracking-wide uppercase">Compare Packages</h2>
          <p className="mt-2 text-2xl sm:text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Choose the right plan for you
          </p>
          <p className="mt-2 sm:mt-4 max-w-2xl text-base sm:text-xl text-gray-500 mx-auto">
            Select a package that fits your business needs
          </p>
        </div>

        {/* Mobile view: scrollable horizontal carousel */}
        <div className="mt-6 sm:mt-10 overflow-x-auto pb-4 -mx-2 px-2 sm:hidden">
          <div className="flex space-x-4 min-w-max">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.name} 
                className="relative p-0 bg-primary text-white rounded-2xl shadow-lg flex flex-col overflow-hidden w-56"
              >
                {/* Package Header */}
                <div className="py-2 px-3 text-center bg-primary rounded-t-2xl border-b border-white/20">
                  <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                </div>
                
                {/* Price */}
                <div className="py-2 px-3 text-center bg-primary font-bold text-xl border-b border-white/20">
                  {pkg.price}
                </div>
                
                {/* Features List */}
                <div className="flex-1 p-3 bg-primary">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="mr-2 text-white flex-shrink-0 mt-0.5">•</div>
                        <span className="text-white text-xs">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="p-3 pt-2">
                  <a 
                    href={index === 0 ? "#get-started" : "#"} 
                    className="bg-white text-primary mt-1 block w-full py-2 border border-transparent rounded-md text-center text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    {index === 0 ? "Start Now" : "Learn More"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop view: grid layout */}
        <div className="hidden sm:grid mt-10 space-y-8 sm:space-y-0 sm:grid-cols-3 sm:gap-x-8">
          {packages.map((pkg, index) => (
            <div key={pkg.name} className="relative p-0 bg-primary text-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
              {/* Package Header */}
              <div className="py-4 px-6 text-center bg-primary rounded-t-2xl border-b border-white/20">
                <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
              </div>
              
              {/* Price */}
              <div className="py-4 px-6 text-center bg-primary font-bold text-2xl sm:text-3xl border-b border-white/20">
                {pkg.price}
              </div>
              
              {/* Features List */}
              <div className="flex-1 p-4 sm:p-6 bg-primary">
                <ul className="space-y-3 sm:space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start sm:items-center">
                      <div className="mr-3 text-white flex-shrink-0 mt-0.5">•</div>
                      <span className="text-white text-sm sm:text-base">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="p-4 sm:p-6 pt-2">
                <a 
                  href={index === 0 ? "#get-started" : "#"} 
                  className="bg-white text-primary mt-2 block w-full py-2 sm:py-3 px-4 sm:px-6 border border-transparent rounded-md text-center font-medium hover:bg-gray-100 transition-colors"
                >
                  {index === 0 ? "Start Now" : "Learn More"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
