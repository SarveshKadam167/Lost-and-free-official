import React from 'react';

const Shop = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Travel Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1445966275305-9806327ea2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Backpack" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Adventure Backpack</h3>
            <p className="text-blue-600 mb-4">Durable and spacious backpack for all your travel needs.</p>
            <span className="text-2xl font-bold text-blue-500">$79.99</span>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Add to Cart</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Travel Journal" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Travel Journal</h3>
            <p className="text-blue-600 mb-4">Document your adventures in this beautifully crafted journal.</p>
            <span className="text-2xl font-bold text-blue-500">$24.99</span>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Add to Cart</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Travel Pillow" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Comfort Travel Pillow</h3>
            <p className="text-blue-600 mb-4">Sleep comfortably anywhere with this ergonomic travel pillow.</p>
            <span className="text-2xl font-bold text-blue-500">$34.99</span>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;