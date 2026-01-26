import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Practical Software <br/> 
              <span className="text-yellow-500">Built for Africa.</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Casa Africa builds and commercializes high-impact digital products 
              tailored for African institutions, businesses, and consumers[cite: 6].
            </p>
            <Link 
              to="/products" 
              className="inline-block bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition"
            >
              Explore Solutions
            </Link>
          </div>
          <div className="flex-1">
             <div className="bg-gray-800 p-4 rounded-xl shadow-2xl border border-gray-700">
                {/* Placeholder for a software UI mockup */}
                <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center text-gray-500">
                   [Software Dashboard Mockup]
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Mission Section [cite: 15] */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Purpose</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          To bridge the gap between innovation and adoption by delivering production-ready 
          software that institutions can deploy immediately[cite: 10].
        </p>
      </section>
    </div>
  );
};

export default HomePage;