import { X, Clock, DollarSign, FileCheck, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: any;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!isOpen || !service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative border border-gray-100"
        >
          {/* Header */}
          <div className={`h-28 ${service.color.split(' ')[0]} flex flex-col items-center justify-center relative`}>
            <service.icon className={`w-10 h-10 ${service.color.split(' ')[1]}`} />
            <h2 className="text-xl font-bold mt-2 text-gray-900">{service.title}</h2>
            <button onClick={onClose} className="absolute top-4 right-4 bg-white/50 hover:bg-white p-2 rounded-full transition-colors">
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          <div className="p-8 space-y-6">
            {/* Quick Stats */}
            <div className="flex gap-4">
              <div className="flex-1 bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase mb-1">
                  <Clock className="w-4 h-4" /> Duration
                </div>
                <p className="text-gray-900 font-medium">{service.duration}</p>
              </div>
              <div className="flex-1 bg-green-50/50 p-4 rounded-2xl border border-green-100">
                <div className="flex items-center gap-2 text-green-700 font-bold text-xs uppercase mb-1">
                  <DollarSign className="w-4 h-4" /> Estimated Fee
                </div>
                <p className="text-gray-900 font-medium">{service.fee}</p>
              </div>
            </div>

            {/* Documents Section */}
            <div>
              <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-3">
                <FileCheck className="w-5 h-5 text-blue-600" /> Required Documents:
              </h3>
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <ul className="grid grid-cols-1 gap-2">
                  {service.documents.map((doc: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-blue-500 mt-1">•</span> {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Glowing Booking Button */}
            <div className="pt-2">
              <a 
                href="https://calendly.com/mollahnayeem01/30min" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-center justify-center gap-3 w-full bg-blue-600 text-white font-bold py-5 rounded-2xl transition-all hover:bg-blue-700 active:scale-95 overflow-hidden"
              >
                {/* The "Light Effect" glow */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                
                <CalendarCheck className="w-6 h-6" />
                <span className="text-lg">Book Appointment</span>
              </a>
              <p className="text-center text-xs text-gray-400 mt-4 italic">
                Office Hours: Mon-Fri (9:00 AM - 6:00 PM)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}