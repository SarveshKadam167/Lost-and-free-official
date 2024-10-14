import React from 'react';

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Travel Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Blog Post 1" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">10 Must-Visit Hidden Gems in Southeast Asia</h3>
            <p className="text-blue-600 mb-4">Discover off-the-beaten-path destinations that will take your breath away.</p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Blog Post 2" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Budget Travel: How to Explore Europe on a Shoestring</h3>
            <p className="text-blue-600 mb-4">Tips and tricks for making the most of your European adventure without breaking the bank.</p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Blog Post 3" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">The Ultimate Guide to Solo Travel</h3>
            <p className="text-blue-600 mb-4">Everything you need to know about embarking on a solo adventure.</p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;