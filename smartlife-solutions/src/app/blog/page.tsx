export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-lg break-inside-avoid">
          <h2 className="text-xl font-semibold mb-3">Home Automation Trends in Hyderabad</h2>
          <p className="text-gray-600 mb-4">
            Discover the latest trends in home automation technology in Hyderabad's premium neighborhoods.
          </p>
          <span className="text-sm text-blue-600">Automation Tips</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg break-inside-avoid">
          <h2 className="text-xl font-semibold mb-3">Smart Lighting Solutions</h2>
          <p className="text-gray-600 mb-4">
            Learn about dimmable lights and RGB strips for modern homes.
          </p>
          <span className="text-sm text-blue-600">Hyderabad Trends</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg break-inside-avoid">
          <h2 className="text-xl font-semibold mb-3">Security System Integration</h2>
          <p className="text-gray-600 mb-4">
            Complete guide to integrating security systems with home automation.
          </p>
          <span className="text-sm text-blue-600">Automation Tips</span>
        </div>
      </div>
    </div>
  );
}