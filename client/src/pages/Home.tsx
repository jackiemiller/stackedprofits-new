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
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Dominate Local Search Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our <span className="font-semibold text-primary">highest-level Google Ads certified team</span> specializes in getting service businesses and non-profits to rank in Google's coveted local 3-pack.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Google 3-Pack Domination
                </h3>
                <p className="text-gray-600">
                  Get your business featured in Google's local 3-pack results where 44% of clicks happen.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Highest Google Ads Certifications
                </h3>
                <p className="text-gray-600">
                  Our team holds the highest level Google Ads certifications to maximize your advertising ROI.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Non-Profit Expertise
                </h3>
                <p className="text-gray-600">
                  Specialized Google Ads management for non-profits to maximize donation impact.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section aria-labelledby="hosting-plan-heading" id="hosting">
          <HostingPlan />
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