'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function StickyDemoButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <Link href="/request-demo">
        <motion.button
          className="bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)" 
          }}
          whileTap={{ scale: 0.95 }}
        >
          Request Demo
        </motion.button>
      </Link>
    </motion.div>
  );
}