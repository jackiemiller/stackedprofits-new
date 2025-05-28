import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MobileHeroBasic from "@/components/MobileHeroBasic";
import MobileHeroSection from "@/components/MobileHeroSection";
import Benefits from "@/components/Benefits";
import SEOSection from "@/components/SEOSection";
import HostingPlan from "@/components/HostingPlan";
import PricingTable from "@/components/PricingTable";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import VideoExplainer from "@/components/VideoExplainer";
import MobileVideoExplainer from "@/components/MobileVideoExplainer";
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
    document.title = "Get 3X More Leads For Your Local Business | Stacked Profits";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "Free websites that generate up to 3X more leads and clients for attorneys, medical practices, and home service businesses. High-speed hosting and business tools included."
      );
    }
    
    // Clean up when component unmounts
    return () => {
      document.title = "Stacked Profits"; // Reset to default
    };
  }, []);
  
  // You would replace this with your actual video ID
  const videoProps = {
    videoId: 'your-video-id', // Replace with your actual YouTube or Vimeo video ID
    platform: 'youtube' as const,
    title: "See How We Get 3X More Leads for Local Businesses",
    subtitle: "Watch how our complete website system helps local service businesses grow"
  };
  
  return (
    <div className="min-h-screen">
      <header role="banner">
        <Navbar />
      </header>
      
      <main id="main-content" role="main">
        <section aria-labelledby="hero-heading">
          {isMobile ? (
            <MobileHeroSection />
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
                ✓ Trusted by 200+ Local Businesses
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Dominate Local Search Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our <span className="font-semibold text-primary">highest-level Google Ads certified team</span> has helped <span className="font-semibold text-green-600">50+ businesses rank in Google's top 3 local results</span> where 44% of clicks happen.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">73%</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Google 3-Pack Success Rate
                </h3>
                <p className="text-gray-600">
                  Average increase in local visibility for our clients within 90 days of optimization.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-green-600 mb-2">5X</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Highest Google Ads ROI
                </h3>
                <p className="text-gray-600">
                  Our highest-level certifications deliver 5X better returns than industry average.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-purple-600 mb-2">$2M+</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Non-Profit Ad Spend Managed
                </h3>
                <p className="text-gray-600">
                  Specialized expertise maximizing donation impact for charitable organizations.
                </p>
              </div>
            </div>

            {/* Free Website Audit CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Get Your FREE Website Audit Today
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Discover exactly what's keeping your website from ranking in Google's local 3-pack. 
                Our expert audit reveals hidden issues and provides a roadmap to dominate local search.
              </p>
              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
                Claim Your Free Audit →
              </button>
              <div className="text-sm mt-3 opacity-80">
                No obligations • 15-minute results • Actionable insights
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
                Specialized Solutions for Your Industry
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We understand the unique challenges and opportunities in your field. 
                Our industry-focused approach delivers results that generic marketing simply can't match.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Attorneys */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Legal Practices</h3>
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
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-blue-800 mb-1">Average Results:</div>
                  <div className="text-lg font-bold text-blue-900">300% increase in qualified leads</div>
                </div>
              </div>

              {/* Medical/Dental */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical & Dental</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">HIPAA-compliant patient acquisition systems</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">Medical authority and trust-building content</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">Online reputation management and review generation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">Insurance verification and appointment booking integration</span>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-green-800 mb-1">Average Results:</div>
                  <div className="text-lg font-bold text-green-900">250% increase in new patients</div>
                </div>
              </div>

              {/* Home Services */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Home Services</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">Emergency service call optimization and rapid response</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">Seasonal demand capture and planning</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">Local contractor directories and map pack domination</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mt-1 mr-3">✓</span>
                    <span className="text-gray-600">Before/after galleries and customer testimonial systems</span>
                  </div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-orange-800 mb-1">Average Results:</div>
                  <div className="text-lg font-bold text-orange-900">400% increase in service calls</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Ready to see how our industry expertise can transform your business?
              </p>
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors">
                Get Your Industry-Specific Strategy →
              </button>
            </div>
          </div>
        </section>
        
        <section aria-labelledby="pricing-heading" id="pricing">
          <PricingTable />
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