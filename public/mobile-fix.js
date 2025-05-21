// Mobile-specific fix script
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on a mobile device
  if (window.innerWidth < 768) {
    console.log("Mobile device detected, applying dashboard fix");
    
    // Function to hide dashboard and add circles
    function fixMobileDisplay() {
      // Try to find dashboard elements by common patterns
      const dashboardContainers = document.querySelectorAll('.shadow-lg.overflow-hidden');
      
      // Hide dashboard elements
      dashboardContainers.forEach(function(element) {
        console.log("Found dashboard element, hiding:", element);
        element.style.display = 'none';
      });
      
      // Find hero section
      const heroSection = document.querySelector('#hero') || 
                          document.querySelector('#hero-section') || 
                          document.querySelector('#desktop-hero') ||
                          document.querySelector('div[id*="hero"]');
                          
      if (heroSection) {
        console.log("Found hero section:", heroSection);
        
        // Create mobile stats element
        const mobileStats = document.createElement('div');
        mobileStats.id = 'mobile-stats-container';
        mobileStats.style.display = 'flex';
        mobileStats.style.justifyContent = 'center';
        mobileStats.style.gap = '10px';
        mobileStats.style.margin = '20px 0';
        mobileStats.style.padding = '10px';
        
        // Add growth stats circles
        mobileStats.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 70px; height: 70px; background-color: #10b981; color: white; border-radius: 50%; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <span style="font-weight: bold; font-size: 18px;">3X</span>
            <span style="font-size: 12px;">Growth</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 70px; height: 70px; background-color: #3b82f6; color: white; border-radius: 50%; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <span style="font-weight: bold; font-size: 18px;">+208%</span>
            <span style="font-size: 12px;">Leads</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 70px; height: 70px; background-color: #6366f1; color: white; border-radius: 50%; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <span style="font-weight: bold; font-size: 18px;">+300%</span>
            <span style="font-size: 12px;">Clients</span>
          </div>
        `;
        
        // Find where to insert them
        const heading = heroSection.querySelector('h1');
        if (heading && heading.parentNode) {
          console.log("Inserting after heading:", heading);
          heading.parentNode.insertBefore(mobileStats, heading.nextSibling);
        } else {
          console.log("No heading found, appending to hero section");
          heroSection.appendChild(mobileStats);
        }
        
        console.log("Mobile stats added successfully");
      } else {
        console.error("Could not find hero section");
      }
    }
    
    // Try immediately
    fixMobileDisplay();
    
    // Try again after a short delay
    setTimeout(fixMobileDisplay, 1000);
    
    // And again after page has fully loaded
    window.addEventListener('load', fixMobileDisplay);
  }
});