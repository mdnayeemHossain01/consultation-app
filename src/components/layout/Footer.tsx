import { MapPin, Clock, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Jackson Heights Consulting</h3>
          <p className="text-sm">
            Professional consulting services for the Queens community. 
            We are dedicated to helping you succeed.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>37-50 74th Street, Jackson Heights, NY</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>help@jacksonheights.com</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Immigration Support</li>
            <li>Tax Preparation</li>
            <li>Notary Public</li>
            <li>Housing Assistance</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Jackson Heights Consulting. All rights reserved.
      </div>
    </footer>
  );
}