import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CFOServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header>
        <Navbar />
      </header>
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Fractional CFO Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get enterprise-level financial leadership without the enterprise cost. 
              Strategic financial guidance to scale your business profitably.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$2,500</div>
                <div className="text-gray-600 mb-6">per month</div>
                <p className="text-gray-600 mb-8">Perfect for small businesses needing basic financial oversight.</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-700">• Monthly financial review (4 hours)</li>
                <li className="text-gray-700">• Basic cash flow forecasting</li>
                <li className="text-gray-700">• KPI dashboard setup</li>
                <li className="text-gray-700">• Quarterly business review</li>
                <li className="text-gray-700">• Email support</li>
              </ul>
              <a href="tel:9044243654" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors">
                Get Started
              </a>
            </div>

            <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-8 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$4,500</div>
                <div className="text-gray-600 mb-6">per month</div>
                <p className="text-gray-600 mb-8">Ideal for growing businesses requiring comprehensive financial management.</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-700">• Weekly financial oversight (16 hours/month)</li>
                <li className="text-gray-700">• Advanced cash flow modeling</li>
                <li className="text-gray-700">• Budget planning & variance analysis</li>
                <li className="text-gray-700">• Investment analysis & ROI modeling</li>
                <li className="text-gray-700">• Board presentation support</li>
                <li className="text-gray-700">• Phone & email support</li>
              </ul>
              <a href="tel:9044243654" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors">
                Get Started
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$7,500</div>
                <div className="text-gray-600 mb-6">per month</div>
                <p className="text-gray-600 mb-8">Comprehensive CFO services for established businesses.</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-700">• Dedicated CFO support (32 hours/month)</li>
                <li className="text-gray-700">• Strategic planning facilitation</li>
                <li className="text-gray-700">• M&A advisory & due diligence</li>
                <li className="text-gray-700">• Fundraising preparation & support</li>
                <li className="text-gray-700">• Risk management & compliance</li>
                <li className="text-gray-700">• Priority support & consultation</li>
              </ul>
              <a href="tel:9044243654" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors">
                Get Started
              </a>
            </div>
          </div>

          <div className="text-center bg-blue-600 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Scale Your Business with Expert CFO Guidance?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a free 30-minute consultation to discuss your financial challenges and growth opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9044243654"
                className="inline-flex items-center justify-center px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors"
              >
                Call 904-424-3654
              </a>
              <a
                href="mailto:john@stackedprofits.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-800 hover:bg-gray-100 font-medium rounded-md transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
}