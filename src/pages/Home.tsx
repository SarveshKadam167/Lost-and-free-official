import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-blue-50">
      <div className="relative h-[60vh] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Welcome to Lost and Free Experiences</h1>
            <p className="text-xl mb-8">Embark on unforgettable adventures designed for the young and adventurous.</p>
            <a href="/itinerary" className="bg-blue-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition duration-300">
              Explore Itineraries <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Thrilling Adventures" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Thrilling Adventures</h3>
              <p className="text-blue-600">Experience heart-pumping activities in breathtaking locations.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Cultural Immersion" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Cultural Immersion</h3>
              <p className="text-blue-600">Dive deep into local cultures and create lasting memories.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Sustainable Travel" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Sustainable Travel</h3>
              <p className="text-blue-600">Explore the world while minimizing your environmental impact.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;