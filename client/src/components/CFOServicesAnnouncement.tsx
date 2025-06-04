import { Link } from "wouter";
import { TrendingUp, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CFOServicesAnnouncement() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4 mr-2" />
            New Service Launch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Introducing Fractional CFO Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get enterprise-level financial leadership without the enterprise cost. 
            Strategic financial guidance to scale your business profitably.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Your Growing Business Needs CFO-Level Expertise
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <DollarSign className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Strategic Financial Planning</h4>
                  <p className="text-gray-600">Expert budgeting, forecasting, and cash flow management</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Growth Strategy Support</h4>
                  <p className="text-gray-600">Data-driven insights for scaling and expansion decisions</p>
                </div>
              </div>
              <div className="flex items-start">
                <ArrowRight className="h-6 w-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Fundraising & Exit Planning</h4>
                  <p className="text-gray-600">Investor-ready financials and business valuation support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Average ROI</h4>
              <p className="text-4xl font-bold text-green-600 mb-4">300%+</p>
              <p className="text-gray-600 mb-6">
                Businesses working with fractional CFOs see significant improvements in 
                profitability and strategic decision-making within 6 months.
              </p>
              <Link href="/cfo-services">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Learn More About CFO Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Ready to take your financial strategy to the next level?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9044243664"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors"
            >
              Schedule Free CFO Consultation
            </a>
            <Link href="/cfo-services">
              <Button variant="outline" size="lg">
                View CFO Service Packages
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}