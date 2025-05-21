// This script runs immediately when loaded and fixes mobile display issues
(function() {
  // Check if we're on a mobile device
  const isMobile = window.innerWidth < 768;
  
  if (isMobile) {
    // Create mobile circles container
    const mobileStats = document.createElement('div');
    mobileStats.id = 'mobile-stats-container';
    mobileStats.style.display = 'flex';
    mobileStats.style.justifyContent = 'center';
    mobileStats.style.gap = '12px';
    mobileStats.style.margin = '20px 0';
    mobileStats.style.padding = '10px';
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
    
    // Function to inject mobile stats after the page loads
    const injectMobileStats = () => {
      // Find the hero section - could be any of these selectors
      const heroSection = document.querySelector('#hero') || 
                         document.querySelector('#hero-section') || 
                         document.querySelector('#desktop-hero');
      
      if (heroSection) {
        // Hide the dashboard visualization on mobile
        const dashboardVisualizations = heroSection.querySelectorAll('.w-full.mx-auto.ml-auto.rounded-lg.shadow-lg.overflow-hidden');
        dashboardVisualizations.forEach(element => {
          element.style.display = 'none';
        });
        
        // Find heading to insert after
        const heading = heroSection.querySelector('h1') || heroSection.querySelector('p');
        if (heading && heading.parentNode) {
          heading.parentNode.insertBefore(mobileStats, heading.nextSibling);
        } else {
          // If can't find heading, just append to hero
          heroSection.appendChild(mobileStats);
        }
      }
    };
    
    // Try immediately
    injectMobileStats();
    
    // Also try after the page has fully loaded
    window.addEventListener('load', injectMobileStats);
    
    // And try one more time after a short delay
    setTimeout(injectMobileStats, 500);
  }
})();