'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Indoor Monitor E216/E217',
    category: 'Smart Displays',
    description: 'Advanced indoor monitoring system with crystal clear 7-inch display, touch controls, and video calling capabilities.',
    price: 20000,
    features: ['7-inch HD Display', 'Touch Controls', 'Video Calling', 'Door Release', 'Memory Function'],
    image: 'placeholder-indoor-monitor.jpg'
  },
  {
    id: 2,
    name: 'Video Door Phone C112',
    category: 'Security Systems',
    description: 'Smart video door communication system with HD camera, night vision, and mobile app integration.',
    price: 15000,
    features: ['HD Camera', 'Night Vision', 'Mobile App', 'Two-way Audio', 'Motion Detection'],
    image: 'placeholder-door-phone.jpg'
  },
  {
    id: 3,
    name: 'Curtain Motor',
    category: 'Smart Controls',
    description: 'Automated curtain control system with quiet operation, smartphone control, and scheduling.',
    price: 10000,
    features: ['Quiet Operation', 'App Control', 'Voice Commands', 'Scheduling', 'Manual Override'],
    image: 'placeholder-curtain-motor.jpg'
  },
  {
    id: 4,
    name: 'Smart Lighting System',
    category: 'Lighting',
    description: 'Complete smart lighting solution with dimmable lights, RGB strips, and scene control.',
    price: 25000,
    features: ['Dimmable Lights', 'RGB Strips', 'Scene Control', 'Energy Saving', 'Voice Control'],
    image: 'placeholder-smart-lighting.jpg'
  },
  {
    id: 5,
    name: 'Door Station S212',
    category: 'Security Systems',
    description: 'Premium outdoor door station with weather resistance, facial recognition, and access control.',
    price: 18000,
    features: ['Weather Resistant', 'Facial Recognition', 'Access Control', 'RFID Support', 'Vandal Proof'],
    image: 'placeholder-door-station.jpg'
  },
  {
    id: 6,
    name: 'Main Panel H618',
    category: 'Control Systems',
    description: 'Central control panel for complete home automation with touchscreen interface and wireless connectivity.',
    price: 35000,
    features: ['10-inch Touchscreen', 'Wireless Control', 'Multi-zone Support', 'Cloud Integration', 'Backup Power'],
    image: 'placeholder-main-panel.jpg'
  }
];

const categories = ['All', 'Smart Displays', 'Security Systems', 'Smart Controls', 'Lighting', 'Control Systems'];

export default function SolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
    // Show success message (placeholder for actual implementation)
    alert('Product added to cart!');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our Solutions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive home automation solutions designed for modern living. 
              From smart lighting to complete security systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Product Image Placeholder */}
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <p className="text-sm">Product Image</p>
                    <p className="text-xs">{product.image}</p>
                    {/* Placeholder for 3D tilt effect */}
                    <p className="text-xs mt-2">3D Tilt Effect Placeholder</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-shadow">{product.name}</h3>
                    <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-blue-600">
                      ₹{product.price.toLocaleString()}
                    </p>
                    <motion.button
                      onClick={() => addToCart(product.id)}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Buy Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Home Automation Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of smart home solutions designed to transform your living experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center p-6 bg-gray-50 rounded-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Lighting</h3>
              <p className="text-gray-600 text-sm">
                Dimmable lights, RGB strips, and intelligent scene control for perfect ambiance
              </p>
              <p className="text-lg font-bold text-blue-600 mt-2">₹20,000 - ₹50,000</p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-gray-50 rounded-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Security Systems</h3>
              <p className="text-gray-600 text-sm">
                Advanced security with cameras, access control, and smart monitoring
              </p>
              <p className="text-lg font-bold text-blue-600 mt-2">₹15,000 - ₹40,000</p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-gray-50 rounded-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Climate Control</h3>
              <p className="text-gray-600 text-sm">
                Smart thermostats, automated curtains, and environmental monitoring
              </p>
              <p className="text-lg font-bold text-blue-600 mt-2">₹10,000 - ₹30,000</p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-gray-50 rounded-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Entertainment</h3>
              <p className="text-gray-600 text-sm">
                Multi-room audio, smart TVs integration, and automated entertainment systems
              </p>
              <p className="text-lg font-bold text-blue-600 mt-2">₹25,000 - ₹75,000</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shopping Cart Summary */}
      {cart.length > 0 && (
        <motion.div 
          className="fixed bottom-20 right-6 bg-white p-4 rounded-lg shadow-lg border z-40"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-5m6-5V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            <span className="font-semibold">{cart.length} items in cart</span>
          </div>
        </motion.div>
      )}

      {/* YouTube Integration Placeholder */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Product Walkthroughs</h2>
            <p className="text-gray-600">Watch detailed demonstrations of our products</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <p className="font-semibold">YouTube Video Placeholder</p>
                <p className="text-sm">S213K Product Walkthrough</p>
              </div>
            </div>
            <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <p className="font-semibold">YouTube Video Placeholder</p>
                <p className="text-sm">Complete Installation Guide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}