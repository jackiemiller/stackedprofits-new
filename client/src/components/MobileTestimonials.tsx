import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";
import type { Testimonial } from "@shared/schema";
import { useState } from "react";

interface MobileTestimonialsProps {
  testimonials: Testimonial[];
}

export default function MobileTestimonials({ testimonials }: MobileTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // If no testimonials are loaded yet, use default ones to avoid empty state
  const displayTestimonials = testimonials.length > 0 
    ? testimonials 
    : [
        {
          id: 1,
          name: "Sarah Johnson",
          title: "Small Business Owner",
          content: "The website they built for me has been a game-changer for my business. The best part? I got it for free! The hosting is worth every penny with all the features and support I get. I've seen a 40% increase in leads since launching.",
          rating: "5",
          avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          createdAt: new Date()
        },
        {
          id: 2,
          name: "David Rodriguez",
          title: "Freelance Photographer",
          content: "I couldn't believe I got a professional website for free. The process was incredibly smooth! The hosting is reliable with 99.9% uptime as promised. Their support team is responsive and knowledgeable.",
          rating: "5",
          avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          createdAt: new Date()
        },
        {
          id: 3,
          name: "Emily Chen",
          title: "E-commerce Entrepreneur",
          content: "I was skeptical about the 'free website' offer, but it exceeded all my expectations! The website looks professional and performs great. The hosting has all the features I need to run my online store.",
          rating: "5",
          avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          createdAt: new Date()
        }
      ];

  // Handle pagination
  const nextTestimonial = () => {
    setActiveIndex((current) => 
      current === displayTestimonials.length - 1 ? 0 : current + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => 
      current === 0 ? displayTestimonials.length - 1 : current - 1
    );
  };

  const currentTestimonial = displayTestimonials[activeIndex];

  return (
    <div className="bg-gray-50 py-6">
      <div className="px-4">
        <div className="text-center">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-primary">Testimonials</h2>
          <p className="mt-1 text-xl font-extrabold text-gray-900">
            Trusted by businesses
          </p>
        </div>

        {/* Single testimonial card with pagination */}
        <div className="mt-6 relative bg-white rounded-xl shadow-md overflow-hidden mx-auto">
          <div className="p-5">
            {/* Stars */}
            <div className="flex items-center mb-3">
              {Array.from({ length: parseInt(currentTestimonial.rating) }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            
            {/* Content */}
            <p className="text-sm leading-relaxed text-gray-900">
              "{currentTestimonial.content.split('!')[0]}!"
            </p>
            
            {/* User info */}
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center">
              <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage src={currentTestimonial.avatarUrl || ''} alt={currentTestimonial.name} />
                <AvatarFallback>{currentTestimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <div className="ml-2 flex-1">
                <p className="text-xs font-medium text-gray-900">{currentTestimonial.name}</p>
                <p className="text-xs text-gray-500">{currentTestimonial.title}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between items-center p-3 border-t border-gray-100 bg-gray-50">
            <button 
              onClick={prevTestimonial}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow text-gray-500 hover:text-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Pagination dots */}
            <div className="flex space-x-1">
              {displayTestimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow text-gray-500 hover:text-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}