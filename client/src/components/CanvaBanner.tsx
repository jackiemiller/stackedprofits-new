import { useState } from "react";

export default function CanvaBanner() {
  const [isHovered, setIsHovered] = useState(false);

  const handleFreeWebsiteClick = () => {
    // Scroll to the lead generation form
    const leadForm = document.getElementById('get-started');
    if (leadForm) {
      leadForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Desktop Banner - Original Rectangle */}
          <div className="hidden md:block">
            <img 
              src="/assets/law-firm-banner.png" 
              alt="Stacked Profits - Helps Grow Your Law Firm 5X Your Profit and Gain 20+ Hours Weekly Through Strategic CFO Advisory, Comprehensive Digital Marketing, and Automated Client Acquisition and Retention Systems"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            
            {/* Desktop Clickable Area for "Get Your Free Legal Website Here" */}
            <button
              onClick={handleFreeWebsiteClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`absolute left-[8%] top-[25%] w-[35%] h-[50%] bg-transparent hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-300 cursor-pointer ${
                isHovered ? 'ring-2 ring-lime-400 ring-opacity-50' : ''
              }`}
              aria-label="Get Your Free Legal Website - Click to start"
              title="Click to get your free legal website"
            >
              <span className="sr-only">Get Your Free Legal Website Here</span>
            </button>
            
            {/* Desktop pulse animation */}
            <div className="absolute left-[25%] top-[40%] w-16 h-16 pointer-events-none">
              <div className="absolute inset-0 rounded-full bg-lime-400 opacity-20 animate-ping"></div>
            </div>
          </div>

          {/* Mobile Banner - Square Format */}
          <div className="block md:hidden">
            <img 
              src="/assets/law-firm-banner-mobile.png" 
              alt="Stacked Profits - Helps Grow Your Law Firm 5X Your Profit and Gain 20+ Hours Weekly Through Strategic CFO Advisory, Comprehensive Digital Marketing, and Automated Client Acquisition and Retention Systems"
              className="w-full rounded-lg shadow-lg h-56 object-cover"
            />
            
            {/* Mobile Clickable Area for "Get Your Free Legal Website Here" - Bottom position */}
            <button
              onClick={handleFreeWebsiteClick}
              className="absolute left-[15%] bottom-[15%] w-[70%] h-[25%] bg-transparent hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-300 cursor-pointer"
              aria-label="Get Your Free Legal Website - Click to start"
              title="Click to get your free legal website"
            >
              <span className="sr-only">Get Your Free Legal Website Here</span>
            </button>
            
            {/* Mobile pulse animation - Bottom position */}
            <div className="absolute right-[25%] bottom-[25%] w-12 h-12 pointer-events-none">
              <div className="absolute inset-0 rounded-full bg-lime-400 opacity-20 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

