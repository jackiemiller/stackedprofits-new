import { useState } from 'react';
import MobileHeroSimple from './MobileHeroSimple';
import MobileBenefits from './MobileBenefits';
import MobileHostingPlan from './MobileHostingPlan';
import MobilePricingTable from './MobilePricingTable';
import MobileLeadForm from './MobileLeadForm';
import MobileTestimonials from './MobileTestimonials';
import FAQSection from './FAQSection';
import Footer from './Footer';
import { Toaster } from "@/components/ui/toaster";
import { useQuery } from "@tanstack/react-query";
import type { Testimonial, FAQ } from "@shared/schema";

export default function MobileView() {
  const [viewportWidth, setViewportWidth] = useState(375); // iPhone width
  
  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  const { data: faqs = [] } = useQuery<FAQ[]>({
    queryKey: ['/api/faqs'],
  });
  
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="mb-4 flex flex-col space-y-4">
        <h2 className="text-xl font-bold">Mobile Complete Site Preview</h2>
        <div className="flex flex-wrap gap-2">
          <div className="w-full text-sm text-gray-600 mb-1">iOS Devices:</div>
          <button 
            onClick={() => setViewportWidth(320)} 
            className={`px-3 py-1 rounded ${viewportWidth === 320 ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            iPhone 5/SE (320px)
          </button>
          <button 
            onClick={() => setViewportWidth(375)} 
            className={`px-3 py-1 rounded ${viewportWidth === 375 ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            iPhone (375px)
          </button>
          <button 
            onClick={() => setViewportWidth(390)} 
            className={`px-3 py-1 rounded ${viewportWidth === 390 ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            iPhone 12/13 (390px)
          </button>
          
          <div className="w-full text-sm text-gray-600 mt-2 mb-1">Android Devices:</div>
          <button 
            onClick={() => setViewportWidth(360)} 
            className={`px-3 py-1 rounded ${viewportWidth === 360 ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Android Small (360px)
          </button>
          <button 
            onClick={() => setViewportWidth(393)} 
            className={`px-3 py-1 rounded ${viewportWidth === 393 ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Pixel 6 (393px)
          </button>
          <button 
            onClick={() => setViewportWidth(412)} 
            className={`px-3 py-1 rounded ${viewportWidth === 412 ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Samsung Galaxy (412px)
          </button>
        </div>
      </div>
      
      <div className="border-2 border-gray-300 rounded-lg overflow-hidden mx-auto" style={{ width: `${viewportWidth}px` }}>
        <div style={{ width: `${viewportWidth}px`, height: '800px', overflow: 'auto' }}>
          <div className="relative max-w-full overflow-x-hidden">
  {/* Mobile Contact Header */}
  <div className="bg-gray-900 py-2">
    <div className="flex justify-center items-center space-x-4 px-4">
      <div className="flex items-center space-x-1">
        <svg className="h-2.5 w-2.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.5 10.5s-.5 1.5 2 4 4 2 4 2l1.128-3.726a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="text-xs text-white font-medium">904-424-3654</span>
      </div>
      <div className="flex items-center space-x-1">
        <svg className="h-2.5 w-2.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="text-xs text-white font-medium">john@stackedprofits.com</span>
      </div>
    </div>
  </div>
  
  <MobileHeroSimple />
            <div className="relative max-w-full overflow-x-hidden">
              {/* Mobile Contact Header */}
              <div className="bg-gray-900 py-2">
                <div className="flex justify-center items-center space-x-4 px-4">
                  <div className="flex items-center space-x-1">
                    <svg className="h-2.5 w-2.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.5 10.5s-.5 1.5 2 4 4 2 4 2l1.128-3.726a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-xs text-white font-medium">904-424-3654</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="h-2.5 w-2.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs text-white font-medium">john@stackedprofits.com</span>
                  </div>
                </div>
              </div>
              
              <MobileHeroSimple />
              
              {/* Mobile SEO Authority Section */}
              <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6">
                <div className="px-4">
                  <div className="text-center">
                    <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-3 py-1 mb-3">
                      <span className="text-xs font-semibold">✓ TRUSTED BY 200+ LOCAL BUSINESSES</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2">Google 3-Pack SEO Authority</h2>
                    <p className="text-sm text-blue-100 mb-4">We help businesses dominate local search results with proven SEO strategies</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white bg-opacity-10 rounded-lg p-3">
                        <div className="text-2xl font-bold text-green-300">73%</div>
                        <div className="text-xs text-blue-100">Success Rate</div>
                      </div>
                      <div className="bg-white bg-opacity-10 rounded-lg p-3">
                        <div className="text-2xl font-bold text-green-300">5X</div>
                        <div className="text-xs text-blue-100">Average ROI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Free Website Audit CTA */}
              <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-6">
                <div className="px-4 text-center">
                  <h2 className="text-xl font-bold mb-2">FREE Website Audit</h2>
                  <p className="text-sm text-orange-100 mb-4">Get a comprehensive analysis of your website's performance and discover growth opportunities</p>
                  <a 
                    href="#get-started"
                    className="inline-block bg-white text-orange-600 font-semibold py-2 px-6 rounded-lg hover:bg-orange-50 transition-colors duration-300"
                  >
                    Get Your Free Audit Now
                  </a>
                </div>
              </section>

              {/* Industry-Specific Solutions */}
              <section className="bg-gray-50 py-6">
                <div className="px-4">
                  <h2 className="text-xl font-bold text-center mb-6">Industry-Specific Solutions</h2>
                  
                  <div className="space-y-4">
                    {/* Legal */}
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h3 className="font-bold text-blue-700 mb-2">Legal Practices</h3>
                      <p className="text-sm text-gray-600 mb-2">Dominate local legal searches and attract high-value clients</p>
                      <div className="text-lg font-bold text-green-600">+300% Lead Increase</div>
                    </div>
                    
                    {/* Medical */}
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h3 className="font-bold text-green-700 mb-2">Medical & Dental</h3>
                      <p className="text-sm text-gray-600 mb-2">Build trust and attract patients through professional web presence</p>
                      <div className="text-lg font-bold text-green-600">+250% Patient Growth</div>
                    </div>
                    
                    {/* Home Services */}
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h3 className="font-bold text-orange-700 mb-2">Home Services</h3>
                      <p className="text-sm text-gray-600 mb-2">Convert local searches into booked appointments and service calls</p>
                      <div className="text-lg font-bold text-green-600">+400% Service Requests</div>
                    </div>
                  </div>
                </div>
              </section>

              <MobileBenefits />
              <MobileHostingPlan />
              <MobilePricingTable />
              <MobileLeadForm />
              {testimonials.length > 0 && <MobileTestimonials testimonials={testimonials} />}
              {faqs.length > 0 && <FAQSection faqs={faqs} />}
              <Footer />
              <Toaster />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-500 text-center">
        Current viewport width: {viewportWidth}px
      </div>
    </div>
  );
}
