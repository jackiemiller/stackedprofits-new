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
        
        <div className="mt-6 flex flex-col gap-2">
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