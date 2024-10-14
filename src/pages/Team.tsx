import React from 'react';

const Team = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Team Member" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Emma Johnson</h3>
            <p className="text-blue-600 mb-4">Founder & CEO</p>
            <p className="text-gray-600">Adventure enthusiast with a passion for creating unforgettable travel experiences.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Team Member" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Alex Chen</h3>
            <p className="text-blue-600 mb-4">Head of Operations</p>
            <p className="text-gray-600">Logistics expert ensuring smooth and seamless travel experiences for our clients.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Team Member" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Sophia Martinez</h3>
            <p className="text-blue-600 mb-4">Lead Travel Guide</p>
            <p className="text-gray-600">Experienced traveler with a knack for uncovering hidden gems and local experiences.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;