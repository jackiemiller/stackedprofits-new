import { useEffect } from "react";
import Navbar from "@/components/Navbar";
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
          {/* Desktop view only */}
          <div className="hidden md:block">
            <Hero />
          </div>
          
          {/* Mobile view only */}
          <MobileHeroBasic />
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
