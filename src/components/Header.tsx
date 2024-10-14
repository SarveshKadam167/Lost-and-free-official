import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <Compass size={32} />
          <span>Lost and Free</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/itinerary" className="hover:text-blue-200">Itinerary</Link></li>
            <li><Link to="/blog" className="hover:text-blue-200">Blog</Link></li>
            <li><Link to="/shop" className="hover:text-blue-200">Shop</Link></li>
            <li><Link to="/reviews" className="hover:text-blue-200">Reviews</Link></li>
            <li><Link to="/team" className="hover:text-blue-200">Our Team</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;