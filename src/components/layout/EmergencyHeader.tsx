import { Phone, MessageCircle, TriangleAlert } from 'lucide-react';

export default function EmergencyHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-red-600 text-white shadow-md">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        
        {/* Left Side: Alert Icon */}
        <div className="flex items-center gap-2 font-bold uppercase tracking-wide text-sm">
          <TriangleAlert className="h-5 w-5 text-yellow-300" />
          <span className="hidden sm:inline">Emergency / Urgente</span>
          <span className="sm:hidden">Urgent</span>
        </div>

        {/* Right Side: Buttons */}
        <div className="flex gap-3">
          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/19170000000" 
            className="flex items-center gap-2 bg-green-500 text-white px-3 py-1.5 rounded-full font-bold text-xs hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chat</span>
          </a>

          {/* Call Button */}
          <a 
            href="tel:9170000000" 
            className="flex items-center gap-2 bg-white text-red-600 px-3 py-1.5 rounded-full font-bold text-xs hover:bg-gray-100 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>Call</span>
          </a>
        </div>

      </div>
    </header>
  );
}