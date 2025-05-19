import { 
  Code, 
  Zap, 
  Shield, 
  Headphones, 
  Briefcase,
  Hospital,
  Home,
  Cloud,
  Search
} from "lucide-react";

const benefits = [
  {
    title: "Free Website Audit",
    description: "Get a comprehensive analysis of your current website with actionable recommendations.",
    icon: Search
  },
  {
    title: "Professional Design",
    description: "Get a custom-designed website that looks great on all devices.",
    icon: Code
  },
  {
    title: "High-Speed Hosting",
    description: "Blazing fast NVMe SSD storage with unlimited bandwidth.",
    icon: Zap
  },
  {
    title: "Security Included",
    description: "Free SSL certificate, malware protection, and regular backups.",
    icon: Shield
  },
  {
    title: "24/7 Support",
    description: "Access to helpful, human support whenever you need it.",
    icon: Headphones
  }
];

const businessNiches = [
  {
    title: "Attorney Websites",
    description: "Specialized websites for law firms with client intake forms and secure document sharing.",
    icon: Briefcase
  },
  {
    title: "Medical & Dental Sites",
    description: "HIPAA-compliant websites with appointment scheduling and patient portals.",
    icon: Hospital
  },
  {
    title: "Home Services",
    description: "Lead-generating websites for contractors, plumbers, electricians and other service providers.",
    icon: Home
  },
  {
    title: "Integrated Management Platform",
    description: "All websites include our comprehensive business management software suite.",
    icon: Cloud
  }
];

export default function MobileBenefits() {
  return (
    <div className="py-8 bg-white" id="features">
      <div className="px-4">
        <div className="text-center">
          <h2 className="text-sm text-primary font-semibold tracking-wide uppercase">Benefits</h2>
          <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900">
            Everything you need for your online presence
          </p>
          <p className="mt-3 text-md text-gray-500">
            Get a professional website without the professional price tag.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Core Benefits</h3>
          <div className="space-y-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-md font-medium text-gray-900">{benefit.title}</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-10 mb-4 text-center">Specialized For Your Industry</h3>
          <div className="space-y-6">
            {businessNiches.map((niche) => (
              <div key={niche.title} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-secondary text-white">
                    <niche.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-md font-medium text-gray-900">{niche.title}</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    {niche.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}