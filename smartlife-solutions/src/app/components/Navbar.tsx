'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SLS</span>
            </div>
            <span className="font-bold text-xl text-gray-800">SmartLife Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors">
              Solutions
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">
              Case Studies
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link 
              href="/request-demo" 
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Request Demo
            </Link>
          </div>

          {/* Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <select className="text-sm border border-gray-300 rounded px-2 py-1">
              <option value="en">English</option>
              <option value="te">Telugu</option>
              <option value="hi">Hindi</option>
            </select>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/solutions" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Solutions
              </Link>
              <Link href="/case-studies" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Case Studies
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Blog
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Contact
              </Link>
              <Link 
                href="/request-demo" 
                className="block px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Request Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}