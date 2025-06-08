import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ThankYou from "@/pages/ThankYou";
import ChatWidget from "@/components/ChatWidget";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Inline CFO Services component to avoid import issues
function CFOServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-5xl font-bold mb-6">Fractional CFO Services for Law Firms</h1>
            <p className="text-xl mb-8">Expert financial leadership for growing law firms and legal practices without the full-time cost</p>
            <a href="#pricing" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Pricing Plans
            </a>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Law Firms Choose Our CFO Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Financial Planning for Legal Practices</h3>
                <p>Develop comprehensive financial strategies that align with your law firm's goals and drive sustainable growth in the legal market.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Law Firm Cash Flow Optimization</h3>
                <p>Improve cash flow management and working capital efficiency to ensure your legal practice stays financially healthy and profitable.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Legal Practice Performance Analytics</h3>
                <p>Get detailed financial reporting and KPI tracking specific to law firms to make data-driven decisions for your legal practice.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Law Firm CFO Package</h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-center">Starter</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-blue-600">$2,500</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Monthly financial statements
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Cash flow analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic budgeting & forecasting
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Quarterly business reviews
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="border-2 border-blue-600 rounded-lg p-8 relative hover:shadow-lg transition-shadow">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Growth</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-blue-600">$4,500</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Everything in Starter
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced financial modeling
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Investor reporting
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Strategic planning sessions
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Monthly one-on-one calls
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-center">Enterprise</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-blue-600">$7,500</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Everything in Growth
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Full CFO partnership
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Board meeting preparation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    M&A advisory
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited consultation
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Law Firm's Financial Management?</h2>
            <p className="text-xl mb-8">Contact us today to discuss how our CFO services can accelerate your legal practice growth.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a href="tel:904-424-3664" className="flex items-center text-lg hover:text-blue-300 transition-colors">
                <span className="mr-2">📞</span>
                904-424-3664
              </a>
              <a href="mailto:john@stackedprofits.com" className="flex items-center text-lg hover:text-blue-300 transition-colors">
                <span className="mr-2">✉️</span>
                john@stackedprofits.com
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cfo-services" component={CFOServicesPage} />
      <Route path="/thank-you" component={ThankYou} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
      <ChatWidget />
    </QueryClientProvider>
  );
}

export default App;
