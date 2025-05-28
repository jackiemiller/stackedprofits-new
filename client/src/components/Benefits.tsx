import { 
  Code, 
  Zap, 
  Shield, 
  Headphones, 
  Briefcase,
  Hospital,
  Home,
  Cloud,
  Search,
  TrendingUp,
  Award,
  MapPin,
  Heart
} from "lucide-react";

const benefits = [
  {
    title: "Free Website Audit",
    description: "Get a comprehensive analysis of your current website with actionable recommendations.",
    icon: Search
  },
  {
    title: "Google 3-Pack SEO Optimization",
    description: "Expert local SEO strategies to get your business featured in Google's coveted local 3-pack results.",
    icon: MapPin
  },
  {
    title: "Highest Google Ads Certifications",
    description: "Our team holds the highest level Google Ads certifications to maximize your advertising ROI.",
    icon: Award
  },
  {
    title: "Professional Design",
    description: "Get a custom-designed website that looks great on all devices and converts visitors to customers.",
    icon: Code
  },
  {
    title: "High-Speed Hosting",
    description: "Blazing fast NVMe SSD storage with unlimited bandwidth for optimal search rankings.",
    icon: Zap
  },
  {
    title: "Security Included",
    description: "Free SSL certificate, malware protection, and regular backups to protect your business.",
    icon: Shield
  }
];

const businessNiches = [
  {
    title: "Attorney Websites",
    description: "SEO-optimized law firm websites that rank in Google's local 3-pack with secure client portals and intake forms.",
    icon: Briefcase
  },
  {
    title: "Medical & Dental Sites",
    description: "HIPAA-compliant websites optimized for local search with appointment scheduling and patient portals.",
    icon: Hospital
  },
  {
    title: "Home Services",
    description: "Lead-generating websites for contractors, plumbers, and electricians with local SEO optimization.",
    icon: Home
  },
  {
    title: "Non-Profit Organizations",
    description: "Specialized Google Ads management and websites for non-profits to maximize donation impact.",
    icon: Heart
  }
];

export default function Benefits() {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Benefits</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for your online presence
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Get a professional website without the professional price tag.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 lg:text-center">Core Benefits</h3>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{benefit.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-16 mb-6 lg:text-center">Specialized For Your Industry</h3>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {businessNiches.map((niche) => (
              <div key={niche.title} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                    <niche.icon className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{niche.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {niche.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}