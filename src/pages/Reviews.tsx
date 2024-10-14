import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Traveler Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Reviewer" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Sarah Thompson</h3>
              <div className="flex text-yellow-400">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>
            </div>
          </div>
          <p className="text-blue-600">"The Tropical Paradise Escape was everything I dreamed of and more! Lost and Free Experiences truly delivered an unforgettable adventure."</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Reviewer" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Michael Rodriguez</h3>
              <div className="flex text-yellow-400">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>
            </div>
          </div>
          <p className="text-blue-600">"The Mountain Trekking Expedition pushed me to my limits in the best way possible. The views were breathtaking, and the guides were exceptional."</p>
        </div>
      </div>
      <div className="text-center">
        <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition duration-300">
          Read More Reviews on TripAdvisor
        </a>
      </div>
    </div>
  );
};

export default Reviews;