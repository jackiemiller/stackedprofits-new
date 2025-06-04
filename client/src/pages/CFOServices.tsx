import { Link } from "wouter";
import { CheckCircle, Phone, Mail, TrendingUp, DollarSign, PieChart, BarChart3, Calculator, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CFOServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header role="banner">
        <Navbar />
      </header>
      
      <main role="main">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fractional CFO Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get enterprise-level financial leadership without the enterprise cost. 
                Strategic financial guidance to scale your business profitably.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#get-started" className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 rounded-md font-medium transition-colors">
                  Get Started Today
                </a>
                <a href="#services" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-blue-800 text-lg px-8 py-3 rounded-md font-medium transition-colors">
                  View Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What is a Fractional CFO Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What is a Fractional CFO?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A fractional CFO provides part-time, strategic financial leadership to businesses 
                that need expert guidance but don't require or can't afford a full-time CFO.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Your Business Needs CFO-Level Expertise</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Strategic financial planning and forecasting to drive growth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Cash flow management and working capital optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Investment analysis and capital allocation decisions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Financial reporting and KPI dashboard development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Risk management and compliance oversight</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Average ROI</h4>
                    <p className="text-3xl font-bold text-green-600 mb-2">300%+</p>
                    <p className="text-gray-600">
                      Our fractional CFO clients typically see a 3X return on investment 
                      within the first 12 months through improved financial management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our CFO Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive financial leadership tailored to your business needs and growth stage.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle>Financial Planning & Analysis</CardTitle>
                  <CardDescription>
                    Strategic planning, budgeting, and forecasting to drive business growth.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Annual and quarterly budget development</li>
                    <li>• Rolling forecasts and scenario planning</li>
                    <li>• Variance analysis and reporting</li>
                    <li>• Key performance indicator tracking</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <PieChart className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Cash Flow Management</CardTitle>
                  <CardDescription>
                    Optimize working capital and ensure healthy cash flow for operations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 13-week rolling cash flow projections</li>
                    <li>• Working capital optimization</li>
                    <li>• Accounts receivable management</li>
                    <li>• Vendor payment optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle>Financial Reporting</CardTitle>
                  <CardDescription>
                    Executive-level financial reporting and business intelligence.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Monthly financial statements</li>
                    <li>• Executive dashboard development</li>
                    <li>• Board reporting packages</li>
                    <li>• Management reporting automation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calculator className="h-12 w-12 text-orange-600 mb-4" />
                  <CardTitle>Investment Analysis</CardTitle>
                  <CardDescription>
                    Strategic investment evaluation and capital allocation guidance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• ROI and NPV analysis</li>
                    <li>• Capital expenditure planning</li>
                    <li>• Business case development</li>
                    <li>• Investment committee support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FileText className="h-12 w-12 text-teal-600 mb-4" />
                  <CardTitle>Risk Management</CardTitle>
                  <CardDescription>
                    Comprehensive risk assessment and mitigation strategies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Financial risk assessment</li>
                    <li>• Internal controls implementation</li>
                    <li>• Compliance monitoring</li>
                    <li>• Insurance optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-red-600 mb-4" />
                  <CardTitle>Strategic Advisory</CardTitle>
                  <CardDescription>
                    High-level strategic guidance for business growth and optimization.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Strategic planning facilitation</li>
                    <li>• M&A advisory support</li>
                    <li>• Fundraising preparation</li>
                    <li>• Exit strategy planning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fractional CFO Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible engagement models designed to fit your business size and needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Package */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 transition-colors">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">$2,500</div>
                  <div className="text-gray-600 mb-6">per month</div>
                  <p className="text-gray-600 mb-8">Perfect for small businesses needing basic financial oversight and planning.</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Monthly financial review (4 hours)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Basic cash flow forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">KPI dashboard setup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Quarterly business review</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Email support</span>
                  </li>
                </ul>
                <a href="#get-started" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors">
                  Get Started
                </a>
              </div>

              {/* Growth Package */}
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
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Weekly financial oversight (16 hours/month)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Advanced cash flow modeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Budget planning & variance analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Investment analysis & ROI modeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Board presentation support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Phone & email support</span>
                  </li>
                </ul>
                <a href="#get-started" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors">
                  Get Started
                </a>
              </div>

              {/* Enterprise Package */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 transition-colors">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">$7,500</div>
                  <div className="text-gray-600 mb-6">per month</div>
                  <p className="text-gray-600 mb-8">Comprehensive CFO services for established businesses and complex operations.</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dedicated CFO support (32 hours/month)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Strategic planning facilitation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">M&A advisory & due diligence</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Fundraising preparation & support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Risk management & compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Priority support & consultation</span>
                  </li>
                </ul>
                <a href="#get-started" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="get-started" className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Scale Your Business with Expert CFO Guidance?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a free 30-minute consultation to discuss your financial challenges and growth opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:9044243654"
                className="inline-flex items-center justify-center px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call 904-424-3654
              </a>
              <a
                href="mailto:john@stackedprofits.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-800 hover:bg-gray-100 font-medium rounded-md transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
            </div>
            
            <p className="text-blue-200">
              Free 30-minute consultation • No obligation • Immediate insights
            </p>
          </div>
        </section>
      </main>
      
      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
}