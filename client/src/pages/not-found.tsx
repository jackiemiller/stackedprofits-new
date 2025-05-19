import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  // Set page-specific metadata for SEO
  useEffect(() => {
    document.title = "Page Not Found | Stacked Profits";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "The page you are looking for doesn't exist. Return to our homepage to learn about our lead generation websites for local businesses."
      );
    }
    
    // Add robots noindex tag to prevent indexing of 404 page
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
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-16 px-4" role="main">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2 items-center">
              <AlertCircle className="h-8 w-8 text-red-500" aria-hidden="true" />
              <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
            </div>

            <p className="mt-4 text-gray-600">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="mt-8">
              <Button asChild className="bg-primary hover:bg-primary/90 w-full">
                <Link href="/" aria-label="Return to homepage">Return to Homepage</Link>
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-gray-500">
              If you believe this is an error, please contact our support team at <a href="tel:904-424-3654" className="text-primary hover:underline">904-424-3654</a>.
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
