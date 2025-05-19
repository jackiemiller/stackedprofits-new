export default function DashboardMobileSvg() {
  return (
    <div className="flex justify-center w-full px-2">
      <svg width="250" height="170" viewBox="0 0 250 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background gradients */}
        <defs>
          <linearGradient id="mobileBackgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a365d" stopOpacity="0.05"/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="mobileChartGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#34d399" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="mobileBlueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a365d"/>
            <stop offset="100%" stopColor="#2563eb"/>
          </linearGradient>
          <linearGradient id="mobileGreenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#059669"/>
            <stop offset="100%" stopColor="#34d399"/>
          </linearGradient>
          <filter id="mobileShadow" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
          </filter>
        </defs>

        {/* Background Rectangle */}
        <rect width="250" height="170" fill="url(#mobileBackgroundGradient)" rx="8"/>

        {/* Dashboard Container */}
        <rect x="10" y="10" width="230" height="150" rx="6" fill="white" filter="url(#mobileShadow)"/>
        
        {/* Dashboard Header */}
        <rect x="10" y="10" width="230" height="25" rx="6" fill="#f8fafc"/>
        <rect x="10" y="10" width="230" height="6" rx="6" fill="url(#mobileBlueGradient)"/>
        
        {/* Dashboard Title */}
        <text x="20" y="27" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="9" fill="#1a365d">Lead Generation Dashboard</text>

        {/* Growth Stats Section - Just two metrics side by side */}
        <rect x="20" y="45" width="100" height="35" rx="4" fill="#f8fafc"/>
        <text x="30" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="8" fill="#1a365d">Total Leads</text>
        <text x="30" y="75" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill="#34d399">324</text>
        <text x="60" y="75" fontFamily="Arial, sans-serif" fontSize="8" fill="#34d399">+208%</text>
        
        <rect x="130" y="45" width="100" height="35" rx="4" fill="#f8fafc"/>
        <text x="140" y="60" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="8" fill="#1a365d">New Clients</text>
        <text x="140" y="75" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill="#34d399">78</text>
        <text x="160" y="75" fontFamily="Arial, sans-serif" fontSize="8" fill="#34d399">+300%</text>
        
        {/* Main Chart */}
        <rect x="20" y="90" width="210" height="60" rx="4" fill="#f8fafc"/>
        
        {/* Chart Title */}
        <text x="30" y="105" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="8" fill="#1a365d">Lead Growth Over Time</text>
        
        {/* X Axis */}
        <line x1="30" y1="130" x2="210" y2="130" stroke="#cbd5e1" strokeWidth="1"/>
        <text x="35" y="140" fontFamily="Arial, sans-serif" fontSize="6" fill="#64748b">Month 1</text>
        <text x="80" y="140" fontFamily="Arial, sans-serif" fontSize="6" fill="#64748b">Month 2</text>
        <text x="125" y="140" fontFamily="Arial, sans-serif" fontSize="6" fill="#64748b">Month 3</text>
        <text x="170" y="140" fontFamily="Arial, sans-serif" fontSize="6" fill="#64748b">Month 4</text>
        
        {/* Before Line */}
        <polyline points="35,125 80,123 125,126 170,122" stroke="#94a3b8" strokeWidth="1" fill="none"/>
        <circle cx="35" cy="125" r="2" fill="#94a3b8"/>
        <circle cx="80" cy="123" r="2" fill="#94a3b8"/>
        <circle cx="125" cy="126" r="2" fill="#94a3b8"/>
        <circle cx="170" cy="122" r="2" fill="#94a3b8"/>
        
        {/* After Line (3X Growth) */}
        <polyline points="35,125 80,117 125,110 170,105" stroke="url(#mobileGreenGradient)" strokeWidth="2" fill="none"/>
        <circle cx="35" cy="125" r="2" fill="#34d399"/>
        <circle cx="80" cy="117" r="2" fill="#34d399"/>
        <circle cx="125" cy="110" r="2" fill="#34d399"/>
        <circle cx="170" cy="105" r="2" fill="#34d399"/>
        
        {/* Area under the growth line */}
        <path d="M35,125 L80,117 L125,110 L170,105 L170,130 L125,130 L80,130 L35,130 Z" fill="url(#mobileChartGradient)"/>

        {/* 3X Badge */}
        <circle cx="200" cy="120" r="12" fill="url(#mobileGreenGradient)"/>
        <text x="193" y="124" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="10" fill="white">3X</text>
      </svg>
    </div>
  );
}