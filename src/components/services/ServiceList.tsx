'use client';

import { useState } from 'react';
import { PILLARS } from '@/config/pillars';
import { motion } from 'framer-motion';
import ServiceModal from './ServiceModal';

export default function ServiceList() {
  // This state tracks which service is currently open (if any)
  const [selectedService, setSelectedService] = useState<any>(null);

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
            onClick={() => setSelectedService(item)} // Open the modal on click
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100 cursor-pointer hover:border-blue-200 hover:shadow-md transition-all"
          >
            {/* The Icon Box */}
            <div className={`p-3 rounded-full ${item.color}`}>
              <item.icon className="w-6 h-6" />
            </div>
            
            {/* The Text */}
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>

            {/* Tiny arrow to show it's clickable */}
            <div className="text-gray-300">›</div>
          </motion.div>
        ))}
      </div>

      {/* The Popup Component */}
      {selectedService && (
        <ServiceModal 
          isOpen={!!selectedService} 
          onClose={() => setSelectedService(null)} 
          service={selectedService} 
        />
      )}
    </section>
  );
}