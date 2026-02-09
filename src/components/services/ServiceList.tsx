import { PILLARS } from '@/config/pillars';

export default function ServiceList() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-md mx-auto space-y-4">
        {PILLARS.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
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
          </div>
        ))}
      </div>
    </section>
  );
}