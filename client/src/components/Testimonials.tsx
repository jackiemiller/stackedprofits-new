import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import type { Testimonial } from "@shared/schema";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
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

  return (
    <div className="bg-gray-50 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm sm:text-base font-semibold tracking-wide uppercase text-primary">Testimonials</h2>
          <p className="mt-1 text-xl sm:text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
            Trusted by businesses everywhere
          </p>
        </div>

        {/* Mobile view: scrollable horizontal carousel */}
        <div className="mt-6 overflow-x-auto pb-4 -mx-3 px-3 sm:hidden">
          <div className="flex space-x-4 min-w-max">
            {displayTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 flex flex-col h-full">
                  <div className="flex items-center mb-3">
                    {Array.from({ length: parseInt(testimonial.rating) }).map((_, i) => (
                      <StarIcon key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-sm font-medium text-gray-900 line-clamp-3">
                    "{testimonial.content.split('!')[0]}!"
                  </p>
                  
                  <div className="mt-auto pt-4 flex items-center">
                    <Avatar className="h-8 w-8 rounded-full">
                      <AvatarImage src={testimonial.avatarUrl || ''} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    
                    <div className="ml-2">
                      <p className="text-xs font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop view: grid layout */}
        <div className="hidden sm:grid mt-12 max-w-lg mx-auto grid gap-6 md:gap-8 lg:grid-cols-3 lg:max-w-none">
          {displayTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col h-full">
              <CardContent className="flex-1 p-6 pt-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: parseInt(testimonial.rating) }).map((_, i) => (
                      <StarIcon key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-base sm:text-lg font-medium text-gray-900 break-words">
                    "{testimonial.content.split('!')[0]}!"
                  </p>
                  
                  <p className="mt-3 text-sm sm:text-base text-gray-500 break-words">
                    {testimonial.content.split('!')[1] || ''}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center">
                  <Avatar className="h-10 w-10 rounded-full">
                    <AvatarImage src={testimonial.avatarUrl || ''} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
