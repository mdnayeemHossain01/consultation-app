'use client';

import { PILLARS } from '@/config/pillars';
import { motion } from 'framer-motion';

export default function ServiceList() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-md mx-auto space-y-4">
        {PILLARS.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100 cursor-pointer"
          >
            {/* The Icon Box */}
            <div className={`p-3 rounded-full ${item.color}`}>
              <item.icon className="w-6 h-6" />
            </div>
            
            {/* The Text */}
            <div>
              <h3 className="font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}