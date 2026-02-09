import { Phone, TriangleAlert } from 'lucide-react';

export default function EmergencyHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-red-600 text-white shadow-md">
      <div className="container mx-auto flex h-12 items-center justify-between px-4">
        
        {/* Left Side: Alert Icon and Text */}
        <div className="flex items-center gap-2 font-bold uppercase tracking-wide text-sm md:text-base">
          <TriangleAlert className="h-5 w-5" />
          <span>Emergency / Urgente</span>
        </div>

        {/* Right Side: Call Button */}
        <a 
          href="tel:9170000000" 
          className="flex items-center gap-2 bg-white text-red-600 px-3 py-1 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors"
        >
          <Phone className="h-4 w-4" />
          <span>Call Now</span>
        </a>

      </div>
    </header>
  );
}