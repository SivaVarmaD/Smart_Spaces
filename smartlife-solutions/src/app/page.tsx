'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background placeholder - Add high-resolution villa background with #007BFF overlay at 50% opacity and silver border */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800">
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          {/* Placeholder for villa background image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center opacity-20">
              <p>Villa Background Image Placeholder</p>
              <p>Add #007BFF gradient overlay at 50% opacity</p>
              <p>Silver border: 1px solid silver</p>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Connected Homes, Smarter Living
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Transform your home with AI-powered automation solutions. Smart Lighting, Advanced Security, and Complete Home Integration.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2, ease: "easeOut" }}
          >
            <Link 
              href="/solutions" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Explore Solutions
            </Link>
            <Link 
              href="/request-demo" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Request Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our premium home automation products designed for modern living
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-shadow">Indoor Monitor E216/E217</h3>
              <p className="text-gray-600 mb-4">
                Advanced indoor monitoring system with crystal clear display and intuitive controls
              </p>
              <p className="text-2xl font-bold text-blue-600 mb-4">₹20,000</p>
              <Link 
                href="/solutions" 
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-shadow">Door Station S212</h3>
              <p className="text-gray-600 mb-4">
                Smart door station with video calling and access control features
              </p>
              <p className="text-2xl font-bold text-blue-600 mb-4">₹18,000</p>
              <Link 
                href="/solutions" 
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-shadow">Smart Lighting System</h3>
              <p className="text-gray-600 mb-4">
                Dimmable lights and RGB strips for complete lighting control
              </p>
              <p className="text-2xl font-bold text-blue-600 mb-4">₹25,000</p>
              <Link 
                href="/solutions" 
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-gray-100 border-t-2 border-silver">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose SmartLife Solutions?</h2>
              <p className="text-lg mb-4">
                Based in Hyderabad, we specialize in delivering eco-friendly, scalable automation 
                solutions for upscale areas including Banjara Hills, Gachibowli, and Jubilee Hills.
              </p>
              <p className="text-gray-600 mb-6">
                Our cutting-edge technology transforms traditional homes into intelligent living spaces 
                that adapt to your lifestyle while promoting energy efficiency and security.
              </p>
              <Link 
                href="/about" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Complete Home Automation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Smart Security Systems</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Lighting Control Solutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Video Door Phone Systems</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>24/7 Technical Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Trusted by homeowners across Hyderabad</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Excellent service and professional installation. Our home is now completely automated!"
              </p>
              <p className="font-semibold">- Happy Client, Banjara Hills</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The smart lighting system has transformed our living experience. Highly recommended!"
              </p>
              <p className="font-semibold">- Satisfied Customer, Gachibowli</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Professional team and cutting-edge technology. Our security system works perfectly!"
              </p>
              <p className="font-semibold">- Delighted Homeowner, Jubilee Hills</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
