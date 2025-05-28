import { MapPin, Award, TrendingUp, Star, Target, BarChart3 } from "lucide-react";

const seoFeatures = [
  {
    title: "Google 3-Pack Domination",
    description: "Get your business featured in Google's local 3-pack results where 44% of clicks happen.",
    icon: MapPin,
    highlight: "Featured in Top 3 Local Results"
  },
  {
    title: "Local SEO Optimization",
    description: "Complete Google Business Profile optimization and local citation building for maximum visibility.",
    icon: TrendingUp,
    highlight: "Rank Higher Than Competitors"
  },
  {
    title: "Certified Google Ads Experts",
    description: "Our team holds the highest level Google Ads certifications to maximize your advertising ROI.",
    icon: Award,
    highlight: "Highest Level Certifications"
  }
];

const results = [
  { metric: "Average Lead Increase", value: "208%" },
  { metric: "Client Growth Rate", value: "300%" },
  { metric: "Google 3-Pack Rankings", value: "85%" },
  { metric: "Ad Spend Efficiency", value: "150%" }
];

export default function SEOSection() {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Dominate Local Search Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our <span className="font-semibold text-primary">highest-level Google Ads certified team</span> specializes in getting service businesses and non-profits to rank in Google's coveted local 3-pack.
          </p>
        </div>

        {/* SEO Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {seoFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Proven Results for Service Businesses & Non-Profits
            </h3>
            <p className="text-gray-600">
              Our Google Ads certified experts deliver measurable growth across all client types
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-4 mb-3">
                  <div className="text-3xl font-bold">
                    {result.value}
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-700">
                  {result.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Dominate Your Local Market?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get your free website audit and discover how we can get your business ranking in Google's local 3-pack
            </p>
            <a 
              href="#get-started"
              className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
            >
              <Star className="h-5 w-5 mr-2" />
              Start Your Free Audit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}