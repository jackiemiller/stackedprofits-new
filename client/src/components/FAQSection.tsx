import { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ } from "@shared/schema";

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  // Reference to inject structured data for FAQs
  const structuredDataRef = useRef<HTMLScriptElement | null>(null);
  
  // If no FAQs are loaded yet, use default ones to avoid empty state
  const displayFaqs = faqs.length > 0 
    ? faqs 
    : [
        {
          id: 1,
          question: "What's included in the website with each package?",
          answer: "All our packages include a professionally designed custom website with mobile responsiveness, core pages (home, about, services, contact), SEO optimization, and contact form functionality. The website is included free with your package, and you only pay the monthly fee for your chosen package plus a one-time upfront website setup fee.",
          sortOrder: "1",
          createdAt: new Date()
        },
        {
          id: 2,
          question: "How do I choose between the different packages?",
          answer: "We recommend Package 01 ($100/month) for businesses just getting started online who need a basic web presence with monthly content. Package 02 ($300/month) adds AI chat capabilities, Google Business Profile management, and more content. Package 03 ($500/month) is our comprehensive solution with voice AI and appointment booking for businesses ready to fully automate their customer interactions.",
          sortOrder: "2",
          createdAt: new Date()
        },
        {
          id: 3,
          question: "Can I upgrade to a higher package later?",
          answer: "Yes, you can upgrade from Package 01 to Package 02 or 03 at any time. Upgrading is seamless and doesn't require any website migration or downtime. You'll immediately get access to additional features and benefits like AI chat, more content articles, and other premium services.",
          sortOrder: "3",
          createdAt: new Date()
        },
        {
          id: 4,
          question: "Is there a setup fee or hidden charges?",
          answer: "No, there are absolutely no hidden charges beyond the package prices shown. Each package includes a custom website with an upfront fee and then the monthly package fee ($100, $300, or $500 depending on your choice). All features included in each package are clearly listed.",
          sortOrder: "4",
          createdAt: new Date()
        },
        {
          id: 5,
          question: "Can I customize my website after it's built?",
          answer: "Yes, you'll have access to a user-friendly content management system where you can update text, images, and basic layout elements. For more advanced customizations, our support team can assist or provide quotes for additional development work.",
          sortOrder: "5",
          createdAt: new Date()
        }
      ];
  
  // Add structured data for FAQs
  useEffect(() => {
    // Clean up any existing script first
    if (structuredDataRef.current) {
      try {
        document.head.removeChild(structuredDataRef.current);
        structuredDataRef.current = null;
      } catch (error) {
        console.error("Error removing previous structured data:", error);
      }
    }
    
    // Create new script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    // Create the FAQ structured data
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": displayFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    
    script.textContent = JSON.stringify(faqStructuredData);
    document.head.appendChild(script);
    structuredDataRef.current = script;
    
    // Clean up when component unmounts
    return () => {
      if (structuredDataRef.current && document.head.contains(structuredDataRef.current)) {
        try {
          document.head.removeChild(structuredDataRef.current);
        } catch (error) {
          console.error("Error cleaning up structured data:", error);
        }
      }
    };
  }, [displayFaqs]);

  return (
    <section className="bg-white" id="faq" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {displayFaqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={`faq-${faq.id}`} 
                className="border border-gray-200 rounded-md p-1"
                data-faq-item={`faq-${faq.id}`}
              >
                <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-primary px-4">
                  <span className="text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-500 px-4 pb-4">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
