import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Reliable Help for <br/>
          <span className="text-blue-200">Our Community</span>
        </h1>

        <p className="text-lg md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Expert guidance on Immigration, Taxes, Notary, and Housing right here in Jackson Heights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a 
            href="https://wa.me/19296325878" 
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start a Chat
            <ArrowRight className="w-5 h-5" />
          </a>
          
          <a 
            href="#services"
            className="inline-flex items-center justify-center gap-2 border-2 border-blue-300 text-blue-50 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800/50 transition-colors"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}