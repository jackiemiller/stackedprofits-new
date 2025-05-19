export default function DashboardHeroSvg() {
  return (
    <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background gradients */}
      <defs>
        <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a365d" stopOpacity="0.05"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="chartGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#34d399" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a365d"/>
          <stop offset="100%" stopColor="#2563eb"/>
        </linearGradient>
        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#059669"/>
          <stop offset="100%" stopColor="#34d399"/>
        </linearGradient>
        <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="4" stdDeviation="10" floodOpacity="0.15"/>
        </filter>
      </defs>

      {/* Background Rectangle */}
      <rect width="600" height="400" fill="url(#backgroundGradient)" rx="20"/>

      {/* Dashboard Container */}
      <rect x="40" y="30" width="520" height="340" rx="16" fill="white" filter="url(#shadow)"/>
      
      {/* Dashboard Header */}
      <rect x="40" y="30" width="520" height="60" rx="16" fill="#f8fafc"/>
      <rect x="40" y="30" width="520" height="16" rx="16" fill="url(#blueGradient)"/>
      
      {/* Dashboard Title */}
      <text x="70" y="65" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="16" fill="#1a365d">Lead Generation Dashboard</text>
      
      {/* Time Period Selector */}
      <rect x="400" y="50" width="140" height="26" rx="13" fill="#f1f5f9"/>
      <text x="420" y="68" fontFamily="Arial, sans-serif" fontSize="12" fill="#64748b">Last 90 Days ▼</text>

      {/* Growth Stats Section */}
      <rect x="60" y="110" width="140" height="90" rx="10" fill="#f8fafc"/>
      <text x="80" y="135" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill="#1a365d">Total Leads</text>
      <text x="80" y="170" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28" fill="#34d399">324</text>
      <text x="140" y="170" fontFamily="Arial, sans-serif" fontSize="14" fill="#34d399">+208%</text>
      
      <rect x="230" y="110" width="160" height="90" rx="10" fill="#f8fafc"/>
      <text x="250" y="135" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill="#1a365d">Conversion Rate</text>
      <text x="250" y="170" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28" fill="#34d399">15.8</text>
      <text x="303" y="170" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28" fill="#34d399">%</text>
      <text x="335" y="170" fontFamily="Arial, sans-serif" fontSize="14" fill="#34d399">+187%</text>
      
      <rect x="415" y="110" width="140" height="90" rx="10" fill="#f8fafc"/>
      <text x="435" y="135" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill="#1a365d">New Clients</text>
      <text x="435" y="170" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28" fill="#34d399">78</text>
      <text x="475" y="170" fontFamily="Arial, sans-serif" fontSize="14" fill="#34d399">+300%</text>

      {/* Main Chart */}
      <rect x="60" y="220" width="480" height="130" rx="10" fill="#f8fafc"/>
      
      {/* Chart Title */}
      <text x="80" y="245" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill="#1a365d">Lead Growth Over Time</text>
      
      {/* X Axis */}
      <line x1="80" y1="310" x2="520" y2="310" stroke="#cbd5e1" strokeWidth="1"/>
      
      {/* X Axis Labels */}
      <text x="90" y="325" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">Month 1</text>
      <text x="190" y="325" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">Month 2</text>
      <text x="290" y="325" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">Month 3</text>
      <text x="390" y="325" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">Month 4</text>
      <text x="490" y="325" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">Month 5</text>
      
      {/* Y Axis */}
      <line x1="80" y1="260" x2="80" y2="310" stroke="#cbd5e1" strokeWidth="1"/>
      
      {/* Y Axis Labels */}
      <text x="65" y="310" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">0</text>
      <text x="65" y="285" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">50</text>
      <text x="60" y="260" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">100</text>
      
      {/* Before Line */}
      <polyline points="90,295 190,290 290,298 390,285 490,292" stroke="#94a3b8" strokeWidth="2" fill="none"/>
      <circle cx="90" cy="295" r="3" fill="#94a3b8"/>
      <circle cx="190" cy="290" r="3" fill="#94a3b8"/>
      <circle cx="290" cy="298" r="3" fill="#94a3b8"/>
      <circle cx="390" cy="285" r="3" fill="#94a3b8"/>
      <circle cx="490" cy="292" r="3" fill="#94a3b8"/>
      
      {/* After Line (3X Growth) */}
      <polyline points="90,295 190,275 290,255 390,240 490,230" stroke="url(#greenGradient)" strokeWidth="3" fill="none"/>
      <circle cx="90" cy="295" r="4" fill="#34d399"/>
      <circle cx="190" cy="275" r="4" fill="#34d399"/>
      <circle cx="290" cy="255" r="4" fill="#34d399"/>
      <circle cx="390" cy="240" r="4" fill="#34d399"/>
      <circle cx="490" cy="230" r="4" fill="#34d399"/>
      
      {/* Area under the growth line */}
      <path d="M90,295 L190,275 L290,255 L390,240 L490,230 L490,310 L390,310 L290,310 L190,310 L90,310 Z" fill="url(#chartGradient)"/>

      {/* Chart Legend */}
      <circle cx="400" cy="245" r="4" fill="#94a3b8"/>
      <text x="410" y="248" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">Before Optimization</text>
      
      <circle cx="400" cy="260" r="4" fill="#34d399"/>
      <text x="410" y="263" fontFamily="Arial, sans-serif" fontSize="10" fill="#1a365d">After Stacked Profits (3X Growth)</text>

      {/* 3X Badge */}
      <circle cx="500" cy="250" r="30" fill="url(#greenGradient)"/>
      <text x="485" y="258" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="20" fill="white">3X</text>
      
      {/* Device Frame Elements */}
      <path d="M35 25 L40 30 L560 30 L565 25 Z" fill="#1a365d"/>
      <path d="M565 25 L560 30 L560 370 L565 375 Z" fill="#1a365d" opacity="0.8"/>
      <path d="M565 375 L560 370 L40 370 L35 375 Z" fill="#1a365d" opacity="0.6"/>
      <path d="M35 375 L40 370 L40 30 L35 25 Z" fill="#1a365d" opacity="0.4"/>
    </svg>
  );
}