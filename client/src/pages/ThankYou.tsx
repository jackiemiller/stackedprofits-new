import { Link } from "wouter";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ThankYou() {
  // Set page-specific metadata for SEO
  useEffect(() => {
    document.title = "Thank You | Stacked Profits";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "Thank you for your interest in our lead generation websites. A team member will contact you within 24 hours to discuss next steps."
      );
    }
    
    // Add robots noindex tag to prevent indexing of thank you page
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (robotsTag) {
      robotsTag.setAttribute("content", "noindex, follow");
    } else {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute("name", "robots");
      robotsTag.setAttribute("content", "noindex, follow");
      document.head.appendChild(robotsTag);
    }
    
    // Clean up when component unmounts
    return () => {
      document.title = "Stacked Profits";
      if (robotsTag && document.head.contains(robotsTag)) {
        robotsTag.setAttribute("content", "index, follow");
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <header role="banner">
        <Navbar />
      </header>
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-16 px-4 sm:py-24 sm:px-6 lg:px-8" role="main">
        <Card className="max-w-md w-full mx-auto">
          <CardContent className="pt-6 text-center">
            <div className="flex justify-center" aria-hidden="true">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            
            <h1 className="mt-4 text-2xl font-bold text-gray-900">Thank You!</h1>
            
            <p className="mt-4 text-gray-600">
              We've received your information. A team member will contact you within 24 hours 
              to start building your free website.
            </p>
            
            <div className="mt-8">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/" aria-label="Return to homepage">Return to Home</Link>
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-gray-500">
              If you have any questions, please contact our support team at <a href="tel:904-424-3654" className="text-primary hover:underline">904-424-3654</a> or <a href="mailto:john@stackedprofits.com" className="text-primary hover:underline">john@stackedprofits.com</a>.
            </p>
          </CardContent>
        </Card>
      </main>
      
      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
}
