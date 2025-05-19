import { Check } from "lucide-react";

// Package model
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

export default function MobilePricingTable() {
  return (
    <div className="py-6 bg-white" id="pricing">
      <div className="px-3">
        <div className="text-center">
          <h2 className="text-sm text-primary font-semibold tracking-wide uppercase">Compare Packages</h2>
          <p className="mt-2 text-xl leading-7 font-extrabold tracking-tight text-gray-900">
            Choose the right plan for you
          </p>
          <p className="mt-2 max-w-2xl text-sm text-gray-500 mx-auto">
            Select a package that fits your business needs
          </p>
        </div>

        {/* Vertical stacked packages */}
        <div className="mt-6 space-y-6">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.name} 
              className="relative bg-primary text-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Package Header */}
              <div className="py-3 px-4 text-center bg-primary rounded-t-xl border-b border-white/20">
                <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
              </div>
              
              {/* Price */}
              <div className="py-2 px-4 text-center bg-primary font-bold text-xl border-b border-white/20">
                {pkg.price}
              </div>
              
              {/* Features List */}
              <div className="p-4 bg-primary">
                <ul className="space-y-2.5">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-white text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="p-4 pt-2 pb-4">
                <a 
                  href="#get-started" 
                  className="bg-white text-primary mt-1 block w-full py-2.5 border border-transparent rounded-md text-center text-sm font-medium hover:bg-gray-100 transition-colors"
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