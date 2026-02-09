export default function About() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Navigating complex paperwork shouldn't be stressful. At <strong>Jackson Heights Consulting</strong>, 
          we combine professional expertise with local understanding. Whether you are filing taxes, 
          applying for citizenship, or reviewing a lease, we are here to ensure you get it right the first time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-bold text-2xl text-blue-600">Local</p>
            <p className="text-sm text-gray-500">Based in Jackson Heights</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-bold text-2xl text-blue-600">Fast</p>
            <p className="text-sm text-gray-500">Quick turnaround times</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-bold text-2xl text-blue-600">Trusted</p>
            <p className="text-sm text-gray-500">Community focused</p>
          </div>
        </div>
      </div>
    </section>
  );
}