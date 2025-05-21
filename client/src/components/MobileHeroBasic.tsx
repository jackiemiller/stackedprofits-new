export default function MobileHeroBasic() {
  return (
    <div className="bg-white px-4 py-6" id="hero">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          <span className="block">Free Websites That Get</span>
          <span className="block text-primary">Local Services</span>
          <span className="block text-primary">Up To 3X More Leads!</span>
        </h1>
        
        <p className="mt-3 text-sm text-gray-500">
          <span className="font-medium">Free Website Audit + Hosting Included</span>
        </p>
        
        <p className="mt-2 text-sm text-gray-500">
          Perfect for Attorneys, Medical, and Home Services
        </p>
        
        {/* Growth pills - minimal design */}
        <div className="my-4">
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center bg-green-500 text-white rounded-full px-3 py-1 shadow-sm">
              <span className="font-bold text-lg mr-1">3X</span>
              <span className="text-xs">Growth</span>
            </div>
            <div className="inline-flex items-center bg-blue-500 text-white rounded-full px-3 py-1 shadow-sm">
              <span className="font-bold text-sm mr-1">+208%</span>
              <span className="text-xs">Leads</span>
            </div>
            <div className="inline-flex items-center bg-indigo-500 text-white rounded-full px-3 py-1 shadow-sm">
              <span className="font-bold text-sm mr-1">+300%</span>
              <span className="text-xs">Clients</span>
            </div>
          </div>
        </div>
        
        <div className="mt-2 flex flex-col gap-2">
          <a
            href="#get-started"
            className="px-6 py-2 text-sm rounded-md text-white bg-primary"
          >
            Get Started Now
          </a>
          <a
            href="#features"
            className="px-6 py-2 text-sm rounded-md border border-primary text-primary"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}