export default function MobileDashboardSvg() {
  return (
    <div className="mx-auto" style={{ width: '150px', height: '100px' }}>
      <svg width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Mini dashboard background */}
        <rect width="150" height="100" rx="4" fill="#f8fafc" stroke="#e5e7eb" strokeWidth="1"/>
        
        {/* Title */}
        <text x="10" y="15" fill="#1a365d" fontSize="6" fontWeight="600">Lead Generation Dashboard</text>
        
        {/* Stats boxes */}
        <rect x="10" y="25" width="40" height="20" rx="2" fill="#f8fafc" stroke="#e5e7eb" strokeWidth="0.5"/>
        <text x="12" y="32" fill="#475569" fontSize="4">Leads</text>
        <text x="12" y="40" fill="#1e293b" fontSize="7" fontWeight="bold">324</text>
        <text x="27" y="40" fill="#10b981" fontSize="4">+208%</text>
        
        <rect x="55" y="25" width="40" height="20" rx="2" fill="#f8fafc" stroke="#e5e7eb" strokeWidth="0.5"/>
        <text x="57" y="32" fill="#475569" fontSize="4">Conv. Rate</text>
        <text x="57" y="40" fill="#1e293b" fontSize="7" fontWeight="bold">15.8%</text>
        <text x="77" y="40" fill="#10b981" fontSize="4">+187%</text>
        
        <rect x="100" y="25" width="40" height="20" rx="2" fill="#f8fafc" stroke="#e5e7eb" strokeWidth="0.5"/>
        <text x="102" y="32" fill="#475569" fontSize="4">Clients</text>
        <text x="102" y="40" fill="#1e293b" fontSize="7" fontWeight="bold">78</text>
        <text x="112" y="40" fill="#10b981" fontSize="4">+300%</text>
        
        {/* Chart area */}
        <rect x="10" y="50" width="130" height="45" rx="2" fill="#f8fafc" stroke="#e5e7eb" strokeWidth="0.5"/>
        
        {/* Chart line */}
        <polyline points="20,85 45,80 70,65 95,55 120,50" stroke="#34d399" strokeWidth="1.5" fill="none"/>
        
        {/* Area fill */}
        <path d="M20,85 L45,80 L70,65 L95,55 L120,50 L120,90 L95,90 L70,90 L45,90 L20,90 Z" fill="#34d399" fillOpacity="0.1"/>
        
        {/* 3X badge */}
        <circle cx="120" cy="60" r="8" fill="#34d399"/>
        <text x="115" y="63" fill="white" fontSize="6" fontWeight="bold">3X</text>
      </svg>
    </div>
  );
}