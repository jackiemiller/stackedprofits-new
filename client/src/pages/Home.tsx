import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import CanvaBanner from "@/components/CanvaBanner";
import Hero from "@/components/Hero";
import MobileHeroBasic from "@/components/MobileHeroBasic";
import Benefits from "@/components/Benefits";
import HostingPlan from "@/components/HostingPlan";
import PricingTable from "@/components/PricingTable";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import VideoExplainer from "@/components/VideoExplainer";
import MobileVideoExplainer from "@/components/MobileVideoExplainer";
import CFOServicesAnnouncement from "@/components/CFOServicesAnnouncement";
import { useQuery } from "@tanstack/react-query";
import { Testimonial, FAQ } from "@shared/schema";
import { useMobile } from "@/hooks/use-mobile";

export default function Home() {
  const isMobile = useMobile();
  const { data: testimonials } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  const { data: faqs } = useQuery<FAQ[]>({
    queryKey: ['/api/faqs'],
  });
  
  // Dynamic page title for SEO
  useEffect(() => {
    // Set page-specific metadata when component mounts
    document.title = "Get 5X More Clients For Your Law Firm | Stacked Profits";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "Strategic CFO advisory and comprehensive digital marketing that helps law firms grow 5X their profit and gain 20+ hours weekly through automated client acquisition and optimized operations."
      );
    }
    
    // Clean up when component unmounts
    return () => {
      document.title = "Stacked Profits"; // Reset to default
    };
  }, []);
  
  // You would replace this with your actual video ID
  const videoProps = {
    videoId: 'qnHes6jnyEs', // Replace with your actual YouTube or Vimeo video ID
    platform: 'youtube' as const,
    title: "See How We Help Law Firms Grow 5X Their Profit",
    subtitle: "Watch how our strategic CFO advisory and digital marketing helps legal practices dominate their market"
  };
  
  return (
    <div className="min-h-screen">
      <header role="banner">
        <Navbar />
      </header>
      
      {/* Canva Banner - Prominent placement */}
      <section aria-label="Law Firm Growth Banner">
        <CanvaBanner />
      </section>
      
      <main id="main-content" role="main">
        <section aria-labelledby="hero-heading">
          {isMobile ? (
            <MobileHeroBasic />
          ) : (
            <Hero />
          )}
        </section>
        
        <section aria-label="Explainer Video" id="video-explainer">
          {isMobile ? (
            <MobileVideoExplainer {...videoProps} />
          ) : (
            <VideoExplainer {...videoProps} />
          )}
        </section>
        
        <section aria-labelledby="benefits-heading" id="features">
          <Benefits />
        </section>
        
        {/* SEO and Google Ads Expertise Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ✓ Trusted by 50+ Law Firms
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Dominate Legal Search Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our <span className="font-semibold text-primary">highest-level Google Ads certified team</span> has helped <span className="font-semibold text-green-600">25+ law firms rank in Google's top 3 local results</span> where 44% of clicks happen.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Law Firm Local Visibility Success
                </h3>
                <p className="text-gray-600">
                  Average increase in "lawyer near me" search visibility for our legal clients within 90 days.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-green-600 mb-2">7X</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Legal Marketing ROI
                </h3>
                <p className="text-gray-600">
                  Our specialized legal marketing expertise delivers 7X better returns than generic marketing agencies.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-purple-600 mb-2">$5M+</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Legal Ad Spend Optimized
                </h3>
                <p className="text-gray-600">
                  Specialized expertise maximizing case acquisition ROI for law firms across multiple practice areas.
                </p>
              </div>
            </div>

            {/* Free Legal Practice Audit CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Get Your FREE Legal Practice Growth Audit Today
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Discover exactly what's keeping your law firm from ranking in Google's local 3-pack and attracting high-value clients. 
                Our expert audit reveals hidden opportunities and provides a roadmap to dominate legal search.
              </p>
              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
                Claim Your Free Legal Audit →
              </button>
              <div className="text-sm mt-3 opacity-80">
                No obligations • 15-minute results • Law firm specific insights
              </div>
            </div>
          </div>
        </section>
        
        <section aria-labelledby="hosting-plan-heading" id="hosting">
          <HostingPlan />
        </section>

        {/* Industry-Specific Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Specialized Solutions for Legal Practices
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We understand the unique challenges and opportunities in the legal field. 
                Our law firm-focused approach delivers results that generic marketing simply can't match.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Legal Practices - Expanded */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Law Firms & Legal Practices</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">Compete against big law firm marketing budgets</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">Ethical compliance with state bar requirements</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">Local search domination for "lawyer near me" searches</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">High-value case generation and client intake optimization</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">Strategic CFO advisory for law firm profitability</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">Automated client acquisition and case management systems</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-blue-800 mb-1">Average Results:</div>
                  <div className="text-lg font-bold text-blue-900">5X increase in qualified leads</div>
                </div>
              </div>

              {/* Commercial Building Maintenance */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Building Maintenance</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">B2B contract acquisition and proposal automation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">Facility management software integration</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">Commercial property owner targeting and outreach</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">Maintenance scheduling and client portal systems</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">Financial optimization for service contracts</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">Custom SaaS solutions for operations management</span>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-green-800 mb-1">Average Results:</div>
                  <div className="text-lg font-bold text-green-900">300% increase in contract value</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Ready to see how our specialized expertise can transform your legal practice?
              </p>
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors">
                Get Your Legal Practice Growth Strategy →
              </button>
            </div>
          </div>
        </section>
        
        <section aria-labelledby="pricing-heading" id="pricing">
          <PricingTable />
        </section>
        
        <section aria-labelledby="cfo-services-heading" id="cfo-services">
          <CFOServicesAnnouncement />
        </section>
        
        <section aria-labelledby="testimonials-heading" id="testimonials">
          <Testimonials testimonials={testimonials || []} />
        </section>
        
        <section aria-labelledby="faq-heading" id="faq">
          <FAQSection faqs={faqs || []} />
        </section>
        
        <section aria-labelledby="get-started-heading" id="get-started">
          <LeadForm />
        </section>
      </main>
      
      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
}
