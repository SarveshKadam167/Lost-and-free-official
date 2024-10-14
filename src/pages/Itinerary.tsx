import React from 'react';
import { Link } from 'react-router-dom';

const Itinerary = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Our Exciting Itineraries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Beach Adventure" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Tropical Paradise Escape</h3>
            <p className="text-blue-600 mb-4">7 days of sun, sea, and adventure in Bali</p>
            <Link to="/itinerary/tropical-paradise" className="text-blue-500 hover:underline">View Details</Link>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Mountain Trek" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Mountain Trekking Expedition</h3>
            <p className="text-blue-600 mb-4">10 days conquering the Himalayas</p>
            <Link to="/itinerary/mountain-trekking" className="text-blue-500 hover:underline">View Details</Link>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Safari Adventure" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">African Safari Adventure</h3>
            <p className="text-blue-600 mb-4">8 days exploring the wildlife of Tanzania</p>
            <Link to="/itinerary/african-safari" className="text-blue-500 hover:underline">View Details</Link>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="City Exploration" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">European City Hopping</h3>
            <p className="text-blue-600 mb-4">14 days discovering the best of Europe's iconic cities</p>
            <Link to="/itinerary/european-city-hopping" className="text-blue-500 hover:underline">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;