import { X, Clock, DollarSign, FileCheck, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// This defines what data we expect to receive
interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: any;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!isOpen || !service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        
        {/* The Card Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative"
        >
          
          {/* Header Color Bar */}
          <div className={`h-24 ${service.color.split(' ')[0]} flex items-center justify-center`}>
            <service.icon className={`w-12 h-12 ${service.color.split(' ')[1]}`} />
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Content Body */}
          <div className="p-6 space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
              <p className="text-gray-500">{service.description}</p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-gray-900 font-semibold mb-1">
                  <Clock className="w-4 h-4 text-blue-600" /> Duration
                </div>
                {service.duration}
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-gray-900 font-semibold mb-1">
                  <DollarSign className="w-4 h-4 text-green-600" /> Fee
                </div>
                {service.fee}
              </div>
            </div>

            {/* What to Bring */}
            <div>
              <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-2">
                <FileCheck className="w-4 h-4" /> Documents to Bring:
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-1">
                {service.documents.map((doc: string, i: number) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>
            </div>

            {/* The Glowing Booking Button */}
            <div className="pt-2">
              <a 
                href="https://calendly.com" 
                target="_blank"
                className="group flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all"
              >
                <CalendarCheck className="w-5 h-5 group-hover:animate-pulse" />
                Book Appointment Now
              </a>
              <p className="text-xs text-center text-gray-400 mt-2">
                Securely scheduled via Google Calendar
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}