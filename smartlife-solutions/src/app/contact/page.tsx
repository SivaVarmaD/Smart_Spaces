export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name *</label>
              <input 
                type="text" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input 
                type="email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message *</label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-32" 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          {/* Placeholder for Google Maps */}
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Google Maps Placeholder - Hyderabad Location</p>
          </div>
        </div>
      </div>
    </div>
  );
}