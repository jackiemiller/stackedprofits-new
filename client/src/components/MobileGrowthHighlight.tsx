export default function MobileGrowthHighlight() {
  return (
    <div className="w-full bg-gray-50 rounded-lg py-3 px-4 border border-gray-200">
      <div className="flex justify-between items-center">
        <div className="text-sm font-semibold text-gray-800">Get 3X More Leads</div>
        <div className="bg-green-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
          3X
        </div>
      </div>
      <div className="text-xs text-gray-600 mt-1">Our clients see dramatic growth in:</div>
      <ul className="mt-2 space-y-1">
        <li className="text-xs text-gray-700">✓ Website Traffic</li>
        <li className="text-xs text-gray-700">✓ Lead Generation</li>
        <li className="text-xs text-gray-700">✓ Client Acquisition</li>
      </ul>
    </div>
  );
}