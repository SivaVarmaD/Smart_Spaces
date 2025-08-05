export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Jubilee Hills Villa Automation</h2>
          <p className="text-gray-600 mb-4">
            Complete home automation installation for a luxury villa in Jubilee Hills
          </p>
          {/* Placeholder for before-after slider */}
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Before/After Slider Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}