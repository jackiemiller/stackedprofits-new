import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import MobileGrowthHighlight from "./MobileGrowthHighlight";

export default function MobileHero() {
  return (
    <div className="bg-white" id="hero">
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex flex-col py-6">
          {/* Text content */}
          <div className="w-full mb-6">
            <h1 id="hero-heading-mobile" className="text-3xl tracking-tight font-extrabold text-gray-900">
              <span className="block">Free Websites That Get</span>
              <span className="block gradient-text font-extrabold">Local Services</span>
              <span className="block gradient-text font-extrabold">Up To 3X More Leads and Clients!</span>
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              <span className="font-bold">Free Website Audit + High-Speed Hosting Included</span> — Packages start at just $100/month with monthly content and more.
            </p>

            {/* 3X Growth highlight for mobile */}
            <div className="my-4 flex justify-center" aria-hidden="true">
              <MobileGrowthHighlight />
            </div>
            
            <div className="mt-2">
              <h2 className="sr-only">Who We Serve</h2>
              <p className="text-sm text-gray-500">
                Perfect for <span className="font-medium">Attorneys</span>, <span className="font-medium">Medical Practices</span>, and <span className="font-medium">Home Service Businesses</span> Ready to Grow.
              </p>
            </div>
            
            <div className="mt-2">
              <h2 className="sr-only">What's Included</h2>
              <p className="text-sm text-gray-500">
                All services include <span className="font-medium">Free Website Audit</span>, <span className="font-medium">High-Speed Hosting</span>, <span className="font-medium">Invoicing</span>, <span className="font-medium">Payments</span> and <span className="font-medium">Content Marketing</span>.
              </p>
            </div>
            
            <div className="mt-4 flex flex-col gap-2" aria-labelledby="cta-heading-mobile">
              <h2 id="cta-heading-mobile" className="sr-only">Get Started with Stacked Profits</h2>
              <div className="rounded-md shadow">
                <a 
                  href="#get-started"
                  className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300 animate-pulse-light"
                  aria-label="Get started with a free website that generates leads"
                >
                  Get Started Now
                </a>
              </div>
              <div>
                <a 
                  href="#features"
                  className="w-full flex items-center justify-center px-6 py-2 border border-primary text-sm font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
                  aria-label="Learn more about our features"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}