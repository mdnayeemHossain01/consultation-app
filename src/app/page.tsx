import ServiceList from "@/components/services/ServiceList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Title Section */}
      <div className="pt-8 px-6 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
          Jackson Heights <br/> Consulting
        </h1>
        <p className="text-gray-600">
          Professional help for our community.
        </p>
      </div>

      {/* The List of Services */}
      <ServiceList />
      
    </div>
  );
}