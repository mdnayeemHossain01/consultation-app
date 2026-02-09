import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ServiceList from "@/components/services/ServiceList";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* 1. Hero Section (Top Banner) */}
      <Hero />

      {/* 2. About Section */}
      <About />

      {/* 3. Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="text-gray-600 mt-2">Professional assistance for your daily needs.</p>
        </div>
        <ServiceList />
      </section>

      {/* 4. Footer (Bottom) */}
      <Footer />
      
    </div>
  );
}