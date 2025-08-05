'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);

  // In production, replace this with actual Tawk.to integration
  // <script src="https://embed.tawk.to/WIDGET_ID/PROPERTY_ID"></script>

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-24 left-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </motion.button>
      </motion.div>

      {/* Chat Window Placeholder */}
      {isOpen && (
        <motion.div
          className="fixed bottom-40 left-6 w-80 h-96 bg-white rounded-lg shadow-2xl border z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">SmartLife Support</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-4 h-64 overflow-y-auto">
            <div className="bg-gray-100 p-3 rounded-lg mb-3">
              <p className="text-sm">👋 Hello! Welcome to SmartLife Solutions!</p>
              <p className="text-sm mt-1">How can we help you with your home automation needs today?</p>
            </div>
            
            <div className="text-center text-gray-500 text-sm">
              <p>Live chat integration placeholder</p>
              <p className="text-xs mt-1">Replace with Tawk.to widget in production</p>
            </div>
          </div>
          
          <div className="border-t p-3">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}